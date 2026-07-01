import fs from "fs";
import path from "path";

const topicNum = process.argv[2];
if (!topicNum) {
  console.error("Please provide a topic number (e.g., 2, 3, 4)");
  process.exit(1);
}

const rawPath = path.join(process.cwd(), "assets", `raw_topic${topicNum}.txt`);
const outPath = path.join(process.cwd(), "src", "data", "fasttrack", `fasttrack${topicNum}.ts`);

if (!fs.existsSync(rawPath)) {
  console.error(`File not found: ${rawPath}`);
  process.exit(1);
}

const rawText = fs.readFileSync(rawPath, "utf-8");

// Split by blank lines or multiple newlines
const lines = rawText.split("\n").map(l => l.trim());

interface ParsedQuestion {
  id: number;
  text: string;
  options: Record<string, string>;
  answer: string;
}

const questions: ParsedQuestion[] = [];
let currentQuestion: Partial<ParsedQuestion> & { rawOptions: string[], rawAnswer: string } = {
  rawOptions: [],
  rawAnswer: ""
};

let currentId = 1;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (!line) continue;

  // Check if line starts a new question (e.g. "1. " or "12. " or "12) ")
  const qStartMatch = line.match(/^(\d+)\s*[\.)]\s*(.*)$/);
  if (qStartMatch) {
    // If we have an existing question, flush it
    if (currentQuestion.text) {
      flushCurrentQuestion();
    }
    currentQuestion = {
      id: currentId++,
      text: qStartMatch[2].trim(),
      rawOptions: [],
      rawAnswer: ""
    };
  } else if (line.match(/^Answer:\s*(.*)/i)) {
    currentQuestion.rawAnswer = line.match(/^Answer:\s*(.*)/i)![1].trim();
  } else if (line.match(/^[a-dA-D][\s.)\-]/)) {
    currentQuestion.rawOptions?.push(line);
  } else {
    // It's a continuation of the question text or a note
    if (currentQuestion.text) {
      // Append if it doesn't look like an answer or option
      currentQuestion.text += " " + line;
    }
  }
}

// Flush the last one
if (currentQuestion.text) {
  flushCurrentQuestion();
}

function flushCurrentQuestion() {
  const options: Record<string, string> = {};
  
  // Parse options
  for (const optLine of currentQuestion.rawOptions || []) {
    const match = optLine.match(/^([a-dA-D])[\s.)\-]+(.*)$/);
    if (match) {
      const key = match[1].toLowerCase();
      options[key] = match[2].trim();
    }
  }

  // Handle True/False or missing options
  if (Object.keys(options).length === 0) {
    if (currentQuestion.text?.toLowerCase().includes("formula") || currentQuestion.text?.toLowerCase().includes("relation")) {
      options["a"] = "This is correct.";
      options["b"] = "This is incorrect.";
    } else {
      options["a"] = "True";
      options["b"] = "False";
    }
  }

  // Ensure all standard a, b, c, d options are present if we have at least 3 options
  const keys = Object.keys(options);
  if (keys.length > 0 && keys.length < 4) {
    // Backfill missing keys to satisfy typescript schema
    for (const key of ["a", "b", "c", "d"]) {
      if (!options[key]) {
        options[key] = "None of the above";
      }
    }
  }

  // Parse Answer key
  let ansKey = "a";
  const rawAns = currentQuestion.rawAnswer || "";
  const keyMatch = rawAns.match(/^([a-dA-D])[\s.)\-]*/);
  if (keyMatch) {
    ansKey = keyMatch[1].toLowerCase();
  } else {
    // Direct matching
    const cleanRaw = rawAns.toLowerCase();
    if (cleanRaw.startsWith("true") || cleanRaw.includes("correct") || cleanRaw.includes("yes")) {
      ansKey = "a";
    } else if (cleanRaw.startsWith("false") || cleanRaw.includes("incorrect") || cleanRaw.includes("no")) {
      ansKey = "b";
    } else {
      // Check if any option matches the raw text
      for (const [k, val] of Object.entries(options)) {
        if (val.toLowerCase().includes(cleanRaw) || cleanRaw.includes(val.toLowerCase())) {
          ansKey = k;
          break;
        }
      }
    }
  }

  // Double check all keys are lowercase a, b, c, d
  const finalOptions: Record<string, string> = {};
  for (const [k, v] of Object.entries(options)) {
    finalOptions[k.toLowerCase()] = v;
  }

  // Validate we have a, b, c, d if there's d
  if (finalOptions["d"] && (!finalOptions["a"] || !finalOptions["b"] || !finalOptions["c"])) {
    // Ensure all exist
    if (!finalOptions["a"]) finalOptions["a"] = "Option A";
    if (!finalOptions["b"]) finalOptions["b"] = "Option B";
    if (!finalOptions["c"]) finalOptions["c"] = "Option C";
  }

  questions.push({
    id: currentQuestion.id!,
    text: currentQuestion.text!.trim(),
    options: finalOptions,
    answer: ansKey
  });
}

// Write file output
const fileContent = `import { Question } from "../../types";

export const fasttrack${topicNum}Questions: Question[] = ${JSON.stringify(questions, null, 2)};
`;

fs.writeFileSync(outPath, fileContent, "utf-8");
console.log(`Successfully parsed ${questions.length} questions for Topic ${topicNum} into ${outPath}`);

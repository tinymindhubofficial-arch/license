import { Question } from "../../types";

export interface PracticeSet {
  id: string;
  name: string;
  description: string;
  questions: Question[];
}

export const practiceSets: PracticeSet[] = [
  {
    id: "set1",
    name: "Practice Set 1 (General MCQs)",
    description: "A comprehensive practice question set for general civil engineering mock examination.",
    questions: [
      {
        id: 1,
        text: "What is the typical water absorption value of a first-class brick after 24 hours of immersion in water?",
        options: {
          a: "Not more than 10%",
          b: "Not more than 15%",
          c: "Not more than 20%",
          d: "Not more than 25%"
        },
        answer: "c",
        tag: "General Materials"
      },
      {
        id: 2,
        text: "The aggregate impact value of aggregate used for concrete wearing surfaces should not exceed:",
        options: {
          a: "30%",
          b: "45%",
          c: "50%",
          d: "60%"
        },
        answer: "a",
        tag: "Concrete Technology"
      },
      {
        id: 3,
        text: "In soil mechanics, the ratio of volume of voids to the total volume of soil is known as:",
        options: {
          a: "Porosity",
          b: "Void Ratio",
          c: "Water Content",
          d: "Degree of Saturation"
        },
        answer: "a",
        tag: "Soil Mechanics"
      }
    ]
  },
  {
    id: "set2",
    name: "Practice Set 2 (Model Exam)",
    description: "A secondary model exam with handpicked questions spanning hydraulics, structures, and project planning.",
    questions: [
      {
        id: 1,
        text: "The critical depth in a rectangular open channel flow is given by:",
        options: {
          a: "(q²/g)^(1/2)",
          b: "(q²/g)^(1/3)",
          c: "(q/g)^(1/3)",
          d: "(q²/g²)^(1/3)"
        },
        answer: "b",
        tag: "Hydraulics"
      },
      {
        id: 2,
        text: "Under CPM, the path that has zero total float is referred to as the:",
        options: {
          a: "Critical path",
          b: "Subcritical path",
          c: "Dummy path",
          d: "Supercritical path"
        },
        answer: "a",
        tag: "Project Management"
      }
    ]
  },
  {
    id: "set3",
    name: "Practice Set 3 (Past Papers)",
    description: "A curated pool of previous year questions and license examination benchmarks.",
    questions: [
      {
        id: 1,
        text: "Which of the following cements is most suitable for under-water construction works?",
        options: {
          a: "Rapid hardening cement",
          b: "Quick setting cement",
          c: "Low heat cement",
          d: "Blast furnace slag cement"
        },
        answer: "b",
        tag: "Concrete Materials"
      },
      {
        id: 2,
        text: "The main constituent of varnish is:",
        options: {
          a: "Turpentine oil",
          b: "Resin",
          c: "Drier",
          d: "Solvent"
        },
        answer: "b",
        tag: "Finishes"
      }
    ]
  }
];

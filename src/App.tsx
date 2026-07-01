import React, { useState, useEffect, useMemo } from "react";
import { 
  BookOpen, Search, Award, CheckCircle2, XCircle, RotateCcw, 
  Check, ChevronLeft, ChevronRight, Info, ListFilter, Trophy, 
  Sparkles, BookOpenCheck, HelpCircle, AlertTriangle, Moon, Sun, 
  Bookmark, LayoutDashboard, Shuffle, ArrowRight, ArrowUp, ArrowDown,
  Layers, FileText
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { chaptersList, chaptersData } from "./data/chapters/chaptersData";
import { practiceSets } from "./data/sets/practiceSetsData";
import { extraQuestionSets } from "./data/extra/extraQuestionsData";
import { fasttrackChaptersList, fasttrackData } from "./data/fasttrack/fasttrackData";
import { Question, UserSelections } from "./types";

function safeParseJSON<T>(val: string | null, fallback: T): T {
  if (!val) return fallback;
  try {
    return JSON.parse(val) as T;
  } catch (e) {
    console.error("Error parsing localStorage JSON", e);
    return fallback;
  }
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

export default function App() {
  // 1. Native Dark Mode State & Side Effect
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem("civil_quiz_dark_mode");
    return safeParseJSON(saved, false);
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("civil_quiz_dark_mode", JSON.stringify(darkMode));
  }, [darkMode]);

  // 1b. Portal Landing Page Entry State
  const [showLandingPage, setShowLandingPage] = useState<boolean>(() => {
    const saved = localStorage.getItem("civil_quiz_active_mode");
    return !saved;
  });
  const [selectedSubTarget, setSelectedSubTarget] = useState<boolean>(() => {
    const saved = localStorage.getItem("civil_quiz_active_mode");
    return !!saved;
  });

  // Demo interactive question states
  const [demoIndex, setDemoIndex] = useState<number>(0);
  const [selectedDemoOption, setSelectedDemoOption] = useState<string | null>(null);
  const [demoSeconds, setDemoSeconds] = useState(21 * 60 + 40);

  useEffect(() => {
    const timer = setInterval(() => {
      setDemoSeconds(prev => (prev > 0 ? prev - 1 : 21 * 60 + 40));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const demoTimerStr = useMemo(() => {
    const mins = Math.floor(demoSeconds / 60);
    const secs = demoSeconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }, [demoSeconds]);

  const demoQuestions = useMemo(() => {
    return [
      {
        id: 5,
        text: "The surface area of an A0 size drawing paper is exactly:",
        options: { a: "0.25 m²", b: "0.5 m²", c: "0.75 m²", d: "1 m²" },
        answer: "d",
        tag: "Project Planning",
        explanation: "Standard ISO-A sizes are defined with an aspect ratio of 1:√2. For an A0 size sheet, the dimensions are 841 mm × 1189 mm, giving a surface area of exactly 1 m².",
        sheetNo: "10/10",
        qnIndex: "QUESTION 5 / 50"
      },
      {
        id: 11,
        text: "If an isometric drawing is constructed utilizing a true isometric scale, the rendering is called an:",
        options: { a: "Isometric projection", b: "Isometric view", c: "Isometric perception", d: "Orthographic view" },
        answer: "a",
        tag: "Project Planning",
        explanation: "An isometric projection is scaled down by approximately 82% of true lengths, whereas an isometric drawing/view uses true scale measurements directly.",
        sheetNo: "10/10",
        qnIndex: "QUESTION 11 / 50"
      },
      {
        id: 3,
        text: "What is the inclination angle used for inclined lettering?",
        options: { a: "75 degrees", b: "65 degrees", c: "45 degrees", d: "85 degrees" },
        answer: "a",
        tag: "Project Planning",
        explanation: "Technical engineering drawing guidelines standardize inclined lettering slope at exactly 75 degrees to the horizontal plane.",
        sheetNo: "10/10",
        qnIndex: "QUESTION 3 / 50"
      },
      {
        id: 9,
        text: "Hidden lines in engineering drawings are properly drawn as:",
        options: { a: "Dashed narrow lines", b: "Dashed wide lines", c: "Long-dashed dotted wide lines", d: "Long-dashed double-dotted wide lines" },
        answer: "b",
        tag: "Project Planning",
        explanation: "Hidden lines represent concealed edges, details, or boundaries and are specified as dashed medium or wide lines for maximum legibility.",
        sheetNo: "10/10",
        qnIndex: "QUESTION 9 / 50"
      }
    ];
  }, []);

  // 2. Active Mode (chapter | set | extra | fasttrack), Tab & Chapter selections
  const [activeMode, setActiveMode] = useState<"chapter" | "set" | "extra" | "fasttrack">((() => {
    const saved = localStorage.getItem("civil_quiz_active_mode");
    return (saved as any) || "chapter";
  }));

  const selectPathway = (mode: "chapter" | "set" | "extra" | "fasttrack") => {
    setActiveMode(mode);
    localStorage.setItem("civil_quiz_active_mode", mode);
    setShowLandingPage(false);
    setSelectedSubTarget(false); // Reset to show selection index
    // Automatically transition to the practice tab if on overview and selecting set or extra questions or fasttrack
    if (mode !== "chapter" && activeTab === "overview") {
      setActiveTab("practice");
    }
  };

  const totalExtraQuestions = useMemo(() => {
    return extraQuestionSets.reduce((sum, s) => sum + (s.questions?.length || 0), 0);
  }, []);

  const [activeTab, setActiveTab] = useState<string>(() => {
    const saved = localStorage.getItem("civil_quiz_active_tab");
    return saved || "overview";
  });

  const [activeChapter, setActiveChapter] = useState<number>(() => {
    const saved = localStorage.getItem("civil_quiz_active_chapter");
    return saved ? parseInt(saved, 10) : 1;
  });

  // 2b. Practice Set Selection State
  const [activeSetId, setActiveSetId] = useState<string>(() => {
    return localStorage.getItem("civil_quiz_active_set_id") || "set1";
  });

  // 2c. Extra Question Set Selection State
  const [activeExtraId, setActiveExtraId] = useState<string>(() => {
    return localStorage.getItem("civil_quiz_active_extra_id") || "extra1";
  });

  // 2d. Fast Track Chapter Selection State
  const [activeFastTrackChapter, setActiveFastTrackChapter] = useState<number>(() => {
    const saved = localStorage.getItem("civil_quiz_active_fasttrack_chapter");
    return saved ? parseInt(saved, 10) : 1;
  });

  // 2e. Fast Track Dynamic Question Loading States
  const [fastTrackDynamicQuestions, setFastTrackDynamicQuestions] = useState<Question[]>([]);
  const [isLoadingDynamic, setIsLoadingDynamic] = useState<boolean>(false);
  const [dynamicLoadError, setDynamicLoadError] = useState<string | null>(null);

  // Dynamically load Chapter 2 JSON file when activeMode is fasttrack and activeFastTrackChapter is 2
  useEffect(() => {
    if (activeMode === "fasttrack" && activeFastTrackChapter === 2) {
      setIsLoadingDynamic(true);
      setDynamicLoadError(null);
      fetch("/Chapter_02_Questions.json")
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP ${res.status}: File not found or failed to load`);
          }
          return res.json();
        })
        .then((data) => {
          if (Array.isArray(data)) {
            setFastTrackDynamicQuestions(data);
          } else if (data && Array.isArray(data.questions)) {
            setFastTrackDynamicQuestions(data.questions);
          } else {
            throw new Error("Invalid structure: Expected an array of questions.");
          }
          setIsLoadingDynamic(false);
        })
        .catch((err) => {
          console.error("Dynamic JSON Load failed, using static fallback:", err);
          setDynamicLoadError(err.message);
          setIsLoadingDynamic(false);
          // Fallback to static fasttrack2 questions
          setFastTrackDynamicQuestions(fasttrackData[2] || []);
        });
    } else {
      setFastTrackDynamicQuestions([]);
      setDynamicLoadError(null);
      setIsLoadingDynamic(false);
    }
  }, [activeMode, activeFastTrackChapter]);

  // Persist Tab, Chapter & Set selections
  useEffect(() => {
    localStorage.setItem("civil_quiz_active_tab", activeTab);
  }, [activeTab]);

  // 3. Question Bookmarks (persisted per composite key: chapterId-questionId)
  const [bookmarks, setBookmarks] = useState<Record<string, boolean>>(() => {
    const saved = localStorage.getItem("civil_quiz_bookmarks");
    return safeParseJSON(saved, {});
  });

  const toggleBookmark = (resourceId: string | number, questionId: number) => {
    const key = `${resourceId}-${questionId}`;
    setBookmarks((prev) => {
      const updated = { ...prev, [key]: !prev[key] };
      localStorage.setItem("civil_quiz_bookmarks", JSON.stringify(updated));
      return updated;
    });
  };

  // Sandboxed state for active chapter's selections
  const [userSelections, setUserSelections] = useState<UserSelections>({});
  // Sandboxed state for active chapter's submission state
  const [isQuizSubmitted, setIsQuizSubmitted] = useState<boolean>(false);

  // Persistent Shuffle Mode state
  const [isShuffleMode, setIsShuffleMode] = useState<boolean>(() => {
    const saved = localStorage.getItem("civil_quiz_shuffle_mode");
    return saved === "true";
  });

  // Filter and page states (using 50 items per page during active exam, unlimited during review)
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [reviewFilter, setReviewFilter] = useState<'all' | 'incorrect' | 'correct'>('all');
  
  const itemsPerPage = activeMode === "fasttrack" ? 999999 : (isQuizSubmitted ? 999999 : 50);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [jumpPageVal, setJumpPageVal] = useState<string>("");
  const [jumpQuestionVal, setJumpQuestionVal] = useState<string>("");

  const [isPastMiddle, setIsPastMiddle] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      setIsPastMiddle(scrollY > totalHeight / 2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Custom confirmation modal state
  const [modalConfig, setModalConfig] = useState<{
    isOpen: boolean;
    title: string;
    message: string;
    confirmText: string;
    cancelText: string;
    onConfirm: () => void;
    type: 'info' | 'warning' | 'danger';
  } | null>(null);

  const triggerConfirm = (
    title: string,
    message: string,
    onConfirm: () => void,
    type: 'info' | 'warning' | 'danger' = 'info',
    confirmText: string = 'Confirm',
    cancelText: string = 'Cancel'
  ) => {
    setModalConfig({
      isOpen: true,
      title,
      message,
      confirmText,
      cancelText,
      onConfirm,
      type,
    });
  };

  // Support closing the modal via the Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && modalConfig?.isOpen) {
        setModalConfig(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalConfig]);

  // Track active chapter or set changes to synchronize with sandboxed localStorage and restore current page positioning
  useEffect(() => {
    localStorage.setItem("civil_quiz_active_mode", activeMode);
    localStorage.setItem("civil_quiz_active_set_id", activeSetId);
    localStorage.setItem("civil_quiz_active_extra_id", activeExtraId);
    localStorage.setItem("civil_quiz_active_chapter", activeChapter.toString());
    localStorage.setItem("civil_quiz_active_fasttrack_chapter", activeFastTrackChapter.toString());
    
    if (activeMode === "chapter") {
      const savedSelections = localStorage.getItem(`civil_quiz_selections_ch_${activeChapter}`);
      setUserSelections(safeParseJSON(savedSelections, {}));

      const savedSubmitted = localStorage.getItem(`civil_quiz_submitted_ch_${activeChapter}`);
      setIsQuizSubmitted(safeParseJSON(savedSubmitted, false));

      const savedPage = localStorage.getItem(`civil_quiz_page_ch_${activeChapter}`);
      setCurrentPage(savedPage ? parseInt(savedPage, 10) : 1);
    } else if (activeMode === "set") {
      const savedSelections = localStorage.getItem(`civil_quiz_selections_set_${activeSetId}`);
      setUserSelections(safeParseJSON(savedSelections, {}));

      const savedSubmitted = localStorage.getItem(`civil_quiz_submitted_set_${activeSetId}`);
      setIsQuizSubmitted(safeParseJSON(savedSubmitted, false));

      const savedPage = localStorage.getItem(`civil_quiz_page_set_${activeSetId}`);
      setCurrentPage(savedPage ? parseInt(savedPage, 10) : 1);
    } else if (activeMode === "extra") {
      const savedSelections = localStorage.getItem(`civil_quiz_selections_extra_${activeExtraId}`);
      setUserSelections(safeParseJSON(savedSelections, {}));

      const savedSubmitted = localStorage.getItem(`civil_quiz_submitted_extra_${activeExtraId}`);
      setIsQuizSubmitted(safeParseJSON(savedSubmitted, false));

      const savedPage = localStorage.getItem(`civil_quiz_page_extra_${activeExtraId}`);
      setCurrentPage(savedPage ? parseInt(savedPage, 10) : 1);
    } else if (activeMode === "fasttrack") {
      const savedSelections = localStorage.getItem(`civil_quiz_selections_ft_${activeFastTrackChapter}`);
      setUserSelections(safeParseJSON(savedSelections, {}));

      const savedSubmitted = localStorage.getItem(`civil_quiz_submitted_ft_${activeFastTrackChapter}`);
      setIsQuizSubmitted(safeParseJSON(savedSubmitted, false));

      const savedPage = localStorage.getItem(`civil_quiz_page_ft_${activeFastTrackChapter}`);
      setCurrentPage(savedPage ? parseInt(savedPage, 10) : 1);
    }

    setSearchQuery("");
    setStatusFilter("all");
    setReviewFilter("all");
  }, [activeChapter, activeSetId, activeExtraId, activeFastTrackChapter, activeMode]);

  // Handler to switch between any of the three custom databases with safety warnings
  const handleResourceSwitch = (mode: "chapter" | "set" | "extra" | "fasttrack", value: any) => {
    if (activeMode === mode) {
      if (mode === "chapter" && activeChapter === Number(value)) return;
      if (mode === "set" && activeSetId === value) return;
      if (mode === "extra" && activeExtraId === value) return;
      if (mode === "fasttrack" && activeFastTrackChapter === Number(value)) return;
    }

    const performSwitch = () => {
      setActiveMode(mode);
      if (mode === "chapter") {
        setActiveChapter(Number(value));
      } else if (mode === "set") {
        setActiveSetId(value);
      } else if (mode === "extra") {
        setActiveExtraId(value);
      } else if (mode === "fasttrack") {
        setActiveFastTrackChapter(Number(value));
      }
      // Automatically transition to the practice tab if on overview and selecting set or extra questions or fasttrack
      if (mode !== "chapter" && activeTab === "overview") {
        setActiveTab("practice");
      }
    };

    if (!isQuizSubmitted && selectionCount > 0) {
      triggerConfirm(
        "Switch Practice Resource?",
        "Are you sure you want to switch practice resource? Your unsubmitted answers in this session will be lost.",
        performSwitch,
        "warning",
        "Yes, Switch Resource",
        "Cancel"
      );
    } else {
      performSwitch();
    }
  };



  // Load questions for the active resource (chapter, practice set, or extra question set)
  const questions = useMemo(() => {
    let originalQuestions: Question[] = [];
    if (activeMode === "chapter") {
      originalQuestions = chaptersData[activeChapter] || [];
    } else if (activeMode === "set") {
      const chosenSet = practiceSets.find(s => s.id === activeSetId);
      originalQuestions = chosenSet ? chosenSet.questions : [];
    } else if (activeMode === "extra") {
      const chosenSet = extraQuestionSets.find(s => s.id === activeExtraId);
      originalQuestions = chosenSet ? chosenSet.questions : [];
    } else if (activeMode === "fasttrack") {
      if (activeFastTrackChapter === 2 && fastTrackDynamicQuestions.length > 0) {
        originalQuestions = fastTrackDynamicQuestions;
      } else {
        originalQuestions = fasttrackData[activeFastTrackChapter] || [];
      }
    }

    if (!isShuffleMode) {
      return originalQuestions;
    }
    
    // Stable shuffle for active questions
    const shuffled = [...originalQuestions].sort(() => Math.random() - 0.5);
    
    // Stable shuffle for multiple-choice options inside each question
    return shuffled.map((q) => {
      const optionKeys = Object.keys(q.options);
      const shuffledKeys = [...optionKeys].sort(() => Math.random() - 0.5);
      return {
        ...q,
        _shuffledOptionKeys: shuffledKeys,
      };
    });
  }, [activeChapter, activeSetId, activeExtraId, activeFastTrackChapter, activeMode, isShuffleMode, fastTrackDynamicQuestions]);

  // Handle option selection
  const handleSelectOption = (qId: number, optionKey: string) => {
    if (isQuizSubmitted) return;
    const updated = { ...userSelections, [qId]: optionKey };
    setUserSelections(updated);
    if (activeMode === "chapter") {
      localStorage.setItem(`civil_quiz_selections_ch_${activeChapter}`, JSON.stringify(updated));
    } else if (activeMode === "set") {
      localStorage.setItem(`civil_quiz_selections_set_${activeSetId}`, JSON.stringify(updated));
    } else if (activeMode === "extra") {
      localStorage.setItem(`civil_quiz_selections_extra_${activeExtraId}`, JSON.stringify(updated));
    } else if (activeMode === "fasttrack") {
      localStorage.setItem(`civil_quiz_selections_ft_${activeFastTrackChapter}`, JSON.stringify(updated));
    }
  };

  // Count active bookmarked questions
  const activeChapterBookmarksCount = useMemo(() => {
    return questions.filter(q => {
      const bookmarkKey = activeMode === "chapter" 
        ? `${activeChapter}-${q.id}` 
        : activeMode === "set" 
        ? `${activeSetId}-${q.id}`
        : activeMode === "extra"
        ? `${activeExtraId}-${q.id}`
        : `${activeFastTrackChapter}-${q.id}`;
      return !!bookmarks[bookmarkKey];
    }).length;
  }, [questions, bookmarks, activeChapter, activeSetId, activeExtraId, activeFastTrackChapter, activeMode]);

  // 4. Question Filtering
  const filteredQuestions = useMemo(() => {
    return questions.filter((q) => {
      const matchesSearch = 
        q.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (Object.values(q.options) as string[]).some(o => o.toLowerCase().includes(searchQuery.toLowerCase()));

      let matchesStatus = true;
      const selection = userSelections[q.id];
      if (statusFilter === "answered") {
        matchesStatus = !!selection;
      } else if (statusFilter === "unanswered") {
        matchesStatus = !selection;
      } else if (statusFilter === "bookmarked") {
        const bookmarkKey = activeMode === "chapter" 
          ? `${activeChapter}-${q.id}` 
          : activeMode === "set" 
          ? `${activeSetId}-${q.id}`
          : activeMode === "extra"
          ? `${activeExtraId}-${q.id}`
          : `${activeFastTrackChapter}-${q.id}`;
        matchesStatus = !!bookmarks[bookmarkKey];
      }

      let matchesReview = true;
      if (isQuizSubmitted) {
        const isCorrect = selection === q.answer;
        if (reviewFilter === "incorrect") {
          matchesReview = !isCorrect;
        } else if (reviewFilter === "correct") {
          matchesReview = isCorrect;
        }
      }

      return matchesSearch && matchesStatus && matchesReview;
    });
  }, [questions, searchQuery, statusFilter, userSelections, bookmarks, activeChapter, activeSetId, activeExtraId, activeFastTrackChapter, isQuizSubmitted, reviewFilter, activeMode]);

  // Compute Total Correct, Total Incorrect, and Not Submitted counts
  const postSubmitMetrics = useMemo(() => {
    let correct = 0;
    let incorrect = 0;
    let unanswered = 0;

    questions.forEach((q) => {
      const selection = userSelections[q.id];
      if (!selection) {
        unanswered++;
      } else if (selection === q.answer) {
        correct++;
      } else {
        incorrect++;
      }
    });

    return { correct, incorrect, unanswered };
  }, [questions, userSelections]);

  // Metrics computation for active chapter
  const correctCount = useMemo(() => {
    let count = 0;
    questions.forEach((q) => {
      if (userSelections[q.id] === q.answer) {
        count++;
      }
    });
    return count;
  }, [questions, userSelections]);

  const totalInPool = questions.length;
  const filteredCount = filteredQuestions.length;
  const selectionCount = Object.keys(userSelections).length;

  // Grade percentage
  const gradePercent = useMemo(() => {
    if (totalInPool === 0) return 0;
    return Math.round((correctCount / totalInPool) * 100);
  }, [correctCount, totalInPool]);

  // Selection completion percentage
  const selectionPercent = useMemo(() => {
    if (totalInPool === 0) return 0;
    return Math.round((selectionCount / totalInPool) * 100);
  }, [selectionCount, totalInPool]);

  // Calculate stats for all 10 chapters for overall metrics and overview dashboard in real-time
  const chapterStats = useMemo(() => {
    const stats: Record<number, { 
      selectedCount: number; 
      totalCount: number; 
      isSubmitted: boolean; 
      score: number;
      correctCount: number;
      bookmarkCount: number;
    }> = {};

    chaptersList.forEach((ch) => {
      const chQuestions = chaptersData[ch.id] || [];
      const savedSelections = localStorage.getItem(`civil_quiz_selections_ch_${ch.id}`);
      const selections = safeParseJSON(savedSelections, {});
      const savedSubmitted = localStorage.getItem(`civil_quiz_submitted_ch_${ch.id}`);
      const isSubmitted = safeParseJSON(savedSubmitted, false);

      let chCorrect = 0;
      chQuestions.forEach((q) => {
        if (selections[q.id] === q.answer) {
          chCorrect++;
        }
      });

      // Bookmarks count for this chapter
      let bookmarkCount = 0;
      chQuestions.forEach((q) => {
        if (bookmarks[`${ch.id}-${q.id}`]) {
          bookmarkCount++;
        }
      });

      stats[ch.id] = {
        selectedCount: Object.keys(selections).length,
        totalCount: chQuestions.length,
        isSubmitted,
        score: chQuestions.length > 0 ? Math.round((chCorrect / chQuestions.length) * 100) : 0,
        correctCount: chCorrect,
        bookmarkCount
      };
    });
    return stats;
  }, [activeChapter, userSelections, isQuizSubmitted, bookmarks]);

  // Overall course metrics computed in real-time
  const overallMetrics = useMemo(() => {
    let totalSelected = 0;
    let totalQuestionsCount = 0;
    let totalBookmarks = 0;
    let completedChaptersCount = 0;
    let inProgressChaptersCount = 0;
    let sumScores = 0;
    let submittedCount = 0;

    chaptersList.forEach((ch) => {
      const stat = chapterStats[ch.id];
      if (stat) {
        totalSelected += stat.selectedCount;
        totalQuestionsCount += stat.totalCount;
        totalBookmarks += stat.bookmarkCount;
        if (stat.isSubmitted) {
          completedChaptersCount++;
          sumScores += stat.score;
          submittedCount++;
        } else if (stat.selectedCount > 0) {
          inProgressChaptersCount++;
        }
      }
    });

    const overallCompletion = totalQuestionsCount > 0 ? Math.round((totalSelected / totalQuestionsCount) * 100) : 0;
    const overallAvgScore = submittedCount > 0 ? Math.round(sumScores / submittedCount) : 0;

    return {
      totalSelected,
      totalQuestionsCount,
      totalBookmarks,
      completedChaptersCount,
      inProgressChaptersCount,
      overallCompletion,
      overallAvgScore,
      submittedCount
    };
  }, [chapterStats]);

  // Submit current chapter or practice set exam
  const handleExecuteSubmission = () => {
    if (totalInPool === 0) return;

    if (selectionCount < totalInPool) {
      triggerConfirm(
        "Staged Answers Incomplete",
        `Warning: You have only selected ${selectionCount} out of ${totalInPool} answers. Unanswered questions will count as incorrect. Proceed to evaluate?`,
        () => {
          setIsQuizSubmitted(true);
          if (activeMode === "chapter") {
            localStorage.setItem(`civil_quiz_submitted_ch_${activeChapter}`, JSON.stringify(true));
          } else if (activeMode === "set") {
            localStorage.setItem(`civil_quiz_submitted_set_${activeSetId}`, JSON.stringify(true));
          } else if (activeMode === "extra") {
            localStorage.setItem(`civil_quiz_submitted_extra_${activeExtraId}`, JSON.stringify(true));
          } else if (activeMode === "fasttrack") {
            localStorage.setItem(`civil_quiz_submitted_ft_${activeFastTrackChapter}`, JSON.stringify(true));
          }
          window.scrollTo({ top: 0, behavior: "smooth" });
        },
        "warning",
        "Yes, Evaluate and Grade"
      );
    } else {
      triggerConfirm(
        "Submit Entire Exam",
        "Are you sure you want to finish and submit this exam session? Answers will be locked and graded instantly.",
        () => {
          setIsQuizSubmitted(true);
          if (activeMode === "chapter") {
            localStorage.setItem(`civil_quiz_submitted_ch_${activeChapter}`, JSON.stringify(true));
          } else if (activeMode === "set") {
            localStorage.setItem(`civil_quiz_submitted_set_${activeSetId}`, JSON.stringify(true));
          } else if (activeMode === "extra") {
            localStorage.setItem(`civil_quiz_submitted_extra_${activeExtraId}`, JSON.stringify(true));
          } else if (activeMode === "fasttrack") {
            localStorage.setItem(`civil_quiz_submitted_ft_${activeFastTrackChapter}`, JSON.stringify(true));
          }
          window.scrollTo({ top: 0, behavior: "smooth" });
        },
        "info",
        "Yes, Submit and Grade"
      );
    }
  };

  // Reset chapter or practice set progress
  const handleResetCurrentChapter = () => {
    const resourceName = activeMode === "chapter"
      ? (chaptersList.find(c => c.id === activeChapter)?.name || `Chapter ${activeChapter}`)
      : activeMode === "set"
      ? (practiceSets.find(s => s.id === activeSetId)?.name || "Practice Set")
      : activeMode === "extra"
      ? (extraQuestionSets.find(s => s.id === activeExtraId)?.name || "Extra Question Set")
      : (fasttrackChaptersList.find(c => c.id === activeFastTrackChapter)?.name || `Topic ${activeFastTrackChapter}`);
    triggerConfirm(
      "Reset Progress",
      `Are you sure you want to reset all answers and grades for ${resourceName}? This clears your selections and resets back to live practice mode.`,
      () => {
        setUserSelections({});
        setIsQuizSubmitted(false);
        if (activeMode === "chapter") {
          localStorage.removeItem(`civil_quiz_selections_ch_${activeChapter}`);
          localStorage.removeItem(`civil_quiz_submitted_ch_${activeChapter}`);
        } else if (activeMode === "set") {
          localStorage.removeItem(`civil_quiz_selections_set_${activeSetId}`);
          localStorage.removeItem(`civil_quiz_submitted_set_${activeSetId}`);
        } else if (activeMode === "extra") {
          localStorage.removeItem(`civil_quiz_selections_extra_${activeExtraId}`);
          localStorage.removeItem(`civil_quiz_submitted_extra_${activeExtraId}`);
        } else if (activeMode === "fasttrack") {
          localStorage.removeItem(`civil_quiz_selections_ft_${activeFastTrackChapter}`);
          localStorage.removeItem(`civil_quiz_submitted_ft_${activeFastTrackChapter}`);
        }
        setCurrentPage(1);
      },
      "danger",
      "Reset Answers"
    );
  };

  // Reset all progress
  const handleResetAllProgress = () => {
    triggerConfirm(
      "CRITICAL RESET: Clear All Progress",
      "This clears answers, grades, submissions, and page navigation logs across ALL chapters, practice sets, extra question sets, and fast track MCQs. This action is irreversible. Are you sure you want to do this?",
      () => {
        chaptersList.forEach((ch) => {
          localStorage.removeItem(`civil_quiz_selections_ch_${ch.id}`);
          localStorage.removeItem(`civil_quiz_submitted_ch_${ch.id}`);
          localStorage.removeItem(`civil_quiz_page_ch_${ch.id}`);
        });
        practiceSets.forEach((set) => {
          localStorage.removeItem(`civil_quiz_selections_set_${set.id}`);
          localStorage.removeItem(`civil_quiz_submitted_set_${set.id}`);
          localStorage.removeItem(`civil_quiz_page_set_${set.id}`);
        });
        extraQuestionSets.forEach((set) => {
          localStorage.removeItem(`civil_quiz_selections_extra_${set.id}`);
          localStorage.removeItem(`civil_quiz_submitted_extra_${set.id}`);
          localStorage.removeItem(`civil_quiz_page_extra_${set.id}`);
        });
        fasttrackChaptersList.forEach((ch) => {
          localStorage.removeItem(`civil_quiz_selections_ft_${ch.id}`);
          localStorage.removeItem(`civil_quiz_submitted_ft_${ch.id}`);
          localStorage.removeItem(`civil_quiz_page_ft_${ch.id}`);
        });
        localStorage.removeItem("civil_quiz_bookmarks");
        setBookmarks({});
        setUserSelections({});
        setIsQuizSubmitted(false);
        setActiveChapter(1);
        setActiveSetId("set1");
        setActiveExtraId("extra1");
        setActiveFastTrackChapter(1);
        setActiveMode("chapter");
        setCurrentPage(1);
        setSearchQuery("");
        setStatusFilter("all");
        setActiveTab("overview");
      },
      "danger",
      "Yes, Reset Everything"
    );
  };

  // Safely change chapter with confirmation warning if active, unsubmitted answers exist
  const handleChapterChange = (nextChId: number, targetTab?: string) => {
    const performChange = () => {
      setActiveMode("chapter");
      setActiveChapter(nextChId);
      if (targetTab) {
        setActiveTab(targetTab);
      }
    };

    if (!isQuizSubmitted && selectionCount > 0) {
      triggerConfirm(
        `Switch to Chapter ${nextChId}?`,
        `Are you sure you want to switch to Chapter ${nextChId}? Your unsaved staged answers in Chapter ${activeChapter} will be lost.`,
        performChange,
        "warning",
        "Yes, Switch Chapter",
        "Cancel"
      );
    } else {
      performChange();
    }
  };

  // Safely change fasttrack chapter with confirmation warning if active, unsubmitted answers exist
  const handleFastTrackChapterChange = (nextChId: number, targetTab?: string) => {
    const performChange = () => {
      setActiveMode("fasttrack");
      setActiveFastTrackChapter(nextChId);
      if (targetTab) {
        setActiveTab(targetTab);
      }
    };

    if (!isQuizSubmitted && selectionCount > 0) {
      triggerConfirm(
        `Switch to Topic ${nextChId}?`,
        `Are you sure you want to switch to Topic ${nextChId}? Your unsaved staged answers in Topic ${activeFastTrackChapter} will be lost.`,
        performChange,
        "warning",
        "Yes, Switch Topic",
        "Cancel"
      );
    } else {
      performChange();
    }
  };

  // Toggle Shuffle Exam mode and clear selections
  const handleToggleShuffle = () => {
    const nextVal = !isShuffleMode;
    setIsShuffleMode(nextVal);
    localStorage.setItem("civil_quiz_shuffle_mode", nextVal.toString());
    
    // Clear active staged answers as required
    setUserSelections({});
    if (activeMode === "chapter") {
      localStorage.removeItem(`civil_quiz_selections_ch_${activeChapter}`);
    } else if (activeMode === "set") {
      localStorage.removeItem(`civil_quiz_selections_set_${activeSetId}`);
    } else if (activeMode === "extra") {
      localStorage.removeItem(`civil_quiz_selections_extra_${activeExtraId}`);
    } else if (activeMode === "fasttrack") {
      localStorage.removeItem(`civil_quiz_selections_ft_${activeFastTrackChapter}`);
    }
    
    // Reset to page 1
    setCurrentPage(1);
  };

  // Navigation & matrix interaction helper (maximum 10 items per page)
  const totalPages = Math.ceil(filteredCount / itemsPerPage) || 1;

  // Persist page number positioning when currentPage changes
  useEffect(() => {
    if (activeMode === "chapter") {
      localStorage.setItem(`civil_quiz_page_ch_${activeChapter}`, currentPage.toString());
    } else if (activeMode === "set") {
      localStorage.setItem(`civil_quiz_page_set_${activeSetId}`, currentPage.toString());
    } else if (activeMode === "extra") {
      localStorage.setItem(`civil_quiz_page_extra_${activeExtraId}`, currentPage.toString());
    } else if (activeMode === "fasttrack") {
      localStorage.setItem(`civil_quiz_page_ft_${activeFastTrackChapter}`, currentPage.toString());
    }
    setJumpPageVal(currentPage.toString());
  }, [currentPage, activeChapter, activeSetId, activeExtraId, activeFastTrackChapter, activeMode]);

  // Ensure currentPage does not exceed totalPages when list of questions shrinks
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [totalPages, currentPage]);
  const currentVisibleSlice = useMemo(() => {
    if (isQuizSubmitted) {
      return filteredQuestions;
    }
    const start = (currentPage - 1) * itemsPerPage;
    return filteredQuestions.slice(start, start + itemsPerPage);
  }, [filteredQuestions, currentPage, itemsPerPage, isQuizSubmitted]);

  const handlePageChange = (direction: number) => {
    const targetPage = currentPage + direction;
    if (targetPage >= 1 && targetPage <= totalPages) {
      setCurrentPage(targetPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleJumpToQuestion = (qId: number) => {
    // Check if question exists in filtered set
    const idx = filteredQuestions.findIndex((q) => q.id === qId);
    if (idx !== -1) {
      const targetPage = Math.floor(idx / itemsPerPage) + 1;
      setCurrentPage(targetPage);
      setTimeout(() => {
        const el = document.getElementById(`q-${qId}`);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 100);
    } else {
      // If blocked by status filter, offer to clear it
      const inUnfiltered = questions.find(q => q.id === qId);
      if (inUnfiltered) {
        triggerConfirm(
          "Question Filtered Out",
          "This question is hidden by your current status/search filters. Clear filters to jump directly to it?",
          () => {
            setSearchQuery("");
            setStatusFilter("all");
            // Re-calculate page after clearing filters in next tick
            setTimeout(() => {
              const unfilteredIdx = questions.findIndex(q => q.id === qId);
              const targetPage = Math.floor(unfilteredIdx / itemsPerPage) + 1;
              setCurrentPage(targetPage);
              setTimeout(() => {
                const el = document.getElementById(`q-${qId}`);
                if (el) {
                  el.scrollIntoView({ behavior: "smooth", block: "center" });
                }
              }, 100);
            }, 0);
          },
          "info",
          "Clear Filters & Jump"
        );
      } else {
        triggerConfirm(
          "Invalid Question",
          `Question #${qId} does not exist in the current chapter's question pool.`,
          () => {},
          "info",
          "OK",
          "Dismiss"
        );
      }
    }
  };

  return (
    <div className="min-h-screen blueprint-bg text-[#F4EFE3] font-sans antialiased relative">
      <div className="relative z-10 flex flex-col min-h-screen justify-between">
        <AnimatePresence mode="wait">
        {showLandingPage ? (
          <motion.div
            key="landing-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="blueprint-bg min-h-screen text-[#F4EFE3] overflow-x-hidden flex flex-col justify-between font-sans relative"
          >
            {/* Nav Bar */}
            <nav className="sticky top-0 z-40 bg-[#0E1A2B]/85 backdrop-blur-md border-b border-[#5BCBEE]/20 relative z-10">
              <div className="max-w-[1180px] mx-auto px-6 flex items-center justify-between h-[74px]">
                <div 
                  className="flex items-center gap-2.5 font-bold text-xl tracking-tight text-[#F4EFE3] cursor-pointer"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  <div className="w-[30px] h-[30px] border border-[#5BCBEE] rounded-sm flex items-center justify-center text-[#5BCBEE] text-xs font-mono font-bold">
                    S
                  </div>
                  <span>Sangraha</span>
                </div>
                <div className="flex gap-8 text-xs md:text-sm text-[#92A2B5] font-mono">
                  <a href="#pathways-section" className="hover:text-[#F4EFE3] transition-colors">Practice Pathways</a>
                  <span className="text-[#5E7186] hidden sm:inline">•</span>
                  <span className="text-[#92A2B5] uppercase hidden sm:inline">Built for Nepal</span>
                </div>
              </div>
            </nav>

            {/* Hero Grid Section */}
            <section className="relative py-12 md:py-20 max-w-[1180px] mx-auto px-6 w-full grow flex items-center relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
                {/* Left Text and Dynamic Metrics Column */}
                <div>
                  <div className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-[#5BCBEE] border border-[#5BCBEE]/30 px-3 py-1.5 rounded uppercase mb-6">
                    Built for PSC · NEC License · Entrance
                  </div>
                  <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight text-[#F4EFE3] mb-6">
                    Engineer your prep<br />the way you'd{" "}
                    <span className="relative inline-block text-[#E8743B] font-display">
                      engineer
                      <svg className="absolute left-0 -bottom-2 w-full h-2.5" viewBox="0 0 180 14" preserveAspectRatio="none">
                        <path d="M2 9 Q 90 2, 178 9" stroke="#E8743B" strokeWidth="3" fill="none" strokeLinecap="round" />
                      </svg>
                    </span>{" "}
                    a structure.
                  </h1>
                  <p className="text-[#92A2B5] leading-relaxed mb-8 text-sm md:text-base max-w-lg">
                    Subject-wise MCQs, full-length mock tests and real exam analysis for Nepal's civil engineering exams — drafted with the same rigour you bring to a drawing sheet.
                  </p>
                  <div className="flex gap-4 flex-wrap mb-10">
                    <a 
                      href="#pathways-section"
                      className="bg-[#E8743B] text-[#0E1A2B] font-semibold text-sm px-6 py-3 rounded-sm hover:opacity-90 transition-all flex items-center gap-2 cursor-pointer shadow-md shadow-[#E8743B]/10 font-sans"
                    >
                      <span>Start Practicing</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <a 
                      href="#pathways-section"
                      className="border border-[#5BCBEE]/35 hover:border-[#5BCBEE] bg-[#5BCBEE]/5 hover:bg-[#5BCBEE]/10 text-[#F4EFE3] text-sm px-6 py-3 rounded-sm transition-all flex items-center justify-center font-semibold cursor-pointer font-sans"
                    >
                      See How It Works
                    </a>
                  </div>

                  {/* Dynamic Metrics calculated in real-time */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-[#5BCBEE]/20 pt-8 font-mono">
                    <div className="flex flex-col">
                      <span className="text-xl md:text-2xl font-semibold text-[#F4EFE3]">{overallMetrics.totalQuestionsCount}+</span>
                      <span className="text-[10px] tracking-wider text-[#92A2B5] uppercase mt-1">Total Questions</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xl md:text-2xl font-semibold text-[#F4EFE3]">{practiceSets.length} Sets</span>
                      <span className="text-[10px] tracking-wider text-[#92A2B5] uppercase mt-1">Mock Tests</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xl md:text-2xl font-semibold text-[#F4EFE3]">{totalExtraQuestions} Qs</span>
                      <span className="text-[10px] tracking-wider text-[#92A2B5] uppercase mt-1">Extra Pool</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xl md:text-2xl font-semibold text-[#5BCBEE]">Aligned</span>
                      <span className="text-[10px] tracking-wider text-[#92A2B5] uppercase mt-1">PSC / NEC Specs</span>
                    </div>
                  </div>
                </div>

                {/* Right Interactive Preview Sheet Column */}
                <div className="relative py-8 flex justify-center items-center">
                  <div className="relative w-full max-w-md">
                    <div className="absolute -top-6 right-0 border border-[#5BCBEE]/35 border-b-0 bg-[#0E1A2B] font-mono text-[9px] text-[#92A2B5] px-3.5 py-1.5 rounded-t tracking-wider">
                      SHEET <b className="text-[#5BCBEE]">{demoQuestions[demoIndex].sheetNo}</b> · SCALE NTS
                    </div>
                    
                    <div className="relative w-full bg-[#F4EFE3] border border-[#5BCBEE]/35 border-t-4 border-t-[#5BCBEE] rounded-b-lg p-6 sm:p-8 shadow-2xl text-[#0E1A2B] font-sans">
                      <div className="flex justify-between items-center mb-5">
                        <span className="font-mono text-[10px] text-[#5E7186] uppercase tracking-wider">{demoQuestions[demoIndex].qnIndex}</span>
                        <div className="font-mono text-[10px] text-[#0E1A2B] bg-[#E7E0CF] border border-[#d8cfb8] px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E8743B] animate-pulse"></span>
                          <span>{demoTimerStr}</span>
                        </div>
                      </div>
                      
                      <div className="font-display font-semibold text-base leading-snug mb-5 text-[#0E1A2B]">
                        {demoQuestions[demoIndex].text}
                      </div>
                      
                      <div className="flex flex-col gap-2.5">
                        {Object.entries(demoQuestions[demoIndex].options).map(([key, optText]) => {
                          const isSelected = selectedDemoOption === key;
                          const isCorrectAnswer = demoQuestions[demoIndex].answer === key;
                          const isAnswered = selectedDemoOption !== null;
                          
                          let optionClass = "border-[#d8cfb8] text-[#0E1A2B] bg-transparent hover:bg-[#E7E0CF]/40";
                          if (isAnswered) {
                            if (isCorrectAnswer) {
                              optionClass = "border-[#6FBF96] bg-[#6FBF96]/15 font-semibold text-[#0E1A2B]";
                            } else if (isSelected) {
                              optionClass = "border-[#E06C75] bg-[#E06C75]/12 text-[#0E1A2B]";
                            } else {
                              optionClass = "opacity-60 cursor-default text-[#0E1A2B]";
                            }
                          }

                          return (
                            <button
                              key={key}
                              disabled={isAnswered}
                              onClick={() => setSelectedDemoOption(key)}
                              className={`w-full text-left p-3.5 rounded border transition-all duration-150 flex items-center gap-3 font-sans text-sm ${optionClass}`}
                            >
                              <span className={`w-6 h-6 rounded-full border border-[#5E7186] flex items-center justify-center font-mono text-[11px] shrink-0 transition-colors duration-150 ${
                                isAnswered && isCorrectAnswer ? "bg-[#6FBF96] border-[#6FBF96] text-white" :
                                isAnswered && isSelected ? "bg-[#E06C75] border-[#E06C75] text-white" : ""
                              }`}>
                                {key.toUpperCase()}
                              </span>
                              <span>{optText}</span>
                            </button>
                          );
                        })}
                      </div>

                      {selectedDemoOption !== null && (
                        <motion.div 
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-4 p-4 bg-[#eadecc] border-l-4 border-l-[#E8743B] rounded-r text-xs leading-relaxed text-[#15263C]"
                          dangerouslySetInnerHTML={{ __html: demoQuestions[demoIndex].explanation }}
                        />
                      )}

                      {selectedDemoOption !== null && (
                        <button
                          onClick={() => {
                            setDemoIndex((prev) => (prev + 1) % demoQuestions.length);
                            setSelectedDemoOption(null);
                          }}
                          className="mt-4 w-full bg-[#0E1A2B] text-[#F4EFE3] hover:bg-[#15263C] py-2.5 rounded font-mono text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <span>Next Draft Question →</span>
                        </button>
                      )}

                      <div className="mt-5 relative">
                        <div className="h-1.5 rounded-full bg-[#e3dac3] overflow-hidden">
                          <div 
                            className="h-full bg-[#E8743B] transition-all duration-500" 
                            style={{ width: `${((demoIndex + 1) / demoQuestions.length) * 100}%` }}
                          />
                        </div>
                        <div className="hidden xl:block absolute left-full top-1/2 -translate-y-1/2 ml-4 whitespace-nowrap pointer-events-none z-10">
                          <div className="flex items-center">
                            <span className="w-8 h-[1px] bg-[#5BCBEE]/40"></span>
                            <span className="w-1.5 h-1.5 rounded-full bg-[#5BCBEE] -ml-0.5 mr-2"></span>
                            <span className="font-mono text-[10px] text-[#5BCBEE] bg-[#0E1A2B]/90 px-1.5 py-0.5 rounded border border-[#5BCBEE]/20">Detailed analytics shown</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Pathways Features Grid Layout Section */}
            <section className="border-t border-[#5BCBEE]/20 bg-[#0E1A2B] py-16 md:py-24 relative z-10" id="pathways-section">
              <div className="max-w-[1180px] mx-auto px-6">
                <div className="max-w-2xl mb-12">
                  <span className="font-mono text-xs tracking-widest text-[#5BCBEE] uppercase block mb-3">Diagnostic Pathways</span>
                  <h2 className="font-display font-bold text-2xl md:text-3xl text-[#F4EFE3] mb-4">Four pathways. Built for precision.</h2>
                  <p className="text-[#92A2B5] text-sm md:text-base font-sans">Everything is laid out like an official civil construction drawing set — direct, structured, and complete.</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Card 1: Subject-wise Practice */}
                  <motion.div
                    whileHover={{ y: -4, borderColor: "rgba(91, 203, 238, 0.6)" }}
                    onClick={() => selectPathway("chapter")}
                    className="bg-[#15263C] border border-[#5BCBEE]/20 rounded-lg p-6 cursor-pointer group transition-all duration-300 relative flex flex-col justify-between min-h-[270px] shadow-lg"
                  >
                    <span className="absolute top-6 right-6 font-mono text-xs text-[#5E7186]">01</span>
                    <div>
                      <div className="w-10 h-10 bg-[#0E1A2B] text-[#5BCBEE] rounded border border-[#5BCBEE]/30 flex items-center justify-center mb-6 group-hover:bg-[#5BCBEE] group-hover:text-[#0E1A2B] transition-all duration-300">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <h3 className="font-display font-bold text-base text-[#F4EFE3] mb-2 group-hover:text-[#5BCBEE] transition-colors">Subject-wise Practice</h3>
                      <p className="text-xs text-[#92A2B5] leading-relaxed font-sans">
                        Drill one subject at a time across the 10 official syllabus chapters until it is solid.
                      </p>
                    </div>
                    <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-[#5BCBEE] font-mono">
                      <span>Launch Chapters</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>

                  {/* Card 2: Fast Track MCQs */}
                  <motion.div
                    whileHover={{ y: -4, borderColor: "rgba(232, 116, 59, 0.6)" }}
                    onClick={() => selectPathway("fasttrack")}
                    className="bg-[#15263C] border border-[#5BCBEE]/20 rounded-lg p-6 cursor-pointer group transition-all duration-300 relative flex flex-col justify-between min-h-[270px] shadow-lg"
                  >
                    <span className="absolute top-6 right-6 font-mono text-xs text-[#5E7186]">02</span>
                    <div>
                      <div className="w-10 h-10 bg-[#0E1A2B] text-[#E8743B] rounded border border-[#E8743B]/30 flex items-center justify-center mb-6 group-hover:bg-[#E8743B] group-hover:text-[#0E1A2B] transition-all duration-300">
                        <Sparkles className="w-5 h-5" />
                      </div>
                      <h3 className="font-display font-bold text-base text-[#F4EFE3] mb-2 group-hover:text-[#E8743B] transition-colors">Fast Track MCQs</h3>
                      <p className="text-xs text-[#92A2B5] leading-relaxed font-sans">
                        Accelerate with 552 high-yield MCQs categorized across 10 vital topics for swift preparation.
                      </p>
                    </div>
                    <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-[#E8743B] font-mono">
                      <span>Launch Fast Track</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>

                  {/* Card 3: Full Mock Tests */}
                  <motion.div
                    whileHover={{ y: -4, borderColor: "rgba(91, 203, 238, 0.6)" }}
                    onClick={() => selectPathway("set")}
                    className="bg-[#15263C] border border-[#5BCBEE]/20 rounded-lg p-6 cursor-pointer group transition-all duration-300 relative flex flex-col justify-between min-h-[270px] shadow-lg"
                  >
                    <span className="absolute top-6 right-6 font-mono text-xs text-[#5E7186]">03</span>
                    <div>
                      <div className="w-10 h-10 bg-[#0E1A2B] text-[#5BCBEE] rounded border border-[#5BCBEE]/30 flex items-center justify-center mb-6 group-hover:bg-[#5BCBEE] group-hover:text-[#0E1A2B] transition-all duration-300">
                        <Layers className="w-5 h-5" />
                      </div>
                      <h3 className="font-display font-bold text-base text-[#F4EFE3] mb-2 group-hover:text-[#5BCBEE] transition-colors">Full Mock Tests</h3>
                      <p className="text-xs text-[#92A2B5] leading-relaxed font-sans">
                        Timed, full-length sets that mirror the real exam pattern down to the question count.
                      </p>
                    </div>
                    <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-[#5BCBEE] font-mono">
                      <span>Begin Examination</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>

                  {/* Card 4: Extra Question Banks */}
                  <motion.div
                    whileHover={{ y: -4, borderColor: "rgba(91, 203, 238, 0.6)" }}
                    onClick={() => selectPathway("extra")}
                    className="bg-[#15263C] border border-[#5BCBEE]/20 rounded-lg p-6 cursor-pointer group transition-all duration-300 relative flex flex-col justify-between min-h-[270px] shadow-lg"
                  >
                    <span className="absolute top-6 right-6 font-mono text-xs text-[#5E7186]">04</span>
                    <div>
                      <div className="w-10 h-10 bg-[#0E1A2B] text-[#5BCBEE] rounded border border-[#5BCBEE]/30 flex items-center justify-center mb-6 group-hover:bg-[#5BCBEE] group-hover:text-[#0E1A2B] transition-all duration-300">
                        <FileText className="w-5 h-5" />
                      </div>
                      <h3 className="font-display font-bold text-base text-[#F4EFE3] mb-2 group-hover:text-[#5BCBEE] transition-colors">Extra Question Banks</h3>
                      <p className="text-xs text-[#92A2B5] leading-relaxed font-sans">
                        High-yield bonus item pools and project planning questions for an extended revision edge.
                      </p>
                    </div>
                    <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-[#5BCBEE] font-mono">
                      <span>Enter Revision Pools</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-[#5BCBEE]/10 bg-[#0E1A2B] py-8 text-center text-[11px] font-mono text-[#5E7186] tracking-wider relative z-10">
              <div className="max-w-[1180px] mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div>© 2026 SANGRAHA · DRAWN FOR NEPAL'S CIVIL ENGINEERS</div>
                <div className="flex gap-4">
                  <span className="hover:text-[#5BCBEE] cursor-pointer">Syllabus v1.0 Aligned</span>
                  <span>•</span>
                  <span className="hover:text-[#5BCBEE] cursor-pointer">Nepal PSC & NEC Compliant</span>
                </div>
              </div>
            </footer>
          </motion.div>
        ) : !selectedSubTarget ? (
          <motion.div
            key="intermediate-selection"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="min-h-screen text-[#F4EFE3] overflow-x-hidden flex flex-col justify-between font-sans relative"
          >
            {/* Header / Nav */}
            <nav className="sticky top-0 z-40 bg-[#0E1A2B]/85 backdrop-blur-md border-b border-[#5BCBEE]/20">
              <div className="max-w-[1180px] mx-auto px-6 flex items-center justify-between h-[74px]">
                <div 
                  className="flex items-center gap-2.5 font-bold text-xl tracking-tight text-[#F4EFE3] cursor-pointer"
                  onClick={() => setShowLandingPage(true)}
                >
                  <div className="w-[30px] h-[30px] border border-[#5BCBEE] rounded-sm flex items-center justify-center text-[#5BCBEE] text-xs font-mono font-bold">
                    S
                  </div>
                  <span>Sangraha</span>
                </div>
                <div>
                  <button
                    onClick={() => setShowLandingPage(true)}
                    className="px-4 py-2 border border-[#5BCBEE]/35 hover:border-[#5BCBEE] bg-[#5BCBEE]/5 hover:bg-[#5BCBEE]/10 text-xs sm:text-sm font-semibold rounded-sm transition duration-150 flex items-center gap-2 cursor-pointer font-mono text-[#F4EFE3]"
                  >
                    <span>← Back to Portal</span>
                  </button>
                </div>
              </div>
            </nav>

            {/* Grid Container */}
            <div className="max-w-[1180px] mx-auto px-6 py-12 grow w-full relative z-10">
              {/* Heading */}
              <div className="mb-10 text-center max-w-2xl mx-auto">
                <span className="font-mono text-[11px] tracking-widest text-[#5BCBEE] uppercase block mb-3 border border-[#5BCBEE]/35 px-2.5 py-1 rounded w-max mx-auto">
                  {activeMode === "chapter" 
                    ? "Pathway A · Subject-wise Chapters" 
                    : activeMode === "fasttrack"
                    ? "Pathway B · Fast Track MCQs"
                    : activeMode === "set" 
                    ? "Pathway C · Mock Evaluation Papers" 
                    : "Pathway D · Extra Question Pools"
                  }
                </span>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#F4EFE3] mb-4">
                  {activeMode === "chapter" 
                    ? "Select Chapter to Practice" 
                    : activeMode === "fasttrack"
                    ? "Select Fast Track Topic"
                    : activeMode === "set" 
                    ? "Select Practice Set" 
                    : "Select Extra Question Bank"
                  }
                </h2>
                <p className="text-[#92A2B5] text-xs sm:text-sm font-sans leading-relaxed">
                  {activeMode === "chapter" 
                    ? "Drill one of the 10 official syllabus chapters below. Selecting a chapter loads its dedicated mock practice question pool." 
                    : activeMode === "fasttrack"
                    ? "Accelerate your revisions with highly focused, high-yield conceptual items across the 10 core engineering subjects."
                    : activeMode === "set" 
                    ? "Choose from our structured mock papers modeled exactly on official civil service and license examination blueprints." 
                    : "Supplemental high-yield question items for extra preparation."
                  }
                </p>
              </div>

              {/* Selection Lists */}
              {activeMode === "chapter" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {chaptersList.map((ch) => {
                    const qCount = chaptersData[ch.id]?.length || 0;
                    return (
                      <motion.div
                        key={ch.id}
                        whileHover={{ y: -4, borderColor: "rgba(91, 203, 238, 0.6)" }}
                        onClick={() => {
                          setActiveChapter(ch.id);
                          setSelectedSubTarget(true);
                          setActiveTab("practice");
                        }}
                        className="bg-[#15263C] border border-[#5BCBEE]/20 rounded-lg p-6 cursor-pointer group transition-all duration-300 flex flex-col justify-between min-h-[220px] shadow-lg relative"
                      >
                        <span className="absolute top-5 right-5 font-mono text-[10px] text-[#5BCBEE] border border-[#5BCBEE]/20 px-2 py-0.5 rounded uppercase">
                          Ch {ch.id}
                        </span>
                        <div>
                          <div className="w-8 h-8 bg-[#0E1A2B] text-[#5BCBEE] rounded border border-[#5BCBEE]/30 flex items-center justify-center mb-4 group-hover:bg-[#5BCBEE] group-hover:text-[#0E1A2B] transition-all duration-300">
                            <BookOpen className="w-4 h-4" />
                          </div>
                          <h3 className="font-display font-bold text-sm text-[#F4EFE3] mb-2 group-hover:text-[#5BCBEE] transition-colors leading-snug">
                            {ch.name}
                          </h3>
                          <p className="text-xs text-[#92A2B5] leading-relaxed font-sans mb-4">
                            {ch.description}
                          </p>
                        </div>
                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#5BCBEE]/10 font-mono text-[11px]">
                          <span className="text-[#92A2B5]">{qCount} Questions</span>
                          <span className="text-[#E8743B] font-bold uppercase group-hover:underline">Start Practice →</span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              )}

              {activeMode === "fasttrack" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {fasttrackChaptersList.map((ch) => {
                    const qCount = fasttrackData[ch.id]?.length || 0;
                    return (
                      <motion.div
                        key={ch.id}
                        whileHover={{ y: -4, borderColor: "rgba(232, 116, 59, 0.6)" }}
                        onClick={() => {
                          setActiveFastTrackChapter(ch.id);
                          setSelectedSubTarget(true);
                          setActiveTab("practice");
                        }}
                        className="bg-[#15263C] border border-[#5BCBEE]/20 rounded-lg p-6 cursor-pointer group transition-all duration-300 flex flex-col justify-between min-h-[220px] shadow-lg relative"
                      >
                        <span className="absolute top-5 right-5 font-mono text-[10px] text-[#E8743B] border border-[#E8743B]/20 px-2 py-0.5 rounded uppercase">
                          Topic {ch.id}
                        </span>
                        <div>
                          <div className="w-8 h-8 bg-[#0E1A2B] text-[#E8743B] rounded border border-[#E8743B]/30 flex items-center justify-center mb-4 group-hover:bg-[#E8743B] group-hover:text-[#0E1A2B] transition-all duration-300">
                            <Sparkles className="w-4 h-4" />
                          </div>
                          <h3 className="font-display font-bold text-sm text-[#F4EFE3] mb-2 group-hover:text-[#E8743B] transition-colors leading-snug">
                            {ch.name}
                          </h3>
                          <p className="text-xs text-[#92A2B5] leading-relaxed font-sans mb-4">
                            {ch.description}
                          </p>
                        </div>
                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#5BCBEE]/10 font-mono text-[11px]">
                          <span className="text-[#92A2B5]">{qCount} Questions</span>
                          <span className="text-[#E8743B] font-bold uppercase group-hover:underline">Start Revisions →</span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              )}

              {activeMode === "set" && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {practiceSets.map((set) => {
                    const qCount = set.questions?.length || 0;
                    return (
                      <motion.div
                        key={set.id}
                        whileHover={{ y: -4, borderColor: "rgba(91, 203, 238, 0.6)" }}
                        onClick={() => {
                          setActiveSetId(set.id);
                          setSelectedSubTarget(true);
                          setActiveTab("practice");
                        }}
                        className="bg-[#15263C] border border-[#5BCBEE]/20 rounded-lg p-6 cursor-pointer group transition-all duration-300 flex flex-col justify-between min-h-[220px] shadow-lg relative"
                      >
                        <span className="absolute top-5 right-5 font-mono text-[10px] text-[#5BCBEE] border border-[#5BCBEE]/20 px-2 py-0.5 rounded uppercase">
                          Exam Set
                        </span>
                        <div>
                          <div className="w-8 h-8 bg-[#0E1A2B] text-[#5BCBEE] rounded border border-[#5BCBEE]/30 flex items-center justify-center mb-4 group-hover:bg-[#5BCBEE] group-hover:text-[#0E1A2B] transition-all duration-300">
                            <Layers className="w-4 h-4" />
                          </div>
                          <h3 className="font-display font-bold text-sm text-[#F4EFE3] mb-2 group-hover:text-[#5BCBEE] transition-colors leading-snug">
                            {set.name}
                          </h3>
                          <p className="text-xs text-[#92A2B5] leading-relaxed font-sans mb-4">
                            Timed evaluation paper replicating the official test environment, layout, and scoring.
                          </p>
                        </div>
                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#5BCBEE]/10 font-mono text-[11px]">
                          <span className="text-[#92A2B5]">{qCount} Questions</span>
                          <span className="text-[#E8743B] font-bold uppercase group-hover:underline">Start Mock →</span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              )}

              {activeMode === "extra" && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {extraQuestionSets.map((set) => {
                    const qCount = set.questions?.length || 0;
                    return (
                      <motion.div
                        key={set.id}
                        whileHover={{ y: -4, borderColor: "rgba(91, 203, 238, 0.6)" }}
                        onClick={() => {
                          setActiveExtraId(set.id);
                          setSelectedSubTarget(true);
                          setActiveTab("practice");
                        }}
                        className="bg-[#15263C] border border-[#5BCBEE]/20 rounded-lg p-6 cursor-pointer group transition-all duration-300 flex flex-col justify-between min-h-[220px] shadow-lg relative"
                      >
                        <span className="absolute top-5 right-5 font-mono text-[10px] text-[#5BCBEE] border border-[#5BCBEE]/20 px-2 py-0.5 rounded uppercase">
                          Revision Set
                        </span>
                        <div>
                          <div className="w-8 h-8 bg-[#0E1A2B] text-[#5BCBEE] rounded border border-[#5BCBEE]/30 flex items-center justify-center mb-4 group-hover:bg-[#5BCBEE] group-hover:text-[#0E1A2B] transition-all duration-300">
                            <FileText className="w-4 h-4" />
                          </div>
                          <h3 className="font-display font-bold text-sm text-[#F4EFE3] mb-2 group-hover:text-[#5BCBEE] transition-colors leading-snug">
                            {set.name}
                          </h3>
                          <p className="text-xs text-[#92A2B5] leading-relaxed font-sans mb-4">
                            High-yield question sets covering advanced civil engineering concepts and drawings.
                          </p>
                        </div>
                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#5BCBEE]/10 font-mono text-[11px]">
                          <span className="text-[#92A2B5]">{qCount} Questions</span>
                          <span className="text-[#E8743B] font-bold uppercase group-hover:underline">Start Practice →</span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Footer */}
            <footer className="border-t border-[#5BCBEE]/10 bg-[#0E1A2B] py-8 text-center text-[11px] font-mono text-[#5E7186] tracking-wider relative z-10">
              <div className="max-w-[1180px] mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div>© 2026 SANGRAHA · DRAWN FOR NEPAL'S CIVIL ENGINEERS</div>
                <div className="flex gap-4">
                  <span className="hover:text-[#5BCBEE] cursor-pointer">Syllabus v1.0 Aligned</span>
                  <span>•</span>
                  <span className="hover:text-[#5BCBEE] cursor-pointer">Nepal PSC & NEC Compliant</span>
                </div>
              </div>
            </footer>
          </motion.div>
        ) : (
          <motion.div
            key="workspace"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col min-h-screen"
          >
            {/* Top Header Banner */}
            <header id="mainHeader" className="bg-[#15263C]/95 backdrop-blur text-[#F4EFE3] shadow-md sticky top-0 z-40 border-b border-[#5BCBEE]/20">
              <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-2.5 flex flex-col md:flex-row justify-between items-center gap-3">
                <div className="flex items-center gap-2.5">
                  <div 
                    className="flex items-center gap-2.5 font-bold text-xl tracking-tight text-[#F4EFE3] cursor-pointer"
                    onClick={() => {
                      setShowLandingPage(true);
                      setSelectedSubTarget(false);
                    }}
                  >
                    <div className="w-[30px] h-[30px] border border-[#5BCBEE] rounded-sm flex items-center justify-center text-[#5BCBEE] text-xs font-mono font-bold">
                      S
                    </div>
                    <span>Sangraha</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full md:w-auto justify-end">
                  {activeTab === "practice" ? (
                    <div className="flex items-center gap-2">
                      {/* Reset Current Chapter/Set Progress */}
                      <button
                        id="resetCurrentBtn"
                        onClick={handleResetCurrentChapter}
                        className="px-3 py-1.5 bg-[#0E1A2B] hover:bg-rose-950/40 hover:text-rose-200 text-[#92A2B5] hover:border-rose-500/50 text-xs font-bold rounded border border-rose-500/25 transition duration-150 flex items-center gap-1 cursor-pointer font-sans"
                        title="Reset progress for the active practice mode"
                      >
                        <RotateCcw className="w-3 h-3 text-rose-400" />
                        <span>Reset Exam</span>
                      </button>

                      {/* Clean Back Button when quiz/practice is active */}
                      <button
                        id="backBtn"
                        onClick={() => {
                          setSelectedSubTarget(false);
                        }}
                        className="px-4 py-1.5 bg-[#0E1A2B] hover:bg-[#1C3050] text-[#F4EFE3] hover:text-[#5BCBEE] text-xs font-bold rounded border border-[#5BCBEE]/40 hover:border-[#5BCBEE] transition duration-150 flex items-center gap-1.5 cursor-pointer font-sans"
                      >
                        <span>← Back</span>
                      </button>
                    </div>
                  ) : (
                    <>
                      {/* Change Practice Pathway / Home Button */}
                      <button
                        id="changePathwayBtn"
                        onClick={() => {
                          setShowLandingPage(true);
                          setSelectedSubTarget(false);
                        }}
                        className="px-3 py-1.5 bg-[#0E1A2B] hover:bg-[#1C3050] text-[#F4EFE3] hover:text-[#5BCBEE] text-[11px] font-semibold rounded border border-[#5BCBEE]/40 hover:border-[#5BCBEE] transition duration-150 flex items-center gap-1.5 cursor-pointer font-mono"
                        title="Return to Pathway Entry Portal"
                      >
                        <LayoutDashboard className="w-3.5 h-3.5 text-[#5BCBEE]" />
                        <span>Home / Change Pathway</span>
                      </button>

                      {/* Global Reset Action */}
                      <button
                        id="resetAllBtn"
                        onClick={handleResetAllProgress}
                        className="px-2.5 py-1.5 bg-[#0E1A2B] hover:bg-rose-950/40 hover:text-rose-200 text-[#92A2B5] text-[11px] font-semibold rounded border border-rose-500/25 hover:border-rose-500/50 transition duration-150 flex items-center gap-1 cursor-pointer"
                        title="Reset progress for all 10 chapters"
                      >
                        <RotateCcw className="w-3 h-3 text-red-400" />
                        Reset All Progress
                      </button>
                    </>
                  )}
                </div>
              </div>
            </header>

            {/* Main Content Workspace Container */}
            <main className="max-w-[1400px] mx-auto px-4 md:px-6 py-6 w-full grow">

              {/* Practice Question Database Control Panel - Three Separate Dropdowns */}
              {activeTab !== "practice" && (
                <div className="bg-[#15263C] text-[#F4EFE3] rounded-2xl p-5 sm:p-6 mb-6 shadow-xl border border-[#5BCBEE]/20 flex flex-col gap-5">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-[#5BCBEE]/20 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-[#5BCBEE]/10 text-[#5BCBEE] rounded-xl border border-[#5BCBEE]/20 shadow-inner">
                        <Sparkles className="w-5 h-5 text-[#5BCBEE] animate-pulse" />
                      </div>
                      <div>
                        <h3 className="text-sm font-extrabold uppercase tracking-widest text-[#5BCBEE] font-display">ACTIVE PRACTICE DATABASE</h3>
                        <p className="text-[11px] text-[#92A2B5] mt-0.5">Choose your database resource. The active database is highlighted with an active glowing badge.</p>
                      </div>
                    </div>
                    
                    {/* Active Database Badge Indicator */}
                    <div className="flex items-center gap-2 px-3 py-1 bg-[#0E1A2B]/60 border border-[#5BCBEE]/20 rounded-full text-[11px] font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5BCBEE] animate-ping"></span>
                      <span className="text-[#92A2B5]">Current Database:</span>
                      <span className="text-[#5BCBEE] uppercase tracking-wider">
                        {activeMode === "chapter" ? "📚 Chapter Practice" : activeMode === "fasttrack" ? "⚡ Fast Track MCQs" : activeMode === "set" ? "📝 Practice Sets" : "✨ Extra Questions"}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* 1. Chapter Practice Dropdown */}
                    <div 
                      onClick={() => handleResourceSwitch("chapter", activeChapter)}
                      className={`p-4 rounded-xl border transition-all duration-200 flex flex-col gap-2 cursor-pointer hover:scale-[1.01] active:scale-[0.99] ${
                        activeMode === "chapter"
                          ? "bg-[#0E1A2B]/85 border-[#5BCBEE] shadow-md shadow-[#5BCBEE]/5"
                          : "bg-[#0E1A2B]/30 border-[#5BCBEE]/10 opacity-60 hover:opacity-95 text-[#92A2B5]"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <label className="text-[11px] font-bold text-[#F4EFE3] uppercase tracking-wider flex items-center gap-1.5 cursor-pointer">
                          <span>📚 Chapter Practice</span>
                        </label>
                        {activeMode === "chapter" && (
                          <span className="text-[9px] font-extrabold uppercase bg-[#5BCBEE]/25 text-[#5BCBEE] px-1.5 py-0.5 rounded-md border border-[#5BCBEE]/40">
                            Active
                          </span>
                        )}
                      </div>
                      <select
                        value={activeChapter}
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) => handleResourceSwitch("chapter", e.target.value)}
                        className="w-full bg-[#0E1A2B] border border-[#5BCBEE]/20 hover:border-[#5BCBEE]/50 text-[#F4EFE3] py-2 px-3 rounded-xl text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-[#5BCBEE] transition cursor-pointer font-sans"
                      >
                        {chaptersList.map((ch) => (
                          <option key={ch.id} value={ch.id} className="bg-[#0E1A2B] font-semibold text-[#F4EFE3]">
                            Ch {ch.id}: {ch.name.replace(/Chapter \d+:\s*/, "")}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* 2. Fast Track MCQs Dropdown */}
                    <div 
                      onClick={() => handleResourceSwitch("fasttrack", activeFastTrackChapter)}
                      className={`p-4 rounded-xl border transition-all duration-200 flex flex-col gap-2 cursor-pointer hover:scale-[1.01] active:scale-[0.99] ${
                        activeMode === "fasttrack"
                          ? "bg-[#0E1A2B]/85 border-[#E8743B] shadow-md shadow-[#E8743B]/5"
                          : "bg-[#0E1A2B]/30 border-[#E8743B]/10 opacity-60 hover:opacity-95 text-[#92A2B5]"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <label className="text-[11px] font-bold text-[#F4EFE3] uppercase tracking-wider flex items-center gap-1.5 cursor-pointer">
                          <span>⚡ Fast Track MCQs</span>
                        </label>
                        {activeMode === "fasttrack" && (
                          <span className="text-[9px] font-extrabold uppercase bg-[#E8743B]/25 text-[#E8743B] px-1.5 py-0.5 rounded-md border border-[#E8743B]/40">
                            Active
                          </span>
                        )}
                      </div>
                      <select
                        value={activeFastTrackChapter}
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) => handleResourceSwitch("fasttrack", e.target.value)}
                        className="w-full bg-[#0E1A2B] border border-[#E8743B]/20 hover:border-[#E8743B]/50 text-[#F4EFE3] py-2 px-3 rounded-xl text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-[#E8743B] transition cursor-pointer font-sans"
                      >
                        {fasttrackChaptersList.map((ch) => (
                          <option key={ch.id} value={ch.id} className="bg-[#0E1A2B] font-semibold text-[#F4EFE3]">
                            Topic {ch.id}: {ch.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* 3. Practice Sets Dropdown */}
                    <div 
                      onClick={() => handleResourceSwitch("set", activeSetId)}
                      className={`p-4 rounded-xl border transition-all duration-200 flex flex-col gap-2 cursor-pointer hover:scale-[1.01] active:scale-[0.99] ${
                        activeMode === "set"
                          ? "bg-[#0E1A2B]/85 border-[#5BCBEE] shadow-md shadow-[#5BCBEE]/5"
                          : "bg-[#0E1A2B]/30 border-[#5BCBEE]/10 opacity-60 hover:opacity-95 text-[#92A2B5]"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <label className="text-[11px] font-bold text-[#F4EFE3] uppercase tracking-wider flex items-center gap-1.5 cursor-pointer">
                          <span>📝 Practice Sets</span>
                        </label>
                        {activeMode === "set" && (
                          <span className="text-[9px] font-extrabold uppercase bg-[#5BCBEE]/25 text-[#5BCBEE] px-1.5 py-0.5 rounded-md border border-[#5BCBEE]/40">
                            Active
                          </span>
                        )}
                      </div>
                      <select
                        value={activeSetId}
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) => handleResourceSwitch("set", e.target.value)}
                        className="w-full bg-[#0E1A2B] border border-[#5BCBEE]/20 hover:border-[#5BCBEE]/50 text-[#F4EFE3] py-2 px-3 rounded-xl text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-[#5BCBEE] transition cursor-pointer font-sans"
                      >
                        {practiceSets.map((set) => (
                          <option key={set.id} value={set.id} className="bg-[#0E1A2B] font-semibold text-[#F4EFE3]">
                            {set.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* 4. Extra Questions Dropdown */}
                    <div 
                      onClick={() => handleResourceSwitch("extra", activeExtraId)}
                      className={`p-4 rounded-xl border transition-all duration-200 flex flex-col gap-2 cursor-pointer hover:scale-[1.01] active:scale-[0.99] ${
                        activeMode === "extra"
                          ? "bg-[#0E1A2B]/85 border-[#5BCBEE] shadow-md shadow-[#5BCBEE]/5"
                          : "bg-[#0E1A2B]/30 border-[#5BCBEE]/10 opacity-60 hover:opacity-95 text-[#92A2B5]"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <label className="text-[11px] font-bold text-[#F4EFE3] uppercase tracking-wider flex items-center gap-1.5 cursor-pointer">
                          <span>✨ Extra Questions</span>
                        </label>
                        {activeMode === "extra" && (
                          <span className="text-[9px] font-extrabold uppercase bg-[#5BCBEE]/25 text-[#5BCBEE] px-1.5 py-0.5 rounded-md border border-[#5BCBEE]/40">
                            Active
                          </span>
                        )}
                      </div>
                      <select
                        value={activeExtraId}
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) => handleResourceSwitch("extra", e.target.value)}
                        className="w-full bg-[#0E1A2B] border border-[#5BCBEE]/20 hover:border-[#5BCBEE]/50 text-[#F4EFE3] py-2 px-3 rounded-xl text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-[#5BCBEE] transition cursor-pointer font-sans"
                      >
                        {extraQuestionSets.map((set) => (
                          <option key={set.id} value={set.id} className="bg-[#0E1A2B] font-semibold text-[#F4EFE3]">
                            {set.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              )}
        
              {/* Core Double Tab Navigation layout (Syllabus chapters only) */}
              {activeTab !== "practice" && activeMode === "chapter" && (
          <div className="flex border border-[#5BCBEE]/20 mb-6 bg-[#15263C] rounded-2xl p-1 shadow-sm">
            <button
              id="tab-overview"
              onClick={() => {
                setActiveTab("overview");
              }}
              className={`flex-1 h-10 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === "overview"
                  ? "bg-[#5BCBEE] text-[#0E1A2B] shadow-md shadow-[#5BCBEE]/10"
                  : "text-[#92A2B5] hover:bg-[#0E1A2B]/40 hover:text-[#5BCBEE]"
              }`}
            >
              <LayoutDashboard className="w-3.5 h-3.5" />
              Course Overview Dashboard
            </button>
            <button
              id="tab-practice"
              onClick={() => {
                setActiveTab("practice");
              }}
              className={`flex-1 h-10 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === "practice"
                  ? "bg-[#5BCBEE] text-[#0E1A2B] shadow-md shadow-[#5BCBEE]/10"
                  : "text-[#92A2B5] hover:bg-[#0E1A2B]/40 hover:text-[#5BCBEE]"
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              Chapter Practice Center
            </button>
          </div>
        )}

        <AnimatePresence mode="wait">
          {activeMode === "chapter" && activeTab === "overview" ? (
            /* =======================================================
               FEATURE 3: CORE COURSE OVERVIEW DASHBOARD VIEW (LANDING)
               ======================================================= */
            <motion.section
              key="overview-dashboard"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col gap-6"
            >
              {/* Overall Course Stat Bento Box Header */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-[#15263C] rounded-2xl border border-[#5BCBEE]/20 p-5 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-[#92A2B5] uppercase tracking-wider block">Course Completion Rate</span>
                    <div className="text-2xl md:text-3xl font-extrabold font-mono text-[#5BCBEE] mt-2">
                      {overallMetrics.overallCompletion}%
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="w-full bg-[#0E1A2B] h-1.5 rounded-full overflow-hidden">
                      <div className="bg-[#5BCBEE] h-full" style={{ width: `${overallMetrics.overallCompletion}%` }}></div>
                    </div>
                    <span className="text-[10px] text-[#92A2B5] mt-1 block font-medium">
                      {overallMetrics.totalSelected} of {overallMetrics.totalQuestionsCount} responses staged
                    </span>
                  </div>
                </div>

                <div className="bg-[#15263C] rounded-2xl border border-[#5BCBEE]/20 p-5 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-[#92A2B5] uppercase tracking-wider block">Overall Avg. Exam Grade</span>
                    <div className="text-2xl md:text-3xl font-extrabold font-mono text-emerald-400 mt-2">
                      {overallMetrics.submittedCount > 0 ? `${overallMetrics.overallAvgScore}%` : "0%"}
                    </div>
                  </div>
                  <div className="mt-4">
                    <span className="inline-block bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-semibold px-2 py-0.5 rounded-full">
                      {overallMetrics.completedChaptersCount} of 10 chapters evaluated
                    </span>
                    <span className="text-[10px] text-[#92A2B5] mt-1 block">Based on locked chapter milestones</span>
                  </div>
                </div>

                <div className="bg-[#15263C] rounded-2xl border border-[#5BCBEE]/20 p-5 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-[#92A2B5] uppercase tracking-wider block">Staged Bookmarks</span>
                    <div className="text-2xl md:text-3xl font-extrabold font-mono text-amber-500 mt-2 flex items-center gap-1.5">
                      <Bookmark className="w-6 h-6 fill-amber-400 text-amber-500" />
                      {overallMetrics.totalBookmarks}
                    </div>
                  </div>
                  <div className="mt-4">
                    <span className="text-[10px] text-[#92A2B5] leading-relaxed block">
                      Saved across the entire curriculum for targeted exam review.
                    </span>
                  </div>
                </div>

                <div className="bg-[#15263C] rounded-2xl border border-[#5BCBEE]/20 p-5 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-[#92A2B5] uppercase tracking-wider block">Course Chapter Status</span>
                    <div className="text-2xl md:text-3xl font-extrabold font-mono text-indigo-400 mt-2">
                      {overallMetrics.completedChaptersCount} Graded
                    </div>
                  </div>
                  <div className="mt-4">
                    <span className="text-[10px] text-[#92A2B5] font-medium block">
                      {overallMetrics.inProgressChaptersCount} in-progress, {10 - overallMetrics.completedChaptersCount - overallMetrics.inProgressChaptersCount} unstarted
                    </span>
                  </div>
                </div>
              </div>

              {/* Syllabus Header */}
              <div className="bg-[#15263C] text-[#F4EFE3] rounded-2xl p-6 border border-[#5BCBEE]/20 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-bold font-display">Civil Engineering Professional Practice Syllabus</h2>
                  <p className="text-xs text-[#92A2B5] mt-1">
                    Select any chapter block below to instantly jump to practice testing, review answers, or manage bookmarks.
                  </p>
                </div>
                <div className="text-[11px] font-mono text-[#5BCBEE] bg-[#5BCBEE]/10 px-3 py-1 rounded-full border border-[#5BCBEE]/20">
                  Total Syllabus Pool: 1,419 items
                </div>
              </div>

              {/* Grid of Chapters */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {chaptersList.map((ch) => {
                  const stat = chapterStats[ch.id];
                  const completionPercentage = stat ? Math.round((stat.selectedCount / stat.totalCount) * 100) : 0;

                  return (
                    <div
                      key={ch.id}
                      className="bg-[#15263C] border border-[#5BCBEE]/20 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between gap-4"
                    >
                      <div>
                        {/* Card Header Info */}
                        <div className="flex items-start justify-between gap-2.5">
                          <div>
                            <span className="text-[10px] font-mono font-bold text-[#92A2B5] uppercase block">Chapter {ch.id} Directory</span>
                            <h3 className="text-md font-bold text-[#F4EFE3] leading-snug mt-1 font-display">
                              {ch.name.replace(/Chapter \d+:\s*/, "")}
                            </h3>
                          </div>
                          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold flex-shrink-0 ${
                            stat.isSubmitted
                              ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                              : stat.selectedCount > 0
                                ? "bg-[#5BCBEE]/10 text-[#5BCBEE] border border-[#5BCBEE]/20"
                                : "bg-[#0E1A2B]/40 text-[#92A2B5] border border-[#5BCBEE]/10"
                          }`}>
                            {stat.isSubmitted 
                              ? `Graded: ${stat.score}%` 
                              : stat.selectedCount > 0 
                                ? `Draft (${stat.selectedCount}/${stat.totalCount})` 
                                : "Practice Open"}
                          </span>
                        </div>

                        {/* Description Text */}
                        <p className="text-xs text-[#92A2B5] leading-relaxed mt-3">
                          {ch.description}
                        </p>
                      </div>

                      {/* Chapter Progress Indicators & Footer Button */}
                      <div>
                        <div className="border-t border-[#5BCBEE]/10 pt-4 mt-2">
                          <div className="flex justify-between items-center text-[11px] mb-1.5 font-medium">
                            <span className="text-[#92A2B5]">Diagnostic Progress</span>
                            <span className="text-xs text-[#5BCBEE] font-mono font-bold">{stat.selectedCount} of {stat.totalCount} answered ({completionPercentage}%)</span>
                          </div>
                          <div className="w-full bg-[#0E1A2B] h-2 rounded-full overflow-hidden">
                            <div
                              className={`h-full ${stat.isSubmitted ? 'bg-emerald-500' : 'bg-[#5BCBEE]'}`}
                              style={{ width: `${completionPercentage}%` }}
                            ></div>
                          </div>
                        </div>

                        {/* Star / Bookmark Summary */}
                        {stat.bookmarkCount > 0 && (
                          <div className="flex items-center gap-1.5 text-[10px] text-amber-400 font-bold mt-3 bg-amber-500/10 px-2.5 py-1 rounded-lg w-max">
                            <Bookmark className="w-3 h-3 fill-amber-500" />
                            <span>{stat.bookmarkCount} saved review point{stat.bookmarkCount !== 1 ? 's' : ''}</span>
                          </div>
                        )}

                        {/* Action Jump Button */}
                        <button
                          onClick={() => {
                            handleChapterChange(ch.id, "practice");
                          }}
                          className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition duration-150 flex items-center justify-center gap-1.5 cursor-pointer mt-4 ${
                            stat.isSubmitted
                              ? "bg-[#0E1A2B] hover:bg-[#1C3050] text-[#F4EFE3] border border-[#5BCBEE]/20 hover:border-[#5BCBEE]"
                              : "bg-[#5BCBEE] hover:bg-[#46B4D6] text-[#0E1A2B] shadow-sm font-extrabold"
                          }`}
                        >
                          {stat.isSubmitted ? (
                            <>
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                              Review Graded Exam
                            </>
                          ) : stat.selectedCount > 0 ? (
                            <>
                              <RotateCcw className="w-3.5 h-3.5" />
                              Resume Practice Exam
                            </>
                          ) : (
                            <>
                              <BookOpenCheck className="w-3.5 h-3.5" />
                              Start Practice Exam
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.section>
          ) : (
            /* =======================================================
               STANDARD CHAPTER PRACTICE VIEWPORT (STAGES & EVALUATES)
               ======================================================= */
            <motion.div
              key="practice-workspace"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col gap-4 max-w-3xl w-full mx-auto"
            >
              {/* 2. Compact Inline Switcher Row */}
              <div className="bg-[#15263C] rounded-2xl border border-[#5BCBEE]/20 p-4 shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
                <div className="flex items-center gap-2 max-w-full overflow-hidden">
                  <BookOpenCheck className="w-4 h-4 text-[#5BCBEE] flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-[#F4EFE3] font-display truncate">
                    {activeMode === "chapter" ? (
                      `Ch ${activeChapter}: ${chaptersList.find(c => c.id === activeChapter)?.name.replace(/Chapter \d+:\s*/, "")}`
                    ) : activeMode === "fasttrack" ? (
                      `Topic ${activeFastTrackChapter}: ${fasttrackChaptersList.find(c => c.id === activeFastTrackChapter)?.name}`
                    ) : activeMode === "set" ? (
                      `Set: ${practiceSets.find(s => s.id === activeSetId)?.name}`
                    ) : (
                      `Extra Questions: ${extraQuestionSets.find(s => s.id === activeExtraId)?.name}`
                    )}
                  </span>
                </div>
                
                <div className="flex flex-wrap items-center gap-2 max-w-full overflow-hidden">
                  {activeMode === "chapter" && (
                    <>
                      <span className="text-xs font-semibold text-[#92A2B5] whitespace-nowrap hidden xs:inline">Directory:</span>
                      <select
                        id="chapterSelect"
                        value={activeChapter}
                        onChange={(e) => handleChapterChange(parseInt(e.target.value, 10))}
                        className="w-full xs:w-auto max-w-full overflow-hidden text-ellipsis whitespace-nowrap bg-[#0E1A2B] border border-[#5BCBEE]/20 hover:border-[#5BCBEE] text-[#F4EFE3] py-1.5 px-2.5 rounded-lg text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#5BCBEE]/20 transition cursor-pointer font-sans"
                      >
                        {chaptersList.map((ch) => {
                          const stat = chapterStats[ch.id];
                          const prefix = stat?.isSubmitted ? `[Graded: ${stat.score}%]` : stat?.selectedCount > 0 ? `[Draft]` : `[Open]`;
                          return (
                            <option key={ch.id} value={ch.id} className="bg-[#0E1A2B]">
                              Ch {ch.id}: {ch.name.replace(/Chapter \d+:\s*/, "")} {prefix}
                            </option>
                          );
                        })}
                      </select>
                    </>
                  )}

                  {activeMode === "fasttrack" && (
                    <>
                      <span className="text-xs font-semibold text-[#92A2B5] whitespace-nowrap hidden xs:inline">Topic:</span>
                      <select
                        id="fasttrackSelect"
                        value={activeFastTrackChapter}
                        onChange={(e) => handleFastTrackChapterChange(parseInt(e.target.value, 10))}
                        className="w-full xs:w-auto max-w-full overflow-hidden text-ellipsis whitespace-nowrap bg-[#0E1A2B] border border-[#E8743B]/20 hover:border-[#E8743B] text-[#F4EFE3] py-1.5 px-2.5 rounded-lg text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#E8743B]/20 transition cursor-pointer font-sans"
                      >
                        {fasttrackChaptersList.map((ch) => (
                          <option key={ch.id} value={ch.id} className="bg-[#0E1A2B]">
                            Topic {ch.id}: {ch.name}
                          </option>
                        ))}
                      </select>
                    </>
                  )}

                  <button
                    onClick={handleToggleShuffle}
                    className={`flex items-center gap-1.5 py-1.5 px-2.5 rounded-lg text-xs font-semibold border transition duration-150 cursor-pointer ${
                      isShuffleMode
                        ? "bg-[#5BCBEE]/20 text-[#5BCBEE] border-[#5BCBEE] hover:bg-[#5BCBEE]/30 font-bold"
                        : "bg-[#0E1A2B] text-[#92A2B5] border-[#5BCBEE]/20 hover:bg-[#1C3050]/50 hover:text-[#5BCBEE]"
                    }`}
                    title="Toggle Random/Shuffle Question & Options Order"
                  >
                    <Shuffle className={`w-3.5 h-3.5 ${isShuffleMode ? "animate-pulse" : ""}`} />
                    <span>Shuffle Exam</span>
                    <span className={`w-1.5 h-1.5 rounded-full ${isShuffleMode ? "bg-[#5BCBEE] animate-ping" : "bg-slate-300 dark:bg-[#5E7186]"}`}></span>
                  </button>
                </div>
              </div>

                {/* 2. Questions Listing Viewport */}
                <div id="questions-viewport" className="flex flex-col gap-3.5 pb-24">
                  <AnimatePresence mode="wait">
                    {isLoadingDynamic ? (
                      <motion.div
                        key="loading-dynamic"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.25 }}
                        className="bg-[#15263C] rounded-2xl border border-[#5BCBEE]/20 p-12 text-center shadow-lg flex flex-col items-center justify-center gap-4"
                      >
                        <div className="relative">
                          <div className="w-12 h-12 rounded-full border-4 border-[#5BCBEE]/10 border-t-4 border-t-[#E8743B] animate-spin"></div>
                          <Sparkles className="w-5 h-5 text-[#E8743B] absolute inset-0 m-auto animate-pulse" />
                        </div>
                        <div className="flex flex-col gap-1">
                          <h3 className="text-md font-bold text-[#F4EFE3] font-display">Loading Fast Track MCQs</h3>
                          <p className="text-xs text-[#92A2B5] max-w-xs leading-relaxed">
                            Reading Topic 2 questions dynamically from JSON database...
                          </p>
                        </div>
                      </motion.div>
                    ) : currentVisibleSlice.length === 0 ? (
                      <motion.div
                        key="empty-state"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="bg-[#15263C] rounded-2xl border border-[#5BCBEE]/20 p-8 text-center shadow-sm"
                      >
                        <Info className="w-8 h-8 text-[#5BCBEE] mx-auto mb-3" />
                        <h3 className="text-md font-bold text-[#F4EFE3]">
                          {statusFilter === "bookmarked" ? "No Bookmarked Questions" : "No questions found matching the query"}
                        </h3>
                        <p className="text-xs text-[#92A2B5] mt-1 max-w-sm mx-auto">
                          {statusFilter === "bookmarked"
                            ? "Save questions for fast tracking or future revision by starring them on question cards."
                            : "Adjust your filter settings or clear the search input to bring back the question list."}
                        </p>
                        <button
                          id="clearFiltersBtn"
                          onClick={() => {
                            setSearchQuery("");
                            setStatusFilter("all");
                          }}
                          className="mt-4 px-4 py-2 bg-[#0E1A2B] hover:bg-[#1C3050] text-[#F4EFE3] hover:text-[#5BCBEE] border border-[#5BCBEE]/30 hover:border-[#5BCBEE] text-xs font-semibold rounded-lg transition duration-150 cursor-pointer"
                        >
                          Clear All Filters
                        </button>
                      </motion.div>
                    ) : (
                      currentVisibleSlice.map((q, qIndex) => {
                        const currentSelection = userSelections[q.id];
                        const hasSelected = !!currentSelection;
                        const isCorrect = currentSelection === q.answer;
                        const bookmarkKey = activeMode === "chapter" 
                          ? `${activeChapter}-${q.id}` 
                          : activeMode === "set" 
                          ? `${activeSetId}-${q.id}`
                          : activeMode === "extra"
                          ? `${activeExtraId}-${q.id}`
                          : `${activeFastTrackChapter}-${q.id}`;
                        const isStarred = !!bookmarks[bookmarkKey];

                        return (
                          <motion.div
                            key={`${activeMode}-${activeMode === "chapter" ? activeChapter : activeMode === "set" ? activeSetId : activeMode === "extra" ? activeExtraId : activeFastTrackChapter}-${q.id}`}
                            id={`q-${q.id}`}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                                                       className="bg-[#15263C] rounded-xl border border-[#5BCBEE]/20 p-4 sm:p-5 shadow-sm relative overflow-hidden"
                          >
                            {/* Card Header Row with Question ID & Evaluation Status */}
                            <div className="flex items-center justify-between gap-4 mb-3 pb-2 border-b border-[#5BCBEE]/10">
                               <div className="flex items-center gap-2">
                                <span className="font-mono text-[11px] font-extrabold uppercase tracking-wider bg-[#0E1A2B] text-[#5BCBEE] px-2.5 py-1 rounded-md border border-[#5BCBEE]/20">
                                  Q. {q.id}
                                </span>
                                
                                {/* Star / Bookmark Toggle Button */}
                                <button
                                  id={`bookmark-btn-${q.id}`}
                                  onClick={() => toggleBookmark(
                                    activeMode === "chapter" 
                                      ? activeChapter 
                                      : activeMode === "set" 
                                      ? activeSetId 
                                      : activeMode === "extra"
                                      ? activeExtraId
                                      : activeFastTrackChapter, 
                                    q.id
                                  )}
                                  className="inline-flex items-center p-1.5 hover:bg-[#0E1A2B] rounded-full transition-all duration-150 group cursor-pointer"
                                  title={isStarred ? "Remove Bookmark" : "Bookmark Question"}
                                >
                                  <Bookmark
                                    className={`w-4 h-4 transition-transform duration-150 group-hover:scale-110 ${
                                      isStarred
                                        ? "fill-amber-400 text-amber-500"
                                        : "text-[#92A2B5] hover:text-[#5BCBEE]"
                                    }`}
                                  />
                                </button>
                              </div>

                              <span className={`shrink-0 px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                                isQuizSubmitted 
                                  ? isCorrect 
                                    ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" 
                                    : "bg-rose-500/10 text-rose-400 border border-rose-500/20"
                                  : hasSelected 
                                    ? "bg-[#5BCBEE]/10 text-[#5BCBEE] border border-[#5BCBEE]/20" 
                                    : "bg-[#E8743B]/10 text-[#E8743B] border border-[#E8743B]/20 animate-pulse"
                              }`}>
                                {isQuizSubmitted 
                                  ? isCorrect 
                                    ? "Correct Target" 
                                    : "Incorrect Selection"
                                  : hasSelected 
                                    ? "Staged Answer" 
                                    : "Awaiting Input"}
                              </span>
                            </div>

                            {/* Full-Width Question Body Text */}
                            <h3 className="text-[14px] sm:text-[15px] font-semibold text-[#F4EFE3] leading-relaxed font-display w-full mb-4">
                              {q.text}
                            </h3>

                            {/* Options Buttons Stack */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                              {(() => {
                                const optionKeys = q._shuffledOptionKeys || Object.keys(q.options);
                                return optionKeys.map((key) => [key, q.options[key]]);
                              })().map(([key, value], index) => {
                                const isThisSelected = currentSelection === key;
                                const isThisCorrect = key === q.answer;

                                let optClass = "border-[#5BCBEE]/20 bg-[#0E1A2B]/40 hover:bg-[#0E1A2B]/80 hover:border-[#5BCBEE] text-[#92A2B5] hover:text-[#F4EFE3]";
                                let prefixClass = "bg-[#0E1A2B] border-[#5BCBEE]/20 text-[#5BCBEE]";

                                if (isQuizSubmitted) {
                                  if (isThisCorrect) {
                                    optClass = "border-emerald-500 bg-emerald-500/10 text-emerald-400 font-semibold";
                                    prefixClass = "bg-emerald-500 border-emerald-500 text-[#0E1A2B]";
                                  } else if (isThisSelected) {
                                    optClass = "border-rose-500 bg-rose-500/10 text-rose-400 font-semibold";
                                    prefixClass = "bg-rose-500 border-rose-500 text-white";
                                  } else {
                                    optClass = "border-[#5BCBEE]/5 bg-[#0E1A2B]/10 text-[#92A2B5]/40 cursor-not-allowed";
                                    prefixClass = "bg-[#0E1A2B] border-[#5BCBEE]/10 text-[#92A2B5]/35";
                                  }
                                } else {
                                  if (isThisSelected) {
                                    optClass = "border-[#5BCBEE] bg-[#5BCBEE]/10 text-[#5BCBEE] font-bold shadow-sm";
                                    prefixClass = "bg-[#5BCBEE] border-[#5BCBEE] text-[#0E1A2B] shadow-inner";
                                  }
                                }

                                return (
                                  <button
                                    key={key}
                                    id={`opt-btn-${q.id}-${key}`}
                                    disabled={isQuizSubmitted}
                                    onClick={() => handleSelectOption(q.id, key)}
                                    className={`flex items-center text-left py-2 px-3 rounded-lg border text-xs transition duration-150 cursor-pointer ${optClass}`}
                                  >
                                    <span className={`w-6 h-6 rounded-full border flex items-center justify-center font-bold text-[10px] mr-2.5 flex-shrink-0 transition duration-150 ${prefixClass}`}>
                                      {String.fromCharCode(65 + index)}
                                    </span>
                                    <span className="leading-relaxed">{value}</span>
                                    
                                    {isQuizSubmitted && isThisCorrect && (
                                      <Check className="w-4 h-4 text-emerald-400 ml-auto flex-shrink-0" />
                                    )}
                                    {isQuizSubmitted && isThisSelected && !isThisCorrect && (
                                      <XCircle className="w-4 h-4 text-rose-400 ml-auto flex-shrink-0" />
                                    )}
                                  </button>
                                );
                              })}
                            </div>


                          </motion.div>
                        );
                      })
                    )}
                  </AnimatePresence>
                </div>

                {/* 3. Pagination Control Navigation */}
                {filteredCount > 0 && !isQuizSubmitted && (
                  <div className="flex items-center justify-between p-2 text-xs text-slate-500">
                    <button
                      id="prevPageBtn"
                      disabled={currentPage === 1}
                      onClick={() => handlePageChange(-1)}
                      className="px-3 py-1.5 bg-[#0E1A2B] hover:bg-[#1C3050] text-[#E2E8F0] hover:text-[#5BCBEE] disabled:opacity-30 disabled:hover:bg-[#0E1A2B] text-xs font-semibold rounded-lg border border-[#23354A] transition duration-150 flex items-center gap-1 cursor-pointer"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                      Previous
                    </button>

                    <span className="font-bold font-mono tracking-tight text-[#94A3B8]">
                      Page {currentPage} of {totalPages}
                    </span>

                    <button
                      id="nextPageBtn"
                      disabled={currentPage === totalPages}
                      onClick={() => handlePageChange(1)}
                      className="px-3 py-1.5 bg-[#5BCBEE] hover:bg-[#46B4D6] text-[#0E1A2B] disabled:opacity-30 disabled:hover:bg-[#5BCBEE] text-xs font-bold rounded-lg transition duration-150 flex items-center gap-1 cursor-pointer"
                    >
                      Next
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}

                {/* 4. Action submission dashboard */}
                <div className="bg-[#16222F] rounded-2xl border border-[#23354A] p-4 shadow-sm flex flex-col gap-4">
                  {isQuizSubmitted ? (
                    <div className="flex flex-col gap-3.5">
                      {/* Top Row: Title, Score & Actions */}
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-3 border-b border-[#23354A]">
                        <div className="flex items-center gap-2.5 text-left w-full sm:w-auto">
                          <Trophy className="w-5 h-5 text-emerald-400 animate-pulse flex-shrink-0" />
                          <div>
                            <h3 className="text-xs sm:text-sm font-bold text-[#E2E8F0] leading-tight font-display">Exam Evaluation Graded</h3>
                            <p className="text-[10px] text-[#94A3B8] mt-0.5">
                              {activeMode === "chapter" 
                                ? `Chapter ${activeChapter}` 
                                : activeMode === "fasttrack"
                                ? `Fast Track Topic ${activeFastTrackChapter}`
                                : activeMode === "set" 
                                ? (practiceSets.find(s => s.id === activeSetId)?.name || "Practice set")
                                : (extraQuestionSets.find(s => s.id === activeExtraId)?.name || "Extra questions set")
                              } score: <strong className="font-mono text-[#5BCBEE]">{correctCount}/{totalInPool} ({gradePercent}%)</strong>
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                          <button
                            id="resetChProgressBtn"
                            onClick={handleResetCurrentChapter}
                            className="px-3 py-1.5 bg-[#0E1A2B] hover:bg-[#1C3050] text-[#E2E8F0] hover:text-[#5BCBEE] text-[11px] font-bold rounded-lg border border-[#23354A] transition duration-150 flex items-center gap-1 cursor-pointer"
                          >
                            <RotateCcw className="w-3 h-3 text-rose-400" />
                            Retake
                          </button>
                          {activeMode === "chapter" && activeChapter < 10 && (
                            <button
                              id="nextChapterBtn"
                              onClick={() => {
                                setActiveChapter(activeChapter + 1);
                                window.scrollTo({ top: 0, behavior: "smooth" });
                              }}
                              className="px-3 py-1.5 bg-[#5BCBEE] hover:bg-[#46B4D6] text-[#0E1A2B] text-[11px] font-bold rounded-lg shadow-sm hover:shadow transition duration-150 flex items-center gap-1 cursor-pointer"
                            >
                              Next Chapter
                              <ChevronRight className="w-3 h-3" />
                            </button>
                          )}
                          {activeMode === "fasttrack" && activeFastTrackChapter < 10 && (
                            <button
                              id="nextFastTrackBtn"
                              onClick={() => {
                                handleFastTrackChapterChange(activeFastTrackChapter + 1);
                                window.scrollTo({ top: 0, behavior: "smooth" });
                              }}
                              className="px-3 py-1.5 bg-[#E8743B] hover:bg-[#D5632D] text-[#0E1A2B] text-[11px] font-bold rounded-lg shadow-sm hover:shadow transition duration-150 flex items-center gap-1 cursor-pointer font-extrabold"
                            >
                              Next Topic
                              <ChevronRight className="w-3 h-3" />
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Bottom Row: Scorecard metrics & Smart Review Filters */}
                      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs">
                        {/* Counts Badge Indicator Row */}
                        <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
                          <span className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-wider">Results:</span>
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-950/20 text-emerald-400 font-medium font-mono text-[10px] border border-emerald-500/30">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                            {postSubmitMetrics.correct} Correct
                          </span>
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-red-955/20 text-red-400 font-medium font-mono text-[10px] border border-red-350">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                            {postSubmitMetrics.incorrect} Incorrect
                          </span>
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#0E1A2B] text-[#94A3B8] font-medium font-mono text-[10px] border border-[#23354A]">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                            {postSubmitMetrics.unanswered} Not Submitted
                          </span>
                        </div>

                        {/* Review Filters Toggle Group */}
                        <div className="flex items-center gap-1 bg-[#0E1A2B] p-1 rounded-lg border border-[#23354A] w-full md:w-auto">
                          <button
                            id="reviewFilterAll"
                            onClick={() => {
                              setReviewFilter("all");
                              setCurrentPage(1);
                            }}
                            className={`px-2.5 py-1 rounded text-[10px] font-bold transition-all cursor-pointer ${
                              reviewFilter === "all"
                                ? "bg-[#16222F] text-[#E2E8F0] shadow-sm"
                                : "text-[#94A3B8] hover:text-[#E2E8F0]"
                            }`}
                          >
                            All ({totalInPool})
                          </button>
                          <button
                            id="reviewFilterIncorrect"
                            onClick={() => {
                              setReviewFilter("incorrect");
                              setCurrentPage(1);
                            }}
                            className={`px-2.5 py-1 rounded text-[10px] font-bold transition-all cursor-pointer flex items-center gap-1 ${
                              reviewFilter === "incorrect"
                                ? "bg-red-500 text-white shadow-sm"
                                : "text-red-450 hover:bg-red-500/10"
                            }`}
                            title="Show unanswered or wrongly selected questions"
                          >
                            Incorrect & Unanswered Only ({postSubmitMetrics.incorrect + postSubmitMetrics.unanswered})
                          </button>
                          <button
                            id="reviewFilterCorrect"
                            onClick={() => {
                              setReviewFilter("correct");
                              setCurrentPage(1);
                            }}
                            className={`px-2.5 py-1 rounded text-[10px] font-bold transition-all cursor-pointer flex items-center gap-1 ${
                              reviewFilter === "correct"
                                ? "bg-emerald-500 text-white shadow-sm"
                                : "text-emerald-450 hover:bg-emerald-500/10"
                            }`}
                          >
                            Correct Only ({postSubmitMetrics.correct})
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-row items-center justify-between gap-3 w-full">
                      <div className="flex items-center gap-2">
                        <div className="px-2.5 py-1 bg-[#0E1A2B] border border-[#23354A] text-[#5BCBEE] font-mono text-xs font-bold rounded-lg">
                          {selectionCount} Staged / {totalInPool} Total
                        </div>
                        {selectionCount < totalInPool && (
                          <span className="text-[10px] text-amber-500 font-semibold inline-flex items-center gap-1">
                            <AlertTriangle className="w-3 h-3 flex-shrink-0" />
                            Unanswered will be marked incorrect.
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* 7. Current Diagnostic Metrics Block */}
                <div className="bg-[#16222F] rounded-2xl border border-[#23354A] p-4 md:p-8 shadow-sm">
                  <span className="block text-xs font-bold text-[#E2E8F0] uppercase tracking-wider mb-4 flex items-center gap-1.5">
                    <Trophy className="w-4 h-4 text-[#5BCBEE]" />
                    Current Diagnostic Metrics
                  </span>
                  <div className="grid grid-cols-4 gap-1.5 sm:gap-4">
                    <div className="bg-[#0E1A2B] border border-[#23354A] p-2 sm:p-4 rounded-xl text-center">
                      <div className="text-lg sm:text-2xl font-bold font-mono text-[#5BCBEE]">{totalInPool}</div>
                      <div className="text-[10px] font-semibold text-[#94A3B8] uppercase tracking-tight mt-1">Total Pool</div>
                    </div>
                    <div className="bg-[#0E1A2B] border border-[#23354A] p-2 sm:p-4 rounded-xl text-center">
                      <div className="text-lg sm:text-2xl font-bold font-mono text-[#5BCBEE]">{filteredCount}</div>
                      <div className="text-[10px] font-semibold text-[#94A3B8] uppercase tracking-tight mt-1">Filtered</div>
                    </div>
                    <div className="bg-[#0E1A2B] border border-[#23354A] p-2 sm:p-4 rounded-xl text-center">
                      <div className="text-lg sm:text-2xl font-bold font-mono text-[#5BCBEE]">{selectionCount}</div>
                      <div className="text-[10px] font-semibold text-[#94A3B8] uppercase tracking-tight mt-1">Staged</div>
                    </div>
                    <div className="bg-[#0E1A2B] border border-[#23354A] p-2 sm:p-4 rounded-xl text-center flex flex-col justify-center items-center">
                      {isQuizSubmitted ? (
                        <div className="text-lg sm:text-2xl font-bold font-mono text-emerald-400">{gradePercent}%</div>
                      ) : (
                        <div className="text-[#94A3B8] font-medium text-[10px] sm:text-xs flex items-center justify-center gap-1 h-6 sm:h-8">
                           Quiz Mode
                        </div>
                      )}
                      <div className="text-[10px] font-semibold text-[#94A3B8] uppercase tracking-tight mt-1">Exam Grade</div>
                    </div>
                  </div>
                </div>

                {/* 8. Quiz Navigation Grid */}
                <div className="bg-[#16222F] rounded-2xl border border-[#23354A] p-6 md:p-8 shadow-sm">
                  <span className="block text-xs font-bold text-[#E2E8F0] uppercase tracking-wider mb-4 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <LayoutDashboard className="w-4 h-4 text-[#5BCBEE]" />
                      Quiz Navigation Grid
                    </span>
                    <span className="text-xs font-mono text-[#94A3B8]">{filteredCount} of {totalInPool} displayed</span>
                  </span>
                  
                  {questions.length === 0 ? (
                    <div className="text-center text-xs text-[#94A3B8] py-4">No questions loaded</div>
                  ) : (
                    <div className="max-h-[220px] overflow-y-auto pr-2">
                      <div className="grid grid-cols-5 md:grid-cols-10 gap-2" id="questionNavMatrix">
                        {questions.map((q) => {
                          const isStaged = !!userSelections[q.id];
                          const isCorrect = userSelections[q.id] === q.answer;
                          const isFilteredOut = !filteredQuestions.some(fq => fq.id === q.id);

                          let btnClass = "bg-[#0E1A2B] hover:bg-[#1C3050] text-[#E2E8F0] border-[#23354A]";
                          
                          if (isQuizSubmitted) {
                            if (isCorrect) {
                                btnClass = "bg-emerald-950/40 text-emerald-400 border-emerald-500/30 hover:bg-emerald-900/30";
                            } else if (isStaged) {
                                btnClass = "bg-rose-950/30 text-rose-400 border-rose-500/30 hover:bg-rose-900/20";
                            } else {
                                btnClass = "bg-[#0E1A2B] text-slate-500 border-[#23354A] opacity-60 hover:bg-[#1C3050]";
                            }
                          } else {
                            if (isStaged) {
                                btnClass = "bg-[#5BCBEE]/25 text-[#5BCBEE] border-[#5BCBEE] hover:bg-[#5BCBEE]/35";
                            }
                          }

                          if (isFilteredOut) {
                            btnClass += " opacity-25";
                          }

                          return (
                            <button
                              key={q.id}
                              id={`nav-btn-${q.id}`}
                              onClick={() => handleJumpToQuestion(q.id)}
                              className={`h-8 w-full text-xs font-bold font-mono flex items-center justify-center rounded-lg border transition duration-150 cursor-pointer ${btnClass}`}
                              title={`Go to Question #${q.id}`}
                            >
                              {q.id}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  <div className="mt-4 pt-3 border-t border-[#23354A] flex flex-wrap gap-x-4 gap-y-1.5 text-[10px] text-[#94A3B8] font-semibold">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 bg-[#5BCBEE]/25 border border-[#5BCBEE] rounded-sm"></span> Staged Selection
                    </span>
                    {isQuizSubmitted ? (
                      <>
                        <span className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 bg-emerald-950/40 border border-emerald-500/30 rounded-sm"></span> Correct
                        </span>
                        <span className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 bg-rose-950/30 border border-rose-500/30 rounded-sm"></span> Wrong Selection
                        </span>
                      </>
                    ) : (
                      <span className="italic font-normal text-[#94A3B8]">
                        Submit entire sheet above to view evaluation grades on this matrix.
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </motion.div>
    )}
  </AnimatePresence>

      {/* Persistent Sticky Bottom status bar for quick overview */}
      <footer className="bg-slate-900 border-t border-slate-800 py-6 text-slate-500 text-xs mt-12">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Local Database Sandboxed & Offline Sync Activated</span>
          </div>
          <div className="font-mono text-[10px] text-slate-500">
            Civil Engineering Practice &bull; System Check v4.12
          </div>
        </div>
      </footer>

      {/* Custom Confirmation Modal */}
      <AnimatePresence>
        {modalConfig && modalConfig.isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalConfig(null)}
              className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
            />
            
            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden z-10 flex flex-col"
            >
              {/* Top accent line */}
              <div className={`h-1.5 w-full ${
                modalConfig.type === 'danger' ? 'bg-rose-500' :
                modalConfig.type === 'warning' ? 'bg-amber-500' : 'bg-blue-600'
              }`} />

              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`p-2.5 rounded-xl flex-shrink-0 flex items-center justify-center ${
                    modalConfig.type === 'danger' ? 'bg-rose-50 dark:bg-rose-955/20 text-rose-600' :
                    modalConfig.type === 'warning' ? 'bg-amber-50 dark:bg-amber-955/20 text-amber-600' : 'bg-blue-50 dark:bg-blue-955/20 text-blue-600'
                  }`}>
                    {modalConfig.type === 'danger' ? (
                      <AlertTriangle className="w-6 h-6" />
                    ) : modalConfig.type === 'warning' ? (
                      <AlertTriangle className="w-6 h-6" />
                    ) : (
                      <Info className="w-6 h-6" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 font-display">
                      {modalConfig.title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-405 mt-2 leading-relaxed">
                      {modalConfig.message}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex justify-end gap-3">
                  <button
                    onClick={() => setModalConfig(null)}
                    className="px-4 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold rounded-xl transition cursor-pointer"
                  >
                    {modalConfig.cancelText}
                  </button>
                  <button
                    onClick={() => {
                      modalConfig.onConfirm();
                      setModalConfig(null);
                    }}
                    className={`px-4 py-2.5 text-white text-xs font-semibold rounded-xl shadow-sm transition cursor-pointer ${
                      modalConfig.type === 'danger' ? 'bg-rose-600 hover:bg-rose-700 shadow-rose-100 dark:shadow-none' :
                      modalConfig.type === 'warning' ? 'bg-amber-500 hover:bg-amber-600 shadow-amber-100 dark:shadow-none' : 'bg-blue-600 hover:bg-blue-700 shadow-blue-100 dark:shadow-none'
                    }`}
                  >
                    {modalConfig.confirmText}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Floating Navigation & Actions shortcuts panel */}
      {!showLandingPage && selectedSubTarget && activeTab === "practice" && totalInPool > 0 && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[92%] max-w-[380px] bg-[#15263C] shadow-xl border border-[#5BCBEE]/40 rounded-full py-1.5 px-3 flex items-center justify-between gap-2 z-50">
          {/* 1. Submit Button: compact, rounded green pill */}
          {!isQuizSubmitted ? (
            <button
              type="button"
              onClick={handleExecuteSubmission}
              className="h-8 px-3 text-xs bg-emerald-650 hover:bg-emerald-700 text-white rounded-full font-bold flex items-center justify-center cursor-pointer active:scale-95 transition-all"
            >
              Submit
            </button>
          ) : (
            <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-400 pl-1.5 font-sans">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Graded</span>
            </div>
          )}

          {/* 2. Jumper Input + Go Button (No Labels) */}
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              const num = parseInt(jumpQuestionVal, 10);
              if (!isNaN(num) && num > 0) {
                handleJumpToQuestion(num);
                setJumpQuestionVal("");
              }
            }}
            className="flex items-center gap-1"
          >
            <input
              type="text"
              inputMode="numeric"
              placeholder="#"
              value={jumpQuestionVal}
              onChange={(e) => setJumpQuestionVal(e.target.value.replace(/\D/g, ''))}
              className="h-8 w-12 text-xs text-center border border-[#5BCBEE]/20 rounded-md bg-[#0E1A2B] outline-none text-[#F4EFE3] focus:border-[#5BCBEE]"
            />
            <button
              type="submit"
              className="h-8 px-2.5 text-xs rounded-md bg-[#5BCBEE] hover:bg-[#46B4D6] text-[#0E1A2B] font-extrabold transition-all flex items-center justify-center cursor-pointer active:scale-95"
            >
              Go
            </button>
          </form>

          {/* 3. Scroll Toggle Button */}
          <button
            type="button"
            onClick={() => {
              if (isPastMiddle) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else {
                window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
              }
            }}
            title={isPastMiddle ? "Scroll to Top" : "Scroll to Bottom"}
            className="h-8 w-8 text-xs bg-[#0E1A2B] hover:bg-[#1C3050] border border-[#5BCBEE]/20 rounded-full flex items-center justify-center text-[#F4EFE3] active:scale-95 cursor-pointer transition-all"
          >
            {isPastMiddle ? (
              <ArrowUp className="w-3.5 h-3.5 text-[#5BCBEE]" />
            ) : (
              <ArrowDown className="w-3.5 h-3.5 text-[#5BCBEE]" />
            )}
          </button>
        </div>
      )}
    </div>
  </div>
);
}

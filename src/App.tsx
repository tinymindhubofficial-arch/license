import React, { useState, useEffect, useMemo } from "react";
import { 
  BookOpen, Search, Award, CheckCircle2, XCircle, RotateCcw, 
  Check, ChevronLeft, ChevronRight, Info, ListFilter, Trophy, 
  Sparkles, BookOpenCheck, HelpCircle, AlertTriangle, Moon, Sun, 
  Bookmark, LayoutDashboard, Shuffle
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { chaptersList, chaptersData } from "./chaptersData";
import { Question, UserSelections } from "./types";

export default function App() {
  // 1. Native Dark Mode State & Side Effect
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem("civil_quiz_dark_mode");
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("civil_quiz_dark_mode", JSON.stringify(darkMode));
  }, [darkMode]);

  // 2. Active Tab & Active Chapter (Tab defaults to overview)
  const [activeTab, setActiveTab] = useState<string>(() => {
    const saved = localStorage.getItem("civil_quiz_active_tab");
    return saved || "overview";
  });

  const [activeChapter, setActiveChapter] = useState<number>(() => {
    const saved = localStorage.getItem("civil_quiz_active_chapter");
    return saved ? parseInt(saved, 10) : 1;
  });

  // Persist Tab & Chapter selections
  useEffect(() => {
    localStorage.setItem("civil_quiz_active_tab", activeTab);
  }, [activeTab]);

  // 3. Question Bookmarks (persisted per composite key: chapterId-questionId)
  const [bookmarks, setBookmarks] = useState<Record<string, boolean>>(() => {
    const saved = localStorage.getItem("civil_quiz_bookmarks");
    return saved ? JSON.parse(saved) : {};
  });

  const toggleBookmark = (chapterId: number, questionId: number) => {
    const key = `${chapterId}-${questionId}`;
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

  // Filter and page states (using 10 items per page)
  const [searchQuery, setSearchQuery] = useState<string>(" ");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [reviewFilter, setReviewFilter] = useState<'all' | 'incorrect' | 'correct'>('all');
  
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [jumpPageVal, setJumpPageVal] = useState<string>("");

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

  // Track active chapter changes to synchronize with sandboxed localStorage and restore current page positioning
  useEffect(() => {
    localStorage.setItem("civil_quiz_active_chapter", activeChapter.toString());

    const savedSelections = localStorage.getItem(`civil_quiz_selections_ch_${activeChapter}`);
    setUserSelections(savedSelections ? JSON.parse(savedSelections) : {});

    const savedSubmitted = localStorage.getItem(`civil_quiz_submitted_ch_${activeChapter}`);
    setIsQuizSubmitted(savedSubmitted ? JSON.parse(savedSubmitted) : false);

    // Restore page number positioning for this chapter from localStorage
    const savedPage = localStorage.getItem(`civil_quiz_page_ch_${activeChapter}`);
    setCurrentPage(savedPage ? parseInt(savedPage, 10) : 1);

    // Clear filters when chapter changes
    setSearchQuery("");
    setStatusFilter("all");
    setReviewFilter("all");
  }, [activeChapter]);



  // Load questions for the active chapter
  const questions = useMemo(() => {
    const originalQuestions = chaptersData[activeChapter] || [];
    if (!isShuffleMode) {
      return originalQuestions;
    }
    
    // Stable shuffle for active chapter questions
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
  }, [activeChapter, isShuffleMode]);

  // Handle option selection
  const handleSelectOption = (qId: number, optionKey: string) => {
    if (isQuizSubmitted) return;
    const updated = { ...userSelections, [qId]: optionKey };
    setUserSelections(updated);
    localStorage.setItem(`civil_quiz_selections_ch_${activeChapter}`, JSON.stringify(updated));
  };

  // Count active chapter bookmarked questions
  const activeChapterBookmarksCount = useMemo(() => {
    return questions.filter(q => !!bookmarks[`${activeChapter}-${q.id}`]).length;
  }, [questions, bookmarks, activeChapter]);

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
        matchesStatus = !!bookmarks[`${activeChapter}-${q.id}`];
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
  }, [questions, searchQuery, statusFilter, userSelections, bookmarks, activeChapter, isQuizSubmitted, reviewFilter]);

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
      const selections = savedSelections ? JSON.parse(savedSelections) : {};
      const savedSubmitted = localStorage.getItem(`civil_quiz_submitted_ch_${ch.id}`);
      const isSubmitted = savedSubmitted ? JSON.parse(savedSubmitted) : false;

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

  // Submit current chapter exam
  const handleExecuteSubmission = () => {
    if (totalInPool === 0) return;

    if (selectionCount < totalInPool) {
      triggerConfirm(
        "Staged Answers Incomplete",
        `Warning: You have only selected ${selectionCount} out of ${totalInPool} answers. Unanswered questions will count as incorrect. Proceed to evaluate?`,
        () => {
          setIsQuizSubmitted(true);
          localStorage.setItem(`civil_quiz_submitted_ch_${activeChapter}`, JSON.stringify(true));
          window.scrollTo({ top: 0, behavior: "smooth" });
        },
        "warning",
        "Yes, Evaluate and Grade"
      );
    } else {
      triggerConfirm(
        "Submit Entire Chapter Exam",
        "Are you sure you want to finish and submit this exam session? Answers will be locked and graded instantly.",
        () => {
          setIsQuizSubmitted(true);
          localStorage.setItem(`civil_quiz_submitted_ch_${activeChapter}`, JSON.stringify(true));
          window.scrollTo({ top: 0, behavior: "smooth" });
        },
        "info",
        "Yes, Submit and Grade"
      );
    }
  };

  // Reset chapter progress
  const handleResetCurrentChapter = () => {
    const chName = chaptersList.find(c => c.id === activeChapter)?.name || `Chapter ${activeChapter}`;
    triggerConfirm(
      "Reset Chapter Progress",
      `Are you sure you want to reset all answers and grades for ${chName}? This clears your selections and resets back to live practice mode.`,
      () => {
        setUserSelections({});
        setIsQuizSubmitted(false);
        localStorage.removeItem(`civil_quiz_selections_ch_${activeChapter}`);
        localStorage.removeItem(`civil_quiz_submitted_ch_${activeChapter}`);
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
      "This clears answers, grades, submissions, and page navigation logs across ALL 10 chapters. This action is irreversible. Are you sure you want to do this?",
      () => {
        chaptersList.forEach((ch) => {
          localStorage.removeItem(`civil_quiz_selections_ch_${ch.id}`);
          localStorage.removeItem(`civil_quiz_submitted_ch_${ch.id}`);
          localStorage.removeItem(`civil_quiz_page_ch_${ch.id}`);
        });
        localStorage.removeItem("civil_quiz_bookmarks");
        setBookmarks({});
        setUserSelections({});
        setIsQuizSubmitted(false);
        setActiveChapter(1);
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
    if (!isQuizSubmitted && selectionCount > 0) {
      const confirmAbandon = window.confirm(
        `Are you sure you want to switch to Chapter ${nextChId}? Your unsaved staged answers in Chapter ${activeChapter} will be lost.`
      );
      if (!confirmAbandon) {
        return;
      }
    }
    setActiveChapter(nextChId);
    if (targetTab) {
      setActiveTab(targetTab);
    }
  };

  // Toggle Shuffle Exam mode and clear selections
  const handleToggleShuffle = () => {
    const nextVal = !isShuffleMode;
    setIsShuffleMode(nextVal);
    localStorage.setItem("civil_quiz_shuffle_mode", nextVal.toString());
    
    // Clear active staged answers as required
    setUserSelections({});
    localStorage.removeItem(`civil_quiz_selections_ch_${activeChapter}`);
    
    // Reset to page 1
    setCurrentPage(1);
  };

  // Navigation & matrix interaction helper (maximum 10 items per page)
  const totalPages = Math.ceil(filteredCount / itemsPerPage) || 1;

  // Persist page number positioning when currentPage changes
  useEffect(() => {
    localStorage.setItem(`civil_quiz_page_ch_${activeChapter}`, currentPage.toString());
    setJumpPageVal(currentPage.toString());
  }, [currentPage, activeChapter]);

  // Ensure currentPage does not exceed totalPages when list of questions shrinks
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [totalPages, currentPage]);
  const currentVisibleSlice = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredQuestions.slice(start, start + itemsPerPage);
  }, [filteredQuestions, currentPage]);

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
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans antialiased transition-colors duration-200">
      {/* Top Header Banner */}
      <header id="mainHeader" className="bg-slate-900 text-white shadow-md sticky top-0 z-40 border-b border-slate-800">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-2.5 flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="flex items-center gap-2.5">
            <div className="bg-blue-600 p-1.5 rounded-lg text-white shadow-inner flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg md:text-xl font-bold font-display tracking-tight text-white">Civil Engineering Practice</h1>
                <span className="hidden sm:inline-block bg-blue-500/20 text-blue-300 text-[10px] font-semibold tracking-wider px-2 py-0.5 rounded-full border border-blue-500/30">
                  10-CHAPTER SYSTEM
                </span>
              </div>
              <p className="text-[11px] text-slate-400">Dynamic Performance Validation, Sandboxed Chapter Diagnostics, and Revision Matrix</p>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto justify-end">
            {/* Native Dark Mode Toggle Button */}
            <button
              id="themeToggleBtn"
              onClick={() => setDarkMode(!darkMode)}
              className="p-1.5 bg-slate-800 hover:bg-slate-750 text-slate-300 rounded-lg border border-slate-700 transition duration-150 flex items-center justify-center gap-1.5 cursor-pointer text-[11px] font-semibold"
              title="Toggle Light or Dark interface"
            >
              {darkMode ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                  <span className="hidden sm:inline">Light Mode</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-indigo-300" />
                  <span className="hidden sm:inline">Dark Mode</span>
                </>
              )}
            </button>

            {/* Global Reset Action */}
            <button
              id="resetAllBtn"
              onClick={handleResetAllProgress}
              className="px-2.5 py-1.5 bg-slate-800 hover:bg-red-950 hover:text-red-200 text-slate-300 text-[11px] font-semibold rounded-lg border border-slate-700 transition duration-150 flex items-center gap-1 cursor-pointer"
              title="Reset progress for all 10 chapters"
            >
              <RotateCcw className="w-3 h-3 text-red-400" />
              Reset All Progress
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Workspace Container */}
      <main className="max-w-[1400px] mx-auto px-4 md:px-6 py-6">
        
        {/* Core Double Tab Navigation layout */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 mb-6 bg-white dark:bg-slate-900 rounded-2xl p-1.5 shadow-sm">
          <button
            id="tab-overview"
            onClick={() => {
              setActiveTab("overview");
            }}
            className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === "overview"
                ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50"
            }`}
          >
            <LayoutDashboard className="w-4 h-4" />
            Course Overview Dashboard
          </button>
          <button
            id="tab-practice"
            onClick={() => {
              setActiveTab("practice");
            }}
            className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === "practice"
                ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50"
            }`}
          >
            <BookOpen className="w-4 h-4" />
            Chapter Practice Center
          </button>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "overview" ? (
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
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-5 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Course Completion Rate</span>
                    <div className="text-2xl md:text-3xl font-extrabold font-mono text-slate-800 dark:text-slate-100 mt-2">
                      {overallMetrics.overallCompletion}%
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-blue-600 h-full" style={{ width: `${overallMetrics.overallCompletion}%` }}></div>
                    </div>
                    <span className="text-[10px] text-slate-400 mt-1 block font-medium">
                      {overallMetrics.totalSelected} of {overallMetrics.totalQuestionsCount} responses staged
                    </span>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-5 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Overall Avg. Exam Grade</span>
                    <div className="text-2xl md:text-3xl font-extrabold font-mono text-emerald-600 dark:text-emerald-400 mt-2">
                      {overallMetrics.submittedCount > 0 ? `${overallMetrics.overallAvgScore}%` : "0%"}
                    </div>
                  </div>
                  <div className="mt-4">
                    <span className="inline-block bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 text-[10px] font-semibold px-2 py-0.5 rounded-full">
                      {overallMetrics.completedChaptersCount} of 10 chapters evaluated
                    </span>
                    <span className="text-[10px] text-slate-400 mt-1 block">Based on locked chapter milestones</span>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-5 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Staged Bookmarks</span>
                    <div className="text-2xl md:text-3xl font-extrabold font-mono text-amber-500 mt-2 flex items-center gap-1.5">
                      <Bookmark className="w-6 h-6 fill-amber-400 text-amber-500" />
                      {overallMetrics.totalBookmarks}
                    </div>
                  </div>
                  <div className="mt-4">
                    <span className="text-[10px] text-slate-400 leading-relaxed block">
                      Saved across the entire curriculum for targeted exam review.
                    </span>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-5 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Course Chapter Status</span>
                    <div className="text-2xl md:text-3xl font-extrabold font-mono text-indigo-600 dark:text-indigo-400 mt-2">
                      {overallMetrics.completedChaptersCount} Graded
                    </div>
                  </div>
                  <div className="mt-4">
                    <span className="text-[10px] text-slate-400 font-medium block">
                      {overallMetrics.inProgressChaptersCount} in-progress, {10 - overallMetrics.completedChaptersCount - overallMetrics.inProgressChaptersCount} unstarted
                    </span>
                  </div>
                </div>
              </div>

              {/* Syllabus Header */}
              <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-bold font-display">Civil Engineering Professional Practice syllabus</h2>
                  <p className="text-xs text-slate-300 mt-1">
                    Select any chapter block below to instantly jump to practice testing, review answers, or manage bookmarks.
                  </p>
                </div>
                <div className="text-[11px] font-mono text-blue-300 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
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
                      className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between gap-4"
                    >
                      <div>
                        {/* Card Header Info */}
                        <div className="flex items-start justify-between gap-2.5">
                          <div>
                            <span className="text-[10px] font-mono font-bold text-slate-400 uppercase block">Chapter {ch.id} Directory</span>
                            <h3 className="text-md font-bold text-slate-800 dark:text-slate-100 leading-snug mt-1 font-display">
                              {ch.name.replace(/Chapter \d+:\s*/, "")}
                            </h3>
                          </div>
                          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold flex-shrink-0 ${
                            stat.isSubmitted
                              ? "bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50"
                              : stat.selectedCount > 0
                                ? "bg-blue-50 dark:bg-blue-950/20 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800/40"
                                : "bg-slate-50 dark:bg-slate-800/60 text-slate-500 dark:text-slate-400 border border-slate-150 dark:border-slate-800"
                          }`}>
                            {stat.isSubmitted 
                              ? `Graded: ${stat.score}%` 
                              : stat.selectedCount > 0 
                                ? `Draft (${stat.selectedCount}/${stat.totalCount})` 
                                : "Practice Open"}
                          </span>
                        </div>

                        {/* Description Text */}
                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-3">
                          {ch.description}
                        </p>
                      </div>

                      {/* Chapter Progress Indicators & Footer Button */}
                      <div>
                        <div className="border-t border-slate-100 dark:border-slate-800/80 pt-4 mt-2">
                          <div className="flex justify-between items-center text-[11px] text-slate-400 mb-1.5 font-medium">
                            <span>Diagnostic Progress</span>
                            <span>{stat.selectedCount} of {stat.totalCount} answered ({completionPercentage}%)</span>
                          </div>
                          <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                            <div
                              className={`h-full ${stat.isSubmitted ? 'bg-emerald-500' : 'bg-blue-500'}`}
                              style={{ width: `${completionPercentage}%` }}
                            ></div>
                          </div>
                        </div>

                        {/* Star / Bookmark Summary */}
                        {stat.bookmarkCount > 0 && (
                          <div className="flex items-center gap-1.5 text-[10px] text-amber-500 dark:text-amber-400 font-bold mt-3 bg-amber-500/10 dark:bg-amber-500/5 px-2.5 py-1 rounded-lg w-max">
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
                              ? "bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                              : "bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow"
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
              {/* 2. Compact Inline Chapter Switcher Row */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-4 shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <BookOpenCheck className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 font-display">
                    Ch {activeChapter}: {chaptersList.find(c => c.id === activeChapter)?.name.replace(/Chapter \d+:\s*/, "")}
                  </span>
                </div>
                
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold text-slate-400 dark:text-slate-550 whitespace-nowrap hidden xs:inline">Directory:</span>
                  <select
                    id="chapterSelect"
                    value={activeChapter}
                    onChange={(e) => handleChapterChange(parseInt(e.target.value, 10))}
                    className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 text-slate-800 dark:text-slate-200 py-1.5 px-2.5 rounded-lg text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition cursor-pointer"
                  >
                    {chaptersList.map((ch) => {
                      const stat = chapterStats[ch.id];
                      const prefix = stat?.isSubmitted ? `[Graded: ${stat.score}%]` : stat?.selectedCount > 0 ? `[Draft]` : `[Open]`;
                      return (
                        <option key={ch.id} value={ch.id}>
                          Ch {ch.id}: {ch.name.replace(/Chapter \d+:\s*/, "")} {prefix}
                        </option>
                      );
                    })}
                  </select>

                  <button
                    onClick={handleToggleShuffle}
                    className={`flex items-center gap-1.5 py-1.5 px-2.5 rounded-lg text-xs font-semibold border transition duration-150 cursor-pointer ${
                      isShuffleMode
                        ? "bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800/80 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 font-bold"
                        : "bg-slate-50 dark:bg-slate-800/30 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"
                    }`}
                    title="Toggle Random/Shuffle Question & Options Order"
                  >
                    <Shuffle className={`w-3.5 h-3.5 ${isShuffleMode ? "animate-pulse" : ""}`} />
                    <span>Shuffle Exam</span>
                    <span className={`w-1.5 h-1.5 rounded-full ${isShuffleMode ? "bg-indigo-500 animate-ping" : "bg-slate-300 dark:bg-slate-600"}`}></span>
                  </button>
                </div>
              </div>

                {/* 2. Questions Listing Viewport */}
                <div id="questions-viewport" className="flex flex-col gap-3.5">
                  <AnimatePresence mode="wait">
                    {currentVisibleSlice.length === 0 ? (
                      <motion.div
                        key="empty-state"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-8 text-center shadow-sm"
                      >
                        <Info className="w-8 h-8 text-slate-400 dark:text-slate-500 mx-auto mb-3" />
                        <h3 className="text-md font-bold text-slate-700 dark:text-slate-300">
                          {statusFilter === "bookmarked" ? "No Bookmarked Questions" : "No questions found matching the query"}
                        </h3>
                        <p className="text-xs text-slate-450 dark:text-slate-450 mt-1 max-w-sm mx-auto">
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
                          className="mt-4 px-4 py-2 bg-slate-900 dark:bg-slate-800 hover:bg-slate-850 dark:hover:bg-slate-700 text-white text-xs font-semibold rounded-lg transition duration-150 cursor-pointer"
                        >
                          Clear All Filters
                        </button>
                      </motion.div>
                    ) : (
                      currentVisibleSlice.map((q, qIndex) => {
                        const currentSelection = userSelections[q.id];
                        const hasSelected = !!currentSelection;
                        const isCorrect = currentSelection === q.answer;
                        const isStarred = !!bookmarks[`${activeChapter}-${q.id}`];

                        return (
                          <motion.div
                            key={`${activeChapter}-${q.id}`}
                            id={`q-${q.id}`}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2, delay: qIndex * 0.05 }}
                            className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200/80 dark:border-slate-800 p-4 sm:p-5 shadow-sm relative overflow-hidden"
                          >
                            {/* Upper Info Header Line */}
                            <div className="flex justify-between items-center text-xs text-slate-400 mb-3 pb-2 border-b border-slate-100 dark:border-slate-800/80">
                              <div className="flex items-center gap-2">
                                <span className="font-mono text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">
                                  Question Unit Matrix #{q.id}
                                </span>
                                
                                {/* Star / Bookmark Toggle Button */}
                                <button
                                  id={`bookmark-btn-${q.id}`}
                                  onClick={() => toggleBookmark(activeChapter, q.id)}
                                  className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-all duration-150 group cursor-pointer"
                                  title={isStarred ? "Remove Bookmark" : "Bookmark Question"}
                                >
                                  <Bookmark
                                    className={`w-4 h-4 transition-transform duration-150 group-hover:scale-110 ${
                                      isStarred
                                        ? "fill-amber-400 text-amber-500"
                                        : "text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300"
                                    }`}
                                  />
                                </button>
                              </div>

                              <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                                isQuizSubmitted 
                                  ? isCorrect 
                                    ? "bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50" 
                                    : "bg-red-50 dark:bg-red-950/20 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800/50"
                                  : hasSelected 
                                    ? "bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-800/45" 
                                    : "bg-amber-50 dark:bg-amber-950/20 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800/40 animate-pulse"
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

                            {/* Question Text */}
                            <h3 className="text-[14px] sm:text-[15px] font-semibold text-slate-800 dark:text-slate-100 leading-relaxed mb-4 font-display">
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

                                let optClass = "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-850 text-slate-700 dark:text-slate-300";
                                let prefixClass = "bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400";

                                if (isQuizSubmitted) {
                                  if (isThisCorrect) {
                                    optClass = "border-emerald-500 dark:border-emerald-600 bg-emerald-50/80 dark:bg-emerald-950/20 text-emerald-800 dark:text-emerald-300 font-semibold";
                                    prefixClass = "bg-emerald-500 border-emerald-500 dark:border-emerald-600 text-white";
                                  } else if (isThisSelected) {
                                    optClass = "border-red-500 dark:border-red-600 bg-red-50 dark:bg-red-950/20 text-red-800 dark:text-red-300 font-semibold";
                                    prefixClass = "bg-red-500 border-red-500 dark:border-red-600 text-white";
                                  } else {
                                    optClass = "border-slate-100 dark:border-slate-850 bg-slate-50/40 dark:bg-slate-900/40 text-slate-400 dark:text-slate-500 cursor-not-allowed";
                                    prefixClass = "bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-850 text-slate-450 dark:text-slate-500";
                                  }
                                } else {
                                  if (isThisSelected) {
                                    optClass = "border-blue-500 dark:border-blue-500 bg-blue-50 dark:bg-blue-950/30 text-blue-800 dark:text-blue-200 font-bold shadow-sm";
                                    prefixClass = "bg-blue-600 dark:bg-blue-500 border-blue-600 dark:border-blue-500 text-white shadow-inner";
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
                                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 ml-auto flex-shrink-0" />
                                    )}
                                    {isQuizSubmitted && isThisSelected && !isThisCorrect && (
                                      <XCircle className="w-4 h-4 text-red-600 dark:text-red-400 ml-auto flex-shrink-0" />
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
                {filteredCount > 0 && (
                  <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 px-6 py-4 flex justify-between items-center shadow-sm">
                    <button
                      id="prevPageBtn"
                      disabled={currentPage === 1}
                      onClick={() => handlePageChange(-1)}
                      className="px-4 py-2 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-750 dark:text-slate-350 disabled:opacity-40 disabled:hover:bg-white text-xs font-bold rounded-xl border border-slate-200 dark:border-slate-800 transition duration-150 flex items-center gap-1 cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Previous
                    </button>

                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-slate-500 dark:text-slate-400 font-mono tracking-tight">
                        Page {currentPage} of {totalPages}
                      </span>
                      <div className="flex items-center gap-1.5 border-l border-slate-200 dark:border-slate-800 pl-3">
                        <span className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">Go to:</span>
                        <input
                          id="pageJumpInput"
                          type="number"
                          min={1}
                          max={totalPages}
                          value={jumpPageVal}
                          onChange={(e) => setJumpPageVal(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              const pageNum = parseInt(jumpPageVal, 10);
                              if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= totalPages) {
                                setCurrentPage(pageNum);
                                window.scrollTo({ top: 0, behavior: "smooth" });
                              } else {
                                setJumpPageVal(currentPage.toString());
                              }
                            }
                          }}
                          onBlur={() => {
                            const pageNum = parseInt(jumpPageVal, 10);
                            if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= totalPages) {
                              setCurrentPage(pageNum);
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            } else {
                              setJumpPageVal(currentPage.toString());
                            }
                          }}
                          className="w-14 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 py-1 px-1.5 rounded-lg text-xs font-mono font-bold text-center focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <button
                      id="nextPageBtn"
                      disabled={currentPage === totalPages}
                      onClick={() => handlePageChange(1)}
                      className="px-4 py-2 bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-755 text-white disabled:opacity-40 disabled:hover:bg-slate-900 text-xs font-bold rounded-xl transition duration-150 flex items-center gap-1 cursor-pointer"
                    >
                      Next
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}

                {/* 4. Action submission dashboard */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-4 shadow-sm flex flex-col gap-4">
                  {isQuizSubmitted ? (
                    <div className="flex flex-col gap-3.5">
                      {/* Top Row: Title, Score & Actions */}
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-800/60">
                        <div className="flex items-center gap-2.5 text-left w-full sm:w-auto">
                          <Trophy className="w-5 h-5 text-emerald-500 animate-pulse flex-shrink-0" />
                          <div>
                            <h3 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 leading-tight font-display">Exam Evaluation Graded</h3>
                            <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">
                              Chapter {activeChapter} score: <strong className="font-mono text-slate-600 dark:text-slate-350">{correctCount}/{totalInPool} ({gradePercent}%)</strong>
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                          <button
                            id="resetChProgressBtn"
                            onClick={handleResetCurrentChapter}
                            className="px-3 py-1.5 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 text-[11px] font-bold rounded-lg border border-slate-200 dark:border-slate-800 transition duration-150 flex items-center gap-1 cursor-pointer"
                          >
                            <RotateCcw className="w-3 h-3" />
                            Retake
                          </button>
                          {activeChapter < 10 && (
                            <button
                              id="nextChapterBtn"
                              onClick={() => {
                                setActiveChapter(activeChapter + 1);
                                window.scrollTo({ top: 0, behavior: "smooth" });
                              }}
                              className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-bold rounded-lg shadow-sm hover:shadow transition duration-150 flex items-center gap-1 cursor-pointer"
                            >
                              Next Chapter
                              <ChevronRight className="w-3 h-3" />
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Bottom Row: Scorecard metrics & Smart Review Filters */}
                      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs">
                        {/* Counts Badge Indicator Row */}
                        <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
                          <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Results:</span>
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 font-medium font-mono text-[10px] border border-emerald-100 dark:border-emerald-900/30">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                            {postSubmitMetrics.correct} Correct
                          </span>
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-red-50 dark:bg-red-950/20 text-red-600 dark:text-red-400 font-medium font-mono text-[10px] border border-red-100 dark:border-red-900/30">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                            {postSubmitMetrics.incorrect} Incorrect
                          </span>
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 font-medium font-mono text-[10px] border border-slate-200 dark:border-slate-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                            {postSubmitMetrics.unanswered} Not Submitted
                          </span>
                        </div>

                        {/* Review Filters Toggle Group */}
                        <div className="flex items-center gap-1 bg-slate-50 dark:bg-slate-950 p-1 rounded-lg border border-slate-200/60 dark:border-slate-800 w-full md:w-auto">
                          <button
                            id="reviewFilterAll"
                            onClick={() => {
                              setReviewFilter("all");
                              setCurrentPage(1);
                            }}
                            className={`px-2.5 py-1 rounded text-[10px] font-bold transition-all cursor-pointer ${
                              reviewFilter === "all"
                                ? "bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 shadow-sm"
                                : "text-slate-400 hover:text-slate-600 dark:text-slate-550"
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
                                : "text-red-600 dark:text-red-450 hover:bg-red-500/10"
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
                                : "text-emerald-600 dark:text-emerald-450 hover:bg-emerald-500/10"
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
                        <div className="px-2.5 py-1 bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40 text-blue-700 dark:text-blue-300 font-mono text-xs font-bold rounded-lg">
                          {selectionCount} Staged / {totalInPool} Total
                        </div>
                        {selectionCount < totalInPool && (
                          <span className="text-[10px] text-amber-600 dark:text-amber-500 font-semibold hidden md:inline-flex items-center gap-1">
                            <AlertTriangle className="w-3 h-3 flex-shrink-0" />
                            Unanswered will be marked incorrect.
                          </span>
                        )}
                      </div>

                      <button
                        id="submitQuizBtn"
                        onClick={handleExecuteSubmission}
                        className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-lg shadow-sm hover:shadow transition duration-150 flex items-center gap-1.5 cursor-pointer"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Submit
                      </button>
                    </div>
                  )}
                </div>

                {/* 6. Search & Filters Block */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 md:p-8 shadow-sm">
                  <span className="block text-xs font-bold text-slate-400 dark:text-slate-550 uppercase tracking-wider mb-4 flex items-center gap-1.5">
                    <ListFilter className="w-4 h-4 text-blue-500" />
                    Search & Filters Block
                  </span>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="searchInput" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <Search className="w-3.5 h-3.5 text-slate-500" />
                        Search Question Keywords
                      </label>
                      <div className="relative">
                        <input
                          id="searchInput"
                          type="text"
                          value={searchQuery}
                          onChange={(e) => {
                            setSearchQuery(e.target.value);
                            setCurrentPage(1);
                          }}
                          placeholder="Type words, keys or options..."
                          className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 py-2.5 pl-9 pr-3 rounded-xl text-sm placeholder:text-slate-450 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition"
                        />
                        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="statusFilter" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <ListFilter className="w-3.5 h-3.5 text-slate-500" />
                        Verification Status Filter
                      </label>
                      <select
                        id="statusFilter"
                        value={statusFilter}
                        onChange={(e) => {
                          setStatusFilter(e.target.value);
                          setCurrentPage(1);
                        }}
                        className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 py-2.5 px-3 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition cursor-pointer"
                      >
                        <option value="all">All Questions ({totalInPool})</option>
                        <option value="answered">Staged Choices ({selectionCount})</option>
                        <option value="unanswered">Unanswered ({totalInPool - selectionCount})</option>
                        <option value="bookmarked">Bookmarked ({activeChapterBookmarksCount})</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* 7. Current Diagnostic Metrics Block */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 md:p-8 shadow-sm">
                  <span className="block text-xs font-bold text-slate-400 dark:text-slate-550 uppercase tracking-wider mb-4 flex items-center gap-1.5">
                    <Trophy className="w-4 h-4 text-blue-500" />
                    Current Diagnostic Metrics
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="bg-slate-50 dark:bg-slate-800/25 border border-slate-100 dark:border-slate-800/50 p-4 rounded-xl text-center">
                      <div className="text-2xl font-bold font-mono text-slate-800 dark:text-slate-100">{totalInPool}</div>
                      <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-tight mt-1">Total Pool</div>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-800/25 border border-slate-100 dark:border-slate-800/50 p-4 rounded-xl text-center">
                      <div className="text-2xl font-bold font-mono text-blue-600 dark:text-blue-400">{filteredCount}</div>
                      <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-tight mt-1">Filtered</div>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-800/25 border border-slate-100 dark:border-slate-800/50 p-4 rounded-xl text-center">
                      <div className="text-2xl font-bold font-mono text-indigo-600 dark:text-indigo-400">{selectionCount}</div>
                      <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-tight mt-1">Staged</div>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-800/25 border border-slate-100 dark:border-slate-800/50 p-4 rounded-xl text-center flex flex-col justify-center items-center">
                      {isQuizSubmitted ? (
                        <div className="text-2xl font-bold font-mono text-emerald-600 dark:text-emerald-400">{gradePercent}%</div>
                      ) : (
                        <div className="text-slate-400 font-medium text-xs flex items-center justify-center gap-1.5 h-8">
                           <Trophy className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                           Practicing
                        </div>
                      )}
                      <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-tight mt-1">Exam Grade</div>
                    </div>
                  </div>
                </div>

                {/* 8. Quiz Navigation Grid */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 md:p-8 shadow-sm">
                  <span className="block text-xs font-bold text-slate-400 dark:text-slate-550 uppercase tracking-wider mb-4 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <LayoutDashboard className="w-4 h-4 text-blue-500" />
                      Quiz Navigation Grid
                    </span>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-450">{filteredCount} of {totalInPool} displayed</span>
                  </span>
                  
                  {questions.length === 0 ? (
                    <div className="text-center text-xs text-slate-400 dark:text-slate-550 py-4">No questions loaded</div>
                  ) : (
                    <div className="grid grid-cols-5 sm:grid-cols-10 gap-2" id="questionNavMatrix">
                      {questions.map((q) => {
                        const isStaged = !!userSelections[q.id];
                        const isCorrect = userSelections[q.id] === q.answer;
                        const isFilteredOut = !filteredQuestions.some(fq => fq.id === q.id);

                        let btnClass = "bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800";
                        
                        if (isQuizSubmitted) {
                          if (isCorrect) {
                              btnClass = "bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 border-emerald-300 dark:border-emerald-800/50 hover:bg-emerald-100 dark:hover:bg-emerald-900/30";
                          } else if (isStaged) {
                              btnClass = "bg-red-50 dark:bg-red-950/20 text-red-700 dark:text-red-400 border-red-350 dark:border-red-900/40 hover:bg-red-100 dark:hover:bg-red-900/20";
                          } else {
                              btnClass = "bg-rose-50 dark:bg-rose-950/10 text-rose-700 dark:text-rose-400 border-rose-350 dark:border-rose-900/30 hover:bg-rose-100 dark:hover:bg-rose-900/10";
                          }
                        } else {
                          if (isStaged) {
                              btnClass = "bg-indigo-100 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border-indigo-400 dark:border-indigo-800 hover:bg-indigo-200 dark:hover:bg-indigo-900/40";
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
                            className={`p-1.5 text-xs font-bold font-mono text-center rounded-lg border transition duration-150 cursor-pointer ${btnClass}`}
                            title={`Go to Question #${q.id}`}
                          >
                            {q.id}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/60 flex flex-wrap gap-x-4 gap-y-1.5 text-[10px] text-slate-400 font-semibold">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 bg-indigo-100 dark:bg-indigo-950/40 border border-indigo-400 dark:border-indigo-800 rounded-sm"></span> Staged Selection
                    </span>
                    {isQuizSubmitted ? (
                      <>
                        <span className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 bg-emerald-100 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-800/50 rounded-sm"></span> Correct
                        </span>
                        <span className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 bg-red-100 dark:bg-red-955/20 border border-red-350 dark:border-red-900/40 rounded-sm"></span> Wrong Selection
                        </span>
                      </>
                    ) : (
                      <span className="italic font-normal text-slate-400 dark:text-slate-500">
                        Submit entire sheet above to view evaluation grades on this matrix.
                      </span>
                    )}
                  </div>
                </div>

            </motion.div>
          )}
        </AnimatePresence>
      </main>

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
    </div>
  );
}

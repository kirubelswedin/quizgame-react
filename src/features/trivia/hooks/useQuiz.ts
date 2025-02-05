import { INITIAL_STATE, DEFAULT_SETTINGS, TIMER_DURATION } from "@/features/trivia/constants";
import { QuizSettingsType } from "@/features/trivia/types";
import { useCallback, useEffect, useState } from "react";
import { useQuizFetch,useQuizState, useQuizTimer } from "@/features/trivia/hooks";
import { useHighScoreContext } from "@/features/trivia/context";


export const useQuiz = () => {
  // State Management
 const { questions, setQuestions, loading, setLoading, state, setState } = useQuizState();
 const { addHighScore } = useHighScoreContext();
 const fetchQuestions = useQuizFetch(setQuestions, setLoading);
 
 // Question Management
 const [questionStartTime, setQuestionStartTime] = useState<Date | null>(null);
 const [questionTimes, setQuestionTimes] = useState<number[]>([]);
 const [showHighScoreModal, setShowHighScoreModal] = useState(false);
 const [currentSettings, setCurrentSettings] = useState<QuizSettingsType>(DEFAULT_SETTINGS);

 useQuizTimer(state, loading, setState);

 const startQuizWithSettings = useCallback(async (settings: QuizSettingsType) => {
   setCurrentSettings(settings);
   setState(INITIAL_STATE);
   setQuestionTimes([]);
   await fetchQuestions(settings);
  }, [fetchQuestions, setState]);

  const startQuiz = useCallback(async () => {
   setState(INITIAL_STATE);
   setQuestionTimes([]);
   await fetchQuestions(DEFAULT_SETTINGS);
 }, [fetchQuestions, setState]);

 const startTimer = useCallback(() => {
  setState(prev => ({ ...prev, timerActive: true }));
  setQuestionStartTime(new Date());  // start timer for current question
  }, [setState]);

  const handleAnswerClick = useCallback((answer: string) => {
    // Logga timer state
    console.log('Timer state:', {
      timerActive: state.timerActive,
      timeLeft: state.timeLeft,
      questionStartTime: questionStartTime
    });
  
    // calculate time 
    let timeSpent = 0;
    if (state.timerActive) {
      timeSpent = (TIMER_DURATION - state.timeLeft) * 1000;
    } else {
      timeSpent = TIMER_DURATION * 1000;
    }
  
    // console.log('Time spent:', timeSpent);
    
    // Uppdate questionTimes
    setQuestionTimes(prev => [...prev, timeSpent]);

    const currentQuestion = questions[state.currentQuestion];
    const isCorrect = answer === currentQuestion.correct_answer;
    setState(prev => ({
      ...prev,
      timerActive: false,
      showFeedback: true,
      readyForNext: true,
      score: isCorrect ? prev.score + 1 : prev.score
    }));
  },   [state.timerActive, state.timeLeft, state.currentQuestion, questionStartTime, questions, setState]);

  const handleNextQuestion = useCallback(() => {
    if (state.currentQuestion < questions.length - 1) {
      setState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1,
        showFeedback: false,
        readyForNext: false,
        timeLeft: TIMER_DURATION,
        timerActive: true
      }));
      setQuestionStartTime(new Date()); // new start time for next question
    } else {
      setState(prev => ({ ...prev, showScore: true }));
    }
   }, [questions.length, setState, state.currentQuestion]);


const restartQuiz = useCallback(async () => {
  setState(INITIAL_STATE);
  setQuestionTimes([]);
  await startQuiz();
}, [setState, startQuiz]);

// manage high score wwhen game is over
useEffect(() => {
  if (state.showScore) {
    const totalActiveTime = questionTimes.reduce((sum, time) => sum + time, 0);
    const isHighScore = addHighScore({
      name: '', // users name
      score: state.score,
      totalTime: totalActiveTime,
      category: currentSettings.category,
      difficulty: currentSettings.difficulty,
      totalQuestions: questions.length,
      timestamp: new Date()
    });

    if (isHighScore) {
      setShowHighScoreModal(true);
    }
  }
}, [state.showScore, state.score, questionTimes, currentSettings, addHighScore, questions.length]);

const handleHighScoreSubmit = useCallback((name: string) => {
  const totalTime = questionTimes.reduce((sum, time) => sum + time, 0);
  // check name is not empty before saving 
  if (name.trim()) {
    addHighScore({
      name: name.trim(), 
      score: state.score,
      totalTime,
      category: currentSettings.category,
      difficulty: currentSettings.difficulty,
      totalQuestions: questions.length,
      timestamp: new Date()
    });
  }
  setShowHighScoreModal(false);
}, [questionTimes, addHighScore, state.score, currentSettings.category, currentSettings.difficulty, questions.length]);

return {
  questions,
  loading,
  state,
  handleAnswerClick,
  handleNextQuestion,
  startTimer,
  restartQuiz,
  startQuiz,
  startQuizWithSettings,
  showHighScoreModal,
  handleHighScoreSubmit,
  totalTime: questionTimes.reduce((sum: number, time: number) => sum + time, 0),
  currentSettings
  };
};
import { INITIAL_STATE, DEFAULT_SETTINGS, TIMER_DURATION } from "@/features/trivia/constants";
import { QuizSettingsType } from "@/features/trivia/types";
import { useCallback } from "react";
import { useQuizFetch,useQuizState, useQuizTimer } from "@/features/trivia/hooks";


export const useQuiz = () => {
 const { questions, setQuestions, loading, setLoading, state, setState } = useQuizState();
 const fetchQuestions = useQuizFetch(setQuestions, setLoading);
 useQuizTimer(state, loading, setState);

 const startQuizWithSettings = useCallback(async (settings: QuizSettingsType) => {
   setState(INITIAL_STATE);
   await fetchQuestions(settings);
 }, [fetchQuestions, setState]);

 const startQuiz = useCallback(async () => {
   setState(INITIAL_STATE);
   await fetchQuestions(DEFAULT_SETTINGS);
 }, [fetchQuestions, setState]);

 const handleAnswerClick = useCallback((answer: string) => {
   const currentQuestion = questions[state.currentQuestion];
   const isCorrect = answer === currentQuestion.correct_answer;
   setState(prev => ({
     ...prev,
     timerActive: false,
     showFeedback: true,
     readyForNext: true,
     score: isCorrect ? prev.score + 1 : prev.score
   }));
 }, [questions, state.currentQuestion, setState]);

 const handleNextQuestion = useCallback(() => {
   setState(prev => prev.currentQuestion < questions.length - 1
     ? {
         ...prev,
         currentQuestion: prev.currentQuestion + 1,
         showFeedback: false,
         readyForNext: false,
         timeLeft: TIMER_DURATION,
         timerActive: true
       }
     : { ...prev, showScore: true }
   );
 }, [questions.length, setState]);

 const startTimer = useCallback(() => {
   setState(prev => ({ ...prev, timerActive: true }));
 }, [setState]);

 const restartQuiz = useCallback(async () => {
   setState(INITIAL_STATE);
   await startQuiz();
 }, [setState, startQuiz]);

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
 };
};

export default useQuiz;
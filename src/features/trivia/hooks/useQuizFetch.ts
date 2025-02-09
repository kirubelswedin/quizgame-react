import { fetchQuizQuestions } from "@/features/trivia/api";
import { QuizSettingsType, SetLoading, SetQuestions } from "@/features/trivia/types";
import { useCallback } from "react";



export const useQuizFetch = (setQuestions: SetQuestions, setLoading: SetLoading) => {
  return useCallback(async (settings: QuizSettingsType) => {
    try {
      setLoading(true);
      const newQuestions = await fetchQuizQuestions(settings.totalQuestions, settings.difficulty, settings.category);
      setQuestions(newQuestions);
    } catch (error) {
      console.error("Failed to fetch questions:", error);
    } finally {
      setLoading(false);
    }
  }, [setQuestions, setLoading]);
};


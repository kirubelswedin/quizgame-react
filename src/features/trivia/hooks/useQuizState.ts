import { QuestionsState, QuizState } from "@/features/trivia/types";
import { useState } from "react";
import { INITIAL_STATE } from '@/features/trivia/constants';


export const useQuizState = () => {
  const [questions, setQuestions] = useState<QuestionsState[]>([]);
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState<QuizState>(INITIAL_STATE);
  
  return { questions, setQuestions, loading, setLoading, state, setState };
};


import { QuestionsState, QuizState } from "@/types";
import { useState } from "react";
import { INITIAL_STATE } from '@/constants/trivia/constants';


export const useQuizState = () => {
  const [questions, setQuestions] = useState<QuestionsState[]>([]);
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState<QuizState>(INITIAL_STATE);
  
  return { questions, setQuestions, loading, setLoading, state, setState };
};


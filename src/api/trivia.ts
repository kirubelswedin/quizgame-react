import { API_ENDPOINTS } from "./config";
import { Question, QuestionsState, Difficulty } from "./types";
import { shuffleArray } from "@/lib/utils";  

export const fetchQuizQuestions = async (
  amount: number, 
  difficulty: Difficulty
): Promise<QuestionsState[]> => {
  const endpoint = `${API_ENDPOINTS.QUIZ}?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  const data = await (await fetch(endpoint)).json();
  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
  }));
};
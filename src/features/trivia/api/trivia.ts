
import { Question, QuestionsState, Difficulty } from "@/features/trivia/types/quiz";
import { shuffleArray } from "@/features/trivia/utils/utils";
import { getCategoryIds } from "@/features/trivia/api";
import { API_ENDPOINTS } from "@/features/trivia/api";
import { getToken } from "@/features/trivia/api";


export const fetchQuizQuestions = async (
  amount: number,
  difficulty: Difficulty,
  category: string
): Promise<QuestionsState[]> => {
  const MAX_RETRIES = 3;
  const RETRY_DELAY = 1000;

  const fetchWithRetry = async (retryCount = 0): Promise<QuestionsState[]> => {
    try {
      const token = await getToken();
      // console.log('Using token:', token);
      const categories = await getCategoryIds();
      const categoryId = categories[category] || 0;

      // console.log('Selected category:', category);
      // console.log('Category ID:', categoryId);

      const categoryParam = categoryId ? `&category=${categoryId}` : "";

      const endpoint = `${API_ENDPOINTS.QUIZ}?amount=${amount}&difficulty=${difficulty}${categoryParam}&token=${token}&type=multiple`;
      
      const response = await fetch(endpoint);
      if (response.status === 429 && retryCount < MAX_RETRIES) {
        await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
        return fetchWithRetry(retryCount + 1);
      }

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      return data.results.map((question: Question) => ({
        ...question,
        answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
      }));
    } catch (error) {
      console.error('Error fetching quiz questions:', error);
      throw error;
    }
  };

  return fetchWithRetry();
};
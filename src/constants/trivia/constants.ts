import { QuizSettingsType, Difficulty, QuizState } from "@/types";

export const QUESTION_AMOUNTS = [5, 10, 15, 20] as const;

export const CATEGORIES = [
  "Any Category",
  "General Knowledge",
  "Books",
  "Film",
  "Music",
  "Musicals & Theatres",
  "Television",
  "Video Games",
  "Board Games",
  "Science & Nature",
  "Computers",
  "Mathematics",
  "Mythology",
  "Sports",
  "Geography",
  "History",
  "Politics",
  "Art",
  "Celebrities",
  "Animals",
  "Vehicles",
  "Comics",
  "Gadgets",
  "Japanese Anime & Manga",
  "Cartoon & Animations"
] as const;

export type Category = typeof CATEGORIES[number];

export const TIMER_DURATION = 10;

export const DEFAULT_SETTINGS: QuizSettingsType = {
 numberOfQuestions: 10,
 difficulty: Difficulty.MEDIUM,
 category: "Any Category"
} as const;

export const INITIAL_STATE: QuizState = {
 score: 0,
 currentQuestion: 0,
 timeLeft: TIMER_DURATION,
 showScore: false,
 showFeedback: false,
 timerActive: false,
 readyForNext: false,
};
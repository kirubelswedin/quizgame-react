import { QuizSettingsType, Difficulty, QuizState } from "@/features/trivia/types";

export const QUESTION_AMOUNTS = [5, 10, 15, 20] as const;

type CategoryMapping = {
  display: string;
  api: string;
};

export const CATEGORIES: CategoryMapping[] = [
  { display: "Any Category", api: "Any Category" },
  { display: "General Knowledge", api: "General Knowledge" },
  { display: "Books", api: "Entertainment: Books" },
  { display: "Film", api: "Entertainment: Film" },
  { display: "Music", api: "Entertainment: Music" },
  { display: "Musicals & Theatres", api: "Entertainment: Musicals & Theatres" },
  { display: "Television", api: "Entertainment: Television" },
  { display: "Video Games", api: "Entertainment: Video Games" },
  { display: "Board Games", api: "Entertainment: Board Games" },
  { display: "Science & Nature", api: "Science & Nature" },
  { display: "Computers", api: "Science: Computers" },
  { display: "Mathematics", api: "Science: Mathematics" },
  { display: "Mythology", api: "Mythology" },
  { display: "Sports", api: "Sports" },
  { display: "Geography", api: "Geography" },
  { display: "History", api: "History" },
  { display: "Politics", api: "Politics" },
  { display: "Art", api: "Art" },
  { display: "Celebrities", api: "Celebrities" },
  { display: "Animals", api: "Animals" },
  { display: "Vehicles", api: "Vehicles" },
  { display: "Comics", api: "Entertainment: Comics" },
  { display: "Gadgets", api: "Science: Gadgets" },
  { display: "Japanese Anime & Manga", api: "Entertainment: Japanese Anime & Manga" },
  { display: "Cartoon & Animations", api: "Entertainment: Cartoon & Animations" }
] as const;

export type Category = typeof CATEGORIES[number];

export const TIMER_DURATION = 10;

export const DEFAULT_SETTINGS: QuizSettingsType = {
 totalQuestions: 10,
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
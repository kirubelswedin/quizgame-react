
// Quiz API
export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestionsState = Question & { answers: string[] };



// Quiz Settings
export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard"
}

export interface QuizSettingsType {
  numberOfQuestions: number;
  difficulty: Difficulty;
  category: string;
}

export interface QuizSettingsProps {
  onStartQuiz: (settings: QuizSettingsType) => void;
}



// Component Props
export interface QuizAnswerProps {
  answer: string;
  isCorrect: boolean;
  showFeedback: boolean;
  timerActive: boolean;
  onAnswerClick: (answer: string) => void;
  correctAnswer: string;
}

export interface QuizHeaderProps {
  currentQuestion: number;
  totalQuestions: number;
  timeLeft: number;
}

export interface QuizQuestionProps {
  question: string;
  timerActive: boolean;
  showFeedback: boolean;
  readyForNext: boolean;
  onStartTimer: () => void;
  onNextQuestion: () => void;
}

export interface QuizScoreProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}


// State Management
export interface QuizState {
  score: number;
  currentQuestion: number;
  timeLeft: number;
  showScore: boolean;
  showFeedback: boolean;
  timerActive: boolean;
  readyForNext: boolean;
}

// state setters
export type SetQuestions = (questions: QuestionsState[]) => void;
export type SetLoading = (loading: boolean) => void;
export type SetState = (state: QuizState | ((prev: QuizState) => QuizState)) => void;

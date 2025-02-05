
// Quiz API
export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

// Quiz State
export type QuestionsState = Question & { answers: string[] };

// Quiz Settings
export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard"
}

export interface QuizSettingsType {
  category: string;
  difficulty: Difficulty;
  totalQuestions: number;
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
  category: string;
  difficulty: Difficulty;
  totalTime?: number;
  showHighScoreModal?: boolean;
  onHighScoreSubmit: (name: string) => void;
  onHighScoreSkip: () => void;
}

export interface HighScoreKey {
  category: string;
  difficulty: Difficulty;
  totalQuestions: number;
}

export interface HighScore {
  name: string;
  score: number;
  totalTime: number;
  category: string;
  difficulty: Difficulty;
  totalQuestions: number;
  timestamp: Date;
}

export interface HighScoreListProps {
	category: string;
	difficulty: Difficulty;
  totalQuestions: number;
}

export interface HighScoreContextType {
  highScores: {
    [key: string]: HighScore[];  // simple structure with composite key
  };
  addHighScore: (score: HighScore) => boolean; // returns true if score is in the top ten
  getTopTen: (category: string, difficulty: Difficulty) => HighScore[];
}

export interface HighScoreModalProps {
  score: number;
  totalTime: number;
  totalQuestions: number;
  onSubmit: (name: string) => void;
  onClose: () => void;
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

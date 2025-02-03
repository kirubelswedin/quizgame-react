import { QuizHeaderProps } from "@/types/trivia/quiz";
import "@/components/triviaQuiz/QuizHeader.css";

export const QuizHeader = ({
	currentQuestion,
	totalQuestions,
	timeLeft,
}: QuizHeaderProps) => (
	<div className="quiz-header">
		<div className="quiz-progress">
			Question {currentQuestion + 1}/{totalQuestions}
		</div>
		<div className="quiz-timer">Time left: {timeLeft}s</div>
	</div>
);

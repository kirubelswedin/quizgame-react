import { QuizHeaderProps } from "@/features/trivia/types/quiz";
import "@/features/trivia/components/QuizHeader.css";

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

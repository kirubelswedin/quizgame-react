import { QuizAnswerProps } from "@/features/trivia/types/quiz";
import "@/features/trivia/components/QuizAnswer.css";

export const QuizAnswer = ({
	answer,
	showFeedback,
	timerActive,
	onAnswerClick,
	correctAnswer,
}: QuizAnswerProps) => (
	<button
		onClick={() => onAnswerClick(answer)}
		className={`quiz-answer-btn ${timerActive || showFeedback ? "active" : ""} 
      ${showFeedback && (answer === correctAnswer ? "correct" : "incorrect")}`}
		disabled={!timerActive || showFeedback}
		dangerouslySetInnerHTML={{ __html: answer }}
	/>
);

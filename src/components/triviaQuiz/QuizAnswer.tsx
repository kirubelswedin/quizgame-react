import { QuizAnswerProps } from "@/types/trivia/quiz";
import "@/components/triviaQuiz/QuizAnswer.css";

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

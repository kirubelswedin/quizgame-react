import { QuizQuestionProps } from "@/features/trivia/types/quiz";
import "@/features/trivia/components/QuizQuestion.css";

export const QuizQuestion = ({
	question,
	timerActive,
	showFeedback,
	readyForNext,
	onStartTimer,
	onNextQuestion,
}: QuizQuestionProps) => (
	<div
		className={`quiz-question ${timerActive || showFeedback ? "active" : ""}`}
	>
		<h2 dangerouslySetInnerHTML={{ __html: question }}></h2>
		{!timerActive && !showFeedback && (
			<button className="start-timer-btn" onClick={onStartTimer}>
				Play Now
			</button>
		)}
		{readyForNext && (
			<button className="next-question-btn" onClick={onNextQuestion}>
				Next Question
			</button>
		)}
	</div>
);

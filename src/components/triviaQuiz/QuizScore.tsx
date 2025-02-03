import "@/components/triviaQuiz/triviaQuiz.css";
import { QuizScoreProps } from "@/types/trivia/quiz";

export const QuizScore = ({
	score,
	totalQuestions,
	onRestart,
}: QuizScoreProps) => (
	<div className="quiz-score-section">
		<h2>Game Over!</h2>
		<p>
			You scored {score} out of {totalQuestions}
		</p>
		<button className="quiz-restart-btn" onClick={onRestart}>
			Play Again
		</button>
	</div>
);

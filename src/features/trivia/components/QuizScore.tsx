import { QuizScoreProps } from "@/features/trivia/types/quiz";
import "@/features/trivia/components/QuizScore.css";

export const QuizScore = ({
	score,
	totalQuestions,
	onRestart,
}: QuizScoreProps) => (
	<div className=" quiz-score-section">
		<h2>Game Complete!</h2>
		<div className="score-display">
			<span className="final-score">
				Your Score: {score}/{totalQuestions}
			</span>
			<span className="score-percentage">
				({Math.round((score / totalQuestions) * 100)}%)
			</span>
		</div>
		<button className="quiz-btn-primary" onClick={onRestart}>
			Play Again
		</button>
	</div>
);

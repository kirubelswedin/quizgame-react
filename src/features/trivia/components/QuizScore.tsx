import { QuizScoreProps } from "@/features/trivia/types";
import { HighScoreList, HighScoreModal } from "@/features/trivia/components";
import "@/features/trivia/components/QuizScore.css";
import { useCallback, useState } from "react";

export const QuizScore = ({
	score,
	totalQuestions,
	onRestart,
	category,
	difficulty,
	totalTime,
	showHighScoreModal,
	onHighScoreSubmit,
	onHighScoreSkip,
}: QuizScoreProps) => {
	const [showScores, setShowScores] = useState(false);

	const handleSubmit = useCallback(
		(name: string) => {
			onHighScoreSubmit(name);
			setShowScores(true);
		},
		[onHighScoreSubmit]
	);

	const handleSkip = useCallback(() => {
		onHighScoreSkip();
		setShowScores(true);
	}, [onHighScoreSkip]);

	return (
		<div className="quiz-score-section">
			{showHighScoreModal && totalTime && (
				<HighScoreModal
					score={score}
					totalQuestions={totalQuestions}
					totalTime={totalTime}
					onSubmit={handleSubmit}
					onClose={handleSkip}
				/>
			)}

			{showScores && (
				<>
					<HighScoreList
						category={category}
						difficulty={difficulty}
						totalQuestions={totalQuestions}
					/>
					<button className="quiz-btn-primary" onClick={onRestart}>
						Play Again
					</button>
				</>
			)}
		</div>
	);
};

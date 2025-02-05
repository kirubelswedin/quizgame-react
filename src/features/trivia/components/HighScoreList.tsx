import { useHighScoreContext } from "@/features/trivia/context";
import { HighScoreListProps } from "@/features/trivia/types";
import { CATEGORIES } from "@/features/trivia/constants";
import "@/features/trivia/components/HighScoreList.css";

export const HighScoreList = ({
	category,
	difficulty,
	totalQuestions,
}: HighScoreListProps) => {
	const { getTopTen } = useHighScoreContext();
	const scores = getTopTen(category, difficulty);
	const displayCategory =
		CATEGORIES.find((cat) => cat.api === category)?.display || category;

	// console.log("Current scores:", scores);

	return (
		<div className="highscore-list">
			{/* Mobile info */}
			<h3 className="title">Top 10 Scores</h3>
			<div className="score-info-mobile">
				<div className="game-info">
					<span>
						Category: <span className="highlight">{displayCategory}</span>
					</span>
					<span>
						Difficulty: <span className="highlight">{difficulty}</span>
					</span>
					<span>
						Questions: <span className="highlight">{totalQuestions}</span>
					</span>
				</div>
			</div>

			<div className="score-table">
				<div className="score-header">
					<div className="rank">#</div>
					<div className="name">Name</div>
					<div className="score">Score</div>
					<div className="category desktop-only">Category</div>
					<div className="difficulty desktop-only">Difficulty</div>
					<div className="questions desktop-only">Q</div>
					<div className="time">Time</div>
				</div>
				{scores.map((score, index) => (
					<div key={index} className="score-row">
						<div className="rank">{index + 1}</div>
						<div className="name">{score.name}</div>
						<div className="score">
							{score.score}/{score.totalQuestions} (
							{Math.round((score.score / score.totalQuestions) * 100)}%)
						</div>
						<div className="category desktop-only">{displayCategory}</div>
						<div className="difficulty desktop-only">{difficulty}</div>
						<div className="questions desktop-only">{score.totalQuestions}</div>
						<div className="time">{(score.totalTime / 1000).toFixed(2)}s</div>
					</div>
				))}
			</div>
		</div>
	);
};

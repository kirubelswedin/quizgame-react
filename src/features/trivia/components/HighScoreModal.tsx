import { useState } from "react";
import { HighScoreModalProps } from "@/features/trivia/types/quiz";
import "@/features/trivia/components/HighScoreModal.css";

export const HighScoreModal = ({
	score,
	totalQuestions,
	totalTime,
	onSubmit,
	onClose,
}: HighScoreModalProps) => {
	const [name, setName] = useState("");

	return (
		<div className="modal-overlay">
			<div className="highscore-modal">
				<h2>New High Score!</h2>
				<div className="score-display">
					<span className="final-score">
						Score: {score}/{totalQuestions}
					</span>
					<span className="score-percentage">
						({Math.round((score / totalQuestions) * 100)}%)
					</span>
					{totalTime && (
						<span className="total-time">Time: {(totalTime / 1000).toFixed(2)}s</span>
					)}
				</div>
				<div className="input-section">
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder="Enter your name"
						maxLength={20}
						autoFocus
					/>
				</div>
				<div className="modal-buttons">
					<button
						className="submit-btn"
						onClick={() => onSubmit(name)}
						disabled={!name.trim()}
					>
						Submit
					</button>
					<button className="cancel-btn" onClick={onClose}>
						Skip
					</button>
				</div>
			</div>
		</div>
	);
};

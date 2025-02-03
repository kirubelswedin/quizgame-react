import { useState } from "react";
import {
	Difficulty,
	QuizSettingsType,
	QuizSettingsProps,
} from "@/features/trivia/types";
import { QUESTION_AMOUNTS, CATEGORIES } from "@/features/trivia/constants";
import "@/features/trivia/components/QuizSettings.css";

export const QuizSettings = ({ onStartQuiz }: QuizSettingsProps) => {
	const [settings, setSettings] = useState<QuizSettingsType>({
		numberOfQuestions: 10,
		difficulty: Difficulty.MEDIUM,
		category: "Any Category",
	});
	const [errorMessage, setErrorMessage] = useState<string>("");

	const handleStartQuiz = async () => {
		// console.log("Starting quiz with category:", settings.category);
		try {
			await onStartQuiz(settings);
		} catch (error) {
			setErrorMessage((error as Error).message);
		}
	};

	return (
		<div className="quiz-settings">
			<div className="settings-section">
				<h3>Category</h3>
				<div className="category-options">
					{CATEGORIES.map((category) => (
						<button
							key={category.api}
							className={`option-btn ${
								settings.category === category.api ? "selected" : ""
							}`}
							onClick={() => setSettings({ ...settings, category: category.api })}
						>
							{category.display}
						</button>
					))}
				</div>
			</div>

			<div className="settings-section game-options">
				<div className="options-group">
					<h3>Number of Questions</h3>
					<div className="number-options">
						{QUESTION_AMOUNTS.map((number) => (
							<button
								key={number}
								className={`option-btn ${
									settings.numberOfQuestions === number ? "selected" : ""
								}`}
								onClick={() => setSettings({ ...settings, numberOfQuestions: number })}
							>
								{number}
							</button>
						))}
					</div>
				</div>

				<div className="options-divider" />

				<div className="options-group">
					<h3>Difficulty</h3>
					<div className="difficulty-options">
						{Object.values(Difficulty).map((diff) => (
							<button
								key={diff}
								className={`option-btn ${
									settings.difficulty === diff ? "selected" : ""
								}`}
								onClick={() => setSettings({ ...settings, difficulty: diff })}
							>
								{diff.charAt(0).toUpperCase() + diff.slice(1)}
							</button>
						))}
					</div>
				</div>
				{errorMessage && <div className="error-message">{errorMessage}</div>}
			</div>

			<button className="start-quiz-btn" onClick={handleStartQuiz}>
				Start Quiz
			</button>
		</div>
	);
};

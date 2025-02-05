import {
	createContext,
	useContext,
	useState,
	ReactNode,
	useCallback,
	useMemo,
} from "react";
import {
	Difficulty,
	HighScore,
	HighScoreContextType,
} from "@/features/trivia/types";

const HighScoreContext = createContext<HighScoreContextType | undefined>(
	undefined
);

export const HighScoreProvider = ({ children }: { children: ReactNode }) => {
	const [highScores, setHighScores] = useState<
		HighScoreContextType["highScores"]
	>({});

	const createKey = useCallback((category: string, difficulty: Difficulty) => {
		return `${category}-${difficulty}`;
	}, []);

	const addHighScore = useCallback(
		(newScore: HighScore): boolean => {
			const key = createKey(
				newScore.category,
				newScore.difficulty
				// newScore.totalQuestions // to get the percentage result correctly:
			);

			setHighScores((prev) => {
				const currentScores = prev[key] || [];
				const combinedScores = [...currentScores, newScore]
					.filter((score) => score.name.trim() !== "")
					.sort((a, b) => {
						// sort by score percentage, then time, then timestamp
						const scorePercentA = (a.score / a.totalQuestions) * 100;
						const scorePercentB = (b.score / b.totalQuestions) * 100;

						if (scorePercentA !== scorePercentB) {
							return scorePercentB - scorePercentA; // highest percentage first
						}
						if (a.totalTime !== b.totalTime) {
							return a.totalTime - b.totalTime; // lowest time first
						}
						return b.timestamp.getTime() - a.timestamp.getTime(); // latest first
					});

				// keep only top 10
				const topTen = combinedScores.slice(0, 10);
				return {
					...prev,
					[key]: topTen,
				};
			});

			return true;
		},
		[createKey]
	);

	const getTopTen = useCallback(
		(category: string, difficulty: Difficulty): HighScore[] => {
			const key = createKey(category, difficulty);
			return highScores[key] || [];
		},
		[highScores, createKey]
	);

	const value = useMemo(
		() => ({
			highScores,
			addHighScore,
			getTopTen,
		}),
		[highScores, addHighScore, getTopTen]
	);

	return (
		<HighScoreContext.Provider value={value}>
			{children}
		</HighScoreContext.Provider>
	);
};

// eslint-disable-next-line react-refresh/only-export-components
export const useHighScoreContext = () => {
	const context = useContext(HighScoreContext);
	if (!context) {
		throw new Error(
			"useHighScoreContext must be used within a HighScoreProvider"
		);
	}
	return context;
};

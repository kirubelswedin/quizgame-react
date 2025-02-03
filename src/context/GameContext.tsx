import {
	createContext,
	ReactNode,
	useState,
	useContext,
	useCallback,
} from "react";
import { Game } from "@/config/GameRegistry";

interface GameSettings {
	difficulty?: string;
	questionsCount?: number;
	category?: string;
	[key: string]: unknown;
}

interface GameContextType {
	currentGame: Game | null;
	gameSettings: GameSettings;
	highscores: Record<number, number[]>;
	setCurrentGame: (game: Game | null) => void;
	setGameSettings: (settings: GameSettings) => void;
	saveHighscore: (gameId: number, score: number) => void;
	resetGame: () => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const useGame = () => {
	const context = useContext(GameContext);
	if (!context) {
		throw new Error("useGame must be used within a GameProvider");
	}
	return context;
};

export const GameProvider = ({ children }: { children: ReactNode }) => {
	const [currentGame, setCurrentGame] = useState<Game | null>(null);
	const [gameSettings, setGameSettings] = useState<GameSettings>({});
	// const [highscores, setHighscores] = useState<Record<number, number[]>>({});

	// const saveHighscore = useCallback((gameId: number, score: number) => {
	// 	setHighscores((prev) => {
	// 		const gameScores = [...(prev[gameId] || []), score]
	// 			.sort((a, b) => b - a)
	// 			.slice(0, 10);
	// 		return { ...prev, [gameId]: gameScores };
	// 	});
	// }, []);

	const resetGame = useCallback(() => {
		setCurrentGame(null);
		setGameSettings({});
	}, []);

	return (
		<GameContext.Provider
			value={{
				currentGame,
				gameSettings,
				// highscores,
				setCurrentGame,
				setGameSettings,
				// saveHighscore,
				resetGame,
			}}
		>
			{children}
		</GameContext.Provider>
	);
};

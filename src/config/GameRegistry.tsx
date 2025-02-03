import TriviaQuiz from "@/components/triviaQuiz/triviaQuiz";
import { ComingSoon } from "@/components/ui/ComingSoon";
import { ComponentType } from "react";
import { getAllGames } from "@/utils";

export enum GameCategory {
	QUIZ = "Quiz",
	PUZZLE = "Puzzle",
	ARCADE = "Arcade",
	STRATEGY = "Strategy",
	EDUCATIONAL = "Educational",
}

export interface Game {
	id: number;
	title: string;
	image: string;
	description: string;
	category: GameCategory;
}

export interface GameConfig {
	component: ComponentType;
	requiresAuth: boolean;
	hasSettings?: boolean;
	// hasHighscores?: boolean;
	difficulty?: {
		default: "easy" | "medium" | "hard";
		adjustable: boolean;
	};
}

export const GAME_REGISTRY: Record<number, Game & GameConfig> = {
	1: {
		id: 1,
		title: "Trivia Quiz",
		image: "/ReactGames.jpg",
		description: "Test your knowledge with random trivia questions!",
		category: GameCategory.QUIZ,
		component: TriviaQuiz,
		requiresAuth: false,
		hasSettings: true,
		// hasHighscores: true,
		difficulty: {
			default: "medium",
			adjustable: true,
		},
	},
	2: {
		id: 2,
		title: "Game 2",
		image: "/ReactGames.jpg",
		description: "Information about the game",
		category: GameCategory.PUZZLE,
		component: ComingSoon,
		requiresAuth: false,
	},
	3: {
		id: 3,
		title: "Game 3",
		image: "/ReactGames.jpg",
		description: "Information about the game",
		category: GameCategory.EDUCATIONAL,
		component: ComingSoon,
		requiresAuth: false,
	},
	4: {
		id: 4,
		title: "Game 4",
		image: "/ReactGames.jpg",
		description: "Information about the game",
		category: GameCategory.ARCADE,
		component: ComingSoon,
		requiresAuth: false,
	},
	5: {
		id: 5,
		title: "Game 5",
		image: "/ReactGames.jpg",
		description: "Information about the game",
		category: GameCategory.STRATEGY,
		component: ComingSoon,
		requiresAuth: false,
	},
	6: {
		id: 6,
		title: "Game 6",
		image: "/ReactGames.jpg",
		description: "Information about the game",
		category: GameCategory.QUIZ,
		component: ComingSoon,
		requiresAuth: false,
	},
	7: {
		id: 7,
		title: "Game 7",
		image: "/ReactGames.jpg",
		description: "Information about the game",
		category: GameCategory.PUZZLE,
		component: ComingSoon,
		requiresAuth: false,
	},
	8: {
		id: 8,
		title: "Game 8",
		image: "/ReactGames.jpg",
		description: "Information about the game",
		category: GameCategory.EDUCATIONAL,
		component: ComingSoon,
		requiresAuth: false,
	},
	9: {
		id: 9,
		title: "Game 9",
		image: "/ReactGames.jpg",
		description: "Information about the game",
		category: GameCategory.ARCADE,
		component: ComingSoon,
		requiresAuth: false,
	},
	10: {
		id: 10,
		title: "Game 10",
		image: "/ReactGames.jpg",
		description: "Information about the game",
		category: GameCategory.STRATEGY,
		component: ComingSoon,
		requiresAuth: false,
	},
	11: {
		id: 11,
		title: "Game 11",
		image: "/ReactGames.jpg",
		description: "Information about the game",
		category: GameCategory.QUIZ,
		component: ComingSoon,
		requiresAuth: false,
	},
	12: {
		id: 12,
		title: "Game 12",
		image: "/ReactGames.jpg",
		description: "Information about the game",
		category: GameCategory.PUZZLE,
		component: ComingSoon,
		requiresAuth: false,
	},
};

// Helper funktioner
export const getGamesByCategory = (category: GameCategory): Game[] =>
	getAllGames().filter((game) => game.category === category);

export const getAvailableGames = (): Game[] =>
	getAllGames().filter(
		(game) => GAME_REGISTRY[game.id].component !== ComingSoon
	);

// export const getFeaturedGames = (): Game[] =>
// 	getAllGames().filter((game) => GAME_REGISTRY[game.id].hasHighscores);

export const isGamePlayable = (id: number): boolean =>
	GAME_REGISTRY[id]?.component !== ComingSoon;

export const getGame = (id: number) => GAME_REGISTRY[id];

export const getGameComponent = (id: number) => GAME_REGISTRY[id]?.component;

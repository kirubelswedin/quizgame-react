import { useParams } from "react-router-dom";
import { useGame } from "@/features/games/context/GameContext";
import { getGame, getGameComponent } from "@/features/games/utils/gameUtils";
import { GameLayout } from "@/layouts/GameLayout";
import LoginPanel from "@/components/ui/LoginPanel";
import { useEffect, useState } from "react";
import GamePreview from "@/features/games/components/GamePreview";
import "@/pages/gamePage.css";

const GamePage = () => {
	const { id } = useParams<{ id: string }>();
	const gameId = Number(id);
	const game = getGame(gameId);
	const GameComponent = getGameComponent(gameId);

	const [isPlaying, setIsPlaying] = useState(false);
	const [isLoginOpen, setIsLoginOpen] = useState(false);

	const { setCurrentGame } = useGame();

	useEffect(() => {
		if (game) {
			setCurrentGame(game);
		}

		return () => setCurrentGame(null);
	}, [game, setCurrentGame]);

	if (!game) {
		return (
			<GameLayout title="Error" onLogin={() => setIsLoginOpen(true)}>
				<div className="game-error">
					<h2>Game Not Found</h2>
					<p>Sorry, we couldn't find the game you're looking for.</p>
				</div>
			</GameLayout>
		);
	}

	return (
		<GameLayout onLogin={() => setIsLoginOpen(true)} title={game.title}>
			{!isPlaying ? (
				<GamePreview
					image={game.image}
					title={game.title}
					description={game.description}
					onPlay={() => setIsPlaying(true)}
				/>
			) : (
				<GameComponent />
			)}

			<LoginPanel isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
		</GameLayout>
	);
};

export default GamePage;

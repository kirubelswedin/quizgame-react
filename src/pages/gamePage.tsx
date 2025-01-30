import { useParams } from "react-router-dom";
import { gamesData } from "@/lib/games";
import TriviaQuiz from "@/components/triviaQuiz";
import GameTemplate from "@/components/gameTemplate";
import LoginPanel from "@/components/LoginPanel";
import { useState } from "react";
import "@/pages/gamePage.css";

const GamePage = () => {
	const { id } = useParams();
	const game = gamesData.find((g) => g.id === Number(id));
	const [isPlaying, setIsPlaying] = useState(false);
	const [isLoginOpen, setIsLoginOpen] = useState(false);

	if (!game) {
		return (
			<div className="game-page">
				<div className="game-error">
					<h2>Game Not Found</h2>
					<p>Sorry, we couldn't find the game you're looking for.</p>
				</div>
			</div>
		);
	}

	const renderGameContent = () => {
		if (!isPlaying) {
			return (
				<>
					{/* Preview Game */}
					<div className="game-preview__image">
						<img
							src={game.image}
							alt={game.title}
							style={{ width: "100%", height: "auto" }}
						/>
					</div>
					<h1>{game.title}</h1>
					<p className="game-description">{game.description}</p>
					<button className="play-now-btn" onClick={() => setIsPlaying(true)}>
						Play Now <span>▶</span>
					</button>
				</>
			);
		}

		return (
			<div className="game-area">
				{game.id === 1 ? (
					<TriviaQuiz />
				) : (
					<div className="game-placeholder">
						<div className="placeholder-content">
							<img
								src={game.image}
								alt={game.title}
								style={{ width: "100%", height: "auto" }}
							/>
							<div className="placeholder-text">
								<h2>Coming Soon!</h2>
								<p>This game is currently in development.</p>
								<p>Stay tuned for updates!</p>
							</div>
						</div>
					</div>
				)}
			</div>
		);
	};

	return (
		<div className="game-page">
			<div className="game-container">
				<GameTemplate
					title={game.title}
					description={game.description}
					onLoginClick={() => setIsLoginOpen(true)}
				>
					{renderGameContent()}
				</GameTemplate>
				<LoginPanel isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
			</div>
		</div>
	);
};

export default GamePage;

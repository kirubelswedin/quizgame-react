// GameCard.tsx
import { useNavigate } from "react-router-dom";
import GameImage from "@/features/games/components/GameImage";
import "@/features/games/components/GameCard.css";

interface GameCardProps {
	id: number;
	title: string;
	image: string;
	description: string;
}

const GameCard = ({ id, title, image, description }: GameCardProps) => {
	const navigate = useNavigate();

	return (
		<div className="game-card" onClick={() => navigate(`/GamePage/${id}`)}>
			<div className="game-card-image">
				<GameImage
					src={image}
					alt={title}
					style={{ width: "100%", height: "100%", objectFit: "cover" }}
				/>
			</div>
			<div className="game-card-overlay">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default GameCard;

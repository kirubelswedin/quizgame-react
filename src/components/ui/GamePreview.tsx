import GameImage from "@/components/ui/GameImage";
import "@/components/ui/GamePreview.css";

interface GamePreviewProps {
	title: string;
	description: string;
	image: string;
	onPlay: () => void;
}

const GamePreview = ({
	title,
	description,
	image,
	onPlay,
}: GamePreviewProps) => {
	return (
		<div className="game-preview__content">
			<div className="game-preview__image">
				<GameImage src={image} alt={title} />
			</div>
			<h1>{title}</h1>
			<p className="game-description">{description}</p>
			<button className="play-now-btn" onClick={onPlay}>
				Play Now <span>▶</span>
			</button>
		</div>
	);
};

export default GamePreview;

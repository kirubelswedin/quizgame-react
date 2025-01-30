import { RiThumbDownLine, RiThumbUpLine } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { ReactNode } from "react";

interface GameTemplateProps {
	title: string;
	description: string;
	children: ReactNode;
	onLoginClick: () => void;
}

const GameTemplate = ({ title, children, onLoginClick }: GameTemplateProps) => {
	return (
		<div className="game-preview">
			{/* Banner */}
			<div className="game-banner">
				<p>
					Don't lose your progress!
					<button className="login-now-btn" onClick={onLoginClick}>
						Log in now
					</button>
				</p>
			</div>

			{/* Game Content */}
			{children}

			{/* Footer */}
			<div className="game-footer__content">
				<h2>{title}</h2>
				<div className="game-stats">
					<div className="stats-item">
						<RiThumbUpLine className="stats-icon" size={24} />
						<span>131K</span>
					</div>
					<div className="stats-item">
						<RiThumbDownLine className="stats-icon" size={24} />
						<span>35K</span>
					</div>
					<div className="stats-item">
						<AiOutlineHeart className="stats-icon" size={24} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default GameTemplate;

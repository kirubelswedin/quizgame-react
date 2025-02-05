import { ReactNode } from "react";
import { RiThumbDownLine, RiThumbUpLine } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import "@/layouts/GameLayout.css";

interface GameLayoutProps {
	children: ReactNode;
	title: string;
	description?: string;
	image?: string;
	onLogin: () => void;
	onPlay?: () => void;
}

export const GameLayout = ({ onLogin, children, title }: GameLayoutProps) => {
	return (
		<div className="game-layout">
			{/* Banner */}
			<div className="login-banner">
				<p>
					Don't lose your progress!{" "}
					<button className="login-btn" onClick={onLogin}>
						Log in now
					</button>
				</p>
			</div>

			{/* Game Content */}
			{children}

			{/* Footer */}
			<div className="game-footer-content">
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

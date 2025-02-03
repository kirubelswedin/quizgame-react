import { useState } from "react";
import { GoogleIcon, FacebookIcon } from "@/components/icons/iconsSVG";
import "@/components/ui/LoginPanel.css";

interface LoginPanelProps {
	isOpen: boolean;
	onClose: () => void;
}

const LoginPanel = ({ isOpen, onClose }: LoginPanelProps) => {
	const [email, setEmail] = useState("");

	return (
		<div className={`login-panel ${isOpen ? "open" : ""}`}>
			<div className="login-panel-content">
				<button className="close-button" onClick={onClose}>
					✕
				</button>

				<h2>Log in or sign up</h2>

				<button className="google-button">
					<GoogleIcon />
					Continue with Google
				</button>
				<button className="facebook-button">
					<FacebookIcon />
					Continue with Facebook
				</button>

				<div className="divider">
					<span>OR</span>
				</div>

				<input
					type="email"
					placeholder="Enter your email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>

				<button className="continue-button">Continue</button>
			</div>
		</div>
	);
};

export default LoginPanel;

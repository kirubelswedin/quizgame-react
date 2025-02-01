import { NavLink } from "react-router-dom";
import { useState } from "react";
import LoginPanel from "@/components/LoginPanel";
import { FaUserFriends } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { RiSearchLine } from "react-icons/ri";
import "@/components/header.css";

const Header = () => {
	const [isLoginOpen, setIsLoginOpen] = useState(false);

	return (
		<>
			<header className="header">
				<nav className="nav">
					<div className="nav-left">
						<NavLink to="/" className="logo">
							<span>ReactGames</span>
						</NavLink>
					</div>

					<div className="nav-middle">
						<div className="search-bar">
							<input type="text" placeholder="Search" />
							<button className="search-button">
								<RiSearchLine size={20} color="#abadbf" />
							</button>
						</div>
					</div>

					<div className="nav-right">
						<button className="nav-button__icons">
							<FaUserFriends className="info-icon" size={24} />
						</button>

						<button className="nav-button__icons">
							<AiOutlineHeart className="info-icon" size={24} />
						</button>

						<button
							className="nav-button__login"
							onClick={() => setIsLoginOpen(true)}
						>
							Log in
						</button>
					</div>
				</nav>
			</header>

			<LoginPanel isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
		</>
	);
};

export default Header;

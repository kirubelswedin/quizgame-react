import { NavLink } from "react-router-dom";
import "@/components/header.css";

const Header = () => {
	return (
		<header className="header">
			<nav className="nav">
				<NavLink to="/" className="logo">
					My App
				</NavLink>
				<div className="nav-links">
					<NavLink
						to="/"
						className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
					>
						Home Page
					</NavLink>
					<NavLink
						to="/SecondPage"
						className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
					>
						Second Page
					</NavLink>
				</div>
			</nav>
		</header>
	);
};

export default Header;

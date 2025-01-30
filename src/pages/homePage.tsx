import { useNavigate } from "react-router-dom";
import { gamesData } from "@/lib/games";
import { IoGameControllerOutline } from "react-icons/io5";
import { RxRocket } from "react-icons/rx";
import { MdImportantDevices } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import "@/pages/homePage.css";

const HomePage = () => {
	const navigate = useNavigate();

	return (
		<div className="home-page">
			<section className="info-section">
				<div className="info-content">
					<div className="info-item">
						<IoGameControllerOutline
							className="info-icon"
							color="#7359FF"
							size={24}
						/>
						<p>4000+ games</p>
					</div>

					<div className="info-item">
						<RxRocket className="info-icon" color="#7359FF" size={24} />
						<p>No install needed</p>
					</div>
					<div className="info-item hide-on-mobile">
						<MdImportantDevices className="info-icon" color="#7359FF" size={24} />
						<p>On any device</p>
					</div>
					<div className="info-item">
						<FaUserFriends className="info-icon" color="#7359FF" size={24} />
						<p>Play with friends</p>
					</div>
					<div className="info-item hide-on-mobile">
						<BsStars className="info-icon" color="#7359FF" size={24} />
						<p>all for free</p>
					</div>
				</div>
			</section>

			<section className="games-section">
				<h2>Popular Games</h2>
				<div className="games-grid">
					{gamesData.map((game) => (
						<div
							key={game.id}
							className="game-card"
							onClick={() => navigate(`/GamePage/${game.id}`)}
						>
							<img
								src={game.image}
								alt={game.title}
								style={{ width: "100%", height: "auto" }}
								className="game-card"
							/>
							<div className="game-card-content">
								<h3>{game.title}</h3>
								<p>{game.description}</p>
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	);
};

export default HomePage;

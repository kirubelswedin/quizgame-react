import Carousel from "@/components/ui/Carousel";
import InfoSection from "@/components/ui/InfoSection";
import { getAllGames } from "@/features/games/utils/gameUtils";
import "@/pages/homePage.css";

const HomePage = () => {
	const games = getAllGames();

	return (
		<div className="home-page">
			<InfoSection />
			<section className="games-section">
				<h2>Popular Games</h2>
				<Carousel games={games} />
			</section>
		</div>
	);
};

export default HomePage;

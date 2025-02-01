import Carousel from "@/components/Carousel";
import InfoSection from "@/components/InfoSection";
import { gamesData } from "@/lib/Data";
import "@/pages/HomePage.css";

const HomePage = () => {
	return (
		<div className="home-page">
			<InfoSection />
			<section className="games-section">
				<h2>Popular Games</h2>
				<Carousel games={gamesData} />
			</section>
		</div>
	);
};

export default HomePage;

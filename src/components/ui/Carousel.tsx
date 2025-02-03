// Carousel.tsx
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import GameCard from "@/components/ui/GameCard";
import { Game } from "@/types/game";
import "@/components/ui/Carousel.css";

type ScrollDirection = "left" | "right";

interface CarouselProps {
	games: Game[];
}

const Carousel = ({ games }: CarouselProps) => {
	const handleScroll = (direction: ScrollDirection) => {
		const container = document.querySelector(".games-scroll-container");
		const card = document.querySelector(".game-card") as HTMLElement | null;

		if (!container || !card) return;

		const cardWidth = card.offsetWidth;
		const newScrollPosition =
			(container as HTMLElement).scrollLeft +
			(direction === "left" ? -cardWidth : cardWidth);

		container.scrollTo({
			left: newScrollPosition,
			behavior: "smooth",
		});
	};

	return (
		<div className="carousel-container">
			<button className="scroll-button left" onClick={() => handleScroll("left")}>
				<BsChevronLeft size={34} />
			</button>

			<div className="games-scroll-container">
				{games.map((game) => (
					<GameCard
						key={game.id}
						id={game.id}
						title={game.title}
						image={game.image}
						description={game.description}
					/>
				))}
			</div>

			<button
				className="scroll-button right"
				onClick={() => handleScroll("right")}
			>
				<BsChevronRight size={34} />
			</button>
		</div>
	);
};

export default Carousel;

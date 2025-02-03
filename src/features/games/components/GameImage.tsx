import { CSSProperties } from "react";

interface GameImageProps {
	src: string;
	alt: string;
	style?: CSSProperties;
}

const GameImage = ({ src, alt }: GameImageProps) => (
	<img
		src={src}
		alt={alt}
		style={{ width: "100%", height: "100%", objectFit: "cover" }}
	/>
);

export default GameImage;

import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "@/layouts/starsWrapper.css";

export const StarsWrapper = () => {
	return (
		<div className="stars-wrapper">
			<Canvas>
				<Stars radius={50} depth={50} count={2500} factor={4} fade speed={2} />
			</Canvas>
		</div>
	);
};

export default StarsWrapper;

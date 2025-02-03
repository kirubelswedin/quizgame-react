// InfoSection.tsx
import { IoGameControllerOutline } from "react-icons/io5";
import { RxRocket } from "react-icons/rx";
import { MdImportantDevices } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import "@/components/ui/InfoSection.css";

const InfoSection = () => {
	return (
		<section className="info-section">
			<div className="info-content">
				<div className="info-item">
					<IoGameControllerOutline className="info-icon" color="#7359FF" size={24} />
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
	);
};

export default InfoSection;

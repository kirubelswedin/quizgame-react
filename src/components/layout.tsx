import { PropsWithChildren } from "react";
import Header from "@/components/header";

const Layout = ({ children }: PropsWithChildren) => {
	return (
		<div className="layout">
			<Header />
			<main>{children}</main>
			<footer>
				<div>
					<p>&copy; 2025 Min App. Alla rättigheter förbehållna.</p>
				</div>
			</footer>
		</div>
	);
};

export default Layout;

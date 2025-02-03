import { ReactNode } from "react";
import Header from "@/layouts/header";
import Footer from "@/layouts/footer";
import StarsWrapper from "@/layouts/starsWrapper";

interface LayoutProps {
	children: ReactNode;
	className?: string;
}

function LayoutContent({ children, className }: LayoutProps) {
	return (
		<div className="layout">
			{/* <ThemeSwitch /> */}
			<StarsWrapper />
			<Header />
			<main className={className}>{children}</main>
			<Footer />
		</div>
	);
}

export default function Layout(props: LayoutProps) {
	return <LayoutContent {...props} />;
}

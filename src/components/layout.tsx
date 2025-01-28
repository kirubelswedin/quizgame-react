import { ReactNode } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import StarsWrapper from "./starsWrapper";

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

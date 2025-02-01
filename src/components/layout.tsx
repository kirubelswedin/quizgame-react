import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StarsWrapper from "@/components/StarsWrapper";

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

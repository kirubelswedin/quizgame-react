import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "@/components/layout";
import HomePage from "@/pages/homePage";
import GamePage from "@/pages/gamePage";
import "@/styles/mediaqueries.css";
import "@/App.css";

function App() {
	return (
		<BrowserRouter>
			<Layout className="main-content">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/GamePage/:id" element={<GamePage />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

export default App;

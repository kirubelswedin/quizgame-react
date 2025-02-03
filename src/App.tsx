import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "@/layouts/layout";
import HomePage from "@/pages/homePage";
import GamePage from "@/pages/gamePage";
import "@/styles/mediaqueries.css";
import "@/App.css";
import { GameProvider } from "./context/GameContext";

function App() {
	return (
		<BrowserRouter>
			<GameProvider>
				<Layout className="main-content">
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/GamePage/:id" element={<GamePage />} />
					</Routes>
				</Layout>
			</GameProvider>
		</BrowserRouter>
	);
}

export default App;

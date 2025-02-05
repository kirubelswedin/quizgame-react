import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "@/layouts/layout";
import HomePage from "@/pages/homePage";
import GamePage from "@/pages/gamePage";
import { GameProvider } from "@/features/games/context/GameContext";
import { HighScoreProvider } from "./features/trivia/context";
import "@/styles/mediaqueries.css";
import "@/App.css";

function App() {
	return (
		<BrowserRouter>
			<GameProvider>
				<HighScoreProvider>
					<Layout className="main-content">
						<Routes>
							<Route path="/" element={<HomePage />} />
							<Route path="/GamePage/:id" element={<GamePage />} />
						</Routes>
					</Layout>
				</HighScoreProvider>
			</GameProvider>
		</BrowserRouter>
	);
}

export default App;

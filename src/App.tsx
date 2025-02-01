import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "@/components/Layout";
import HomePage from "@/pages/HomePage";
import GamePage from "@/pages/GamePage";
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

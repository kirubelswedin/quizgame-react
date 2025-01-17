import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "@/components/layout";
import HomePage from "@/pages/homePage";
import "@/App.css";
import SecondPage from "@/pages/secondPage";

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/SecondPage" element={<SecondPage />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

export default App;

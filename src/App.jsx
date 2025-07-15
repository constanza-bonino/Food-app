import "./App.css";
import { Routes, Route } from "react-router-dom";
import FoodInfo from "./pages/FoodInfo.jsx";
import WelcomePage from "./pages/WelcomePage.jsx";

function App() {
	return (
		<Routes>
			<Route path="/*" element={<WelcomePage />} />
			<Route path="/foods/:foodId" element={<FoodInfo />} />
		</Routes>
	);
}
export default App;

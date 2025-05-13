import "./App.css";
import FoodDetail from "./components/FoodDetail/FoodDetail.jsx";
import Home from "./components/Home/Home.jsx";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
	return (
		<Routes>
			<Route path="/*" element={<Home />} />
			<Route path="/food/:id" element={<FoodDetail />} />
		</Routes>
	);
}
export default App;

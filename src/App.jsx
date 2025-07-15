import "./App.css";
import { Routes, Route } from "react-router-dom";
import FoodInfo from "./pages/FoodInfo.jsx";
import WelcomePage from "./pages/WelcomePage.jsx";

function App() {
	return (
<<<<<<< HEAD
		<Routes>
			<Route path="/*" element={<WelcomePage />} />
			<Route path="/foods/:foodId" element={<FoodInfo />} />
		</Routes>
=======
		<div className="app">
			<div className="header">
				<h1 className="encabezado">Food App</h1>
				<button className="toggle_theme_button" onClick={toggleTheme}>
					{darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
				</button>
			</div>
			<div className="contenedor">
				<FoodTable onClickFood={onFoodClickHandler} foods={foods} />
				<SideBar onClickCross={onClickRemoveHandler} foods={foods} />
			</div>
		</div>
>>>>>>> d7ade7d6845311b24020d313e21de5f78f74e67f
	);
}
export default App;

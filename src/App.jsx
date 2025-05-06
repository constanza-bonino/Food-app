import { useState, useEffect } from "react";
import "./App.css";
import FoodTable from "./components/FoodTable/FoodTable.jsx";
import { SideBar } from "./components/SideBar/SideBar.jsx";
import { useTheme } from "./context/ThemeContext";

function App() {
	const [foods, setFoods] = useState([]);
	const { darkMode, toggleTheme } = useTheme();

	useEffect(() => {
		const fetchFoods = async () => {
			try {
				const url = "http://localhost:3000/foods";
				const response = await fetch(url);

				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				const data = await response.json();
				setFoods(data);

				console.log("Resposnse: ", data);
			} catch (error) {
				console.log(error);
			}
		};

		fetchFoods();
	}, []);

	function onFoodClickHandler(food_id) {
		let clonedFoods = [...foods];
		clonedFoods.forEach((food) => {
			if (food.id === food_id && food.stock > 0) {
				food.stock = food.stock - 1;
				food.quantity = food.quantity + 1;
			}
		});
		setFoods(clonedFoods);
	}

	function onClickRemoveHandler(food_id) {
		let clonedFoods = [...foods];
		clonedFoods.forEach((food) => {
			if (food.id === food_id) {
				food.stock = food.quantity;
				food.quantity = 0;
			}
		});
		setFoods(clonedFoods);
	}

	return (
		<div className={darkMode ? "app dark_mode" : "app light_mode"}>
			<button onChange={toggleTheme}>adwa</button>
			{/* <button onClick={onFoodClickHandler}>button</button> */}
			<h1 className="encabezado">Food App</h1>
			<div className="contenedor">
				<FoodTable onClickFood={onFoodClickHandler} foods={foods} />
				<SideBar onClickCross={onClickRemoveHandler} foods={foods} />
			</div>
		</div>
	);
}
export default App;

import React from "react";
import FoodProduct from "../FoodProduct/FoodProduct";
import "./FoodTable.css";

function FoodTable(props) {
	const foods = [
		{ name: "Hamburguesa" },
		{ name: "Pancho" },
		{ name: "Pizza" },
		{ name: "Empanada" },
		{ name: "Asado" },
		{ name: "Empanada" },
		{ name: "Asado" },
		{ name: "Empanada" },
		{ name: "Asado" },
		{ name: "Ensalada" },
	];

	return (
		<div className="food_table">
			{foods.map((food) => (
				<FoodProduct key={food.name} name={food.name}></FoodProduct>
			))}
		</div>
	);
}

export default FoodTable;

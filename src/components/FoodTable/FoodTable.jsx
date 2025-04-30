import React from "react";
import FoodProduct from "../FoodProduct/FoodProduct";
import "./FoodTable.css";

function FoodTable(props) {
	return (
		<div className="food_table">
			{props.foods.map((food) => (
				<FoodProduct
					key={food.name}
					food={food}
					onClickFood={props.onClickFood}
				></FoodProduct>
			))}
		</div>
	);
}

export default FoodTable;

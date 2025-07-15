import React from "react";
import FoodProduct from "../FoodProduct/FoodProduct";
import "./FoodTable.css";

function FoodTable(props) {
	console.log(props.foods);
	return (
		<div className="food_table">
            {props.foods.map((food, idx) => (
				<FoodProduct
					key={idx}
					food={food}
					onClickFood={props.onClickFood}
				></FoodProduct>
			))}
        </div>
	);
}

export default FoodTable;

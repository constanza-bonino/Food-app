import React from "react";
import "./FoodProduct.css";
function FoodProduct(props) {
	return (
		<div className="food_item">
			<p>{props.name}</p>
		</div>
	);
}

export default FoodProduct;

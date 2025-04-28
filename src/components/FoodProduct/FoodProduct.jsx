import React from "react";
import "./FoodProduct.css";
function FoodProduct(props) {
	const foodCountComponent = () => {
		if (props.food.quantity > 0) {
			return <span className="food_quantity">{props.food.quantity}</span>;
		}
	};

	return (
		<div className="food_item">
			<img
				className="food_thumbnail"
				src={props.food.thumbnail_url}
			></img>
			<p>{props.food.name}</p>
			<div className="food_product_info">
				<span>${props.food.price}</span>
				{foodCountComponent()}
			</div>
		</div>
	);
}

export default FoodProduct;

import React from "react";
import "./FoodProduct.css";
function FoodProduct(props) {
	return (
		<div
			className="food_item"
			disabled={props.food.stock <= 0}
			onClick={() => {
				props.onClickFood(props.food.id);
			}}
		>
			<img
				className="food_thumbnail"
				src={props.food.thumbnail_url}
			></img>
			<p>{props.food.name}</p>
			<div className="food_product_info">
				<span>${props.food.price}</span>
				<span className="food_stock">{props.food.stock}</span>
			</div>
		</div>
	);
}

export default FoodProduct;

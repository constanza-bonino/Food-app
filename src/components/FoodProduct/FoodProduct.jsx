import React from "react";
import "./FoodProduct.css";

import { Link } from "react-router-dom";

function FoodProduct(props) {
	return (
		<div className="food_container" disabled={props.food.stock <= 0}>
			<div
				className="food_item"
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
			<Link to={`/food/${props.food.id}`} className="link">
				More details...
			</Link>
		</div>
	);
}

export default FoodProduct;

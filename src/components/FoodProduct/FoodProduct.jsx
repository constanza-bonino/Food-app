import { Link } from "react-router-dom";
import React from "react";
import "./FoodProduct.css";
function FoodProduct(props) {
	return (
		<div
			className="food_item"
			disabled={props.food.stock <= 0}
		>
			<img
				className="food_thumbnail"
				src={props.food.thumbnail_url}
			></img>
			<p>{props.food.name}</p>
			<div className="food_product_info">
				<span>${props.food.price}</span>
				<button onClick={() => {
					props.onClickFood(props.food.id);
				}}
				style={{color: "#333"}}>Agregar</button>
				<Link to={"food/" + props.food.id}> Info </Link>
				<span className="food_stock">{props.food.stock}</span>
			</div>
		</div>
	);
}

export default FoodProduct;

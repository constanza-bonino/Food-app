import React from "react";
import "./OrderItem.css";

function OrderItem(props) {
	function getSubtotal() {
		return props.food.quantity * props.food.price;
	}
	return (
		<>
			<td>{props.food.name}</td>
			<td>{props.food.price}</td>
			<td>{props.food.quantity}</td>
			<td>${getSubtotal()}</td>
		</>
	);
}

export default OrderItem;

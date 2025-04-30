import React from "react";
import "./Order.css";
import { OrderItem } from "../OrderItem/OrderItem.jsx";

export function Order({ foods }) {
	return (
		<ul>
			{foods.map((food) => (
				<OrderItem key={food.name} food={food}></OrderItem>
			))}
		</ul>
	);
}

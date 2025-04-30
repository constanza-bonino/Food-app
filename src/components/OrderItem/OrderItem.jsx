import React from "react";
import "./OrderItem.css";

export function OrderItem({ food }) {
	return (
		<>
			<li>
				{food.name} x {food.quantity} ${food.price}
				<button>✖</button>
			</li>
		</>
	);
}

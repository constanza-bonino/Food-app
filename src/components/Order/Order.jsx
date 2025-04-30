import React from "react";
import "./Order.css";
import { OrderItem } from "../OrderItem/OrderItem.jsx";

export function Order({ foods, onClickCross }) {
	return (
		<ul>
			{foods
				.filter((x) => x.quantity > 0)
				.map((food) => (
					<OrderItem
						onClickCross={onClickCross}
						key={food.name}
						item={food}
					></OrderItem>
				))}
		</ul>
	);
}

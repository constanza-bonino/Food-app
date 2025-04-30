import React from "react";
import "./OrderItem.css";

export function OrderItem({ onClickCross, item }) {
	return (
		<>
			<li id={item.name}>
				{item.name} x {item.quantity} ${item.price}
				<button
					onClick={() => {
						onClickCross(item.id);
					}}
				>
					✖
				</button>
			</li>
		</>
	);
}

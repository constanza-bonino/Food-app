import React from "react";
import "./Order.css";
import { OrderItem } from "../OrderItem/OrderItem.jsx";

export function Order({ boughtProds }) {
	return (
		<ul>
			<OrderItem boughtProd={boughtProds[0]} />
		</ul>
	);
}

import React from "react";
import OrderItem from "../OrderItem/OrderItem";
import "./Order.css";

function Order() {
	const order = [
		{
			name: "Empanada",
			price: 95,
			quantity: 2,
		},
		{
			name: "Pizza",
			price: 400,
			quantity: 1,
		},
		{
			name: "Pancho",
			price: 80,
			quantity: 4,
		},
	];
	return (
		<table>
			<tr>
				<th>Comida</th>
				<th>Precio</th>
				<th>Cantidad</th>
				<th>Subtotal</th>
			</tr>
			{order.map((food) => (
				<tr className="table_row">
					<OrderItem key={food.name} food={food}></OrderItem>
				</tr>
			))}
		</table>
	);
}

export default Order;

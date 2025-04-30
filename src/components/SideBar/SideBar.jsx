import React from "react";
import "./SideBar.css";

import { Order } from "./../Order/Order.jsx";

export function SideBar({ onClickCross, foods }) {
	function calcTotal() {
		let total = 0;
		foods.forEach((food) => {
			total += food.price * food.quantity;
		});
		return total;
	}

	return (
		<div className="sideBar">
			<span className="cuenta" style={{ fontWeight: "bold" }}>
				Cuenta
			</span>
			<Order onClickCross={onClickCross} foods={foods} />
			<span style={{ fontWeight: "bold" }}>Total: {calcTotal()}</span>
		</div>
	);
}

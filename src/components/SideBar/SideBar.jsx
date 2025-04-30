import React from "react";
import "./SideBar.css";

import { Order } from "./../Order/Order.jsx";

export function SideBar({ foods }) {
	function filterFoods() {
		return foods.filter((food) => food.quantity > 0);
	}

	return (
		<div className="sideBar">
			<span className="cuenta" style={{ fontWeight: "bold" }}>
				Cuenta
			</span>
			<Order foods={filterFoods()} />
			<span style={{ fontWeight: "bold" }}>Total: ???</span>
		</div>
	);
}

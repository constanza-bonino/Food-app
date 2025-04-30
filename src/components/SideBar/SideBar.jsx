import React from "react";
import "./SideBar.css";

import { Order } from "./../Order/Order.jsx";

export function SideBar({ onClickCross, foods }) {
	return (
		<div className="sideBar">
			<span className="cuenta" style={{ fontWeight: "bold" }}>
				Cuenta
			</span>
			<Order onClickCross={onClickCross} foods={foods} />
			<span style={{ fontWeight: "bold" }}>Total: ???</span>
		</div>
	);
}

import React from "react";
import "./SideBar.css";
import Order from "../Order/Order";

function SideBar() {
	return (
		<div className="sidebar-container">
			<p className="sidebar-header">Cuenta</p>
			<hr class="dashed"></hr>
			<Order></Order>
			<hr class="dashed"></hr>
			<p className="sidebar-footer">$2500</p>
		</div>
	);
}

export default SideBar;

import React from 'react';
import FoodProduct from '../FoodProduct/FoodProduct';
import "./FoodTable.css"

function FoodTable(props) {
	return (
		<div className='food_table'>
			<FoodProduct></FoodProduct>
			<FoodProduct></FoodProduct>
			<FoodProduct></FoodProduct>
			<FoodProduct></FoodProduct>
			<FoodProduct></FoodProduct>
			<FoodProduct></FoodProduct>
			</div>
	);
}

export default FoodTable;
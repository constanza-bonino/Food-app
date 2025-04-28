import React from "react";
import FoodProduct from "../FoodProduct/FoodProduct";
import "./FoodTable.css";

function FoodTable() {
	const foods = [
		{
			name: "Asado",
			thumbnail_url:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKdF6Mfv0L13vAVrfOqEuy_oNhytcQB7MQkQ&s",
			price: 340,
			quantity: 0,
		},
		{
			name: "Empanada",
			thumbnail_url:
				"https://assets.unileversolutions.com/recipes-v2/237001.jpg",
			price: 95,
			quantity: 2,
		},
		{
			name: "Milanesa",
			thumbnail_url:
				"https://www.indega.com.py/primicia/wp-content/uploads/2022/04/pure-de-papa-con-pollo-broaster-large-qlJiPE4lyS.jpeg",
			price: 220,
			quantity: 0,
		},
		{
			name: "Pollo",
			thumbnail_url:
				"https://www.hola.com/horizon/landscape/3f197ddb9b9d-pollo-adobe-t.jpg?im=Resize=(640),type=downsize",
			price: 280,
			quantity: 0,
		},
		{
			name: "Guiso",
			thumbnail_url:
				"https://content-cocina.lecturas.com/medio/2023/03/22/paso_a_paso_para_realizar_guiso_de_lentejas_con_arroz_y_verduras_resultado_final_957b3be1_1200x1200.jpg",
			price: 180,
			quantity: 0,
		},
		{
			name: "Pizza",
			thumbnail_url:
				"https://upload.wikimedia.org/wikipedia/commons/0/05/Pizza_Muzzarella_Uruguay.jpg",
			price: 400,
			quantity: 1,
		},
		{
			name: "Pancho",
			thumbnail_url:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZnAhwIfXeZhKKGEKFpVug3OVI0eXvARjF3w&s",
			price: 80,
			quantity: 4,
		},
		{
			name: "Hamburguesa",
			thumbnail_url:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqIvY_EddgWVLKNZD3S-xTjijRkfogKFxFkA&s",
			price: 320,
			quantity: 0,
		},
		{
			name: "Pasta",
			thumbnail_url:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ODK2tmAkskaKYm0JUz6aHpeo7TyvAHxT8A&s",
			price: 410,
			quantity: 0,
		},
		{
			name: "Ensalada cesar",
			thumbnail_url:
				"https://imag.bonviveur.com/ensalada-cesar-casera.jpg",
			price: 240,
			quantity: 0,
		},
	];

	return (
		<div className="food_table">
			{foods.map((food) => (
				<FoodProduct key={food.name} food={food}></FoodProduct>
			))}
		</div>
	);
}

export default FoodTable;

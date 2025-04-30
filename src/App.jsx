import { useState } from "react";
import "./App.css";
import FoodTable from "./components/FoodTable/FoodTable.jsx";
import { SideBar } from "./components/SideBar/SideBar.jsx";

const defaultFoods = [
	{
		id: 1,
		name: "Asado",
		thumbnail_url:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKdF6Mfv0L13vAVrfOqEuy_oNhytcQB7MQkQ&s",
		price: 340,
		stock: 0,
	},
	{
		id: 2,
		name: "Empanada",
		thumbnail_url:
			"https://assets.unileversolutions.com/recipes-v2/237001.jpg",
		price: 95,
		stock: 2,
	},
	{
		id: 3,
		name: "Milanesa",
		thumbnail_url:
			"https://www.indega.com.py/primicia/wp-content/uploads/2022/04/pure-de-papa-con-pollo-broaster-large-qlJiPE4lyS.jpeg",
		price: 220,
		stock: 0,
	},
	{
		id: 4,
		name: "Pollo",
		thumbnail_url:
			"https://www.hola.com/horizon/landscape/3f197ddb9b9d-pollo-adobe-t.jpg?im=Resize=(640),type=downsize",
		price: 280,
		stock: 0,
	},
	{
		id: 5,
		name: "Guiso",
		thumbnail_url:
			"https://content-cocina.lecturas.com/medio/2023/03/22/paso_a_paso_para_realizar_guiso_de_lentejas_con_arroz_y_verduras_resultado_final_957b3be1_1200x1200.jpg",
		price: 180,
		stock: 0,
	},
	{
		id: 6,
		name: "Pizza",
		thumbnail_url:
			"https://upload.wikimedia.org/wikipedia/commons/0/05/Pizza_Muzzarella_Uruguay.jpg",
		price: 400,
		stock: 1,
	},
	{
		id: 7,
		name: "Pancho",
		thumbnail_url:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZnAhwIfXeZhKKGEKFpVug3OVI0eXvARjF3w&s",
		price: 80,
		stock: 4,
	},
	{
		id: 8,
		name: "Hamburguesa",
		thumbnail_url:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqIvY_EddgWVLKNZD3S-xTjijRkfogKFxFkA&s",
		price: 320,
		stock: 0,
	},
	{
		id: 9,
		name: "Pasta",
		thumbnail_url:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ODK2tmAkskaKYm0JUz6aHpeo7TyvAHxT8A&s",
		price: 410,
		stock: 0,
	},
	{
		id: 10,
		name: "Ensalada cesar",
		thumbnail_url: "https://imag.bonviveur.com/ensalada-cesar-casera.jpg",
		price: 240,
		stock: 0,
	},
];

function App() {
	const [foods, setFoods] = useState(defaultFoods);

	function onFoodClickHandler(food_id) {
		let clonedFoods = [...foods];
		clonedFoods.forEach((food) => {
			if (food.id === food_id && food.stock > 0) {
				food.stock = food.stock - 1;
			}
		});
		setFoods(clonedFoods);
	}

	return (
		<>
			{/* <button onClick={onFoodClickHandler}>button</button> */}
			<h1 className="encabezado">Food App</h1>
			<div className="contenedor">
				<FoodTable onClickFood={onFoodClickHandler} foods={foods} />
				<SideBar
					boughtProds={[{ tipo: "hola", unidades: 2, precio: 200 }]}
				/>
			</div>
		</>
	);
}
export default App;

//

import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./FoodDetail.css";

function FoodDetail() {
	const [food, setFood] = useState([]);
	const params = useParams();

	useEffect(() => {
		const fetchFood = async () => {
			try {
				const url = `http://localhost:3000/foods/${params.id}`;
				const response = await fetch(url);
				const data = await response.json();
				setFood(data);
			} catch (error) {
				console.log(error);
			}
		};

		fetchFood();
	}, [params.id]);

	return (
		<>
			<div className="container">
				<Link to="/">Volver</Link>
				<div className="details_container">
					<img
						className="food_thumbnail"
						src={food.thumbnail_url}
					></img>
				</div>
			</div>
		</>
	);
}

export default FoodDetail;

import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const FoodInfo = () => {
  // React router provides a useful hook which you can use to
  // extract params 👇
  const params = useParams();

  const [food, setFood] = useState(null);


  useEffect(() => {
    // Fetch the product details using async/await
    const fetchFood = async () => {
      try {
        const url = `http://localhost:3000/foods/${params.foodId}`;
        const res = await fetch(url);
        const data = await res.json();
        setFood(data);
      } catch (err) {
        console.error("Failed to fetch product:", err);
      }
    };

    fetchFood();
  }, [params.foodId]);

  // We want to render some loading state if the product is not yet loaded 👇
  if (!food) return <p>Loading product...</p>;

  // We want to render the product details 👇
  return (
    <div
      style={{
        borderRadius: "15px",
        border: "solid black 4px",
        padding: "20px",
        margin: "20px",
      }}
    >
      <h1>Product details</h1>
      <span style={{ fontSize: "5rem" }}>{food.icon}</span>
      <p>Description: {food.description}</p>
      <span>${food.price}</span>
      <p>Product Code: {params.foodId}</p>
    </div>
  );
};

export default FoodInfo;
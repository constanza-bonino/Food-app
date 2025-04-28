import FoodTable from "./Components/FoodTable/FoodTable";
import "./App.css";
import SideBar from "./components/SideBar/SideBar";

function App() {
	return (
		<>
			<h1 className="food-app-table">Food App</h1>
			<div className="app-container">
				<FoodTable></FoodTable>
				<SideBar></SideBar>
			</div>
		</>
	);
}

export default App;

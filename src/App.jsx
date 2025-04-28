import './App.css';
import FoodTable from "./components/FoodTable/FoodTable.jsx"
import {SideBar} from "./components/SideBar/SideBar.jsx"

function App() {
  return (
    <>
      <h1 className="encabezado">Food App</h1>
      <div className="contenedor">
        <FoodTable />
        <SideBar boughtProds={[{tipo: "hola", unidades: 2, precio: 200}]}/>
      </div>
    </>

  );
}
export default App;

//
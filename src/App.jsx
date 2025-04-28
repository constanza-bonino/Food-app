import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {SideBar} from "./components/SideBar/SideBar.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SideBar boughtProds = {[ {tipo: "hambur", unidades: 2, precio: 100}, {tipo: "pizza", unidades: 3, precio: 200}] }/>
    </>
  )
}

export default App

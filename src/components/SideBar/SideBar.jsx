import React from 'react';
import './SideBar.css';

import { Order } from "./../Order/Order.jsx"

export function SideBar({ boughtProds }) {
    return (
        <div className='sideBar'>
            <span style={{fontWeight: "bold"}}>Cuenta</span>
            <Order boughtProds={boughtProds} />
            <span style={{fontWeight: "bold"}}>Total: ???</span>
        </div>
    );
}
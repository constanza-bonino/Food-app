import React from 'react';
import './SideBar.css';

import { Order } from "./../Order/Order.jsx"

export function SideBar({ boughtProds }) {
    return (
        <div className='sideBar'>
            <span style={{fontWeight: "bold", paddingLeft: '20px'}}>Cuenta</span>
            <Order boughtProds={boughtProds} />
            <span style={{fontWeight: "bold", paddingLeft: '20px'}}>Total: ???</span>
        </div>
    );
}
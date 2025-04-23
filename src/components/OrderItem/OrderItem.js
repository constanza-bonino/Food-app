function OrderItem({ boughtProd }) {
    return (
        <>
            <li>{boughtProd.tipo} x {boughtProd.unidades}    ${boughtProd.precio}<button>✖</button></li>
            
        </>
    );
}
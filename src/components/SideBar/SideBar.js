function SideBar({boughtProd}) {
    return (
        <div> 
            <span>Cuenta</span>
            <OrderItem boughtProd={boughtProd} />
            <span>Total: ???</span>
        </div>
    );
}
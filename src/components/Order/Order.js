function Order({boughtProd}) {
    const items = [
        <OrderItem
            boughtProd={boughtProd} />

    ];

    return (
        <ul>
            {items}
        </ul>
    );
}
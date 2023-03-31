import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart} = props;
    let totalPrice =0;
    let totalShipping =0;
    for (const product of cart) {
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    const tax = (totalPrice*.07).toFixed(2);
    const grandTotal = totalPrice+totalShipping+tax;
    return (
        <div className='cart'>
            <h3>Order Summery</h3>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: {totalPrice}$</p>
                <p>TotalShipping: {totalShipping}$</p>
                <p>Tax: {tax}$</p>
                <h4>Grand Total: {grandTotal}$</h4>
        </div>
    );
};

export default Cart;
import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for(let i=0;i<cart.length; i++){
        const totalsalary = cart[i];
        total = total + totalsalary.salary;
    }
    return (
        <div className="cart-area">
            <h2>User summary</h2> 
            <p>Added Users: {cart.length}</p>
            <p>Total Salary: {total}</p>
        </div>
    );
};

export default Cart;
import React from 'react';

const Cart = (props) => {
    const { cart } = props;
    return (
        <div>
            <h3>Programmes Added: {cart.length}</h3>
        </div>
    );
};

export default Cart;
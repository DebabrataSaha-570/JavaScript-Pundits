import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faXmark } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'
const Cart = (props) => {
    const { cart, handleDeleteProgrammer } = props;

    let total = 0;
    for (const programmer of cart) {
        total = total + programmer.salary;

    }

    return (
        <div>
            <h4>Programmers Added: {cart.length}</h4>
            <h5>Total cost: ${total}</h5>
            {
                cart.map(programmer => (
                    <div className='d-flex align-items-center justify-content-around programmer-cart'>
                        <img src={programmer.image} alt="" width="70" class="img-fluid mb-3 img-thumbnail shadow-sm" />
                        <p>{programmer.name}</p>

                        <FontAwesomeIcon onClick={() => handleDeleteProgrammer(programmer)} className='btn btn-danger' icon={faXmark} size="lg" />

                    </div>
                ))
            }
        </div>
    );
};

export default Cart;
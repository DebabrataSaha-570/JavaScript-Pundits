import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Programmers from '../Programmers/Programmers';

const Shop = () => {
    const [programmers, setProgrammers] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('./ProgrammersData.JSON')
            .then(res => res.json())
            .then(data => {
                setProgrammers(data)
            })
    }, [])
    const handleAddToCart = (person) => {
        const newCart = [...cart, person]
        setCart(newCart)
    }

    return (
        <div className='container'>

            <div className="row">
                <div className="col-md-9">
                    <Programmers programmers={programmers} handleAddToCart={handleAddToCart}></Programmers>
                </div>
                <div className="col-md-3">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Programmers from '../Programmers/Programmers';
import './Shop.css'
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

    const handleDeleteProgrammer = (programmer) => {
        const remainingProgrammer = cart.filter(person => person.id !== programmer.id)
        setCart(remainingProgrammer)
    }
    return (
        <section className='shop-container pt-3'>
            <div className='container'>

                <div className="row">
                    <div className="col-md-9 ">
                        <Programmers programmers={programmers} handleAddToCart={handleAddToCart}

                        ></Programmers>
                    </div>
                    <div className="col-md-3 ">
                        <Cart cart={cart} setCart={setCart} handleDeleteProgrammer={handleDeleteProgrammer}></Cart>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Shop;
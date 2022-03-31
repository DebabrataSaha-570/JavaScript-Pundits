import React from 'react';
import Cart from '../Cart/Cart';
import Programmers from '../Programmers/Programmers';

const Shop = () => {
    return (
        <div className='container'>

            <div className="row">
                <div className="col-md-7">
                    <Programmers></Programmers>
                </div>
                <div className="col-md-4">
                    <Cart></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;
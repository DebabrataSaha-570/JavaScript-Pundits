import React from 'react';
import Cart from '../Cart/Cart';
import Programmers from '../Programmers/Programmers';

const Shop = () => {
    return (
        <div className='container'>

            <div className="row">
                <div className="col-md-9">
                    <Programmers></Programmers>
                </div>
                <div className="col-md-3">
                    <Cart></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;
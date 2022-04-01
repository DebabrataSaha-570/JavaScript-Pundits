import React, { useEffect, useState } from 'react';
import SingleProgrammer from '../SingleProgrammer/SingleProgrammer';

const Programmers = (props) => {
    const { programmers, handleAddToCart } = props;



    return (
        <div>
            <div className="row">
                {
                    programmers.map(programmer => <SingleProgrammer key={programmer.id} programmer={programmer} handleAddToCart={handleAddToCart}></SingleProgrammer>)
                }
            </div>
        </div>
    );
};

export default Programmers;
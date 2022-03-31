import React, { useEffect, useState } from 'react';
import SingleProgrammer from '../SingleProgrammer/SingleProgrammer';

const Programmers = () => {
    const [programmers, setProgrammers] = useState([])

    useEffect(() => {
        fetch('./ProgrammersData.JSON')
            .then(res => res.json())
            .then(data => {
                setProgrammers(data)
            })
    }, [])
    return (
        <div>
            <h3>This is programmers component : {programmers.length}</h3>
            {
                programmers.map(programmer => <SingleProgrammer key={programmer.id}></SingleProgrammer>)
            }
        </div>
    );
};

export default Programmers;
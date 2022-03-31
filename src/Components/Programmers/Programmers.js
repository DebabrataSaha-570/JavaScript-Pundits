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
            <div className="row">
                {
                    programmers.map(programmer => <SingleProgrammer key={programmer.id} programmer={programmer}></SingleProgrammer>)
                }
            </div>
        </div>
    );
};

export default Programmers;
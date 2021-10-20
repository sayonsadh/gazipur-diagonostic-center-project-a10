import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Branch from '../Branch/Branch';
import './Branches.css';

const Branches = () => {
    const [branches, setBranches] = useState([]);
    useEffect(() => {
        fetch ('test.json')
        .then(res => res.json())
        .then(data => setBranches(data))
    },[])
    return (
        <div  className='mt-3'>
            <h4>Please contact your nearby branch for your body checkup.</h4>

           <div className='branches-container'>
           {
                branches.map(branch => <Branch
                key={branch.id}
                branch={branch}
                ></Branch>)
            }
           </div>
            
        </div>
    );
};

export default Branches;
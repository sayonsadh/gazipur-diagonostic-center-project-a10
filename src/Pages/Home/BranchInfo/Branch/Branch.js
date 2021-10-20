import React from 'react';
import './Branch.css';

const Branch = ({branch}) => {
    const{name, image} =branch;
    return (
        <div className='single-branch-container p-2'>
            <img src={image} alt="" />
            <h4>{name} Branch</h4>
            <button className='btn btn-success'>Contact for Appointment</button>
        </div>
    );
};

export default Branch;
import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const { Name, image, Description,} = service;
    return (
        <div className="single-service-container p-3">
            <img src={image} alt="" />
            <h3>{Name}</h3>
            <p>{Description}</p>
            <Link to= {`/booking/${Name}`}>
            <button className="btn btn-info ">Select {Name} Test</button> 
            </Link>
        </div>
    );
};

export default Service;
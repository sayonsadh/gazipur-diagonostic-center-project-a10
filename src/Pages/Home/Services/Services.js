import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'; 

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('service.json')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])
    return (
        <div>
            <h3 className='mt-5 border border-info w-50 mx-auto p-2 rounded-3 border-2'>Quality service at Affordable Fees</h3>
            <div id="services" className="services-container mt-2">
            {
                services.map (service =>
                    <Service
                key={service.id}
                service={service} 
                ></Service>
               )
            }
        </div>
        </div>
    );
};

export default Services;
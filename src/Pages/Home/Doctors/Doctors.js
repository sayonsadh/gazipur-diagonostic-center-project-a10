import React, { useEffect, useState } from 'react';

import Doctor from '../Doctor/Doctor';


const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect( () => {
        fetch('doctors.json')
        .then(res => res.json())
        .then(data => setDoctors(data))
    },[])
    return (
        <div className='mt-4'>
            <h3> Our Doctors Team!</h3>
            <div className="row d-flex justify-content-around mt-3"> 
                {
                    doctors.map(doctor => <Doctor 
                    key={doctor.img}
                    doctor={doctor}
                    ></Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;
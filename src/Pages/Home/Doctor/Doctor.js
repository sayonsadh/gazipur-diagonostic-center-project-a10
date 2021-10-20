import React from 'react';

const Doctor = ({doctor}) => {
    const {name, image, institution, specialist} = doctor;
    return (
        <div className="col-lg-4 col-sm-6 col-12 border border-info m-2 p-2 rounded-3">
            <img className="img-fluid" src={image} alt="" />
            <h4>Dr. {name}</h4>
            <h5>{institution}</h5>
            <h4>{specialist} specialist</h4> 
            <button className='btn btn-info'>Appointment</button>
        </div>
    );
};

export default Doctor;
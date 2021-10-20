import React from 'react';

const Footer = () => {
    return (
        <div className=' row d-flex justify-content-between bg-secondary bg-opacity-50 p-5 mt-4'>

            <div className='text-start col-md-4'>
                <h5>Treatment</h5>
                <p>Cardiology</p>
                <p>Phycology</p>
                <p>Blood</p>
                <p>Gastric</p>
                <p>Pregnancy</p>
            </div>

            <div className='text-start col-md-4'>
                <h5>Our purpose</h5>
                <p>Future plane</p>
                <p>Feedback</p>
                <p>Site map</p>
            </div>

            <div className='text-start col-md-4'>
                <h5>Contact us</h5>
                <p>Mobile: +880-1954167494</p>
                <p>Email:- sadhkhan1999@gmail.com</p>
            </div>

        </div>
    );
};

export default Footer;
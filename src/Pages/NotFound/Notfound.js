import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <div>
            <img className='w-50' src="https://image.freepik.com/free-vector/internet-network-warning-404-error-page-file-found-web-page_1150-48324.jpg" alt="" /><br />
            <Link to="/home"><button className='btn  btn-danger'>Back To Home</button></Link>
        </div>
    );
};

export default Notfound;
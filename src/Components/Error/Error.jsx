import React from 'react';
import error from '../../assets/404-error-page-not-found.jpg'
import { Link } from 'react-router-dom';
const Error = () => {
    return (
        <div className='max-w-5xl mx-auto'>
            <img src={error} alt="" />
            <div className='text-center'>
            <button className="btn btn-active btn-primary"><Link to="/">Go Home</Link></button>
            </div>
        </div>
    );
};

export default Error;
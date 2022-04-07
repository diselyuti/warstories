import React from 'react';
import {Link} from 'react-router-dom';

const Welcome = () => {
    return (
        <div className='welcome-page w-100 d-flex align-items-center justify-content-center'>
            <div className='d-flex flex-column align-items-center justify-content-between'>
                <h2 className='text-center'>Це місце, де ти можеш розповісти про те, що с тобою сталося під час війни в Україні</h2>
                <div className='button-wrap w-100 d-flex justify-content-center'>
                    <Link className="welcome btn btn-outline-success me-2" to='/tellstory'>Розповісти</Link>
                    <Link className="welcome btn btn-outline-success" to='/core'>Читати</Link>
                </div>
            </div>
        </div>
    );
};

export default Welcome;

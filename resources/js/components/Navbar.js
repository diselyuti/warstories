import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Вітання</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="core">Головна</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="tellstory">Розповісти свою історію</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="about">Про сайт</Link>
                        </li>
                    </ul>
                    <Link to='/helpukraine' className='btn btn-outline-success'>Допомогти Україні</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

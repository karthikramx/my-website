import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../../assets/logo.png';

const NavBar = () => {
    return (
        <nav>
            <img src={logo} alt="Logo" className='logo' />
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
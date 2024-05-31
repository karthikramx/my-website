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
                    <Link to="/" style={{ color: 'black' }}>Home</Link>
                </li>
                <li>
                    <Link to="/blog" style={{ color: 'black' }}>Blog</Link>
                </li>
                <li>
                    <Link to="/portfolio" style={{ color: 'black' }}>Portfolio</Link>
                </li>
                <li>
                    <Link to="/projects" style={{ color: 'black' }}>Projects</Link>
                </li>
                <li>
                    <Link to="/art" style={{ color: 'black' }}>Art</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../../assets/final.png';

const NavBar = () => {
    return (
        <nav>
            <img src={logo}
                style={{ marginLeft: '10px', cursor: 'pointer' }}
                onClick={() => window.location.href = "/"}
                alt="Logo"
                className='logo' />
            <div style={{ marginRight: '40px' }}>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/art">Art</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
// Card.js
import React from 'react';
import './Card.css'; // Import the CSS
import { Link } from 'react-router-dom';

const Card2 = ({ image, title, description, link }) => {
    return (
        <div className="card" style={{ justifyContent: 'center', alignItems: 'center' }}>
            <img src={image} alt={title} />
            <h4>{title}</h4>
            <p>{description}</p>
            <Link to={link}>Read More</Link>
            {console.log(link)}
        </div>
    );
}

export default Card2;
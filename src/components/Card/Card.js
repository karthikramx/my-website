// Card.js
import React from 'react';
import './Card.css'; // Import the CSS

const Card = ({ image, title, description, link }) => {
    return (
        <div className="card" style={{ justifyContent: 'center', alignItems: 'center' }}>
            <img src={image} alt={title} />
            <h4>{title}</h4>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">Read More</a>
        </div>
    );
}

export default Card;
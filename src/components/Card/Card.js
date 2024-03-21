// Card.js
import React from 'react';
import './Card.css'; // Import the CSS

const Card = ({ image, title, description, link }) => {

    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <div className="card">
                <img src={image} alt={title} />
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </a>
    );
}

export default Card;
import React from 'react';
import './BoxHolder.css'; // Import CSS file for styling

const BoxWithBorder = (props) => {
    return (
        <div className="box">
            <div className="box-heading">{props.heading}</div>
            <div className="box-content">{props.children}</div>
        </div>
    );
};

export default BoxWithBorder;

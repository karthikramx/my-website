import React from 'react';
import './Button.css';

const Button = ({ title, onClickHandler, size, variant }) => {
    const styles = {
        paddingTop: '10px',
    }

    if (size === 'sm') {
        styles.paddingTop = '5px';
        // Apply CSS to reduce padding and smaller font or lesser width
    }

    if (variant === 'danger') {
        styles.bgColor = 'red';
    }

    return (
        <button className='button' onClick={onClickHandler} styles={{styles}}>
            {title}
        </button>
    );
};

export default Button;
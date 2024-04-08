import React from 'react';
//import the ListBox css
import './InputBox.css';
import { useState } from 'react';
import Button from '../Button/Button';

const InputBox = (props) => {
    // Your code here
    const [selectedTopic, setSelectedTopic] = useState("");

    const handleChange = (event) => {
        setSelectedTopic(event.target.value);
    }

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ marginRight: '10px' }} >
                    <input className='InputBox' type="text" />
                </div>
                <div>
                    <Button title='Submit' onClickHandler={() => props.onClick(selectedTopic)} />
                </div>
            </div>
        </div>
    );
};

export default InputBox;


import React from 'react';
//import the ListBox css
import './ListBox.css';
import { useState } from 'react';
import Button from '../Button/Button';

const ListBox = (props) => {
    // Your code here
    const [selectedTopic, setSelectedTopic] = useState("");

    const handleChange = (event) => {
        setSelectedTopic(event.target.value);
    }

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ marginRight: '10px' }} >
                    <select className='ListBox' defaultValue={"Loading Topics..."} onChange={handleChange}>
                        {props.options.map((option, index) => (
                            <option key={index} value={option}>{option} </option>
                        ))}
                    </select>
                </div>
                <div>
                    <Button title='Submit' onClickHandler={() => props.onClick(selectedTopic)} />
                </div>
            </div>
        </div>
    );
};

export default ListBox;


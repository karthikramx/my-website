import React from 'react';
//import the ListBox css
import './ListBox.css';
import { useState } from 'react';

const ListBox = (props) => {
    // Your code here
    const [selectedTopic, setSelectedTopic] = useState("");

    const handleChange = (event) => {
        setSelectedTopic(event.target.value);
    }


    return (
        <div>
            <div>
                <select className='ListBox' defaultValue={"Loading Topics..."} onChange={handleChange}>
                    {props.options.map((option, index) => (
                        <option key={index} value={option}>{option} </option>
                    ))}
                </select>
                <button className='ListBox button' onClick={() => props.onClick(selectedTopic)}>Submit</button>
            </div>
        </div>
    );
};

export default ListBox;


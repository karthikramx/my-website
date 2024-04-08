import React from 'react';
//import the ListBox css
import './InputBox.css';
import Button from '../Button/Button';
import { useState } from 'react';

const InputBox = (props) => {

    const [topic, setTopic] = useState("");

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ marginRight: '10px' }} >
                    <input className='InputBox' type="text" onChange={(event) => { setTopic(event.target.value) }} />
                </div>
                <div>
                    <Button title='Submit' onClickHandler={() => props.onClick(topic)} />
                </div>
            </div>
        </div>
    );
};

export default InputBox;


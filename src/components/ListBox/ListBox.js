import React from 'react';

const ListBox = () => {
    // Your code here

    const options = ['Option 1', 'Option 2', 'Option 3'];

    return (
        <div>
            <div>
                <select>
                    {options.map((option, index) => (
                        <option key={index} value={option}>{option} </option>
                    ))}
                </select>
                <button>Submit</button>
            </div>
        </div>
    );
};

export default ListBox;


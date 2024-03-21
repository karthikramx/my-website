import React, { useState } from 'react';
import './SideBar.css'; // Import your CSS file

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true); // State to control whether the sidebar is open

    return (
        <div>
            <div className={`sidebar ${isOpen ? 'open' : ''}`}> {/* Add the 'open' class when the sidebar is open */}
                <button onClick={() => setIsOpen(!isOpen)}> {isOpen ? '<' : '>'}  </button> {/* Button to toggle the sidebar */}
            </div>
        </div>
    );
};

export default Sidebar;
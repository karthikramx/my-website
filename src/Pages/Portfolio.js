import React from 'react';
import MyPortfolio from '../../src/assets/Portfolio.svg';

const Portfolio = () => {
    return (
        <div>
            <div style={{ marginTop: "100px" }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={MyPortfolio} alt='Portfolio' style={{ width: '80%' }} />
                </div>
            </div>
            <section style={{ marginTop: "40px" }} />
        </div>
    );
};

export default Portfolio;
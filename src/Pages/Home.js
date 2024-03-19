import React from 'react';
import me from '../assets/me.JPG';

function Home() {
    const imageStyle = {
        borderRadius: "50%",
        width: "500px",
        height: "500px",
        objectFit: "cover",
        objectPosition: "center"
    };

    const divStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh'
    };

    return (
        <div>
            <div style={divStyle}>
                <img src={me} alt='Test' style={imageStyle} />
            </div>
            <h1>Karthik Ram</h1>
            <h3 style={{ color: "gray", lineHeight: "2" }}>Hello, <br />
                Welcome to my little corner on the internet! <br />
                I’m a maker at heart and I like to build things from scratch. <br /> I’m exploring data science, machine learning,Generative AI, Business Analytics and Automation.<br />
                I’m documenting everything I learn and make here and hope to see it become <br /> an awesome repository of my life’s work</h3>
        </div>
    );
}

export default Home;
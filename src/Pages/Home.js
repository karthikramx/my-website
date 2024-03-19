import React from 'react';
import me from '../assets/me.JPG';

function Home() {
    const imageStyle = {
        borderRadius: "50%",
        width: "500px",
        height: "500px",
        objectFit: "cover",
        objectPosition: "center",
    };

    const imageDivSytle = {
        display: 'flex',
        flixDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '80px',
    };

    return (
        <div>
            <div style={imageDivSytle}>
                <img src={me} alt='Test' style={imageStyle} />
            </div>
            <h1>Karthik Ram</h1>
            <h4 style={{ color: "gray", lineHeight: "2" }}>Hello,
                Welcome to my little corner on the internet! <br />
                I’m a maker at heart and I like to build things from scratch. <br /> I’m exploring data science, machine learning,Generative AI, Business Analytics and Automation.<br />
                I’m documenting everything I learn and make here and hope to see it become <br /> an awesome repository of my life’s work</h4>
        </div>
    );
}

export default Home;
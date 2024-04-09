import React from 'react';
import me from '../assets/me.JPG';

function Home() {
    const imageStyle = {
        borderRadius: "50%",
        width: "300px",
        height: "300px",
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
            <section style={{ marginTop: "100px" }}>
                <div style={imageDivSytle}>
                    <img src={me} alt='Test' style={imageStyle} />
                </div>
                <h1>Karthik Ram</h1>
                <h4 style={{ color: "gray", lineHeight: "2" }}>
                    Hello! <br />
                    Welcome to my digital domain... <br />
                    I am a passionate maker who enjoys crafting from scratch. <br /> My interests span Generative AI, Product Design, and Engineering. <br />
                    Here, I meticulously document my journey, aiming to transform this space into a awesome repository of my life’s work.</h4>
            </section>
            <section style={{ marginTop: "40px" }} />
        </div>
    );
}

export default Home;
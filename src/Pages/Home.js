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
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover', // Add this
            overflow: 'hidden', // Add this
            scrollbarGutter: 'none',
        }}>
            <div style={{ marginTop: "100px" }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div>
                        <div style={imageDivSytle}>
                            <img src={me} alt='Test' style={imageStyle} />
                        </div>
                        <h1 style={{ textAlign: 'center', color: 'darkgray' }}>Karthik Ram</h1>
                    </div>
                    <div style={{ marginLeft: '50px' }}>
                        <h4 style={{ color: "darkgray", lineHeight: "2", textAlign: 'center' }}>
                            Hello! <br />
                            Welcome to my digital domain... <br />
                            I am a passionate maker who enjoys crafting from scratch. <br /> My interests span Generative AI, Product Design, and Engineering. <br />
                            Here, I meticulously document my journey, <br /> aiming to transform this space into a awesome repository of my life’s work.</h4>
                    </div>
                </div>
            </div>
            <section style={{ marginTop: "40px" }} />
        </div>
    );
}

export default Home;
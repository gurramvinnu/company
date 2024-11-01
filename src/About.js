// src/components/About.js
import React from 'react';
import './About.css';

function About() {
    return (
        <div className="about">
            <h1>About Us</h1>
            <div className="about-content">
                <div className="about-text">
                    <p>
                        Welcome to <strong>Falling Clouds Technologies Pvt Ltd</strong>, where innovation meets reliability.
                        With a dedicated team of highly skilled professionals, we specialize in delivering cutting-edge
                        software solutions across multiple domains, including websites, mobile apps, and immersive game
                        development. We pride ourselves on our cost-effective approach, ensuring you receive the highest
                        quality products within your budget.
                    </p>
                    <p>
                        At Falling Clouds Technologies, we’re committed to delivering products on time, tailored to meet
                        your unique business needs. From concept to completion, we work closely with you to ensure a seamless
                        experience and superior results that give your business a competitive edge in the market.
                    </p>
                    <p>
                        Join us as we create tomorrow's digital solutions today. Partner with us, and experience a blend
                        of creativity, precision, and excellence.
                    </p>
                </div>
                <div className="about-image">
                    <img src="company log.jpeg" alt="Falling Clouds Technologies" />
                </div>
            </div>
        </div>
    );
}

export default About;

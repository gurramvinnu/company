// src/components/Body.js
import React from 'react';
import './Body.css';

function Body() {
    return (
        <main className="body">
            <section className="section">
                <div className="content">
                    <h1>Welcome to Our Falling Clouds</h1>
                    <p>we specialize in creating innovative solutions tailored for modern businesses. Whether you're looking for a dynamic website, a user-friendly app, or engaging games, we have the expertise to bring your vision to life.

</p>
                </div>
                <div className="image">
                    <img src="company log.jpeg" alt="Company" />
                </div>
            </section>

            <section className="section">
                <div className="content">
                    <h1>Your Success, Our Commitment</h1>
                    <p>We are here to support your business goals.</p>
                </div>
                <div className="image">
                    <img src="oursucess.jpeg" alt="Company" />
                </div>
            </section>
            

            <section className="section reverse">
                <div className="image">
                    <img src="team.jpg" alt="Company" />
                </div>
                <div className="content">
                    <h1>Innovate with Us</h1>
                    <p>we take pride in our dedicated team of over 50 highly skilled software developers and designers. With a passion for technology and innovation, our experts are committed to delivering top-notch solutions that drive your business forward.</p>
                </div>
            </section>
            <section className="subsection-container">
                <h2>Our Services</h2>
                <div className="subsections">
                    <div className="subsection">
                        <img src="websit.jpg" alt="Website" />
                        <h3>Website</h3>
                        <p>We create responsive and engaging websites tailored to your business needs.</p>
                    </div>
                    <div className="subsection">
                        <img src="app.jpg" alt="App" />
                        <h3>App</h3>
                        <p>Our team designs and develops mobile applications with intuitive interfaces.</p>
                    </div>
                    <div className="subsection">
                        <img src="game.webp" alt="Game" />
                        <h3>Game</h3>
                        <p>From concept to launch, we develop immersive games for all platforms.</p>
                    </div>
                </div>
            </section>

            

            <footer className="footer">
                <div className="footer-content">
                    <p>Falling Clouds technologies pvt ltd</p>
                    <p>1-5/253 , appartment ,raidurg,Hyerabad</p>
                    <p>Email: CEO@fctsoftware.com</p>
                    <p>Phone: +1-234-567-8900</p>
                </div>
                <div className="copyright">
                    © 2024 Falling Clouds technologies
                </div>
            </footer>
        </main>
    );
}

export default Body;

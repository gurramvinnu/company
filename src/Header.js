// src/components/Header.js
import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="logo1"><img src='company log.jpeg'></img></div>
            <div className="logo">Falling Clouds technologies
                <div className='logo2'>IT Consulant & Services</div>
            </div>
            <div className="nav-links">
                <a href="/">Home</a>
                {/* <a href="ProductPage">Products</a> */}
                <a href="career">Career</a>
                <a href="Contact">Contact</a>
                <a href="about">About</a>
            </div>
        </header>
    );
}

export default Header;

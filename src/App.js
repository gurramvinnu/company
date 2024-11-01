// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Body from './Body';
import About from './About';
import ProductPage from './ProductPage'
import Contact from './Contact';
import Career from './Career';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Body />} />
                <Route path="/career" element={<Career />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/About" element={<About />} />
                <Route path="/ProductPage" element={<ProductPage />} />
            </Routes>
        </Router>
    );
}

export default App;

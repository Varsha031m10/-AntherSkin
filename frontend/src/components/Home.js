// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import aboutImage from '../assets/img2.jpeg'; // Skincare image
import './Home.css'; // Ensure proper styles

const Home = () => {
    return (
        <div className="home-container">
            <div className="info-section">
                <h2>Welcome to AntherSkin</h2>
                <p>
                    At AntherSkin, we believe that everyone deserves to feel confident in their skin. 
                    Our range of skincare, haircare, and beauty products are designed to cater to all skin types, 
                    ensuring that you find the right solution for your unique needs. 
                    Explore our collection and embark on your journey to healthier, more radiant skin!
                </p>
                
            </div>
            <div className="image-section">
                <img src={aboutImage} alt="Skincare Products" className="about-image" />
            </div>
        </div>
    );
};

export default Home;
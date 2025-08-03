// src/components/AboutUs.js
import React from 'react';
import './Aboutus.css';


const AboutUs = () => {
    return (
        <div className="about-us-container">
            <div className="about-us-content">
                <div className="about-us-text">
                    <h2>Get to Know Us</h2>
                    <p>
                        At AntherSkin, we're dedicated to making you feel confident in your skin with clean, effective, and affordable skincare products.
                    </p>
                    <p>
                        We focus on sustainability, cruelty-free practices, and natural ingredients to deliver the best for your skin and the planet.
                    </p>
                    <h3>Our Core Values</h3>
                    <ul>
                        <li>💚 Quality-first formulations</li>
                        <li>🌱 Eco-friendly approach</li>
                        <li>🤝 Inclusive for all skin types</li>
                        <li>🧪 Innovation-driven</li>
                    </ul>
                    <p>
                        Join our growing community and discover beauty that feels right—naturally.
                    </p>
                </div>
                <div className="about-us-image">
                    <img src="aboutus.jpeg" alt="About Us" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;

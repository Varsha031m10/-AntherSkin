// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import { CartProvider } from './components/CartContext';
import Cart from './components/Cart';
import Checkout from './components/Checkout.js';
import SkinProducts from './components/SkinCare';
import Home from './components/Home';
import HairCare from './components/HairCare';
import Fragrances from './components/Fragrences';
import AboutUs from './components/Aboutus';
import OrderSuccess from './components/OrderSuccess'; 

function App() {
    // useEffect(() => {
    //     const numPetals = 15;

    //     for (let i = 0; i < numPetals; i++) {
    //         const petal = document.createElement("img");
    //         petal.src = "bloom2.jpeg"; 
    //         petal.className = "petal";
    //         petal.style.left = `${Math.random() * 100}vw`;
    //         petal.style.animationDelay = `${Math.random() * 10}s`;
    //         petal.style.transform = `rotate(${Math.random() * 360}deg)`;
    //         document.body.appendChild(petal);

    //         // Remove after falling
    //         setTimeout(() => {
    //             petal.remove();
    //         }, 10000);
    //     }
    // }, []);

    return (
        <CartProvider>
            <Router>
                <div className="App">
                    <div className="fade-slide-wrapper">
                        <header className="App-header">
                            <div className="logo">
                                <img src="logo1.jpeg" alt="AntherSkin Logo" className="brand-logo" />
                                <div>
                                    <h1>AntherSkin</h1>
                                    <p className="caption">Your perfect skincare companion</p>
                                </div>
                            </div>

                            {/* Navigation Menu */}
                            <nav className="header-nav">
                                <ul className="nav-list">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/skin">Skin</Link></li>
                                    <li><Link to="/hair">Hair</Link></li>
                                    <li><Link to="/fragrance">Fragrances</Link></li>
                                    <li><Link to="/about">Get to Know Us</Link></li>
                                    <li><Link to="/cart">Cart</Link></li>
                                </ul>
                            </nav>
                        </header>

                        {/* Routing for different pages */}
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/skin" element={<SkinProducts />} />
                            <Route path="/hair" element={<HairCare />} />
                            <Route path="/fragrance" element={<Fragrances />} />
                            <Route path="/about" element={<AboutUs />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/checkout" element={<Checkout />} />
                            <Route path="/order-success" element={<OrderSuccess />} />
                        </Routes>
                    </div>
                </div>
            </Router>
        </CartProvider>
    );
}

export default App;

import React from 'react';
import './Footer.css'; // Add styles for the footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Shop</h3>
        <ul>
          <li>Skincare</li>
          <li>Bodycare</li>
          <li>Haircare</li>
          <li>Makeup</li>
          <li>Fragrances</li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Learn</h3>
        <ul>
          <li>AntherSkin Blogs</li>
          <li>Features</li>
          <li>Rewards</li>
          <li>Newsletters</li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Help</h3>
        <ul>
          <li>Contact Us</li>
          <li>Policies</li>
          <li>FAQs</li>
          <li>Track Your Order</li>
          <li>Return Order</li>
          <li>Exchange Order</li>
        </ul>
      </div>

      <div className="footer-section newsletter">
        <h3>Sign up for expert beauty insights, tips & previews!</h3>
        <p>(PS: we too hate spam!)</p>
        <div className="newsletter-input">
          <input type="email" placeholder="Your email" />
          <button>Subscribe</button>
        </div>
      </div>

      <div className="footer-social">
        <h3>Follow Us</h3>
        <ul>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">YouTube</a></li>
          <li><a href="#">Instagram</a></li>
        </ul>
      </div>

      <div className="footer-contact">
        <h3>Contact Us</h3>
        <p>+91-750-649-6604</p>
        <p>hello@antherskin.com</p>
      </div>
    </footer>
  );
};

export default Footer;

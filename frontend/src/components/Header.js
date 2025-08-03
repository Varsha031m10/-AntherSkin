import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // optional, for styling

function Header() {
  return (
    <header className="header">
      <nav>
        <ul className="nav-links">
          <li><Link to="/skin">Skin</Link></li>
          <li><Link to="/hair">Hair</Link></li>
          <li><Link to="/makeup">Makeup</Link></li>
          <li><Link to="/fragrances">Fragrances</Link></li>
          <li><Link to="/">Home</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

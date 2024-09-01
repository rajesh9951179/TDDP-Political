// src/components/Navbar.js

import React from 'react';
import './Navbar.css';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Bharatiya Janata Party</div>
      <ul className="navbar-links">
        <li><a href="#home">UPCOMING EVENTS</a></li>
        <li><a href="#media">MEDIA RESOURCES</a></li>
        <li><a href="#kamal">KAMAL SANDESH</a></li>
        <li><a href="#bjp-live">BJP LIVE</a></li>
      </ul>
      <div className="navbar-actions">
        <button className="btn join-btn">JOIN BJP</button>
        <button className="btn donate-btn">MAKE A DONATION</button>
      </div>
      <div className="navbar-social">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

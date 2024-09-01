import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import './Footer.css';
import BadgeImage from '../images/Image1.jpeg'; // Update the path to your logo file

function Footer() {
  return (
    <div className="Footer">
      <footer className="footer">
        <div className="footer-header">
          <img src={BadgeImage} alt="Party Logo" className="party-logo" />
          <div className="header-text">
            <p>THIS IS THE OFFICIAL WEBSITE OF DRAVIDA MUNNETRA KAZHAGAM</p>
          </div>
        </div>
        <div className="footer-sections">
          <div className="footer-section">
            <h3>Party</h3>
            <ul>
              <li>Ideology</li>
              <li>History Of DMK</li>
              <li>Organization Structure</li>
              <li>Elected Representatives</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Achievements</h3>
            <ul>
              <li>Achievements</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Resources</h3>
            <ul>
              <li>Events</li>
              <li>Media</li>
              <li>Election Manifesto</li>
              <li>Stalin's Voice To Recover Rights</li>
              <li>Gallery</li>
              <li>Murasoli</li>
              <li>Muthamizharingar Kalaignar</li>
            </ul>
          </div>
          <div className="footer-section address-section">
            <h3>Address</h3>
            <p>
              Anna Arivalayam,<br />
              No 367/369, Anna Salai, Teynampet,<br />
              Chennai - 600018.<br />
              + (91) - 044 - 24348258
            </p>
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.6161738308257!2d80.25124371480078!3d13.03681859081268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267d2a8b6bda1%3A0x238a06d0f34f6b73!2sAnna%20Arivalayam!5e0!3m2!1sen!2sin!4v1633953438532!5m2!1sen!2sin"
                width="450"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Anna Arivalayam"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="social-media">
          <a href="https://www.facebook.com/YourPage" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/YourProfile" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://twitter.com/YourProfile" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
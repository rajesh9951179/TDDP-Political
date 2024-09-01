import React, { useState } from 'react';
import './Navbar.css';
import images from '../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Navbar() {
  const [language, setLanguage] = useState('English');

  const handleLanguageChange = () => {
    setLanguage(language === 'English' ? 'Tamil' : 'English');
  };

  const navLabels = {
    English: {
      home: 'Home',
      latestEvents: 'Latest Events',
      model: 'Model',
      timeline: 'Timeline',
      achievements: 'Achievements',
      socialMedia: 'Social Media',
      party: 'Party',
      ideology: 'Ideology',
      history: 'History Of TDPP',
      organization: 'Organization Structure',
      representatives: 'Elected Representatives',
      resources: 'Resources',
      events: 'Events',
      media: 'Media',
      manifesto: 'Election Manifesto',
      voice: 'Voice to Recover',
      rights: 'Rights',
      gallery: 'Gallery',
      formC7: 'Form C7-General Election 2024',
      formC2: 'Form C2-General Election 2024',
      partyName: 'Telangana Dravida Prajala Party',
    },
    Tamil: {
      home: 'முகப்பு',
      latestEvents: 'சமீபத்திய நிகழ்வுகள்',
      model: 'மாதிரி',
      timeline: 'காலவரிசை',
      achievements: 'சாதனைகள்',
      socialMedia: 'சமூக ஊடகம்',
      party: 'கட்சி',
      ideology: 'தத்துவம்',
      history: 'டிடிபிபியின் வரலாறு',
      organization: 'நிறுவல் அமைப்பு',
      representatives: 'தேர்ந்தெடுக்கப்பட்ட பிரதிநிதிகள்',
      resources: 'வளங்கள்',
      events: 'நிகழ்வுகள்',
      media: 'ஊடகம்',
      manifesto: 'தேர்தல் அறிக்கை',
      voice: 'மீட்டெடுக்கும் குரல்',
      rights: 'உரிமைகள்',
      gallery: 'காட்சியகம்',
      formC7: 'படிவம் சி7-பொது தேர்தல் 2024',
      formC2: 'படிவம் சி2-பொது தேர்தல் 2024',
      partyName: 'தெலுங்கானா திராவிட மக்களின் கட்சி',
    }
  };

  const labels = navLabels[language];

  return (
    <div className="Navbarr">
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={images} alt="Logo" />
          <span>{labels.partyName}</span>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <span>{labels.home}</span>
            <div className="dropdown">
              <a href="#home1">{labels.latestEvents}</a>
              <a href="#home2">{labels.model}</a>
              <a href="#home3">{labels.timeline}</a>
              <a href="#home4">{labels.achievements}</a>
              <a href="#home5">{labels.socialMedia}</a>
            </div>
          </li>
          <li className="navbar-item">
            <span>{labels.party}</span>
            <div className="dropdown">
              <a href="#party1">{labels.ideology}</a>
              <a href="#party2">{labels.history}</a>
              <a href="#party3">{labels.organization}</a>
              <a href="#party4">{labels.representatives}</a>
            </div>
          </li>
          <li className="navbar-item">
            <a href="#achievements">{labels.achievements}</a>
          </li>
          <li className="navbar-item">
            <span>{labels.resources}</span>
            <div className="dropdown">
              <a href="#resources1">{labels.events}</a>
              <a href="#resources2">{labels.media}</a>
              <a href="#resources3">{labels.manifesto}</a>
              <a href="#resources4">{labels.voice}</a>
              <a href="#resources5">{labels.rights}</a>
              <a href="#resources6">{labels.gallery}</a>
              <a href="#resources7">{labels.formC7}</a>
              <a href="#resources8">{labels.formC2}</a>
            </div>
          </li>
        </ul>
        <button className="language-btn" onClick={handleLanguageChange}>
          {language}
        </button>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
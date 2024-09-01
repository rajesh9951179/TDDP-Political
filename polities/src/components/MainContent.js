
import React from 'react';
import './Footer.css';
import BadgeImage from '../images/BadgeImage.png';
const MainContent = () => {
    return (
      <div className="container">
        <div className="content">
          <div className="image-container">
            <img src={BadgeImage} alt="BJP Badge" className="badge-image" />
          </div>
          <div className="text-content">
            <h1>JOIN THE JOURNEY</h1>
            <p>Be the change you want to see.</p>
            <h2>JOIN <span className="highlight">TDPP</span></h2>
            <p>
              BJP is devoutly committed to building a strong and developed India which is unimaginable without the trust and the unflinching support of the people of India. Join us and be part of the unprecedented transformation that is changing the lives of all sections of society for better. Together, let's build 'Ek Bharat, Shreshtha Bharat' and witness the rise of New India under the charismatic leadership of PM Shri Narendra Modi.
            </p>
            <div className="buttons">
              <button className="btn volunteer">JOIN AS VOLUNTEER</button>
              <button className="btn member">BECOME A MEMBER</button>
              <button className="btn donation">MAKE A DONATION</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default MainContent
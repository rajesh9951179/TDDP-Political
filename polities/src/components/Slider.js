
import './Slider.css';
import React, { useState, useEffect } from 'react';
import Image1 from '../images/Image1.jpeg'
import Image4 from '../images/Image4.jpeg'
import Image6 from '../images/Image6.jpeg'

const imagesList = [
  Image1,
  Image4,
  Image6,
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesList.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider-container">
      <div 
        className="slider" 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {imagesList.map((image, index) => (
          <div
            key={index}
            className="slide"
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
      <div className="dots-container">
        {/* Right side dots, no functionality */}
        <div className="dots-right">
          {imagesList.map((_, index) => (
            <span
              key={index}
              className="dot" // No onClick handler
            />
          ))}
        </div>
        {/* Bottom dots with functionality */}
        <div className="dots-bottom">
          {imagesList.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
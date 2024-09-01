import React, { useState } from 'react';
import './Slider.css';
import image1 from './images/Image1.jpeg';
import image2 from '.images/Image4.jpeg';
import gridImage1 from './images/image6.jpeg';
// import gridImage2 from '../../Images/gridImage2.jpg';
// import gridImage3 from '../../Images/gridImage1.jpg';

function Slider2() {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [image1, image2, ''];

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="slider">
      <div className="left-dots">
        {images.map((image, index) => (
          <div
            key={index}
            className={`dot ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
      <div className="images">
        {images.map((image, index) => (
          <div
            key={index}
            className={`image ${activeIndex === index ? 'active' : ''}`}
            style={{
              backgroundColor: index === 2 ? 'skyblue' : '',
              backgroundImage: image ? `url(${image})` : '',
            }}
          >
            {index === 2 && (
              <div className="grid-container">
                <div className="grid-item">
                  <div className="grid-image-container">
                    <img src={image1} alt="Grid Image 1" style={{ width: 160, height: 160, borderRadius: '50%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ fontSize: 50, fontWeight: 800 }}>
                    MAKE A DONITAION TOWARDS NEW INDIAN'S CREATIONS
                  </div>
                </div>
                <div className="grid-divider" />

                <div className="grid-item" style={{ width: '45%' }}>
                  <div className="grid-image-container">
                    <img src={image1} alt="Grid Image 2" style={{ width: 160, height: 160, borderRadius: '50%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ fontSize: 30, fontWeight: 520 }}>
                     Support TDPP With Micro-Donations
                     <h2 style={{ fontSize: 28, fontWeight: 400 ,margin:'5px'}}>Support the party of indians' aspirations</h2>
                     <br/>
                     <h3 style={{ fontSize: 28, fontWeight: 400 }}>Support PM Modi in building a New India</h3>
                     <br/>
                     <h2 style={{ fontSize: 28, fontWeight: 400, paddingLeft: '30px' }}>Support with donations between  <br/><h2 style={{ fontSize: 28, fontWeight: 400, paddingLeft: '100px',margin: '10px' }}>₹<b>5</b> to ₹<b>1,000</b></h2></h2>
                    
                  </div>
                </div>
                <div className="grid-divider" />
                <div className="grid-item">
                  <div className="grid-image-container">
                    <img src={gridImage1} alt="Grid Image 3" style={{ width: 160, height: 160, borderRadius: '50%', objectFit: 'cover' }} />
                  </div>
                  <h1 style={{ fontSize: 58, fontWeight: 800, paddingLeft: '50px',margin:'10px' }}>DONATE</h1><h1 style={{ fontSize: 58, fontWeight: 800, paddingLeft: '95px' }}>NOW</h1>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="dots">
        {images.map((image, index) => (
          <div
            key={index}
            className={`dot ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider2;
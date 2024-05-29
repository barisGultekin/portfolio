import React, { useState, useRef, useEffect } from 'react';
import './Banner.css';

const Banner = ({ images }) => {
  const [speed, setSpeed] = useState(50);
  const [showPopup, setShowPopup] = useState(false);
  const [popupImage, setPopupImage] = useState(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 1;
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(scroll, speed);
    return () => clearInterval(interval);
  }, [speed]);

  const handleMouseEnter = () => {
    setSpeed(40); // Slows down the scroll speed on hover
  };

  const handleMouseLeave = () => {
    setSpeed(10); // Restores the scroll speed when hover ends
  };

  const handleImageClick = (image) => {
    setPopupImage(image);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setPopupImage(null);
  };

  return (
    <div>
      <div
        className="banner"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={scrollRef}
      >
        <div className="banner-inner">
          {images.concat(images).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Banner ${index}`}
              onClick={() => handleImageClick(image)}
              className="banner-image"
            />
          ))}
        </div>
      </div>
      {showPopup && (
        <div className="popup" onClick={handleClosePopup}>
          <img src={popupImage} alt="Popup" className="popup-image" />
          <button className="close-button" onClick={handleClosePopup}>
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default Banner;

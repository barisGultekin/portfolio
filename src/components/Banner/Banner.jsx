import React, { useState, useRef, useEffect, useCallback } from "react";
import "./Banner.css";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const Banner = ({ images }) => {
  const [speed, setSpeed] = useState(10);
  const [showPopup, setShowPopup] = useState(false);
  const [popupImageIndex, setPopupImageIndex] = useState(null);
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

  const handleImageClick = (index) => {
    setPopupImageIndex(index);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setPopupImageIndex(null);
  };

  const handleNextImage = useCallback(() => {
    setPopupImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const handlePrevImage = useCallback(() => {
    setPopupImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (showPopup) {
        if (event.key === "ArrowRight") {
          handleNextImage();
        } else if (event.key === "ArrowLeft") {
          handlePrevImage();
        } else if (event.key === "Escape") {
          handleClosePopup();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showPopup, handleNextImage, handlePrevImage]);

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
            <div className="banner-imageContainer" key={index}>
              <img
                src={image.src}
                alt={`Banner ${index}`}
                onClick={() => handleImageClick(index % images.length)}
                className="banner-image"
              />
              <div className="banner-tag-container">{image.title}</div>
            </div>
          ))}
        </div>
      </div>
      {showPopup && (
        <div className="popup" onClick={handleClosePopup}>
          <img
            src={images[popupImageIndex].src}
            alt="Popup"
            className="popup-image"
          />
          <button className="banner-close-button" onClick={handleClosePopup}>
            <IoClose />
          </button>
          <button
            className="prev-button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrevImage();
            }}
          >
            <FaChevronLeft />
          </button>
          <button
            className="next-button"
            onClick={(e) => {
              e.stopPropagation();
              handleNextImage();
            }}
          >
            <FaChevronRight />
          </button>
          <div className="popup-tag-container">
            {images[popupImageIndex].title}
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;

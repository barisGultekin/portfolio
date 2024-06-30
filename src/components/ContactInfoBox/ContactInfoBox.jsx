import React, { useState, useEffect } from 'react';
import { FaRegEnvelope } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { TbLocation } from "react-icons/tb";
import './ContactInfoBox.css';

function ContactInfoBox({ type, content }) {
  const [tooltipText, setTooltipText] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (type === 'email') {
      setTooltipText('Send');
    } else if (type === 'phone' && isMobile) {
      setTooltipText('Call');
    } else {
      setTooltipText('Copy');
    }
  }, [type, isMobile]);

  const handleCopy = () => {
    navigator.clipboard.writeText(content).then(() => {
      setTooltipText('Copied!');
      setTimeout(() => {
        if (type === 'phone' && isMobile) {
          setTooltipText('Call');
        } else {
          setTooltipText('Copy');
        }
      }, 2000);
    });
  };

  const renderIcon = () => {
    switch (type) {
      case 'email':
        return <FaRegEnvelope />;
      case 'phone':
        return <FiPhone />;
      case 'location':
        return <TbLocation />;
      default:
        return null;
    }
  };

  const handleClick = (e) => {
    if (type === 'phone' && isMobile) {
      window.location.href = `tel:${content}`;
    } else if (type !== 'email') {
      handleCopy();
    }
  };

  const contentElement = (
    <div className="contactInfoBox" onClick={handleClick}>
      {renderIcon()}
      <p>{content}</p>
      <span className="tooltiptext">{tooltipText}</span>
    </div>
  );

  return type === 'email' ? (
    <a href={`mailto:${content}`} className="contactInfoBox-link">
      {contentElement}
    </a>
  ) : (
    contentElement
  );
}

export default ContactInfoBox;

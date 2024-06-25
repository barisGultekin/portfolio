import React, { useState } from 'react';
import { FaRegEnvelope } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { TbLocation } from "react-icons/tb";
import './ContactInfoBox.css';

function ContactInfoBox({ type, content }) {
  const [tooltipText, setTooltipText] = useState(type === 'email' ? 'Send' : 'Copy');

  const handleCopy = () => {
    navigator.clipboard.writeText(content).then(() => {
      setTooltipText('Copied!');
      setTimeout(() => {
        setTooltipText('Copy');
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
    if (type !== 'email') {
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

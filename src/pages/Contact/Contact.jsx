import React from "react";
import "./Contact.css";

import ContactForm from "../../components/ContactForm/ContactForm";
import DownloadPreviewButton from "../../components/DownloadButtons/DownloadPreviewButton/DownloadPreviewButton";
import ContactInfoBox from "../../components/ContactInfoBox/ContactInfoBox";


import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact">
      <h1 className="contact-title">Contact Info</h1>
      <p className="contact-desc">
        Feel free to get in touch with me for business inquiries,
        collaborations, or networking opportunities. Connect with me on social
        media, send me an email, or conveniently download my resume and
        portfolio here. Looking forward to hearing from you!
      </p>

      <div className="contact-aboutMe">
        <div className="contact-contactLinks-content">
          <div className="contact-header">
            <h2>Ali Barış GÜLTEKİN</h2>

            <div className="home-socialIcons">
              <a
                href="https://www.linkedin.com/in/alibarisgultekin"
                target="_blank"
                rel="noopener noreferrer"
                className="iconBox"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/barisGultekin"
                target="_blank"
                rel="noopener noreferrer"
                className="iconBox"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.behance.net/alibargltekin"
                target="_blank"
                rel="noopener noreferrer"
                className="iconBox"
              >
                <FaBehance />
              </a>
            </div>
          </div>
          <div className="contact-contactInfo">
            <ContactInfoBox type="email" content="alibarisgultekin@gmail.com" />
            <ContactInfoBox type="phone" content="+90 (534) 396 11 60" />
            <ContactInfoBox type="location" content="İzmir, Türkiye" />
          </div>
        </div>

        <div className="contact-downloads">
          <div className="contact-downloadButton">
            <DownloadPreviewButton title="Resume" keyword="resume" />
          </div>

          <div className="contact-downloadButton">
            <DownloadPreviewButton title="Portfolio" keyword="portfolio" />
          </div>
        </div>
      </div>

      <div className="contact-contactForm">
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;

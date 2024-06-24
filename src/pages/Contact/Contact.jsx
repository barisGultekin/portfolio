import React from "react";
import "./Contact.css";

import ContactForm from "../../components/ContactForm/ContactForm";
import DownloadPreviewButton from "../../components/DownloadButtons/DownloadPreviewButton/DownloadPreviewButton";

import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaRegEnvelope, FaBehance } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { TbLocation } from "react-icons/tb";

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
              <div className="iconBox">
                <FaLinkedinIn />
              </div>
              <div className="iconBox">
                <FaGithub />
              </div>
              <div className="iconBox">
                <FaBehance />
              </div>
            </div>
          </div>
          <div className="contact-contactInfo">
            <div className="contactInfoBox">
              <FaRegEnvelope />
              <p>alibarisgultekin@gmail.com</p>
            </div>
            <div className="contactInfoBox">
              <FiPhone />
              <p>+90 (534) 396 11 60</p>
            </div>
            <div className="contactInfoBox">
              <TbLocation />
              <p>İzmir, Türkiye</p>
            </div>
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

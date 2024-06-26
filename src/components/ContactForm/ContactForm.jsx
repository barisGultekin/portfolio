import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

import { IoClose } from "react-icons/io5";

const ContactForm = () => {
  const form = useRef();
  const [emailStatus, setEmailStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setEmailStatus("success");
        },
        (error) => {
          console.log("FAILED...", error.text);
          setEmailStatus("error");
        }
      )
      .finally(() => {
        setLoading(false);
      });

    e.target.reset();
  };

  return (
    <div className="contact-form-wrapper">
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <h2>Leave a quick message</h2>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea
            className="contactForm-textArea"
            name="message"
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <button type="submit" className="button" disabled={loading}>
          {loading ? <span className="loader"></span> : "Send"}
        </button>
        {emailStatus === "success" && (
          <div className="feedback-message success-message">
            <p>Your message has been sent successfully!</p>
            <IoClose
              className="feedback-closeButton"
              onClick={() => setEmailStatus("")}
            />
          </div>
        )}
        {emailStatus === "error" && (
          <div className="feedback-message error-message">
            <p>Failed to send your message. Please try again.</p>
            <IoClose
              className="feedback-closeButton"
              onClick={() => setEmailStatus("")}
            />
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;

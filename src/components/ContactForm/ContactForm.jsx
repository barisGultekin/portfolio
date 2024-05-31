import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

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
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    e.target.reset();
  };

  useEffect(() => {
    console.log("Service ID:", process.env.REACT_APP_EMAILJS_SERVICE_ID);
    console.log("Template ID:", process.env.REACT_APP_EMAILJS_TEMPLATE_ID);
    console.log("User ID:", process.env.REACT_APP_EMAILJS_USER_ID);
  }, []);

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
            name="message"
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <button type="submit" className="button">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

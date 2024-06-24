import React from "react";
import "./Footer.css";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-line"></div>
      <div className="footer-content">
        <p className="copyright">2024 © Ali Barış Gültekin</p>
        <p className="copyright">
          <Link to="privacy">Privacy</Link> and <Link to="terms">Terms</Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;

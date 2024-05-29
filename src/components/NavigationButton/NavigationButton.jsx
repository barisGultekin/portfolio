import React from "react";
import { Link } from "react-router-dom";
import "./NavigationButton.css";

function NavigationButton({ link, text }) {
  return (
    <Link to={`/${link}`} className="navButton">
      {text}
    </Link>
  );
}

export default NavigationButton;

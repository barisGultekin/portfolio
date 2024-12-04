import React from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa6";
import "./BackButton.css";

function BackButton() {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1); // Go back to the previous page
    } else {
      navigate("/"); // Navigate to home page by default
    }
  };

  return (
    <div onClick={handleBack} className="backButton">
      <FaChevronLeft /> <p>Back</p>
    </div>
  );
}

export default BackButton;
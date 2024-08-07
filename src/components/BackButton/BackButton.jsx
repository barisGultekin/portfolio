import React from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa6";
import "./BackButton.css";

function BackButton() {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(-1)} className="backButton">
      <FaChevronLeft /> <p>Back</p>
    </div>
  );
}

export default BackButton;

import React, { useState } from "react";
import "./components/ProjectPages.css";

import { useLocation } from "react-router-dom";

import BackButton from "../../components/BackButton/BackButton";

import Collaborator from "./components/Collaborator/Collaborator";

function Ardeo() {
  const location = useLocation();
  const prevPage = "/projects";

  const [selectedSection, setSelectedSection] = useState("overview");

  const renderSectionContent = () => {
    switch (selectedSection) {
      case "overview":
        return (
          <div>
            <h2>Overview</h2>
            <p>This project</p>
          </div>
        );
      case "branding":
        return (
          <div>
            <h2>Branding</h2>
            <p>
              Ardeo, derived from the Latin word for "spark," ensures that every
              lead is nurtured and ignited into a successful sale. The core
              concept centers around the abstraction of fire, symbolizing the
              potential of each lead and the dynamic process of sales.
            </p>
            <img src="" alt="" srcset="" />
          </div>
        );
      case "uiux":
        return (
          <div>
            <h2>UI/UX Design</h2>
            <h3>User Profile</h3>
            <h3>Pages</h3>
            <h3>Lead Tracking UX</h3>
            <h3>Data Analysis</h3>
          </div>
        );
      case "dev":
        return (
          <div>
            <h2>Front End Development</h2>
            <h3>Layout</h3>
            <h3>Routing</h3>
            <h3>Interactions</h3>
            <h3>Data Analytics Tools</h3>
          </div>
        );
      default:
        return <div>Select a section to display content.</div>;
    }
  };

  return (
    <div className="pp-container">
      <div className="pp">
        <div className="pp-header">
          <BackButton />

          <h1>Ardeo</h1>
          <p>
            Ardeo DDR (Data Driven Retail) is a web application designed to
            streamline lead tracking and enhance sales management tools for
            vendors and large companies with multiple retail shops or
            franchises. The application has features for lead tracking, activity
            logging, discount calculator and data analytics tools.
          </p>

          <br />

          <h4>COLLABORATORS</h4>
          <div className="collaborator-list">
            <Collaborator collaboratorKey={"ozan"} />
            <Collaborator collaboratorKey={"emirhan"} />
          </div>

          <br />

          <h4>SECTIONS</h4>
          <div className="sections">
            <button
              className={`section-button ${
                selectedSection === "overview" ? "active" : ""
              }`}
              onClick={() => setSelectedSection("overview")}
            >
              Overview
            </button>
            <button
              className={`section-button ${
                selectedSection === "branding" ? "active" : ""
              }`}
              onClick={() => setSelectedSection("branding")}
            >
              Branding
            </button>
            <button
              className={`section-button ${
                selectedSection === "uiux" ? "active" : ""
              }`}
              onClick={() => setSelectedSection("uiux")}
            >
              UI/UX Design
            </button>
            <button
              className={`section-button ${
                selectedSection === "dev" ? "active" : ""
              }`}
              onClick={() => setSelectedSection("dev")}
            >
              Development
            </button>
          </div>
        </div>
        <div className="pp-content">{renderSectionContent()}</div>
      </div>
    </div>
  );
}

export default Ardeo;

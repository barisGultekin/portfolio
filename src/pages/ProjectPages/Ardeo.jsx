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
        return <div>
          <h2>Overview</h2>
          <p>
            This project
          </p>
        </div>;
      case "branding":
        return <div>
          <h2>Branding</h2>
          <p>Ardeo comes from the latin word spark. Each lead in the app is represented by a spark that will succesfuly be lit
            when the sale is a win. The abstraction of fire is at the essence of the product.
          </p>
          <div>BRAND DESIGN IMAGE</div>
          <h3>Concept</h3>
          <p></p>
          <div>BOXES/WIDGET IMAGE</div>
          <h3>Logo</h3>
          <p></p>
          <div>LOGO IMAGE</div>
        </div>;
      case "uiux":
        return <div>
          <h2>UI/UX Design</h2>
          <h3>User Profile</h3>
          <h3>Pages</h3>
          <h3>Lead Tracking UX</h3>
          <h3>Data Analysis</h3>
        </div>;
      case "dev":
        return <div>
          <h2>Front End Development</h2>
          <h3>Layout</h3>
          <h3>Routing</h3>
          <h3>Interactions</h3>
          <h3>Data Analytics Tools</h3>
        </div>;
      default:
        return <div>Select a section to display content.</div>;
    }
  };

  return (
    <div className="pp">
      <div className="pp-header">
        <BackButton />

        <h1>Ardeo</h1>
        <p>Ardeo DDR (Data Driven Retail) is a web application that is primarily used by retail sales shop that requires a certain 
          amount of time until a sale is succesful. The application has features for lead tracking, activity logging, discount calculator 
          and data analytics tools.
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
  );
}

export default Ardeo;

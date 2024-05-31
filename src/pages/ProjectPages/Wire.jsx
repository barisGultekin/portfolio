import React, { useState } from "react";
import "./components/ProjectPages.css";

import BackButton from "../../components/BackButton/BackButton";

function Moin() {
  const [selectedSection, setSelectedSection] = useState("overview");

  const renderSectionContent = () => {
    switch (selectedSection) {
      case "overview":
        return (
          <div>
            <h2>Overview</h2>
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

          <h1>Title</h1>
          <p>
            Description
          </p>

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
          </div>
        </div>
        <div className="pp-content">{renderSectionContent()}</div>
      </div>
    </div>
  );
}

export default Moin;

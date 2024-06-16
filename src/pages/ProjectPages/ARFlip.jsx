import React, { useState, useEffect, useRef } from "react";
import "./components/ProjectPages.css";

import BackButton from "../../components/BackButton/BackButton";

import Collaborator from "./components/Collaborator/Collaborator";

function ARFlip() {
  const [selectedSection, setSelectedSection] = useState("overview");
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.classList.remove("fade-in");
      void contentRef.current.offsetWidth;
      contentRef.current.classList.add("fade-in");
    }
  }, [selectedSection]);

  const renderSectionContent = () => {
    switch (selectedSection) {
      case "overview":
        return (
          <div>
            <h2>Overview</h2>
            <p>HUDs, and the project</p>
            <div className="imgWrapper">
              <img
                className="pp-img"
                src="/assets/projectAssets/ARFlip/arflip-ss1.webp"
                alt="ardeo-homepage"
              />
            </div>
            <p>Device</p>
          </div>
        );
      case "uiux":
        return (
          <div>
            <h2>User Experience</h2>
            <p>
              Nisi tempor tempor ipsum enim ullamco. Culpa ea dolor qui
              excepteur eiusmod labore irure eiusmod cillum id. Sint occaecat
              amet nisi sunt duis ut eu laborum deserunt et labore. Sunt
              cupidatat est sit voluptate aute minim fugiat occaecat.
            </p>
            <h2>Components</h2>
            <h2>Alerts</h2>
            <p>notification</p>
            <p>warnings</p>
            <h2>Interactions</h2>
            <p>gestures</p>
            <p>voice feedback</p>
          </div>
        );
      case "prototype":
        return (
          <div>
            <h2>3D Design</h2>
            <p></p>
            <h2>Manufacturing</h2>
            <h2>Board & Sensors</h2>
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
          <BackButton className="pp-backButton" />
          <h1>AR Flip</h1>
          <p>
            Semi-finalist at the 2020 Big Bang Startup Challenge, ARFlip is A
            mountable car accessory that offers a head-up display by projecting
            critical driving information onto its glass screen. It includes
            gesture controls, allowing drivers to interact with the display
            hands-free, ensuring a safer and more seamless driving experience.
          </p>

          <h4>COLLABORATORS</h4>
          <div className="collaborator-list">
            <Collaborator
              collaboratorKey={"ozan"}
              colloboratorPart={"Embedded Engineer"}
            />
          </div>

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
                selectedSection === "uiux" ? "active" : ""
              }`}
              onClick={() => setSelectedSection("uiux")}
            >
              UI/UX Design
            </button>

            <button
              className={`section-button ${
                selectedSection === "prototype" ? "active" : ""
              }`}
              onClick={() => setSelectedSection("prototype")}
            >
              Prototype
            </button>
          </div>
        </div>

        <div className="fade-in" ref={contentRef}>
          <div className="pp-content">{renderSectionContent()}</div>
        </div>
      </div>
    </div>
  );
}

export default ARFlip;

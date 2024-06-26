import React, { useState, useEffect, useRef } from "react";
import "./components/ProjectPages.css";

import BackButton from "../../components/BackButton/BackButton";
import SectionNavigation from "./components/SectionNavigation/SectionNavigation";

function EnvSoc() {
  const [selectedSection, setSelectedSection] = useState("branding");
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
      case "branding":
        return (
          <div>
            <h2>Branding</h2>
            <b>Logo Designs</b>
            <div className="imgWrapper">
              <img
                className="pp-img"
                src={`${process.env.PUBLIC_URL}/assets/projectAssets/EnvSoc/envsoc-logo.webp`}
                alt="envsoc-logo"
              />
            </div>
            <b>Banner Designs</b>
            <div className="imgWrapper">
              <img
                className="pp-img"
                src={`${process.env.PUBLIC_URL}/assets/projectAssets/EnvSoc/envsoc-banners.webp`}
                alt="envsoc-banners"
              />
            </div>
          </div>
        );
      case "event":
        return (
          <div>
            <h2>Green Summit</h2>
            <b>Event Logo Design</b>
            <div className="imgWrapper">
              <img
                className="pp-img"
                src={`${process.env.PUBLIC_URL}/assets/projectAssets/EnvSoc/envsoc-summit.webp`}
                alt="envspoc-summit"
              />
            </div>
            <b>Stickers</b>
            <div className="imgWrapper">
              <img
                className="pp-img"
                src={`${process.env.PUBLIC_URL}/assets/projectAssets/EnvSoc/envsoc-stickers.webp`}
                alt="envsoc-stickers"
              />
            </div>
            <b>Poster</b>
            <div className="imgWrapper">
              <img
                className="pp-img"
                src={`${process.env.PUBLIC_URL}/assets/projectAssets/EnvSoc/envsoc-poster.webp`}
                alt="envsoc-poster"
              />
            </div>
            <b>Badges</b>
            <div className="imgWrapper">
              <img
                className="pp-img"
                src={`${process.env.PUBLIC_URL}/assets/projectAssets/EnvSoc/envsoc-badge.webp`}
                alt="envsoc-badge"
              />
            </div>
          </div>
        );
      default:
        return <div>Select a section to display content.</div>;
    }
  };

  const sections = [
    { keyword: "branding", title: "Branding" },
    { keyword: "event", title: "Green Summit" },
  ];

  return (
    <div className="pp-container">
      <div className="pp">
        <div className="pp-header">
          <BackButton className="pp-backButton" />
          <h1>IZTECH Environment Society</h1>
          <p>
            I designed the brand identity of Izmir Institute of Technology
            Environment Society. They work on environmental issues like clean
            waters, forest preservation and clean energy.
          </p>

          <br />

          <h4>SECTIONS</h4>
          <div className="sections">
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
                selectedSection === "event" ? "active" : ""
              }`}
              onClick={() => setSelectedSection("event")}
            >
              Green Summit
            </button>
          </div>
        </div>

        <div className="fade-in" ref={contentRef}>
          <div className="pp-content">{renderSectionContent()}</div>
          <SectionNavigation
            sections={sections}
            selectedSection={selectedSection}
            setSelectedSection={setSelectedSection}
          />
        </div>
      </div>
    </div>
  );
}

export default EnvSoc;

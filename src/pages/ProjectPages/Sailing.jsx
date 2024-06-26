import React, { useState, useEffect, useRef } from "react";
import "./components/ProjectPages.css";

import BackButton from "../../components/BackButton/BackButton";
import SectionNavigation from "./components/SectionNavigation/SectionNavigation";

function Sailing() {
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
            <div className="imgWrapper">
              <img
                className="pp-img"
                src={`${process.env.PUBLIC_URL}/assets/projectAssets/Sailing/sailing-logos.webp`}
                alt="sailing-logos"
              />
            </div>
            <div className="imgWrapper">
              <img
                className="pp-img"
                src={`${process.env.PUBLIC_URL}/assets/projectAssets/Sailing/sailing-poster.webp`}
                alt="sailing-poster"
              />
            </div>
            <div className="imgWrapper">
              <img
                className="pp-img"
                src={`${process.env.PUBLIC_URL}/assets/projectAssets/Sailing/sailing-concepts.webp`}
                alt="sailing-concepts"
              />
            </div>
          </div>
        );
        case "merch":
        return (
          <div>
            <h2>Merchandise</h2>
            <div className="imgWrapper">
              <img
                className="pp-img"
                src={`${process.env.PUBLIC_URL}/assets/projectAssets/Sailing/sailing-merchDesign.webp`}
                alt="sailing-merch"
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
    { keyword: "merch", title: "Merchandise" },
  ];

  return (
    <div className="pp-container">
      <div className="pp">
        <div className="pp-header">
          <BackButton className="pp-backButton" />
          <h1>IZTECH Sailing Club</h1>
          <p>
            As the president of the Izmir Institute of Technology Sailing Club
            and the captain of the racing team I designed our brand identity and
            merchandise.
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
                selectedSection === "merch" ? "active" : ""
              }`}
              onClick={() => setSelectedSection("merch")}
            >
              Merchandise
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

export default Sailing;

import React, { useState, useEffect, useRef } from "react";
import "./components/ProjectPages.css";

import BackButton from "../../components/BackButton/BackButton";

import Collaborator from "./components/Collaborator/Collaborator";

function Sailing() {
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
            <p>
              Nisi tempor tempor ipsum enim ullamco. Culpa ea dolor qui
              excepteur eiusmod labore irure eiusmod cillum id. Sint occaecat
              amet nisi sunt duis ut eu laborum deserunt et labore. Sunt
              cupidatat est sit voluptate aute minim fugiat occaecat.
            </p>
            <p>
              Culpa officia aute nulla id occaecat. Anim non ut sint sunt et
              officia elit proident. Exercitation commodo aliquip adipisicing ad
              sit fugiat incididunt sint.
            </p>
            <p>
              Est est magna commodo elit consectetur commodo pariatur culpa do
              commodo eu. Deserunt veniam reprehenderit dolore adipisicing esse
              fugiat deserunt veniam aliqua aliquip adipisicing aliquip.
              Proident tempor commodo aliquip ad eiusmod laborum ex ad. Id nulla
              labore consectetur pariatur nulla labore nostrud aute Lorem nulla
              cupidatat adipisicing amet qui. Enim proident sint nulla do
              ullamco irure commodo quis ut ipsum in nisi.
            </p>
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
          <h1>IZTECH Sailing Club</h1>
          <p>
            Excepteur esse occaecat ullamco velit amet voluptate sit est dolor
            cupidatat non reprehenderit. Ea culpa irure esse incididunt irure
            est mollit excepteur do commodo. Lorem qui nostrud velit fugiat.
            Cupidatat ut cillum quis minim aliqua ut dolore duis enim nostrud
            ex. Sunt dolor adipisicing eu nostrud. Ea est irure dolore cupidatat
            laboris excepteur excepteur ut ullamco.
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

        <div className="fade-in" ref={contentRef}>
          <div className="pp-content">{renderSectionContent()}</div>
        </div>
      </div>
    </div>
  );
}

export default Sailing;

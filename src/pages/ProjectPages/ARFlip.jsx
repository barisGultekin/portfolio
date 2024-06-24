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
            <p>
              Main objective of a Head-up Display is to simplify the driving
              experience and allowing drivers to be more focused on the road.
            </p>
            <p>
              Thus, the design of AR-Flip is lean and simplistic. Only
              displaying the crucial info relative to the driver at any given
              time is a critical requirement.
            </p>
            <div className="imgWrapper">
              <img
                className="pp-img"
                src={`${process.env.PUBLIC_URL}/assets/projectAssets/ARFlip/arflip-ss1.webp`}
                alt="arflip-screenshot"
              />
            </div>
            <p>
              The device aims to reflect light towards the drivers point of view
              to minizmize the time lost during activities like checking fuel
              levels, navigation, media players and gauges.
            </p>
            <div className="imgWrapper">
              <img
                className="pp-img"
                src={`${process.env.PUBLIC_URL}/assets/projectAssets/ARFlip/arflip-device.webp`}
                alt="arflip-screenshot"
              />
            </div>
          </div>
        );
      case "uiux":
        return (
          <div>
            <h2>User Interface</h2>
            <p>
              Device informs the driver with small components reflected on
              points where user can still focus on the road.
            </p>
            <h2>Components</h2>
            <div className="imgWrapper">
              <img
                className="pp-img"
                src={`${process.env.PUBLIC_URL}/assets/projectAssets/ARFlip/arflip-components.webp`}
                alt="arflip-components"
              />
            </div>
            <h2>Alerts</h2>
            <p>
              Each alert only stays in screen for a certain amount of time
              depending on their importance for a seamless driving experience.
            </p>
            <div className="imgWrapper">
              <img
                className="pp-img"
                src={`${process.env.PUBLIC_URL}/assets/projectAssets/ARFlip/arflip-notification.webp`}
                alt="arflip-gif"
              />
            </div>
          </div>
        );
      case "interaction":
        return (
          <div>
            <h2>Interactions</h2>
            <p>
              Drivers can interact with the device without giving their
              attention out of the road. The sensors on it allows for simple
              gesture controls that can be used to interact with media, answer
              calls or confirm automated actions.
            </p>
            <div className="imgWrapper">
              <img
                className="pp-img"
                src={`${process.env.PUBLIC_URL}/assets/projectAssets/ARFlip/arflip-interactions.webp`}
                alt="arflip-mediaIndicator"
              />
            </div>
          </div>
        );
      case "prototype":
        return (
          <div>
            <h2>3D Design</h2>
            <p>
              Design of the devices went through a series of iterations for
              ergonomic reasons and manufacturing limitations.
            </p>
            <div className="imgWrapper">
              <img
                className="pp-img"
                src={`${process.env.PUBLIC_URL}/assets/projectAssets/ARFlip/arflipVersions.webp`}
                alt="arflip-versions"
              />
            </div>
            <h2>Manufacturing</h2>
            <p>
              I designed this device in a way that it can be manufactured with
              aluminium plates during the research and development process.
            </p>
            <div className="imgWrapper">
              <img
                className="pp-img"
                src={`${process.env.PUBLIC_URL}/assets/projectAssets/ARFlip/arflipCAD.webp`}
                alt="arflip-cad"
              />
            </div>
            <h2>Board & Sensors</h2>
            <p>
              An ESP32 microcontroller board, two optical sensors and an optical
              reflector sits inside the packaging.
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
              Interface Design
            </button>

            <button
              className={`section-button ${
                selectedSection === "interaction" ? "active" : ""
              }`}
              onClick={() => setSelectedSection("interaction")}
            >
              Interaction Design
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

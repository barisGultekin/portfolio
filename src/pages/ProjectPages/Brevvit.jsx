import React, { useState, useEffect, useRef } from "react";
import "./components/ProjectPages.css";

import BackButton from "../../components/BackButton/BackButton";

function Brevvit() {
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
            <br></br>
            <h2>Overview</h2>
            <p>
              The brevvit application is designed to integrate seamlessly with a
              series of kitchen devices, enabling users to efficiently prepare
              beverages like tea, milk, and smoothies.
            </p>
            <p>
              Developed in collaboration with industrial designers, brevvit
              harnesses mobile technology and user-centered design to enhance
              the everyday kitchen experience.
            </p>
            <div className="imgWrapper">
              <img
                className="pp-img"
                src="/assets/projectAssets/brevvit/brevvit-introSS.webp"
                alt="brevvit-intro"
              />
            </div>
            <br></br>
            <h2>Design Process</h2>
            <p>
              The design focuses on a clean and intuitive user interface that
              reflects a modern look, appealing particularly to active,
              health-conscious individuals. The collaborative effort between
              engineering and design ensured that both functional and aesthetic
              requirements were met, creating a user-friendly and visually
              appealing application.
            </p>

            <div className="imgWrapper">
              <img
                className="mobileSS"
                src="/assets/projectAssets/brevvit/brevvitux.gif"
                alt="brevvitux-gif"
              />
            </div>
          </div>
        );
      case "mobile":
        return (
          <div>
            <h2>Mobile App</h2>

            <br></br>

            <b>User Profile Customization & Connectivity</b>
            <p>
              Users can configure their device settings and easily connect their
              devices to their smart phones with a familiar and intuitive
              interface.
            </p>
            <p>
              With devices connected, users can set goals for various plans and
              diets they are applying.
            </p>
            <div className="imgWrapper">
              <img
                className="pp-img"
                src="/assets/projectAssets/brevvit/brevvit-config.webp"
                alt="brevvit-configure-screens"
              />
            </div>

            <br></br>

            <b>Dynamic Recipe Database</b>
            <p>
              Application has a database for healthy recipes for user's
              conveniece. However, it is very easy to customize the settings for
              a spesific recipe or personal needs.
            </p>

            <div className="imgWrapper">
              <img
                className="pp-img"
                src="/assets/projectAssets/brevvit/brevvit-recipes.webp"
                alt="brevvit-recipe-screens"
              />
            </div>
          </div>
        );
      case "ondevice":
        return (
          <div>
            <h2>On-device Screens</h2>
            <p>
              Each kitchen device features its own interactive display that
              syncs with the mobile app, allowing users to select or customize
              recipes directly from the device.
            </p>
            <p>
              Devices can store preset configurations, making repeated
              preparations simpler and faster.
            </p>
            <div className="imgWrapper">
              <img
                className="pp-img"
                src="/assets/projectAssets/brevvit/brevvit-devices.webp"
                alt="brevvit-ondevice"
              />
            </div>
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

          <h1>brevvit</h1>
          <p>
            This project is made for a course on Human Computer Interaction
            Design. It was made in collaboration in Industrial Design Students.
            The user interfaces are designed for my project mates'
            athlete-centric kitchen gadget designs.
          </p>

          <br />

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
                selectedSection === "mobile" ? "active" : ""
              }`}
              onClick={() => setSelectedSection("mobile")}
            >
              Mobile UI
            </button>
            <button
              className={`section-button ${
                selectedSection === "ondevice" ? "active" : ""
              }`}
              onClick={() => setSelectedSection("ondevice")}
            >
              Device UI
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

export default Brevvit;

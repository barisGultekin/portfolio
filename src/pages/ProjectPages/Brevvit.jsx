import React, { useState } from "react";
import "./components/ProjectPages.css";

import BackButton from "../../components/BackButton/BackButton";

function Brevvit() {
  const [selectedSection, setSelectedSection] = useState("overview");

  const renderSectionContent = () => {
    switch (selectedSection) {
      case "overview":
        return (
          <div>
            <p>Brevvit has X main functions.</p>
            <br></br>
            <h2>User Profile</h2>
            <p>Sporty people</p>
            <br></br>
            <h2>Design Process</h2>
            <p>Look and feel of the app</p>
          </div>
        );
      case "mobile":
        return (
          <div>
            <h2>Mobile App</h2>
            <p>
              Mobile app of brevvit allows users to connect to their kitchen
              tools via bluetooth to make them work in certain ways that would
              allow them to make their tea, smoothie or milk.
            </p>
            <div className="imgWrapper">
              <img
                className="mobileSS"
                src="/assets/projectAssets/brevvit/brevvitux.gif"
                alt="brevvitux-gif"
              />
            </div>
            <p>
              The application contains a database of recipes that has
              ingredients, cooking techniques and nutrients. Users can browse
              recipes to meet their health goals or create custom configurations
              for their drinks.
            </p>
            <br></br>
            <h3>Preperation Process</h3>
            <p>
              User's can see the progress of their drink in real time and be
              notified when their drink is ready. Also they have the option to
              keep it warm before they are able to pick it up.
            </p>
          </div>
        );
      case "ondevice":
        return (
          <div>
            <h2>On-device Screens</h2>
            <p>
              Each brevvit product has their own screens that allow users to
              directly interact with the product. They can define preset recipes
              from the mobile app for future use.
            </p>
            <div className="imgWrapper">
              <img
                className="brevvitODimg"
                src="/assets/projectAssets/brevvit/brevvitDeviceScreens.webp"
                alt="brevvitux-gif"
              />
            </div>
            <p></p>
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
        <div className="pp-content">{renderSectionContent()}</div>
      </div>
    </div>
  );
}

export default Brevvit;

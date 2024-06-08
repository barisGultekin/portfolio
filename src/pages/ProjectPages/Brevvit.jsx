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
              beverages like tea, milk, and smoothies. Developed in
              collaboration between computer engineering and industrial design
              disciplines, brevvit harnesses mobile technology and user-centered
              design to enhance the everyday kitchen experience.
            </p>
            <br></br>
            <h2>Key Functions</h2>
            <br></br>
            <b>User Profile Customization:</b>
            <p>
              Tailored for sporty individuals, Brevvit allows users to input and
              track health-related goals directly from their mobile device.
            </p>
            <br></br>
            <b>Dynamic Recipe Database:</b>
            <p>
              Equipped with a comprehensive database, the app offers a variety
              of recipes that provide detailed nutritional information,
              ingredients needed, and cooking methods. Bluetooth Device
            </p>
            <br></br>
            <b>Connectivity:</b>
            <p>
              Users can connect to their kitchen tools via Bluetooth, enabling
              them to automate the beverage-making process according to their
              preferences.
            </p>
            <br></br>
            <h2>Design Process</h2>
            <p>
              The design of Brevvit focuses on a clean and intuitive user
              interface that reflects a modern and streamlined look, appealing
              particularly to active, health-conscious individuals. The
              collaborative effort between engineering and design ensured that
              both functional and aesthetic requirements were met, creating a
              user-friendly and visually appealing application.
            </p>
          </div>
        );
      case "mobile":
        return (
          <div>
            <h2>Mobile App</h2>
            <p>
              Voluptate officia fugiat commodo non incididunt incididunt id. Ut
              officia mollit minim eu aliqua eu ad est nostrud ullamco
              exercitation et veniam veniam. Magna in nulla fugiat adipisicing
              aute aliqua proident aute ex esse consequat pariatur sunt ut.
              Nulla et ipsum id cupidatat nulla. Est velit nisi enim veniam ex
              aliqua aliquip pariatur. Laboris sit dolore aliqua pariatur enim
              esse non sunt consectetur. Reprehenderit irure magna magna
              occaecat.
            </p>
            <div className="imgWrapper">
              <img
                className="mobileSS"
                src="/assets/projectAssets/brevvit/brevvitux.gif"
                alt="brevvitux-gif"
              />
            </div>
            <h2>Remote Control and Customization</h2>
            ADD DEVICE
            <p>
              Remote Control and Customization: The app allows users to operate
              their kitchen devices remotely, set up custom drink preparations,
              and save their favorite configurations.
            </p>
            <h2>Real-Time Monitoring</h2>
            RECIPES & PREP SCREEN
            <p>
              Users can track the progress of their drinks in real time, with
              notifications to alert them when their beverage is ready. Options
              to keep the drink warm provide added convenience.
            </p>
            <p>
              The application contains a database of recipes that has
              ingredients, cooking techniques and nutrients. Users can browse
              recipes to meet their health goals or create custom configurations
              for their drinks.
            </p>
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
                src="/assets/projectAssets/brevvit/brevvitDeviceScreens.webp"
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

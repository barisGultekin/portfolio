import React, { useState, useEffect, useRef } from "react";
import "./components/ProjectPages.css";

import BackButton from "../../components/BackButton/BackButton";

function Moin() {
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
              WIRE is an innovative web application developed to address the
              specific needs of organizing and managing sports events,
              particularly for college students. The project emerged from a
              clear demand within campus environments where managing and
              participating in sports events were inefficient and disorganized.
              Developed using React.js, WIRE streamlines the event creation,
              discovery, and participation process, making it easier for
              students to engage in sporting activities.
            </p>
            <div className="imgWrapper">
              <img
                className="pp-img"
                src="/assets/projectAssets/Wire/wireHome.webp"
                alt="WIRE homepage"
              />
            </div>
            <p>
              The application targets college students interested in sports,
              facilitating them to easily create, manage, and participate in
              events. WIRE integrates intuitive interfaces that allow for quick
              and easy navigation and event management.
            </p>
            <div className="imgWrapper">
              <img
                className="pp-img"
                src="/assets/projectAssets/Wire/wireOverview.webp"
                alt="WIRE homepage"
              />
            </div>
          </div>
        );
      case "design":
        return (
          <div>
            <h2>UI/UX Design</h2>
            <br></br>
            <h3>User Profile</h3>
            <p>
              Designed primarily for college students, the UI is clean and
              straightforward, emphasizing usability and accessibility. The
              interface supports rapid interaction to fit into the active
              lifestyles of its users.
            </p>
            <h3>Event Management</h3>
            <p>
              Users can seamlessly create and manage events with minimal steps,
              reducing the learning curve and enhancing user engagement. The
              design integrates a calendar to track events and manage
              participation effectively.
            </p>
            <div className="imgWrapper">
              <img
                className="pp-img"
                src="/assets/projectAssets/Wire/wireEvent.webp"
                alt="WIRE event management UI"
              />
            </div>
          </div>
        );
      case "development":
        return (
          <div>
            <h2>Development</h2>
            <br></br>
            <h3>Front End</h3>
            <p>
              Employing React.js, the development approach was modular, creating
              reusable components that ensure consistency throughout the
              application while also facilitating scalability.
            </p>
            <div className="imgWrapper">
              <img
                className="pp-img reduceImgSize"
                src="/assets/projectAssets/Wire/wireComponents.webp"
                alt="Development process"
              />
            </div>
            <h3>Real-Time Interactivity</h3>
            <p>
              The application supports real-time event updates, critical for the
              dynamic environment of college sports events. This feature allows
              users to receive instant notifications about event changes and new
              opportunities.
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
          <BackButton />

          <h1>WIRE</h1>
          <p>
            This project is made as the final assignment of a course on Human
            Computer Interaction design. The application allows users to create
            and join local sporting events.
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
            <button
              className={`section-button ${
                selectedSection === "design" ? "active" : ""
              }`}
              onClick={() => setSelectedSection("design")}
            >
              UI/UX Design
            </button>
            <button
              className={`section-button ${
                selectedSection === "development" ? "active" : ""
              }`}
              onClick={() => setSelectedSection("development")}
            >
              Development
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

export default Moin;

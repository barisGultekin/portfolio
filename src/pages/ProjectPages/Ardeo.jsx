import React, { useState, useEffect, useRef } from "react";
import "./components/ProjectPages.css";

import BackButton from "../../components/BackButton/BackButton";
import Collaborator from "./components/Collaborator/Collaborator";
import SectionNavigation from "./components/SectionNavigation/SectionNavigation";

import { FaLink } from "react-icons/fa6";

function Ardeo() {
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
              The project began in response to the needs identified by the BSH
              Group's sales team. BSH, the parent company of Bosch and Siemens,
              recognized that their retail sales processes were not effectively
              managed with existing CRM software solutions.
            </p>
            <div className="imgWrapper">
              <img
                className="pp-img"
                src={`${process.env.PUBLIC_URL}/assets/projectAssets/Ardeo/ardeoOverview.webp`}
                alt="ardeo-homepage"
              />
            </div>
            <p>
              In collaboration with their sales team, I designed a sales
              software tailored specifically for retailers. This solution
              enables sales personnel at the retail level to efficiently track
              leads, recall customer details, and provide optimal offers. The
              system not only streamlines the sales process but also generates
              valuable data that can be utilized by executives at BSH Group or
              the retailer companies. Additionally, I developed interactive
              statistical tools that integrate seamlessly into their operational
              processes.
            </p>
          </div>
        );
      case "branding":
        return (
          <div>
            <h2>Branding</h2>
            <p>
              Ardeo, derived from the Latin word for "spark," ensures that every
              lead is nurtured and ignited into a successful sale. The core
              concept centers around the abstraction of fire, symbolizing the
              potential of each lead and the dynamic process of sales.
            </p>
            <p>
              I designed a designated font for the brand. That is aligned with
              the structure of the UI which consist of bento box style layouts
              and box-shaped widgets.
            </p>
            <div className="imgWrapper">
              <img
                className="pp-img"
                src={`${process.env.PUBLIC_URL}/assets/projectAssets/Ardeo/ardeoBrandLogo.webp`}
                alt="ardeo-homepage"
              />
            </div>
            <h3>Concept Design</h3>
            <p>
              The concept of boxes represent the versatility of the program and
              its ease of use. The first tool of Ardeo is DDR (Data Driven
              Retail). You can see that the concept can be conveyed into a suite
              of different tools.
            </p>
            <div className="imgWrapper">
              <img
                className="pp-img"
                src={`${process.env.PUBLIC_URL}/assets/projectAssets/Ardeo/ardeoBrandDDR.webp`}
                alt="ardeo-homepage"
              />
            </div>
          </div>
        );
      case "uiux":
        return (
          <div>
            <h2>UI/UX Design</h2>
            <br></br>
            <h3>User Profile</h3>
            <p>
              The primary users of this application are sales representatives in
              retail shops. A critical aspect of the user experience is its
              intuitive design, requiring no prior training. The application
              must be as user-friendly as commonly used social media apps.
            </p>
            <h3>Main Functions</h3>
            <p>
              The application offers four main functions: lead tracking, offer
              creation, activity tracking, and data analysis. All other
              components and functionalities support these core functions.
            </p>
            <h3>Lead Tracking</h3>
            <p>
              Lead tracking is the primary function. Each potential sale is
              represented as a lead, with the entire sales process documented
              within this main component. Offers and activities are subordinate
              to leads, and data analysis tools derive their outputs from these
              leads.
            </p>
            <div className="imgWrapper">
              <img
                className="pp-img"
                src={`${process.env.PUBLIC_URL}/assets/projectAssets/Ardeo/ardeoUI-1.webp`}
                alt="ardeo-homepage"
              />
            </div>
            <p>
              Creating a lead quickly is another critical requirement. The lead
              creation form is designed the keep the amount of clicks made by
              the user to the minimum.
            </p>
            <div className="imgWrapper">
              <img
                className="pp-img"
                src={`${process.env.PUBLIC_URL}/assets/projectAssets/Ardeo/ardeoUI-2.webp`}
                alt="ardeo-homepage"
              />
            </div>
            <h3>Offer Creation</h3>
            <p>
              The allowance structure for franchise-based retailers can be
              complex, involving multiple bundle allowances and single allowance
              combinations for each offer. DDR processes allowance data to
              automatically generate the optimal offer.
            </p>
            <div className="imgWrapper">
              <img
                className="pp-img"
                src={`${process.env.PUBLIC_URL}/assets/projectAssets/Ardeo/ardeoUI-3.webp`}
                alt="ardeo-homepage"
              />
            </div>
            <p>
              This interface demands the storage of a substantial amount of data
              in one location for quick overview and analysis.
            </p>
            <h3>Activity Tracking</h3>
            <p>
              Activity tracking is particularly useful for sales
              representatives, enabling them to monitor their previous work and
              design tailored sales strategies for each lead. It also measures
              their performance, which can be communicated to executives through
              KPIs.
            </p>
            <div className="imgWrapper">
              <img
                className="pp-img"
                src={`${process.env.PUBLIC_URL}/assets/projectAssets/Ardeo/ardeoUI-4.webp`}
                alt="ardeo-homepage"
              />
            </div>
            <h3>Data Analysis</h3>
            <p>
              All data generated from the sales process can be easily viewed
              through the analytics tools. These tools are categorized into
              three main sections, each allowing intuitive filtering with
              multiple parameters.
            </p>
            <div className="imgWrapper">
              <img
                className="pp-img"
                src={`${process.env.PUBLIC_URL}/assets/projectAssets/Ardeo/ardeoUI-5.webp`}
                alt="ardeo-homepage"
              />
            </div>
          </div>
        );
      case "dev":
        return (
          <div>
            <h2>Front End Development</h2>
            <br></br>
            <h3>Component Library</h3>
            <p>
              Collaborated with a fellow developer to implement the visual
              design of the application. We initiated the process by
              constructing a component library, employing modular design
              principles to ensure reusability and scalability. This library
              served as the foundational UI toolkit across the application.
            </p>
            <div className="imgWrapper">
              <img
                className="pp-img"
                src={`${process.env.PUBLIC_URL}/assets/projectAssets/Ardeo/ardeoLibrary.webp`}
                alt="ardeo-homepage"
              />
            </div>
            <h3>Structure</h3>
            <p>
              Incorporated the React Router library to manage navigation across
              the application, coupled with manual state management techniques.
              Opted against using Redux to maintain simplicity and control over
              state transitions and data flow.
            </p>
            <h3>Interactions</h3>
            <p>
              To enhance user engagement, it was essential to integrate dynamic
              feedback mechanisms. Utilized Toaster.js for generating responsive
              notifications and alerts that inform users of system interactions,
              ensuring an intuitive feedback loop.
            </p>
            <p>
              The application also features numerous micro-interactions, such as
              animations and conditional styling, to provide a seamless and
              responsive user experience.
            </p>
            <h3>Data Analytics Tools</h3>
            <p>
              Developed the data visualization tools with the Chart.js library.
              This involved designing and implementing interactive charts and
              graphs that allow users to parse through complex datasets
              effortlessly. Special focus was placed on optimizing the
              performance of these visualizations to handle large volumes of
              data without compromising on interactivity or speed.
            </p>
            <div className="imgWrapper">
              <img
                className="pp-img"
                src={`${process.env.PUBLIC_URL}/assets/projectAssets/Ardeo/ardeoStatistics.webp`}
                alt="ardeo-homepage"
              />
            </div>
          </div>
        );
      default:
        return <div>Select a section to display content.</div>;
    }
  };

  const sections = [
    { keyword: "overview", title: "Overview" },
    { keyword: "branding", title: "Branding" },
    { keyword: "uiux", title: "UI/UX Design" },
    { keyword: "dev", title: "Development" },
  ];

  return (
    <div className="pp-container">
      <div className="pp">
        <div className="pp-header">
          <BackButton />
          <div className="pp-header-top">
            <h1>Ardeo</h1>
            <a
              href="https://ardeo.app"
              target="_blank"
              rel="noopener noreferrer"
              className="pp-demoLink"
            >
              <FaLink />
              <span className="tooltip">Visit Website</span>
            </a>
          </div>

          <p className="pp-mainDesc">
            Ardeo DDR (Data Driven Retail) is a web application designed to
            streamline lead tracking and enhance sales management tools for
            vendors and large companies with multiple retail shops or
            franchises. The application has features for lead tracking, activity
            logging, discount calculator and data analytics tools.
          </p>

          <br />

          <h4>COLLABORATORS</h4>
          <div className="collaborator-list">
            <Collaborator collaboratorKey={"ozan"} />
            <Collaborator collaboratorKey={"emirhan"} />
          </div>

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
                selectedSection === "branding" ? "active" : ""
              }`}
              onClick={() => setSelectedSection("branding")}
            >
              Branding
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
                selectedSection === "dev" ? "active" : ""
              }`}
              onClick={() => setSelectedSection("dev")}
            >
              Development
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

export default Ardeo;

import React, { useState, useEffect, useRef } from "react";
import "./components/ProjectPages.css";

import BackButton from "../../components/BackButton/BackButton";

import Collaborator from "./components/Collaborator/Collaborator";

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
              The project kickstarted with the demand coming from the BSH
              Group's sales team's needs. BSH is the parent company of Bosch and
              Siemens. They figured that the sales process in their retailers
              are not managed with CRM softwares.
            </p>
            <div className="imgWrapper">
              <img
                className="pp-img"
                src="/assets/projectAssets/Ardeo/ardeoOverview.webp"
                alt="ardeo-homepage"
              />
            </div>
            <p>
              So I worked with their sales team and designed a sales software
              spesific for retailers. Allowing the salespeople working at the
              retail to track their leads, remember the customers and give them
              the best offer. The whole process generates data that can be used
              by the BSH group's or the retailer companies' executives. I also
              designed and developed interactive statistics tools that fits
              right into their processes.
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
                src="/assets/projectAssets/Ardeo/ardeoBrandLogo.webp"
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
                src="/assets/projectAssets/Ardeo/ardeoBrandDDR.webp"
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
                src="/assets/projectAssets/Ardeo/ardeoUI-1.webp"
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
                src="/assets/projectAssets/Ardeo/ardeoUI-2.webp"
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
                src="/assets/projectAssets/Ardeo/ardeoUI-3.webp"
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
                src="/assets/projectAssets/Ardeo/ardeoUI-4.webp"
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
                src="/assets/projectAssets/Ardeo/ardeoUI-5.webp"
                alt="ardeo-homepage"
              />
            </div>
          </div>
        );
      case "dev":
        return (
          <div>
            <h2>Front End Development</h2>
            <h3>Layout</h3>
            <h3>Routing</h3>
            <h3>Interactions</h3>
            <h3>Data Analytics Tools</h3>
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

          <h1>Ardeo</h1>
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
        </div>
      </div>
    </div>
  );
}

export default Ardeo;

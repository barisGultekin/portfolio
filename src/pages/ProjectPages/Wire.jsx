import React, { useState } from "react";
import "./components/ProjectPages.css";

import { useLocation } from "react-router-dom";

import BackButton from "../../components/BackButton/BackButton";

import Collaborator from "./components/Collaborator/Collaborator";

function Wire() {
  const location = useLocation();
  const prevPage = "/projects";

  const [selectedSection, setSelectedSection] = useState("overview");

  const lorem1 =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non mi felis. Maecenas scelerisque lacinia aliquam. Nullam ultricies, quam non condimentum efficitur, neque est malesuada sapien, id tincidunt mauris quam vel enim. In feugiat purus sit amet nisi viverra maximus. Fusce enim lectus, condimentum eget nunc elementum, rhoncus ultricies velit. Duis consectetur, nulla tempus vehicula sollicitudin, odio orci euismod ex, vitae vestibulum risus nisi eu nisi. Nam non dapibus purus. Aenean non lacinia diam.";
  const lorem2 =
    "Cras sed sollicitudin nulla, at egestas nisi. Nullam et hendrerit augue. Donec sagittis orci nec ullamcorper malesuada. Suspendisse lacinia varius quam, sed posuere eros consectetur in. Aliquam erat volutpat. Nunc rhoncus urna urna, sed accumsan neque pellentesque at. Ut pulvinar nunc sed massa posuere malesuada non at urna. Maecenas ullamcorper eleifend blandit. Suspendisse et lacus ac augue pulvinar porttitor. Sed nec consequat felis.  Cras semper accumsan urna nec pretium. Vivamus quis feugiat libero. Fusce a tincidunt massa. Aliquam erat volutpat. Etiam scelerisque nulla vel mauris faucibus aliquam quis at sapien. Sed varius ex vitae scelerisque iaculis. Curabitur ut feugiat quam. Morbi eget tortor convallis, suscipit tortor sit amet, pretium libero. Cras non neque dictum eros posuere interdum euismod non nunc. Donec nec velit condimentum, pretium orci sed, ultrices mauris. Sed non ultricies lorem, interdum tincidunt tellus. Nullam sed tellus tincidunt, scelerisque ligula sit amet, porttitor metus. Ut placerat, magna a facilisis pharetra, erat ligula molestie diam, in ultricies risus nisl sit amet arcu.";
  const lorem3 =
    "Proin vel fringilla augue. Duis accumsan varius nisl tempor gravida. Sed quis ultricies diam. Nullam eget porttitor turpis. In et ipsum ac ipsum eleifend pulvinar.";

  const renderSectionContent = () => {
    switch (selectedSection) {
      case "overview":
        return <div>overview</div>;
      case "branding":
        return <div>branding</div>;
      case "uiux":
        return <div>uiux</div>;
      case "dev":
        return <div>development</div>;
      default:
        return <div>Select a section to display content.</div>;
    }
  };

  return (
    <div className="pp">
      <div className="pp-header">
        <BackButton />

        <h1>WIRE</h1>
        <p>{lorem1}</p>

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
      <div className="pp-content">{renderSectionContent()}</div>
    </div>
  );
}

export default Wire;

import React from "react";
import "./ProjectCardHome.css";
import { Link } from "react-router-dom";

const ProjectCardHome = ({ title, slug, description, imageUrl, tags }) => (
  <Link to={`/projects/${slug}`} className="pch">
    <div className="pch-imageContainer">
      <img src={imageUrl} alt={title} className="pch-image" />
    </div>
    <h3>{title}</h3>
    <div className="pch-tags">
      {tags.map((tag, index) => (
        <span key={index} className="pch-tag">
          {tag}
        </span>
      ))}
    </div>
    <p>{description}</p>
  </Link>
);

export default ProjectCardHome;

import React from 'react';
import "./ProjectCardHome.css";
import { Link } from 'react-router-dom';

const ProjectCardHome = ({ title, slug, description, imageUrl, tags }) => (
  <Link to={`/projects/${slug}`} className="pch">
    <img src={imageUrl} alt={title} className='pch-image'/>
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

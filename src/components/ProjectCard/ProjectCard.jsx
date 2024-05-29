import React from 'react';
import "./ProjectCard.css"

import { Link } from 'react-router-dom';

const ProjectCard = ({ title, slug, description, imageUrl, tags }) => (
  <Link to={`/projects/${slug}`} className="pc">
    <img src={imageUrl} alt={title} className='pc-image'/>
    <h3>{title}</h3>
    <div className="pc-tags">
      {tags.map((tag, index) => (
        <span key={index} className="pc-tag">
          {tag}
        </span>
      ))}
    </div>
    
  </Link>
);

export default ProjectCard;

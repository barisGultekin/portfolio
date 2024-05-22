import React from 'react';

import { Link } from 'react-router-dom';

const ProjectCard = ({ id, title, slug, description, imageUrl }) => (
  <div className="project-card">
    <img src={imageUrl} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
    <Link to={`/projects/${slug}`}>View Project</Link>
  </div>
);

export default ProjectCard;

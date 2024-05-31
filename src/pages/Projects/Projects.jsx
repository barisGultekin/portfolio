import React, { useState } from "react";
import "./Projects.css";

import SearchBar from "../../components/SearchBar/SearchBar";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import projectsData from "../../projectsData";

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projectsData.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="projects">
      <div className="projects-content">
        <div className="projects-header">
          <h1>Projects</h1>
          <p>Here you can check out my projects.</p>
          <div className="projects-searchBar">
            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          </div>
        </div>

        <div className="projects-list">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

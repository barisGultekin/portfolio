import React, { useState } from "react";
import "./Works.css";

import SearchBar from "../../components/SearchBar/SearchBar";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import projectsData from "../../projectsData";

const Works = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projectsData.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="projects">
      <div className="projects-content">
        <div className="projects-header">
          <h1>Work</h1>
          <p>
            Check out my projects across different fields. I have many more to
            add, so this page will be updated over time. Each project represents
            a part of my journey, and I’m excited to share them with you. For
            more information or inquiries, feel free to contact me.
          </p>
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

export default Works;

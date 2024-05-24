import React from "react";
import "./Home.css";

import ProjectCardHome from "../../components/ProjectCardHome/ProjectCardHome";
import projectsData from "../../projectsData";

import { Link } from "react-router-dom";

function Home() {
  const featuredProjects = projectsData.filter((project) => project.featured);

  return (
    <div className="home">
      <section className="home-intro">
        <h1>Ali Barış Gültekin</h1>
        <h2>Frontend Dev & UI/UX Designer</h2>
        <p>
          Your friendly neighborhood frontend developer, UX architect, and
          JavaScript engineer. I spend my days (and often nights) painting the
          Internet canvas with and lines of code, turning zeroes and ones into
          immersive, interactive experiences,
        </p>
        <Link to="/contact" className="button home-convertButton">Contact Me</Link>
      </section>

      <section className="home-recentProjects">
        <div className="home-header">
          <h1>Recent Work</h1>
          <Link to="/projects" className="button home-convertButton">See All</Link>
        </div>
        <div className="home-projectsList">
          {featuredProjects.map((project) => (
            <ProjectCardHome key={project.id} {...project} />
          ))}
        </div>
      </section>

      <section className="home-contactForm">
        <h1>Contact Me</h1>
      </section>

      <img src="/assets/Ellipses.png" alt="gradient" className="background-gradient" />
    </div>
  );
}

export default Home;

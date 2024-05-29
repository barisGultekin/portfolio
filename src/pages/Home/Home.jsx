import React from "react";
import "./Home.css";

import ProjectCardHome from "../../components/ProjectCardHome/ProjectCardHome";
import projectsData from "../../projectsData";

import { Link } from "react-router-dom";

import NavigationButton from "../../components/NavigationButton/NavigationButton";

import Banner from "../../components/Banner/Banner";
import ContactForm from "../../components/ContactForm/ContactForm";

const images = [
  "/assets/bannerImages/banner1.webp",
  "/assets/bannerImages/banner2.webp",
  "/assets/bannerImages/banner3.webp",
  "/assets/bannerImages/banner4.webp",
  "/assets/bannerImages/banner5.webp",
  "/assets/bannerImages/banner6.webp",
  "/assets/bannerImages/banner7.webp",
];

function Home() {
  const featuredProjects = projectsData.filter((project) => project.featured);

  return (
    <div className="home">
      <section className="home-intro">
        <h1>Ali Barış Gültekin</h1>
        <h2>Frontend Dev & UI/UX Designer</h2>
        <p>
          I specialize in creating seamless and engaging digital experiences. By
          blending technical expertise with a creative touch, I transform
          complex ideas into user-friendly, interactive websites. Let's work
          together to bring your vision to life and make the web a more
          beautiful place, one line of code at a time.
        </p>
        <NavigationButton link={"contact"} text={"Contact Me"} />
      </section>

      <section className="home-recentProjects">
        <div className="home-header">
          <h1>Recent Work</h1>
          <Link to="/projects" className="button home-convertButton">
            See All
          </Link>
        </div>
        <div className="home-projectsList">
          {featuredProjects.map((project) => (
            <ProjectCardHome key={project.id} {...project} />
          ))}
        </div>
      </section>

      <div className="home-conceptDesigns">
        <h1>Concept Designs</h1>
        <Banner images={images} speed={20000} />
      </div>

      <section className="home-contactForm">
        <h1>Contact Me</h1>
        <ContactForm />
      </section>

      <img
        src="/assets/Ellipses.png"
        alt="gradient"
        className="background-gradient"
      />
    </div>
  );
}

export default Home;

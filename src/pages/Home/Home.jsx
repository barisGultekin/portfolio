import React from "react";
import "./Home.css";

import projectsData from "../../projectsData";

import ProjectCardHome from "../../components/ProjectCardHome/ProjectCardHome";
import Banner from "../../components/Banner/Banner";
import ContactForm from "../../components/ContactForm/ContactForm";
import NavigationButton from "../../components/NavigationButton/NavigationButton";

// icons
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaRegEnvelope, FaBehance } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { TbLocation } from "react-icons/tb";

const images = [
  {
    src: `${process.env.PUBLIC_URL}/assets/bannerImages/banner1.webp`,
    title: "Natural Produce Marketplace",
  },
  {
    src: `${process.env.PUBLIC_URL}/assets/bannerImages/banner2.webp`,
    title: "Digital Wallet & Finance Manager",
  },
  {
    src: `${process.env.PUBLIC_URL}/assets/bannerImages/banner3.webp`,
    title: "Streetwear eCommerce Shop",
  },
  {
    src: `${process.env.PUBLIC_URL}/assets/bannerImages/banner4.webp`,
    title: "Marina & Boating Guide",
  },
  {
    src: `${process.env.PUBLIC_URL}/assets/bannerImages/banner5.webp`,
    title: "Golf Course Navigator",
  },
  {
    src: `${process.env.PUBLIC_URL}/assets/bannerImages/banner6.webp`,
    title: "Cycling Route Planner",
  },
];

function Home() {
  const featuredProjects = projectsData.filter((project) => project.featured);

  return (
    <div className="home">
      <section className="home-intro">
        <div className="home-intro-box">
          <h1 className="home-mainTitle">Ali Barış Gültekin</h1>

          <div className="home-intro-titles">
            <div className="home-intro-title">Developer</div>
            <div className="home-intro-title">Designer</div>
            <div className="home-intro-title">Creative Engineer</div>
          </div>

          <div className="home-intro-content">
            <p>
              I combine technical expertise with a creative flair to transform
              complex ideas into user-friendly, interactive products.
            </p>
          </div>
        </div>
        <div className="home-swipebutton"></div>
      </section>

      <section className="home-recentProjects">
        <div className="home-header">
          <h1>Recent Work</h1>
          <NavigationButton link={"projects"} text={"See All"} />
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
        <div className="home-header">
          <h1>Contact Me</h1>
          <NavigationButton link={"contact"} text={"More Info"} />
        </div>
        <div className="home-contactFormContent">
          <div className="home-contactForm-wrapper">
            <ContactForm />
          </div>

          <div className="home-contactLinks">
            <h2>Reach out to me</h2>

            <div className="home-contactLinks-content">
              <div className="home-socialIcons">
                <div className="iconBox">
                  <FaLinkedinIn />
                </div>
                <div className="iconBox">
                  <FaGithub />
                </div>
                <div className="iconBox">
                  <FaBehance />
                </div>
              </div>

              <div className="home-contactInfo">
                <div className="contactInfoBox">
                  <FaRegEnvelope />
                  <p>alibarisgultekin@gmail.com</p>
                </div>
                <div className="contactInfoBox">
                  <FiPhone />
                  <p>+90 (534) 396 11 60</p>
                </div>
                <div className="contactInfoBox">
                  <TbLocation />
                  <p>İzmir, Türkiye</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

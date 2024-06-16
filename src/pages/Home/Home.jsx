import React from "react";
import "./Home.css";

import projectsData from "../../projectsData";

import ProjectCardHome from "../../components/ProjectCardHome/ProjectCardHome";
import Banner from "../../components/Banner/Banner";
import ContactForm from "../../components/ContactForm/ContactForm";
import NavigationButton from "../../components/NavigationButton/NavigationButton";

// social icons
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

// contact icons
import { FaRegEnvelope, FaBehance } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { TbLocation } from "react-icons/tb";

const images = [
  { src: "/assets/bannerImages/banner1.webp", title: "Natural Produce Marketplace" },
  { src: "/assets/bannerImages/banner2.webp", title: "Digital Wallet & Finance Manager" },
  { src: "/assets/bannerImages/banner3.webp", title: "Streetwear eCommerce Shop" },
  { src: "/assets/bannerImages/banner4.webp", title: "Marina & Boating Guide" },
  { src: "/assets/bannerImages/banner5.webp", title: "Golf Course Navigator" },
  { src: "/assets/bannerImages/banner6.webp", title: "Cycling Route Planner" },
];


function Home() {
  const featuredProjects = projectsData.filter((project) => project.featured);

  return (
    <div className="home">
      <section className="home-intro">
        <div className="home-intro-box">
          <h1>Ali Barış Gültekin</h1>
          <h2>Developer & Designer</h2>
          <p>
            I combine technical expertise with a creative flair to transform
            complex ideas into user-friendly, interactive products. Let’s
            collaborate to bring your vision to life and craft seamless and
            engaging digital experiences.
          </p>
        </div>
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

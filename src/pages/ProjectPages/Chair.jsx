import React, { useState, useEffect, useRef } from "react";
import "./components/ProjectPages.css";

import BackButton from "../../components/BackButton/BackButton";
import SectionNavigation from "./components/SectionNavigation/SectionNavigation";

import { FaLink } from "react-icons/fa6";

const Chair = () => {
  const [selectedSection, setSelectedSection] = useState("overview");
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.classList.remove("fade-in");
      void contentRef.current.offsetWidth;
      contentRef.current.classList.add("fade-in");
    }
  }, [selectedSection]);

  const renderSectionContent = () => {
    switch (selectedSection) {
      case "overview":
        return (
          <div>
            <h2>Overview</h2>
            <p>
              This demo project showcases advanced 3D animations triggered by
              scroll interactions and an interactive 3D product configurator.
            </p>
            <div className="imgWrapper">
              <img
                className="pp-img"
                src={`${process.env.PUBLIC_URL}/assets/projectAssets/Chair/chairCover.webp`}
                alt="chair-cover"
              />
            </div>
            <p>
              The chair featured in the configurator was designed using
              parametric design techniques in Fusion 360, ensuring flexibility
              and precision in customization.
            </p>
            <p>
              I developed the web app with an intuitive configurator menu UI,
              offering users a seamless experience for exploring design options.
              The website is fully responsive, adapting flawlessly to different
              devices and screen sizes.
            </p>
          </div>
        );
      case "design":
        return (
          <div>
            <h2>3D Design</h2>
            <p>
              One of the key motivations behind this project was to apply my 3D
              design skills in a practical and meaningful way. By blending my
              expertise in physical product design with digital product design,
              I aimed to create an interactive experience that bridges the gap
              between the tangible and the virtual.
            </p>
            <p>
              I designed each individual component, ensuring precision and
              functionality, and then assembled them into a cohesive structure.
              This process not only showcased my ability to create detailed,
              parametric designs using Fusion 360 but also allowed me to explore
              how these physical designs could be adapted and visualized in a
              digital environment.
            </p>
            <div className="imgWrapper">
              <img
                className="pp-img"
                src={`${process.env.PUBLIC_URL}/assets/projectAssets/Chair/fusion.webp`}
                alt="chair-fusion360"
              />
            </div>
            <p>
              The assembly process helped me refine the chair’s ergonomics and
              aesthetics while considering the constraints of both physical
              manufacturing and digital configurator interfaces. This dual focus
              requires an interdisciplinary approach, integrating design,
              engineering, and interactive technology to produce a versatile and
              visually compelling product.
            </p>
          </div>
        );
      case "animations":
        return (
          <div>
            <h2>Animations</h2>
            <p>
              I created an engaging animation that dynamically follows the
              user’s scroll, seamlessly integrating interactive design with
              storytelling. This technique enhances the user experience by tying
              visual elements to the natural movement of scrolling, creating an
              immersive and intuitive interaction.
            </p>
            <div className="imgWrapper">
              <video
                className="pp-img"
                src={`${process.env.PUBLIC_URL}/assets/projectAssets/Chair/animation.webm`}
                autoPlay
                muted
                loop
                playsInline
                alt="chair-animation"
              />
            </div>
            <p>
              To implement this feature, I utilized libraries like GSAP
              (GreenSock Animation Platform) and its ScrollTrigger plugin. These
              tools allowed me to precisely synchronize the animation with
              scroll behavior, ensuring fluidity and a natural feel. The
              animation tracks the user’s scroll position in real-time,
              transitioning between keyframes of the 3D object and activating
              subtle effects.
            </p>
          </div>
        );

      case "configurator":
        return (
          <div>
            <h2>Configurator</h2>
            <p>
              I implemented an interactive 3D configurator using
              react-three/fiber and react-three/drei, powerful libraries built
              on top of three.js, to bring parametric design to life in a web
              application. The configurator allows users to customize various
              aspects of the product, offering a seamless and visually rich
              experience.
            </p>
            <p>
              I structured the application with modular components and loading
              functions, each handling specific tasks like loading 3D models,
              managing materials, and applying textures. A React reducer
              efficiently managed the state, enabling seamless updates for
              options like materials and colors while keeping the interface
              responsive and the codebase maintainable.
            </p>
            <div className="imgWrapper">
              <img
                className="pp-img"
                src={`${process.env.PUBLIC_URL}/assets/projectAssets/Chair/config-ss.webp`}
                alt="chair-cofigurator-screen"
              />
            </div>
            <p>
              {" "}
              I ensured the configurator was designed with full responsiveness
              in mind, adapting to all device sizes from desktops to
              smartphones. The layout adjusts dynamically, providing an
              optimized user experience regardless of the screen size. On
              smaller devices, I implemented alternative UI components, like
              stacked menus and swipeable options, to maintain usability without
              compromising functionality.
            </p>
            <div className="imgWrapper">
              <img
                className="pp-img"
                src={`${process.env.PUBLIC_URL}/assets/projectAssets/Chair/mobile-ss.webp`}
                alt="mobile-cofigurator-screen"
              />
            </div>
          </div>
        );
      default:
        return <div>Select a section to display content.</div>;
    }
  };

  const sections = [
    { keyword: "overview", title: "Overview" },
    { keyword: "design", title: "3D Design" },
    { keyword: "animations", title: "Animations" },
    { keyword: "configurator", title: "Configurator" },
  ];
  return (
    <div className="pp-container">
      <div className="pp">
        <div className="pp-header">
          <BackButton className="pp-backButton" />
          <div className="pp-header-top">
            <h1>Chair Configurator</h1>
            <a
              href="https://barisgultekin.github.io/chair-configurator/"
              target="_blank"
              rel="noopener noreferrer"
              className="pp-demoLink"
            >
              <FaLink />
              <span className="tooltip">Live Demo</span>
            </a>
          </div>

          <h4>SECTIONS</h4>
          <div className="sections">
            <button
              className={`section-button ${
                selectedSection === "overview" ? "active" : ""
              }`}
              onClick={() => setSelectedSection("overview")}
            >
              Overview
            </button>
            <button
              className={`section-button ${
                selectedSection === "design" ? "active" : ""
              }`}
              onClick={() => setSelectedSection("design")}
            >
              3D Design
            </button>
            <button
              className={`section-button ${
                selectedSection === "animations" ? "active" : ""
              }`}
              onClick={() => setSelectedSection("animations")}
            >
              Animations
            </button>
            <button
              className={`section-button ${
                selectedSection === "configurator" ? "active" : ""
              }`}
              onClick={() => setSelectedSection("configurator")}
            >
              Configurator
            </button>
          </div>
        </div>

        <div className="fade-in" ref={contentRef}>
          <div className="pp-content">{renderSectionContent()}</div>
          <SectionNavigation
            sections={sections}
            selectedSection={selectedSection}
            setSelectedSection={setSelectedSection}
          />
        </div>
      </div>
    </div>
  );
};

export default Chair;

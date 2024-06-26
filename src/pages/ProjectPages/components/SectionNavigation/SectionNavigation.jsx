import React from "react";
import "./SectionNavigation.css";

const SectionNavigation = ({ sections, selectedSection, setSelectedSection }) => {
  const currentIndex = sections.findIndex(
    (section) => section.keyword === selectedSection
  );
  const prevSection = currentIndex > 0 ? sections[currentIndex - 1] : null;
  const nextSection =
    currentIndex < sections.length - 1 ? sections[currentIndex + 1] : null;

  const handleSectionChange = (sectionKeyword) => {
    setSelectedSection(sectionKeyword);
    const scrollPosition = window.innerHeight * 0.4; // 20vh
    window.scrollTo({ top: scrollPosition, behavior: "smooth" });
  };

  return (
    <div className="section-navigation">
      {prevSection ? (
        <button
          className="button prev"
          onClick={() => handleSectionChange(prevSection.keyword)}
        >
          Previous: {prevSection.title}
        </button>
      ) : (
        <div className="spacer" />
      )}
      {nextSection && (
        <button
          className="button"
          onClick={() => handleSectionChange(nextSection.keyword)}
        >
          Next: {nextSection.title}
        </button>
      )}
    </div>
  );
};

export default SectionNavigation;

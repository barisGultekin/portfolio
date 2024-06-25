import React from "react";
import "./SectionNavigation.css";

const SectionNavigation = ({ sections, selectedSection, setSelectedSection }) => {
  const currentIndex = sections.findIndex(
    (section) => section.keyword === selectedSection
  );
  const prevSection = currentIndex > 0 ? sections[currentIndex - 1] : null;
  const nextSection =
    currentIndex < sections.length - 1 ? sections[currentIndex + 1] : null;

  return (
    <div className="section-navigation">
      {prevSection ? (
        <button
          className="button prev"
          onClick={() => setSelectedSection(prevSection.keyword)}
        >
          Previous: {prevSection.title}
        </button>
      ) : (
        <div className="spacer" />
      )}
      {nextSection && (
        <button
          className="button"
          onClick={() => setSelectedSection(nextSection.keyword)}
        >
          Next: {nextSection.title}
        </button>
      )}
    </div>
  );
};

export default SectionNavigation;

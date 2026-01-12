import React from "react";
import "../styles/Resume.css";

const Resume = () => {
  const handleRedirect = () => {
    // Redirect to the online CV
    window.open("https://rxresu.me/vrugundu001/hamman-muraya-2", "_blank");
  };

  return (
    <button className="resume-btn" onClick={handleRedirect}>
      <i className="fas fa-external-link-alt"></i> View Online CV
    </button>
  );
};

export default Resume;
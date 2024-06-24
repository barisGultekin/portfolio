import React, { useState } from "react";

import "./DownloadPreviewButton.css";

import { IoClose } from "react-icons/io5";
import { FaFileDownload } from "react-icons/fa";
import { PiFrameCorners } from "react-icons/pi";

const DownloadPreviewButton = ({ title, keyword }) => {
  const [showPopup, setShowPopup] = useState(false);

  const imgUrl = `${process.env.PUBLIC_URL}` + "/" + keyword + ".webp";

  const handleClosePopup = () => {
    setShowPopup(false);
  };


  return (
    <div className="DownloadPreviewButton">
      <div className="downloadPreviewBox">
        <a className="downloadButton" href="/resume.pdf" download>
          <FaFileDownload />
          Download {title}
        </a>

        <div className="previewText">
          <PiFrameCorners />
          Preview
        </div>

        <img
          src={imgUrl}
          alt="preview"
          className="mini-image"
          onClick={() => setShowPopup(true)}
        />
      </div>

      {showPopup && (
        <div className="popupDoc" onClick={handleClosePopup}>
          <img src={imgUrl} alt="Popup" className="popup-image" />

          <div className="doc-close-button" onClick={handleClosePopup}>
            <IoClose />
          </div>

          <a className="popup-downloadButton" href={`${process.env.PUBLIC_URL}/${keyword}.pdf`} download>

            <FaFileDownload />
            Download
          </a>
        </div>
      )}
    </div>
  );
};

export default DownloadPreviewButton;

import React, { useState } from "react";
import "./DownloadPreviewButton.css";
import { IoClose } from "react-icons/io5";
import { FaFileDownload } from "react-icons/fa";
import { PiFrameCorners } from "react-icons/pi";
import PopupPortal from "../../PopupPortal";

const DownloadPreviewButton = ({ title, keyword }) => {
  const [showPopup, setShowPopup] = useState(false);

  const imgUrl =
    `${process.env.PUBLIC_URL}` + "/aliBarisGultekin-" + keyword + ".webp";
  const docUrl =
    `${process.env.PUBLIC_URL}` + "/aliBarisGultekin-" + keyword + ".pdf";

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="DownloadPreviewButton">
      <div className="downloadPreviewBox">
        <a className="downloadButton" href={docUrl} download>
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
        <PopupPortal>
          <div className="popupDoc">
            <div className="popup-content" onClick={handleClosePopup}>
              <div className="doc-close-button" onClick={handleClosePopup}>
                <IoClose />
              </div>

              <img src={imgUrl} alt="Popup" className="popup-image" />

              <a className="popup-downloadButton" href={docUrl} download onClick={(e) => e.stopPropagation()}>
                <FaFileDownload />
                Download {title}
              </a>
            </div>
          </div>
        </PopupPortal>
      )}
    </div>
  );
};

export default DownloadPreviewButton;

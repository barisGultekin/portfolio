import React from "react";
import './Collaborator.css'

import collaboratorData from "../../../../collaboratorData";

import { HiOutlineExternalLink } from "react-icons/hi";

import { Link } from "react-router-dom";

function Collaborator({ collaboratorKey, colloboratorPart }) {
  const collaborator = collaboratorData.find(
    (data) => data.key === collaboratorKey
  );

  if (!collaborator) {
    return <div>Collaborator not found</div>;
  }

  const displayTitle = colloboratorPart || collaborator.title;

  return (
    <Link to={collaborator.link} target="_blank" rel="noopener noreferrer" className="collaborator">
      <img src={collaborator.imgURL} alt={collaborator.name} />
      <p>{collaborator.name}</p>
      <span className="tooltip">{displayTitle} <HiOutlineExternalLink /> </span>
    </Link>
  );
}

export default Collaborator;

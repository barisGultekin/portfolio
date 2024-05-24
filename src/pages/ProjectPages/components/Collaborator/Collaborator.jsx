import React from "react";
import './Collaborator.css'

import collaboratorData from "../../../../collaboratorData";

function Collaborator({ collaboratorKey }) {
  const collaborator = collaboratorData.find(
    (data) => data.key === collaboratorKey
  );

  if (!collaborator) {
    return <div>Collaborator not found</div>;
  }

  return (
    <div className="collaborator">
      <img src={collaborator.imgURL} alt={collaborator.name} />
      <p>{collaborator.name}</p>
    </div>
  );
}

export default Collaborator;

import React from "react";
import UnderConstructionImage from "../assets/UnderConstruction.jpg";

const UnderConstruction = () => {
  return (
    <div className="underconstruction">
      <h1>Under Construction</h1>
      <img
        src={UnderConstructionImage}
        alt="UnderConstruction"
        key="UnderConstruction"
      />
    </div>
  );
};

export default UnderConstruction;

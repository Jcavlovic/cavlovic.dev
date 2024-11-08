import React from "react";
import UnderConstruction from "./containers/UnderConstruction.jsx";
import NavBar from "../landingpage/containers/NavBar.jsx";
import { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    document.body.className = "projects-body"; // Apply a unique class to <body>

    // Optional: Cleanup function to remove class when component unmounts
    return () => {
      document.body.className = "";
    };
  }, []);

  return (
    <div>
      <NavBar />
      <UnderConstruction />
    </div>
  );
};

export default Projects;

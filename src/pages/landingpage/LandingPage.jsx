import { useEffect } from "react";
import NavBar from "./containers/NavBar.jsx";
import Content from "./containers/Content.jsx";
import BuiltBy from "./containers/BuiltBy.jsx";

function LandingPage() {
  useEffect(() => {
    document.body.className = "landingpage-body"; // Apply a unique class to <body>

    // Optional: Cleanup function to remove class when component unmounts
    return () => {
      document.body.className = "";
    };
  }, []);

  return (
    <div>
      <NavBar />
      <Content />
      <BuiltBy />
    </div>
  );
}

export default LandingPage;

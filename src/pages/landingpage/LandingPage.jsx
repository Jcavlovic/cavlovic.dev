import { useEffect } from "react";
import NavBar from "./containers/NavBar.jsx";
import Content from "./containers/Content.jsx";

function LandingPage() {
  useEffect(() => {
    document.body.className = "landingpage-body"; // Apply a unique class to <body>

    // Optional: Cleanup function to remove class when component unmounts
    return () => {
      document.body.className = "";
    };
  }, []);

  return (
    <body className="landingpage-body">
      <div>
        <NavBar />
        <Content />
      </div>
    </body>
  );
}

export default LandingPage;

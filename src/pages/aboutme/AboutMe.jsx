import MenuBar from "../landingpage/containers/MenuBar.jsx";
import Welcome from "./containers/Welcome.jsx";
import Millie from "./containers/Millie.jsx";
// import Interests from "./containers/Interests.jsx";

/**
 * A functional component that renders the About Me page
 * with a MenuBar, Welcome, and Millie components.
 * The Interests component is currently commented out.
 *
 * @return {JSX.Element} The About Me page content
 */
function AboutMe() {
  return (
    <div>
      <MenuBar />
      <Welcome />
      <Millie />
      {/* <Interests /> */}
    </div>
  );
}

export default AboutMe;

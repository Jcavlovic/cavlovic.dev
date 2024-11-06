import MenuBar from "./containers/MenuBar.jsx";
import Welcome from "./containers/Welcome.jsx";
import Millie from "./containers/Millie.jsx";
// import Interests from "./containers/Interests.jsx";

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

import React from "react";
// import OtherPhoto from "./MillieLocation";

/**
 * Component which renders a page with the title "Interests" and a paragraph saying
 * "These are my hobbies and interests."
 *
 * @returns {JSX.Element} A div containing an h1 and a p.
 */
const Interests = () => {
  return (
    <div className="interests">
      <h1>Interests</h1>
      <p>These are my hobbies and interests.</p>
      {/* <img src={OtherPhoto} alt="Greetings" /> */}
    </div>
  );
};

export default Interests;

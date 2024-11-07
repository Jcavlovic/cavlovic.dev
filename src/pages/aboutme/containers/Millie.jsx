import React from "react";
import MilliePhoto from "../../../static/images/Millie.png";

/**
 * A functional component that displays a photo of Millie with a caption describing her awesomeness.
 *
 * @returns {React.ReactElement} The JSX element representing the Millie component.
 */
const Millie = () => {
  return (
    <div className="bestdogever">
      <h1>This is Millie</h1>
      <p>
        And she is the best dog in the world! She will go head to head with any
        <br />
        other puppy for the title of "Greatest Of All Time"
        <br />
      </p>
      <img src={MilliePhoto} alt="Greetings" />
    </div>
  );
};

export default Millie;

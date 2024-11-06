import React from "react";
import GreetingsImage from "../assets/GradPhoto.jpg";

const Welcome = () => {
  return (
    <div className="welcomepage">
      <h2>Hello, Welcome</h2>
      <h1>This is Me</h1>
      <p>
        Hello everyone, thank you for stopping by. My name is Jordan Cavlovic,
        <br />
        its pronounced CAV-LOW-VIC, I recently graduated from The University
        <br />
        of Texas San Antonio with a degree in Computer Engineering.
      </p>
      <img src={GreetingsImage} alt="Greetings" />
    </div>
  );
};
export default Welcome;

import React from "react";
import GreetingsImage from "../../../static/images/GradPhoto.jpg";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
/**
 * A functional component that displays a greeting message
 * to the user with a picture of myself.
 *
 * @return {JSX.Element} The greeting message component
 */
const Welcome = () => {
  return (
    <div className="welcomepage">
      <img src={GreetingsImage} alt="Greetings" />
      <h2>Hello, Welcome</h2>
      <h1>This is Me</h1>
      <p>
        Hello everyone, thank you for stopping by. My name is Jordan Cavlovic,
        <br />
        its pronounced CAV-LOW-VIC, I recently graduated from The University
        <br />
        of Texas San Antonio with a degree in Computer Engineering.
      </p>
      <ContactMe />
    </div>
  );
};

function ContactMe() {
  return (
    <Button
      href="mailto:9vafxqino@mozmail.com"
      size="lg"
      variant="outline-primary"
    >
      Contact Me
    </Button>
  );
}

export default Welcome;

// My Experience
// Before completing my undergraduate degree, I gained valuable experience working in a variety of food service roles, both in the kitchen and as a server. I thoroughly enjoyed learning to prepare diverse types of meals—a skill I'm extremely grateful to have developed. My years of waiting tables also honed my interpersonal and communication skills, which have been invaluable in helping me navigate professional settings with respect and confidence. For a brief period, I also worked at an automotive dealership, where I had the exciting opportunity to indulge my passion for driving fast and stylish cars.

// My Education
// I began my undergraduate journey at Northwest Vista College in December 2019, just before the COVID-19 lockdowns began. While it was exciting to start this new chapter, adjusting to mostly online learning was a unique challenge. In January 2022, I transferred to The University of Texas at San Antonio, where I earned my degree in Computer Engineering. That decision proved to be one of the best of my life, as it allowed me to build lasting relationships and grow both personally and professionally.
// Personal Life
// #TODO

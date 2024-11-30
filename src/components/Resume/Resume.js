import React from "react";
import "./Resume.css";

const Resume = () => (
  <div className="resume">
    <h1>Jordan Cavlovic</h1>
    <p style={{ textAlign: "center" }} className="contact-info">
      Little Elm, TX |{" "}
      <a href="mailto:jcavlovic91@gmail.com">jcavlovic91@gmail.com</a> |
      210-630-9871 |{" "}
      <a href="https://cavlovic.dev" target="_blank" rel="noreferrer">
        https://cavlovic.dev
      </a>
    </p>
    <br />

    <div className="education">
      <br />
      <h2>Education</h2>
      <br />
      <ul>
        <strong>Bachelor of Science in Computer Engineering</strong> |
        University of Texas San Antonio | San Antonio, TX
        <br />
        <i>January 2022 - May 2024</i>
        <br />
        <strong>Associate of Science in Computer Science</strong> | Northwest
        Vista Community College | San Antonio, TX
        <br />
        <i> December 2019 - December 2021 </i>
      </ul>
    </div>

    <div className="skills">
      <h2>Key Skills</h2>
      <br />
      <ul>
        <li>Python | C# | Java | C/C++ | JavaScript | HTML/CSS</li>
        <li>
          Windows | Linux | AWS | Microsoft Office/365 | Docker | Kubernetes |
          MongoSQL
        </li>
        <li>ReactJS | Fast API | NGINX | jQuery | Bootstrap | GIT</li>
        <li>Leadership | Problem Solving | Communication | Adaptability</li>
      </ul>
    </div>
    <br />

    <div className="projects">
      <h2>Personal Projects</h2>
      <br />
      <ul>
        <strong>Personal Portfolio Website</strong>{" "}
        <a href="https://cavlovic.dev" target="_blank" rel="noreferrer">
          https://cavlovic.dev
        </a>{" "}
        | <i>October 2024</i>
        <br />
        <li>
          Deployed custom portfolio website by leveraging AWS EC2, and Route53
          to deploy website using NGINX web hosting.
        </li>
        <li>
          Deployed webpages using ReactJS, HTML5, Bootstrap 5.3.3, and jQuery.
        </li>
        <br />
        <strong>
          Autonomous Search and Rescue Object Detection Deployment to AWS
        </strong>{" "}
        | <i>November 2024</i>
        <li>
          Working on porting and deploying Engineering Capstone Project to AWS
          EC2 instance.
        </li>
        <li>
          Leverage AWS GPU instances to handle object detection inference.
        </li>
        <li>
          Allow users to choose any video from YouTube to run inference using a
          custom model developed during the Capstone Project.
        </li>
      </ul>
    </div>
    <br />

    <div className="projects">
      <h2>School Projects</h2>
      <br />
      <ul>
        <strong>Autonomous Search and Rescue Object Detection</strong> |{" "}
        <i>August 2023 - May 2024</i>
        <br />
        <li>
          Senior design project focused on creating an autonomous object
          detection device for search and rescue operations.
        </li>
        <li>
          Managed the project by organizing team meetings, delegating weekly
          tasks, and provided support to team members when they encountered
          obstacles.
        </li>
        <li>
          Designed the object detection system by implementing YOLOv8 with
          Sliced Aided Hyper Inferencing for far, and small object detection and
          assisted with GUI development written in HTML, CSS, and JavaScript
          along with Flask API for web hosting.
        </li>
        <li>
          Contributed to the AI model by curating thousands of custom photos to
          build a unique dataset, annotated them using Roboflow.com and assisted
          with selecting training parameters for YOLOv8 and SAHI.
        </li>
        <li>
          Optimized hardware configuration for smooth operation by disabling
          unnecessary services and configuring a custom service to execute
          operation upon boot.
        </li>
        <br />
        <strong>
          Machine Learning Inference on NVIDIA Jetson Nano & MSP430
        </strong>{" "}
        | <i>January 2024 - May 2024</i>
        <li>
          Collaborated with a team of three to develop code to perform inference
          using the Nvidia Jetson Nano and MSP430, trained and tested it with
          the MNIST dataset.
        </li>
        <li>
          Written in C for the Ti MSP430, C++ for the Nvidia Jetson Nano, and
          Python for calculating the weights and biases.
        </li>
        <li>
          Utilized the CC compiler to run inference directly on the Nvidia
          Jetson's GPU, harnessing its parallel processing power for optimal
          performance.
        </li>
        <li>
          Utilized C to perform inference tasks on the MSP430, efficiently
          managing data transfer between SRAM and FRAM to optimize data
          processing.
        </li>
        <br />
        <strong>Self-Leveling Tilt Table and Self-Driving RC Car</strong> |{" "}
        <i>January 2024 - May 2024</i>
        <li>Developed embedded devices with the KL25z Freedom Board.</li>
        <li>
          Collaborated with a team of four to develop two embedded devices
          utilizing the KL25z Freedom Board.
        </li>
        <li>
          Integrated a touch pad along with two servos onto a table to allow for
          the change in pitch on the X and Y axis to ensure automatic adjustment
          of a steel ball to the center of the table.
        </li>
        <li>
          Utilized the Freedom Board to control a car on a track, incorporated a
          camera for detecting the barrier of the track and adjusting the
          direction of the wheels to ensure the car stayed centered.
        </li>
      </ul>
    </div>
    <br />

    <div className="accomplishments">
      <h2>Accomplishments</h2>
      <br />
      <ul>
        <strong>“Honorable Mention”</strong> | UTSA ECE Department |{" "}
        <i>December 2023</i>
        <br />
        <li>Craps Casino Game Nexys A7 Artix-7 FPGA</li>
        <strong>Professors Recommendation for Graduate School</strong> |
        Wei-Ming Lin, Ph.D. | <i>May 2024</i>
        <br />
        <li>
          Dr. Lin has personally recommended me for admission to Graduate
          School.
        </li>
        <strong>Spring 2024 UTSA Student Honor Roll</strong> | <i>July 2024</i>
        <br />
        <li>18 Credit Hours Semester GPA 3.66</li>
      </ul>
    </div>
    <br />

    <div className="experience">
      <h2>Professional Experience</h2>
      <br />
      <ul>
        <strong>Bartender</strong> | Red Robin | San Antonio, TX |{" "}
        <i>June 2015 - July 2024</i>
        <br />
        <li>
          Actively listened and asked clarifying questions to ensure a deep
          understanding of client goals.
        </li>
        <li>
          Trained new hires to prepare drinks properly, keep bar area clean and
          organized, and adhere to company policy.
        </li>
        <strong>Photographer</strong> | Lujack’s Auto Plaza | Davenport, IA |{" "}
        <i>January 2013 - May 2015</i>
        <br />
        <li>
          Skilled in post-production, photo-editing using Adobe Photoshop, and
          proficient in operating DSLR cameras.
        </li>
        <li>Worked both independently and within a team environment.</li>
        <strong>Line Cook</strong> | Applebee’s Bar and Grill | Davenport, IA |{" "}
        <i>May 2010 - January 2013</i>
        <br />
        <li>
          Prepared and cooked a variety of menu items using standardized recipes
          and ensure consistency in taste and quality.
        </li>
        <li>
          Adhered to strict food safety and sanitation standards and
          collaborated effectively with the kitchen team.
        </li>
      </ul>
    </div>
    <br />

    <div className="references">
      <h2>References</h2>
      <br />
      <ul>
        <li>
          <strong>Luis Martinez</strong> | Classmate
          <br />
          <a href="mailto:luiworkztch@gmail.com">luiworkztch@gmail.com</a> |
          (512)-924-5608
        </li>
        <li>
          <strong>Alex Fust</strong> | Senior Design Associate
          <br />
          <a href="mailto:alexdfust@gmail.com">alexdfust@gmail.com</a> |
          (702)-378-7331
        </li>
        <li>
          <strong>John Johnson</strong> | Colleague
          <br />
          <a href="mailto:johnj8882@yahoo.com">johnj8882@yahoo.com</a> |
          (210)-800-4508
        </li>
      </ul>
    </div>
  </div>
);

export default Resume;

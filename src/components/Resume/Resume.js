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
        <strong>Masters of Science in Computer Engineering</strong> | University
        of Texas San Antonio | San Antonio, TX
        <br />
        <i>Anticipated May 2027</i>
        <br />
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
      <br />
      <br />
    </div>

    <div className="skills">
      <h2>Key Skills</h2>
      <br />
      <ul>
        <li>Python | Java | C/C++ | JavaScript | HTML/CSS</li>
        <li>
          Windows | Linux | AWS | Microsoft Office/365 | Docker | GNURadio
        </li>
        <li>ReactJS | Flask API | NGINX | Bootstrap | GIT | Linux</li>
        <li>Leadership | Problem Solving | Communication </li>
      </ul>
    </div>
    <br />

    <div className="experience">
      <h2>Professional Experience</h2>
      <br />
      <ul>
        <strong>Associate Software Engineer</strong> | L3Harris | Waco, TX |{" "}
        <i>January 2025</i>
        <br />
        <li>
          Collaborated in an agile environment with monthly sprints, contributed
          to sprint planning, weekly stand-ups, ensured on-time delivery of 100%
          of project task while maintaining code quality through peer reviews
          and CI/CD pipelines.
        </li>
        <li>
          Independently developed a prototype within six months of start date,
          successfully tested at multiple test events across the USA, and
          secured 24,000 contract hours for the software development team.
        </li>
        <li>
          Lead software development for RF applications supporting the U.S. Air
          Force; developed comprehensive Software Development Process document,
          created project schedules using Microsoft Project and delegated tasks
          across the development team to ensure timely delivery using JIRA.
        </li>
        <li>
          Designed and implemented a Jenkins CI/CD pipeline to streamline
          development workflows, including automated environment setup, PEP8
          code style enforcement, code coverage analysis, and unit
          testing—enhancing code quality, consistency, and deployment
          efficiency.
        </li>
        <li>
          Engineered an in-house LLM system leveraging Hugging Face's
          StarCoder2-15B model for code generation, and Mistral-7B for chat, to
          automate code generation for internal team, reducing development time,
          and increasing productivity.
        </li>
        <li>
          Maintained ATAC software utilizing Java 11, Eclipse IDE for coding,
          debugging, and implementing enhancements, with Gradle and Ant employed
          for efficient build automation and dependency management.
        </li>
        <strong>Web Developer/administrator</strong> | Freelance |{" "}
        <a href="https://shotgunoffroad.net">shotgunoffroad.net</a> |{" "}
        <i>June 2024</i>
        <br />
        <li>
          Designed and developed a responsive WordPress website for Shotgun
          Offroad, a company specializing in lift kits, leveling kits, and
          off-road truck accessories.
        </li>
        <li>
          Deployed site using WordPress with domain and hosting managed via
          GoDaddy.
        </li>
        <li>
          Ensured proper search engine optimization (SEO) through keyword
          integration, metadata, and performance optimization to improve online
          visibility.
        </li>
        <li>
          Configured and deployed Google Ads campaigns to drive targeted traffic
          and increase customer acquisition.
        </li>
        <strong>Bartender</strong> | Red Robin | San Antonio, TX |{" "}
        <i>June 2015 - July 2024</i>
        <br />
        <li>
          Demonstrated self-discipline, time management, and teamwork by meeting
          goals under pressure, while enhancing collaboration and
          problem-solving through active listening and understanding diverse
          perspectives.
        </li>
        <li>
          Actively listened to guests and asked thoughtful, clarifying questions
          to understand their preferences, tastes, and expectations, and offered
          personalized drink recommendations, prompt service, and a welcoming
          atmosphere that enhanced the overall guest experience.
        </li>
        <li>
          Trained new team members on proper drink preparation techniques, bar
          cleanliness and organization standards, and adherence to company
          policies—ensuring consistency in service quality, compliance with
          health and safety regulations, and a smooth onboarding experience.
        </li>
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
        <strong>Electronic Store Inventory WebApp</strong> |{" "}
        <a
          href="https://cc-final.cavlovic.dev"
          target="_blank"
          rel="noreferrer"
        >
          https://cc-final.cavlovic.dev
        </a>{" "}
        <i>December 2025</i>
        <br />
        <li>
          Final project for Intro to Cloud Computing EE-5523 University of Texas
          San Antonio
        </li>
        <li>
          Managed project timelines by organizing assignments with clear
          deadlines, elegated tasks among team members, and ensured meaningful
          contributions from each participant.
        </li>
        <li>
          Designed a web app for a mock electronics store to apply CRUD (Create,
          Read, Update, Delete) operations for a mock electronics store.
        </li>
        <li>
          Designed and implemented a backend using Python and Flask API, hosted
          on an Amazon EC2 server, with Amazon DynamoDB for efficient data
          storage and querying.
        </li>
        <br />
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

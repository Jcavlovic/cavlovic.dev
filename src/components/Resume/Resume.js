import React from "react";
import "./Resume.css";

const Resume = () => (
  <div className="resume">
    <h1>Jordan Cavlovic</h1>
    <p style={{ textAlign: "center" }} className="contact-info">
      <a href="mailto:jcavlovic91@gmail.com">Gmail</a> | {" "}
      <a href="https://github.com/jcavlovic" target="_blank" rel="noreferrer">GitHub</a> | {" "}
      <a href="https://www.linkedin.com/in/jordan-cavlovic-507629199/" target="_blank" rel="noreferrer">LinkedIn</a> | {" "}
      <a href="https://cavlovic.dev" target="_blank" rel="noreferrer">Personal Portfolio</a>
    </p>

    <div className="education">
      <br />
      <h2>Education</h2>
      <br />
      <ul>
        <strong>Masters of Science in Computer Engineering</strong>
        <span style={{ float: 'right', fontStyle: 'italic' }}>May 2027</span>
        <br />
        University of Texas San Antonio
        <br />
        <strong>Bachelor of Science in Computer Engineering</strong>
        <span style={{ float: 'right', fontStyle: 'italic' }}>May 2024</span>
        <br />
        University of Texas San Antonio
      </ul>
      <br />
    </div>

    <div className="skills">
      <h2>Key Skills</h2>
      <br />
      <ul>
        <li>Python | C++ | Java | CUDA | AWS EC2 | AWS Route53</li>
        <li>Linux | Windows | Docker | JIRA | Bitbucket | GIT</li>
        <li>Leadership | Problem Solving | Communication </li>
      </ul>
    </div>
    <br />

    <div className="experience">
      <h2>Professional Experience</h2>
      <br />
      <ul>
        <strong style={{ color: '#2978b5' }}>Associate Software Engineer</strong> | L3Harris | Waco, TX
        <span style={{ float: 'right', fontStyle: 'italic' }}>January 2025</span>
        <br />
        <li>
          <strong>Lead</strong> software development for RF application in support of the USAF using National Instruments x400, x300 Software
            Defined Radios and Empower 1193 Amplifier ensuring 100% on-time delivery of software updates.
        </li>
        <li>
          <strong>Secured</strong> 24,000 contract hours and improved customer perception and satisfaction by developing and validating a
            prototype RF application through multiple test events.
        </li>
        <li>
          <strong>Created</strong> comprehensive Software Development Process documentation, project schedule using Microsoft Project and
            delegated tasks across Software, Systems and Test engineering team.
        </li>
        <li>
          <strong>Increased</strong> development efficiency by 20% by designing and implementing a Jenkins CI/CD pipeline with automated
            environment setup, PEP8 enforcement, unit testing and code coverage analysis.
        </li>
        <li>
          <strong>Collaborated</strong> in an agile environment with monthly sprints, contributed to sprint planning, weekly stand-ups, ensured
            on-time delivery of 100% of project task while maintaining code quality through peer reviews and CI/CD pipelines.
        </li>
        <li>
          <strong>Maintained</strong> ATAC software using Java 11, with Eclipse IDE for coding, debugging, bugfixes, and implementing new
            product features, using Gradle and Ant employed for build automation and dependency management
        </li>
        <strong style={{ color: '#2978b5' }}>Web Developer/Administrator</strong> | Freelance |{" "}
        <a href="https://shotgunoffroad.net">shotgunoffroad.net</a>
        <span style={{ float: 'right', fontStyle: 'italic' }}>June 2024</span>
        <li>
          <strong>Designed and developed</strong> a responsive WordPress website for Shotgun
          Offroad, a company specializing in lift kits, leveling kits, and
          off-road truck accessories.
        </li>
        <li>
          <strong>Configured and deployed</strong> Google Ads campaigns to drive targeted traffic, boost customer acquisition, and achieve a
            20% increase in product sales and aftermarket installations.
        </li>
        <li>
          <strong>Utilized</strong> HTML/CSS to enhance website design and user experience, increasing user engagement, driving higher site
            traffic, and improving customer perception of aftermarket installation services.
        </li>
        <strong style={{ color: '#2978b5' }}>Bartender</strong> | Red Robin | San Antonio, TX
        <span style={{ float: 'right', fontStyle: 'italic' }}>July 2024</span>
        <br />
        <li>
          <strong>Demonstrated </strong>self-discipline, time management, and teamwork by meeting
          goals under pressure, while enhancing collaboration and
          problem-solving through active listening and understanding diverse
          perspectives.
        </li>
        <li>
          <strong>Actively</strong> listened to guests and asked thoughtful, clarifying questions
          to understand their preferences, tastes, and expectations, and offered
          personalized drink recommendations, prompt service, and a welcoming
          atmosphere that enhanced the overall guest experience.
        </li>
        <li>
          <strong>Trained</strong> new team members on proper drink preparation techniques, bar
          cleanliness and organization standards, and adherence to company
          policies—ensuring consistency in service quality, compliance with
          health and safety regulations, and a smooth onboarding experience.
        </li>
      </ul>
    </div>
    <br />

    <div className="projects">
      <h2>Projects</h2>
      <br />
      <ul>
        <strong style={{ color: '#2978b5' }}>Portfolio Website</strong> | {" "} 
        <a href="https://cavlovic.dev" target="_blank" rel="noreferrer">
          https://cavlovic.dev
        </a>{" "}
        <span style={{ float: 'right', fontStyle: 'italic' }}>October 2024</span>
        <br />
        <li>
          Designed, deployed, and hosted a custom portfolio website using AWS EC2 instance, leveraging Route 53 for DNS
            configuration and NGINX as the web server for efficient content delivery
        </li>
        <li>
          Developed and deployed responsive, component-based web pages with ReactJS and HTML/CSS, focusing on intuitive
            user experiences, modern UI design, cross-platform compatibility.
        </li>
        <br />
        <strong style={{ color: '#2978b5' }}>
          Autonomous Search and Rescue Object Detection Deployment to AWS
        </strong>
        <span style={{ float: 'right', fontStyle: 'italic' }}>November 2024</span>
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
      <ul>
        <strong style={{ color: '#2978b5' }}>Electronic Store Inventory WebApp</strong> |{" "}
        <a
          href="https://cc-final.cavlovic.dev"
          target="_blank"
          rel="noreferrer"
        >
          https://cc-final.cavlovic.dev
        </a>{" "}
        <span style={{ float: 'right', fontStyle: 'italic' }}>December 2025</span>
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
        <strong style={{ color: '#2978b5' }}>Autonomous Search and Rescue Object Detection</strong>
        <span style={{ float: 'right', fontStyle: 'italic' }}>August 2023 - May 2024</span>
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
        <strong style={{ color: '#2978b5' }}>
          MINST Convolution Neural Network NVIDIA Jetson Nano
        </strong>{" "}
        <span style={{ float: 'right', fontStyle: 'italic' }}>January 2024 - May 2024</span>
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
        <strong style={{ color: '#2978b5' }}>DLX Microprocessor ALU design NEXYS A7</strong>
        <span style={{ float: 'right', fontStyle: 'italic' }}>February 2026</span>
        <li>
          Designed, synthesized, and implemented an Arithmetic Logic Unit (ALU) based on the DLX microprocessor
            architecture, supporting operations such as ADD, SUB, SLL, and SRL through opcode-driven control using VERILOG.
        </li>
        <li>
          Developed a 7-segment display interface to visualize ALU output results, implemented opcode selection using onboard
            buttons, and enabled S1/S2 bus input loading via DIP switches.
        </li>
      </ul>
    <br />

    <div className="accomplishments">
      <h2>Accomplishments</h2>
      <br />
      <ul>
        <strong>L3Harris Performance Award</strong> | L3Harris
        <span style={{ float: 'right', fontStyle: 'italic' }}>July 2025</span>
        <br />
        <li>Embodied L3Harris core value to “Always Deliver”</li>
        <strong>“Honorable Mention”</strong> | UTSA ECE Department |{" "}
        <span style={{ float: 'right', fontStyle: 'italic' }}>December 2023</span>
        <br />
        <li>Craps Casino Game Nexys A7 Artix-7 FPGA</li>
        <strong>Professors Recommendation for Graduate School</strong> |
        Wei-Ming Lin, Ph.D.
        <span style={{ float: 'right', fontStyle: 'italic' }}>May 2024</span>
        <br />
        <li>
          Dr. Lin has personally recommended me for admission to Graduate
          School.
        </li>
      </ul>
    </div>
    <br />
  </div>
);

export default Resume;

import React from "react";
import "./Resume.css";

const Resume = () => (
  <div className="resume">
    <h1>Jordan Cavlovic</h1>
    <p className="contact-info">
      Little Elm, TX |{" "}
      <a href="mailto:jcavlovic91@gmail.com">jcavlovic91@gmail.com</a> |
      210-630-9871 |{" "}
      <a href="https://cavlovic.dev" target="_blank" rel="noreferrer">
        https://cavlovic.dev
      </a>
    </p>

    <div className="section">
      <h2>Education</h2>
      <ul>
        <li>
          <strong>Bachelor of Science in Computer Engineering</strong> |
          University of Texas San Antonio | San Antonio, TX
          <br />
          <i>&nbsp;January 2022 - May 2024</i>
        </li>
        <li>
          <strong>Associate of Science in Computer Science</strong> | Northwest
          Vista Community College | San Antonio, TX
          <br />
          <i> December 2019 - December 2021 </i>
        </li>
      </ul>
    </div>

    <div className="section">
      <h2>Key Skills</h2>
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

    <div className="section">
      <h2>Personal Projects</h2>
      <ul>
        <li>
          <strong>Personal Portfolio Website</strong>{" "}
          <a href="https://cavlovic.dev" target="_blank" rel="noreferrer">
            https://cavlovic.dev
          </a>
          (<i>October 2024</i>)
          <br />
          <li>
            Deployed custom portfolio website by leveraging AWS EC2, and Route53
            to deploy website sing NGINX web hosting.
          </li>
          <li>
            Deployed webpages using ReactJS, HTML5, Bootstrap 5.3.3, and jQuery.
          </li>
        </li>
        <li>
          <strong>
            Autonomous Search and Rescue Object Detection Deployment
          </strong>{" "}
          (<i>November 2024</i>)
          <li>
            Working on porting and deploying Engineering Capstone Project to AWS
            EC2 instance.
          </li>
          <li>
            Leverage AWS GPU instances to handle object detection inference.
          </li>
          <li>
            Allow users to choose any video from YouTube to run inference using
            a custom model developed during the Capstone Project.
          </li>
        </li>
      </ul>
    </div>

    <div className="section">
      <h2>School Projects</h2>
      <ul>
        <li>
          <strong>Autonomous Search and Rescue Object Detection</strong> (
          <i>August 2023 - May 2024</i>)
          <br />
          <li>
            Senior design project focused on creating an autonomous object
            detection device for search and rescue operations.
          </li>
          <li>
            Managed project meetings, delegated tasks, and supported team
            members.
          </li>
          <li>
            Designed an object detection system with YOLOv8 and SAHI and
            assisted with GUI development and Flask API.
          </li>
          <li>
            Contributed to AI model training, as well as cleaning and prunning
            dataset.
          </li>
        </li>
        <li>
          <strong>
            Machine Learning Inference on NVIDIA Jetson Nano & MSP430
          </strong>{" "}
          (<i>January 2024 - May 2024</i>)
          <li>
            Collaborated to perform inference using the MNIST dataset on NVIDIA
            Jetson Nano and MSP430.
          </li>
          <li>
            Developed code in Python, C, and C++ for weight calculation and
            inference.
          </li>
          <li>
            Optimized GPU performance on Jetson Nano using the CC compiler.
          </li>
        </li>
        <li>
          <strong>Self-Leveling Tilt Table and Self-Driving RC Car</strong> (
          <i>January 2024 - May 2024</i>)
          <li>Developed embedded devices with the KL25z Freedom Board.</li>
          <li>
            Designed a tilt table with automatic adjustment using servos and a
            touchpad.
          </li>
          <li>
            Programmed an RC car to detect and stay centered on a track using C
            programing language.
          </li>
        </li>
      </ul>
    </div>

    <div className="section">
      <h2>Accomplishments</h2>
      <ul>
        <li>“Honorable Mention” | UTSA ECE Department (December 2023)</li>
        <li>Craps Casino Game Nexys A7 Artix-7 FPGA</li>
        <li>
          Professors Recommendation for Graduate School | Wei-Ming Lin, Ph.D. (
          <i>May 2024</i>)
        </li>
        <li>
          Spring 2024 UTSA Student Honor Roll | 18 Credit Hours Semester (July
          2024)
        </li>
      </ul>
    </div>

    <div className="section">
      <h2>Professional Experience</h2>
      <ul>
        <strong>Bartender</strong> | Red Robin | San Antonio, TX (June 2015 –
        July 2024)
        <br />
        <li>
          Actively listened to client needs and trained new hires in adherence
          to company policy.
        </li>
        <strong>Photographer</strong> | Lujack’s Auto Plaza | Davenport, IA
        (January 2013 - May 2015)
        <br />
        <li>
          Skilled in Adobe Photoshop, DSLR cameras, and team collaboration.
        </li>
        <strong>Line Cook</strong> | Applebee’s Bar and Grill | Davenport, IA
        (May 2010 - January 2013)
        <br />
        <li>
          Prepared menu items, maintained food safety, and collaborated
          effectively with the kitchen team.
        </li>
      </ul>
    </div>

    <div className="section">
      <h2>References</h2>
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

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "https://cavlovic.dev",
  title: "JS.",
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Jordan Cavlovic",
  role: "Computer Engineer",
  description:
    "I am a dedicated software developer with a strong foundation in Computer Engineering, holding a degree that has equipped me with the skills to bridge the gap between software and hardware. I thrive on the challenge of designing and developing innovative software solutions while also enjoying the hands-on experience of working with hardware systems. ",
  resume: "https://example.com",
  social: {
    linkedin: "https://www.linkedin.com/in/jordan-cavlovic-507629199/",
    github: "https://github.com/jcavlovic",
  },
};

const currentprojects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "R.A.P.T.O.R. v2.0",
    date: "November 2024",
    description:
      "Autonomous Search and Rescue Object Detection using YOLOv8 and SAHI running live inference on AWS EC2 instance and ultilizeing AWS GPU instances to run inference on user selected videos.",
    stack: [
      "YOLOv8/SAHI",
      "JavaScript",
      "FastAPI",
      "HTML/CSS",
      "MongoDB",
      "ReactJS",
      "Docker",
    ],
    sourceCode: "https://github.com/Jcavlovic/raptorv3",
    livePreview: "",
  },
  {
    name: "DLX ALU NEXYS A7",
    date: "February 2026",
    description:
      "DLX Microprocessor Arthimetic Logical Unit design using Verilog and NEXYS A7 Development Board.",
    stack: [
      "Verilog",
      "Xilinx Vivado",
      "GIT",
    ],
    sourceCode: "https://github.com/Jcavlovic/dlx",
    livePreview: "",
  },
];
const finishedprojects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "Cavlovic.dev",
    date: "October 2024",
    description:
      "Personal Portfolio Website developed with ReactJS, Bootstrap, and AWS",
    stack: [
      "AWS EC2",
      "AWS Route 53",
      "Bootstrap",
      "HTML/CSS",
      "JavaScript",
      "ReactJS",
    ],
    sourceCode: "https://github.com/Jcavlovic/cavlovic.dev",
    livePreview: "https://cavlovic.dev",
  },
  {
    name: "Electronic Store Inventory WebApp",
    date: "December 2025",
    description:
      "Developed a webapp for Intro to Cloud Computing that used CRUD operations to store inventory for a mock electronic store. Used Python, HTML/CSS, Javascript along with Amazon Web Services EC2, DynamoDB, and Docker for hosting and deploying.",
    stack: ["Python", "HTML/CSS", "Javascript", "AWS EC2", "Amazon DynamoDB"],
    sourceCode: "https://github.com/Jcavlovic/cloud_computing_final",
    livePreview: "https://cc-final.cavlovic.dev",
  },
  {
    name: "shotgunoffroad.net",
    date: "December 2024",
    description:
      "Developing a website for Shotgun Offroad, a company specializing in the installation and custom fabrication of lift kits, leveling kits, and a wide range of off-road truck accessories.",
    stack: [
      "Wordpress",
      "Vantage Theme",
      "HTML/CSS",
      "User Experience",
      "User Interface",
    ],
    sourceCode: "https://github.com/siteorigin/vantage",
    livePreview: "https://www.shotgunoffroad.net",
  },
  {
    name: "R.A.P.T.O.R. v1.0",
    date: "May 2024",
    description:
      "Autonomous Search and Rescue Object Detection using YOLOv8 and SAHI running live inference on Nvidia Jetson Orin Nano",
    stack: [
      "YOLOv8/SAHI",
      "Python3.11",
      "JavaScript",
      "FlaskAPI",
      "HTML/CSS",
      "Pytorch",
      "Machine Learning",
    ],
    sourceCode: "https://github.com/Jcavlovic/raptorv1",
    livePreview: "",
  },
  {
    name: "Machine Learning Inference on NVIDIA Jetson Nano & MSP430",
    date: "May 2024",
    description:
      "Training and Inference on the MINST Dataset using NVIDIA Jetson Nano and MSP430",
    stack: ["Python3.11", "C", "NVCC", "Machine Learning"],
    sourceCode: "",
    livePreview: "",
  },
  {
    name: "Self-Leveling Tilt Table and Self-Driving RC Car",
    date: "May 2024",
    description:
      "As a team, we developed two embedded devices using the KL25z Freedom Board, integrating a touch pad and servos for automatic X and Y axis pitch adjustment. Additionally, we created a self-driving RC car using the MSP430, servos, and a optical sensor.",
    stack: ["C", "MCUXpresso IDE", "Optical Sensors", "Servo Motors"],
    sourceCode: "",
    livePreview: "",
  },
  {
    name: "Autonomous Water Feeding System using Raspberry Pi and Arduino",
    date: "May 2024",
    description:
      "As a team, we successfully designed and implemented an autonomous water feeding system, demonstrating potential vulnerabilities through DDoS attacks and MitM tactics, using Arduino and RaspberryPi programming languages.",
    stack: [
      "Python3.11",
      "C",
      "A2D/D2A",
      "Sensors",
      "MQTT Protocol",
      "Water Pump",
      "Water Level Sensor",
      "Soil Moisture Sensor",
    ],
    sourceCode: "",
    livePreview: "",
  },
  {
    name: "Craps Casino Game Nexys A7 Artix-7 FPGA",
    date: "December 2023",
    description:
      "Independently developed Craps casino game on Nexys A7 Artix-7 FPGA Trainer Board, designing module for clock speeds, dice simulation, display setup, and game logic.",
    stack: ["FPGAs", "Verilog", "Xilinx Vivado"],
    sourceCode: "",
    livePreview: "",
  },
];
const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  "Python",
  "Java",
  "C++",
  "C",
  "HTML/CSS",
  "Verilog",
  "JavaScript",
  "React",
  "MongoDB",
  "Docker",
  "GIT",
  "CI/CD",
  "SELinux"
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "jcavlovic91@gmail.com",
};

export { header, about, currentprojects, finishedprojects, skills, contact };

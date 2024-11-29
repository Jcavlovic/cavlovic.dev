const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://cavlovic.dev',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Jordan Cavlovic',
  role: 'Full Stack Developer in training',
  description:
    'I am a Full Stack Developer in training with a background in Computer Engineering. I am passionate about creating innovative solutions that make a positive impact on the world.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/jordan-cavlovic-507629199/',
    github: 'https://github.com/jcavlovic',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'R.A.P.T.O.R. v1.0',
    description: 'UTSA Engineering Capstone Project on NVIDIA Jetson ORIN',
    stack: ['YOLOv8/SAHI', 'Python3.11', 'JavaScript', 'FlaskAPI'],
    sourceCode: 'https://github.com/Jcavlovic/raptorv1',
    livePreview: '',
  },
  {
    name: 'Cavlovic.dev',
    description: 'Personal Portfolio Website',
    stack: ['AWS EC2', 'HTML/CSS', 'JavaScript', 'ReactJS'],
    sourceCode: 'https://github.com/Jcavlovic/cavlovic.dev',
    livePreview: 'https://cavlovic.dev',
  },
  {
    name: 'R.A.P.T.O.R. v2.0',
    description: 'UTSA Engineering Capstone Project on AWS',
    stack: [
      'YOLOv8/SAHI',
      'JavaScript',
      'FastAPI',
      'HTML/CSS',
      'MongoSQL',
      'ReactJS',
      'Docker',
    ],
    sourceCode: 'https://github.com/Jcavlovic/raptorv3',
    livePreview: '',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'Java',
  'C++',
  'C#',
  'C',
  'MongoSQL',
  'Verilog',
  'HTML/CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Git',
  'CI/CD',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'jcavlovic91@gmail.com',
}

export { header, about, projects, skills, contact }

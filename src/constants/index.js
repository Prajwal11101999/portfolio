import {
  dev,
  cpp,
  java,
  reactjs,
  nodejs,
  mysql,
  git,
  konverge,
  SKN,
  careersync,
  optipulse,
  synapse,
  ChargeEasy,
  cfv,
  bank,
  matlab,
  python,
  typescript,
  restapi,
  openai,
  amazonwebservices,
  gcp,
  ec,
  eventwave,
  chess,
  adas,
  django,
  docker,
  javascript,
  fastapi,
  affinityrank,
  neuralchess
} from "../assets";

export const navLinks = [
  {
    id: "Resume",
    title: "Resume",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  // {
  //   title: "Software Developer",
  //   icon: dev,
  // },
  // {
  //   title: "SCRUM Master",
  //   icon: sm,
  // },
];


const technologies = [
  { name: "cpp", icon: cpp },
  { name: "java", icon: java },
  { name: "Python", icon: python },
  { name: "Django", icon: django },
  { name: "Node JS", icon: nodejs },
  { name: "MySQL", icon: mysql },
  { name: "MATLAB", icon: matlab },
  { name: "git", icon: git },
  { name: "React JS", icon: reactjs },
  { name: "TypeScript", icon: typescript },
  { name: "REST API", icon: restapi },
  { name: "OpenAI", icon: openai },
  { name: "Docker", icon: docker },
  { name: "JavaScript", icon: javascript },
  { name: "FastAPI", icon: fastapi },
  { name: "Amazon Web Services", icon: amazonwebservices },
  { name: "Google Cloud Platform", icon: gcp },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "EC InfoSolutions LLC",
    icon: ec,
    iconBg: "#E6DEDD",
    date: "June 2024 - Aug 2024",
    points: [
      "Developed full-stack healthcare applications using Python, React, and REST APIs on AWS, implementing Postgres data models and improving system reliability by 25% across distributed environments.",
      "Built responsive front-end components using React and MaterialUI integrated with backend services, supporting feature development workflows and reducing interface latency by 30% across healthcare applications.",
      "Assisted in unit testing and debugging backend services using Python and Postgres, identifying defects early and reducing production issues by 18% across application components.",
      "Collaborated with engineers and product teams using Git to document requirements, support release cycles, and improve AWS-basedsystem monitoring and deployment workflows.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Konverge Technologies",
    icon: konverge,
    iconBg: "#E6DEDD",
    date: "June 2020 - July 2023",
    points: [
      "Engineered scalable backend systems using Python and REST APIs on AWS, processing healthcare datasets and improving throughput by 28% across distributed application environments reliably.",
      "Developed full-stack features using React and Node.js with Postgres, enabling real-time data visualization and reducing processing latency by 30% for critical healthcare systems.",
      "Built RESTful APIs for healthcare workflows using Python and Postgres, optimizing query performance and improving response times by 22% across microservices systems.",
      "Automated CI/CD pipelines using AWS, Docker, and Jenkins, supporting release cycles and reducing deployment effort by 70% across backend application environments.",
      "Implemented unit and system testing using Selenium and Mockito, identifying defects and achieving over 90% test coverage for critical healthcare application modules.",
      "Collaborated with cross-functional teams in code reviews and requirement discussions, improving system quality and ensuring reliable AWS-based healthcare application operations.",
    ],
  },
  {
    title: "Training Placement Co-ordinator",
    company_name: "Smt. Kashibai Navale College of Engineering, SPPU",
    icon: SKN,
    iconBg: "#FFFFFF",
    date: "July 2020 - Oct 2021",
    points: [
      "Actively contributed to the university's Research Team, focusing on expanding campus corporate engagement, resulting in a 20% increase in the number of visiting companies.",
      "Held the role of the official point of contact (POC) for chosen visiting companies, overseeing placement and internship initiatives.",
    ],
  },
];

const projects = [

    {
    name: "OptiPulse - AI Powered Inventory for Hospitals",
    description:
      "An AI-powered platform that automates hospital inventory management using real-time demand prediction and expiry alerts to reduce expired supplies by 25% and cut procurement paperwork by 60%.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "CrewAI",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "FastAPI",
        color: "blue-text-gradient",
      },
    ],
    image: optipulse,
    source_code_link: "https://github.com/Prajwal11101999/commure_Health",
  },
  {
    name: "SynapseSupply - Reimagining Supply Chain with Autonomous Agents",
    description:
      "multi-agent AI system that automates the entire supply chain by enabling autonomous agents to handle supplier negotiation and execute smart contract payments on the Cardano blockchain.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "CrewAI",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "FastAPI",
        color: "blue-text-gradient",
      },
    ],
    image: synapse,
    source_code_link: "https://github.com/Prajwal11101999/Synapse_Supply",
    research_paper_link: "",
  },
  {
    name: "CareerSync AI Assistant",
    description:
      "A GPT-powered job assistant featuring a RAG-based algorithm, meticulously designed to optimize response relevance (88% accuracy) and handle 500+ monthly queries with sub-second latency for personalized career insights.",
    tags: [
      {
        name: "OpenAI GPT-3.5",
        color: "blue-text-gradient",
      },
      {
        name: "LangChain",
        color: "blue-text-gradient",
      },
      {
        name: "FastAPI",
        color: "blue-text-gradient",
      },
      {
        name: "Pinecone",
        color: "blue-text-gradient",
      },
      {
        name: "GCP Cloud Run",
        color: "blue-text-gradient",
      },
    ],
    image: careersync,
    source_code_link: "https://github.com/Prajwal11101999/CareerSync-AI-Assistant",
  },
  {
  name: "AffinityRank Engine",
  description:
    "A recommendation system featuring collaborative filtering algorithms, meticulously designed to improve user engagement by boosting click-through rates by 15% with real-time predictions under 200ms latency.",
  tags: [
    {
      name: "Python",
      color: "blue-text-gradient",
    },
    {
      name: "Scikit-learn",
      color: "blue-text-gradient",
    },
    {
      name: "FastAPI",
      color: "blue-text-gradient",
    },
    {
      name: "AWS Lambda",
      color: "blue-text-gradient",
    },
    {
      name: "Docker",
      color: "blue-text-gradient",
    },
  ],
  image: affinityrank,
  },
  {
    name: "Multi-Player Chess with Load Balancing and SSL using GCP",
    description:
      "Developed a dynamic, multi-player chess game using Django with real-time gameplay via Django Channels, Redis, and WebSockets, featuring user authentication, game history, and journaling. Deploy the application to Google Cloud Platform with a load balancer, HTTPS, PostgreSQL, and Dockerized services for scalable performance.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "Docker",
        color: "blue-text-gradient",
      },
      {
        name: "GCP",
        color: "blue-text-gradient",
      },
    ],
    image: chess,
    source_code_link: "https://drive.google.com/file/d/167P6NKeglFtz6tt7EDc3jIe4ybKk8CAE/view?usp=sharing",
  },
  {
    name: "NeuralChess-RL",
    description:
      "A reinforcement learning chess engine featuring DQN-based algorithms, meticulously designed to optimize move strategies through continuous self-play and dynamic reward optimization, with an interactive React-based visualization of game states.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Reinforcement Learning",
        color: "blue-text-gradient",
      },
      {
        name: "DQN",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
    ],
    image: neuralchess,
    source_code_link: "https://github.com/Prajwal11101999/NeuralChess-RL",
  },
  {
    name: "Advanced Driver Assistance System using Cpp on Jetson Nano",
    description:
      "Developed Advanced Driver Assistance Systems (ADAS) using OpenCV, CUDA, and NVIDIA Jetson Nano for real-time lane, vehicle, and pedestrian detection.",
    tags: [
      {
        name: "Cpp",
        color: "blue-text-gradient",
      },
      {
        name: "OpenCV",
        color: "blue-text-gradient",
      },
      {
        name: "CUDA",
        color: "blue-text-gradient",
      },
      {
        name: "JetsonNano",
        color: "blue-text-gradient",
      },
    ],
    image: adas,
    source_code_link: "https://github.com/Prajwal11101999/VisionDrive-System-AV-ADAS",
  },
  {
    name: "Contactless Fingerprint Verification",
    description:
      "Implemented pre-processing and a CNN model using deep learning on the Keras framework, achieving fingerprint recognition accuracy exceeding 90%.",
    tags: [
      {
        name: "CNN",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "MATLAB",
        color: "blue-text-gradient",
      },
    ],
    image: cfv,
    source_code_link: "https://github.com/Prajwal11101999/Contactless_Fingerprint_Verification",
  },
  {
    name: "EventWave",
    description:
      "EventWave revolutionizes live events through immersive audience engagement, real-time stadium wave effects, and location verification ",
    tags: [
      {
        name: "Custom Novel Algorithm for Waves",
        color: "blue-text-gradient",
      },
      {
        name: "Dart",
        color: "blue-text-gradient",
      },
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "blue-text-gradient",
      },
      {
        name: "Geolocation",
        color: "blue-text-gradient",
      },
    ],
    image: eventwave,
    source_code_link: "https://github.com/Prajwal11101999/event_Wave",
  },
  {
    name: "ChargeEasy",
    description:
      "Developed a full-stack web application to assist electric vehicle (EV) drivers with navigation, utilizing the Angular framework for the frontend and Firebase for the backend.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "blue-text-gradient",
      },
    ],
    image: ChargeEasy,
    source_code_link: "https://github.com/Prajwal11101999/Charge_Easy",
  },
  {
    name: "Bank DBMS",
    description:
      "Developed an entire Bank database management system using MySQL Workbench and SQL queries required for it considering most of the use cases of a bank.",
    tags: [
      {
        name: "MySQL",
        color: "blue-text-gradient",
      },
    ],
    image: bank,
    source_code_link: "https://github.com/Prajwal11101999/Bank_dbms",
  },
];

export { services, technologies, experiences, projects };

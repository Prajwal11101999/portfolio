import {
  dev,
  cpp,
  java,
  reactjs,
  nodejs,
  mysql,
  git,
  adobexd,
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
  mendix,
  ec,
  eventwave,
  chess,
  adas,
  django,
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
  { name: "Adobe XD", icon: adobexd },
  { name: "React JS", icon: reactjs },
];

const experiences = [
  {
    title: "AI & Full Stack Developer",
    company_name: "EC InfoSolutions LLC",
    icon: ec,
    iconBg: "#E6DEDD",
    date: "June 2024 - Aug 2024",
    points: [
      "Developed scalable backend services using Python and REST APIs for a creator engagement platform, enabling secure content delivery and improving API response consistency by 22% under high user interaction workloads.",
      "Built interactive frontend components using React and TypeScript to support creator dashboards, enhancing user experience and reducing page load times by 18% across key engagement and analytics features.",
      "Integrated MySQL-based data storage solutions with backend services, optimizing query execution and improving data retrieval efficiency by 20% for content feeds and creator activity tracking systems.",
      "Collaborated with product managers and designers to implement user-facing features, contributing clean and maintainable code while improving feature delivery speed by 15% through effective sprint planning and reviews.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Konverge Technologies",
    icon: konverge,
    iconBg: "#E6DEDD",
    date: "June 2020 - July 2023",
    points: [
      "Engineered backend services using Python and REST APIs to support large-scale content processing systems, improving request throughput by 26% while handling high concurrency across distributed platform components.",
      "Designed and optimized data pipelines integrating Python and MySQL, reducing query latency by 29% and improving performance of content recommendation and analytics workflows for user engagement insights.",
      "Developed modular APIs for platform services enabling seamless integration with frontend applications, improving system scalability andreducing feature deployment time by 21% across multiple product releases.",
      "Implemented parallel processing using Python multiprocessing and asynchronous programming, reducing processing time by 28% for high-volume data operations in production environments.",
      "Automated CI/CD workflows using Docker and Jenkins, improving deployment reliability and reducing manual release effort by 65%, enabling faster iteration cycles for engineering teams.",
      "Built and maintained comprehensive test suites ensuring system stability and reliability, increasing test coverage to over 90% and reducing post-release defects by 18% across core backend services.",
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

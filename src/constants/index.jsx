import {
  FaGithub,
  FaLinkedin,
  FaDiscord,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { DiJava } from "react-icons/di";
import { TiHtml5 } from "react-icons/ti";
import { SiTailwindcss } from "react-icons/si";
import { SiNumpy } from "react-icons/si";
import { SiPandas } from "react-icons/si";
import { Si365Datascience } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { SiApachekafka } from "react-icons/si";



export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HOME = {
  name: "Ramadevi Kalappatti Narasimhan",
  greet: "Hello Tech Enthusiasts! 👋🏻",
  welcome_msg: "Welcome to my portfolio!",
  description:
    "I am a passionate full-stack developer and a machine learning enthusiast with a knack for creating beautiful and functional user interfaces. I like transforming ideas into engaging web apps with 8 years of experience in web development. I also love to explore various machine learning models to get deeper understanding of integrating web apps with machine learning models.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Responsive Portfolio Website",
    description: (
    <>
      A fully responsive portfolio website using <strong><i>React</i></strong>, <strong><i>HTML5</i></strong>, and <strong><i>Tailwind CSS</i></strong>, with dynamic animations powered by <strong><i>Framer Motion</i></strong>. The site adapts seamlessly across devices to showcase my skills, projects, and contact information, providing a modern and interactive user experience.
    </>),
    image: projectImage1,
    githubLink: "https://github.com/user/ramadevi-portfolio",
  },
  {
    id: 2,
    name: "Micro Goal Tracker",
    description: (
      <>
      A front-end application to help coaching clients track and manage micro goals as part of achieving larger objectives. Created to empower clients by visualizing short-term progress, the app allows users to easily add, complete, and remove goals. Built using <strong><i>HTML5</i></strong>, <strong><i>CSS3</i></strong>, and <strong><i>JavaScript</i></strong>, the project delivers a simple, user-friendly interface for effective micro-goal management.
      </>
    ),
      image: projectImage3,
    githubLink: "https://github.com/RamadeviKN/MICRO_GOAL_TRACKER",
  },
  {
    id: 3,
    name: "Student Performance Analysis using Multiple Linear Regression",
    description:(
      <>
      A data analysis project to evaluate student performance using the Multiple Linear Regression technique. Leveraged Python libraries like <strong><i>NumPy, Pandas, Seaborn, Matplotlib,</i></strong> and <strong><i>Scikit-learn</i></strong> for data preprocessing, model training, and visualization. The model’s accuracy was assessed using R-squared, providing insights into factors affecting student outcomes.
      </>
    ),
      image: projectImage5,
    githubLink: "https://github.com/RamadeviKN/Student-Performance-Analysis-Using-Machine-Learning",
  },
  {
    id: 4,
    name: "Cyber Threat Detection Using Machine Learning - Classification",
    description:(
      <>
      Cyber Threat Detection project focuses on detecting cyber threats using machine learning techniques. The model aims to identify and classify different types of cyber-attacks. Leveraging <strong><i>NumPy, Pandas, Seaborn, Matplotlib,</i></strong> and <strong><i>Scikit-learn</i></strong> and <strong><i>XGBoost</i></strong>, the model distinguishes between normal and malicious activities.
      </>
    ),
      image: projectImage6,
    githubLink: "https://github.com/RamadeviKN/cyber-threat-detection-machine-learning-project",
  },
  /*{
    id: 5,
    name: "Market Segment Analysis Using Machine Learning - Clustering",
    description:(
      <>
      "Test"
      </>
    ),
      image: projectImage6,
    githubLink: "https://github.com/user/chat-application",
  },
  {
    id: 6,
    name: "Association Rule Learning",
    description:(
      <>
      "Test"
      </>
    ),
      image: projectImage6,
    githubLink: "https://github.com/user/chat-application",
  },
  {
    id: 7,
    name: "Reinforcement Learning",
    description:(
      <>
      "Test"
      </>
    ),
      image: projectImage6,
    githubLink: "https://github.com/user/chat-application",
  },
  {
    id: 8,
    name: "Console Based Game Hub in Python",
    description:(
      <>
      "Test"
      </>
    ),
      image: projectImage6,
    githubLink: "https://github.com/user/chat-application",
  },
  {
    id: 9,
    name: "The Conway's Game of Life in Python",
    description:(
      <>
      "Test"
      </>
    ),
      image: projectImage6,
    githubLink: "https://github.com/user/chat-application",
  },
  {
    id: 10,
    name: "SpringBoot Microservices project",
    description:(
      <>
      "Test"
      </>
    ),
      image: projectImage6,
    githubLink: "https://github.com/user/chat-application",
  },*/
];

export const BIO = [
  "Graduating with a Bachelor of Engineering in Computer Science and Engineering in 2012, over 8+ years of experience has been gained across front-end development, Java Spring Boot microservices, Python and web development. This extensive experience includes working with high-profile clients such as MetLife(USA) and TIAA(USA), consistently delivering innovative, cost-effective solutions to enhance business operations and optimize digital platforms.",
  "The technical journey has expanded in recent years, focusing on modern front-end frameworks like React and Python-based projects. With 2 years of experience in building React-based front-end applications, there is a strong emphasis on creating responsive, intuitive, and performance-driven solutions. This versatility in both front-end and back-end technologies has contributed to the development of comprehensive, user-centered applications that meet evolving industry needs.",
  "With a strong focus on modern web technologies, the journey has expanded to working on React-based front-end applications and Python projects for the last two years. This versatility in combining robust front-end frameworks and back-end technologies has enabled the development of responsive, intuitive, and performance-driven applications.",
  "Currently, there is a focused effort on advancing machine learning expertise such as regression, classification, clustering and neural networks, combining AI techniques with existing knowledge in React and Python.",
  "Involved in building scalable, intelligent applications by integrating machine learning models with modern web frameworks to innovate in predictive analytics, recommendation systems, and intelligent automation, transforming web solutions into dynamic, data-driven tools for improved user experience and decision-making. This consistent drive for learning and adopting new technologies ensures continuous growth and the ability to deliver cuting-edge solutions in the ever-evolving world of full-stack development, AI and machine learning.",
];

export const SKILLS = [
  {
    icon: <SiPython className="text-4xl text-indigo-500 lg:text-4xl" />,
    name: "Python (Certified from 365Datascience)",
    experience: "2 years",
  },
  {
    icon: <SiNumpy className="text-4xl text-indigo-500 lg:text-4xl" />,
    name: "Numpy",
    experience: "6 months",
  },
  {
    icon: <SiPandas className="text-4xl text-indigo-500 lg:text-4xl" />,
    name: "Pandas (Certified from 365Datascience)",
    experience: "6 months",
  },
  {
    icon: <Si365Datascience className="text-4xl text-indigo-500 lg:text-4xl" />,
    name: "Machine Learning in Python (Certified from 365Datascience)",
    experience: "6 months",
  },
  {
    icon: <DiJava className="text-4xl text-yellow-400 lg:text-5xl" />,
    name: "Java",
    experience: "7+ years",
  },
  {
    icon: <SiSpringboot className="text-4xl text-blue-400 lg:text-5xl" />,
    name: "Spring Boot",
    experience: "2+ years",
  },
  {
    icon: <SiApachekafka className="text-4xl text-blue-400 lg:text-5xl" />,
    name: "Apache Kafka",
    experience: "1+ years",
  },
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "1.5+ years",
  },
  {
    icon: <TiHtml5 className="text-4xl text-pink-400 lg:text-5xl" />,
    name: "HTML5",
    experience: "6+ years",
  },
  {
    icon: <SiTailwindcss className="text-4xl text-blue-400 lg:text-5xl" />,
    name: "Tailwind CSS",
    experience: "6 months",
  },
];

export const EXPERIENCES = [
  {
    title: "Career Break",
    company: "Learning and Upskilling with persistence!",
    duration: "January 2022 - Till Date",
    description:
      "Career Break due to relocation from India to USA. My permit to work is approved in USA. Hence, I am looking for C2C opportunities!",
  },
  {
    title: "Associate Software Engineer",
    company: "Cognizant Technology Solutions",
    duration: "April 2015 - January 2022",
    description:
      "As an Associate Software Engineer, spearheaded the development of advanced web applications and APIs utilizing cutting-edge technologies such as React, Java Spring Boot Microservices and Python. Collaborated closely with cross-functional teams, including designers, product managers, and backend engineers, to deliver seamless, high-performance user experiences. Leveraging expertise in both frontend and backend technologies, contributed to the full lifecycle of software development—from design and implementation to deployment—consistently delivering innovative and cost-effective solutions.",
  },
  {
    title: "Programmer Analyst",
    company: "Cognizant Technology Solutions",
    duration: "May 2014 - March 2015",
    description:
      "As Programmer Analyst, I focused on building highly interactive and responsive web interfaces using HTML, CSS, JavaScript, and Java frameworks like Spring MVC and SpringBoot. I collaborated closely with UX/UI designers to implement design changes that enhanced user engagement and satisfaction. My role involved optimizing website performance, ensuring cross-browser compatibility, and implementing SEO best practices. ",
  },
  {
    title: "Programmer Analyst Trainee",
    company: "Bright Future Technologies",
    duration: "April 2013 - April 2014",
    description:
      "In my role as a Programmer Analyst Trainee, I assisted in the development and maintenance of various web applications. I gained hands-on experience in utilizing HTML, CSS, and JavaScript to create user-friendly interfaces and RestFul webservices using Java. I actively participated in team meetings, contributed to project planning, and collaborated with senior developers to implement new features.",
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Engineering - Computer Science & Engineering",
    institution: "Kongu Engineering College(Affl to Anna University)",
    duration: "August 2008 - April 2012",
    description:
      "Focused on web development, programming languages, and database management. Actively involved in coding clubs and hackathons, where I developed several web applications using HTML, CSS, JavaScript, and PHP. Completed a senior project on optimization of search documents using Java. Graduated with a high GPA of 9.2",
  },
  {
    degree: "Higher Secondary Education",
    institution: "Prema Matriculation Higher Secondary School",
    duration: "May 2007 - April 2008",
    description:
      "Studied Mathematics and Computer Science. Graduated with a high GPA of 9.4  ",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.linkedin.com/in/ramadevikn",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/RamadeviKN",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://discordapp.com/users/ramadevikalappattinarasimhan",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
];

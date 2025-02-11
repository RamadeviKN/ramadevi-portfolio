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

import certImage1 from "../assets/certificate8.jpg";
import certImage2 from "../assets/certificate2.jpg";
import certImage3 from "../assets/certificate3.jpg";
import certImage4 from "../assets/certificate4.jpg";
import certImage5 from "../assets/certificate5.jpg";
import certImage6 from "../assets/certificate6.jpg";
import certImage7 from "../assets/certificate7.jpg";
import certImage8 from "../assets/certificate1.jpg";
import certImage9 from "../assets/certificate9.jpg";
import certImage10 from "../assets/certificate10.jpg";


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
  { label: "Industry Experience", href: "#work" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HOME = {
  name: "Ramadevi Kalappatti Narasimhan",
  greet: "Hello Tech Enthusiasts! 👋🏻",
  welcome_msg: "Welcome to my portfolio!",
  description:
    "I am a passionate full-stack developer and a machine learning enthusiast with a knack for creating beautiful and functional user interfaces. I like transforming ideas into engaging web apps with 8 years of experience in web development and 4+ years of love for machine learning. I also love to explore various machine learning models to get deeper understanding of integrating web apps with machine learning models for producing insights from data to improve business decisions.",
  note:
  "Currently, I am upskilling and looking for C2C Job opportunities in Java/Python development or Machine Learning!",
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
    githubLink: "https://github.com/RamadeviKN/ramadevi-portfolio",
  },
  {
    id: 2,
    name: "FAQTelegramBot",
    description: (
      <>
        A smart and efficient Telegram bot for answering admission-related queries at <strong><i>ABC University</i></strong>. Built with <strong><i>Spring Boot 3.4.0</i></strong>, <strong><i>Java 17</i></strong>, and <strong><i>MySQL</i></strong>, this bot uses AI-powered <strong><i>Python Flask</i></strong> backend with <strong><i>spaCy</i></strong> for NLP to provide relevant answers to user queries. The backend is fully containerized with <strong><i>Docker</i></strong> to ensure scalable and seamless deployment.
      </>
    ),
      image: projectImage2,
    githubLink: "https://github.com/RamadeviKN/FAQTelegramBot",
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
  {
    id: 5,
    name: "Micro Goal Tracker",
    description: (
      <>
      A front-end application to help coaching clients track and manage micro goals as part of achieving larger objectives. Created to empower clients by visualizing short-term progress, the app allows users to easily add, complete, and remove goals. Built using <strong><i>HTML5</i></strong>, <strong><i>CSS3</i></strong>, and <strong><i>JavaScript</i></strong>, the project delivers a simple, user-friendly interface for effective micro-goal management.
      </>
    ),
      image: projectImage5,
    githubLink: "https://github.com/RamadeviKN/MICRO_GOAL_TRACKER",
  },
  {
    id: 6,
    name: "Market Segmentation Analysis for Mall Customers",
    description:(
      <>
      Market Segmentation Analysis project leverages machine learning techniques to segment mall customers into distinct groups. Identified key customer segments based on their shopping behaviors by employing K-Means and Hierarchical Clustering algorithms. Leveraged Python libraries like <strong><i>NumPy, Pandas, Seaborn, Matplotlib,</i></strong> and <strong><i>Scikit-learn</i></strong> analyzed and visualized the data, providing valuable insights for targeted marketing strategies.
      </>
    ),
      image: projectImage1,
    githubLink: "https://github.com/RamadeviKN/Market-Segmentation-analysis-for-Mall-customers",
  },
  {
    id: 7,
    name: "Internet Sales Analysis Using PowerBI",
    description:(
      <>
      A comprehensive data model with a custom date table to enable insightful analysis using <strong><i>Power BI</i></strong> and <strong><i>DAX</i></strong>. Created dynamic visuals such as sales by currency, month, and country, along with a matrix table for detailed sales insights. Designed measures to calculate total sales as numbers and percentages with an interactive toggle button. Implemented a dynamic text box to display user selections, enhancing interactivity and data clarity.
      </>
    ),
      image: projectImage2,
    githubLink: "https://github.com/RamadeviKN/Internet-Sales-Analysis-Using-PowerBI",
  },
  {
    id: 8,
    name: "Product Sales Report Using PowerBI",
    description:(
      <>
      Product Sales Report/Dashboard is built using <strong><i>Power BI</i></strong> with a focus on aesthetics and functionality. It includes interactive slicers, KPIs (Total Sales, Products Sold, and Customers), a gender split donut chart, and a country-wise bar chart. The dashboard features a clean design with custom <strong><i>DAX</i></strong> measures and aligned visuals.
      </>
    ),
      image: projectImage3,
    githubLink: "https://github.com/RamadeviKN/Product-Sales-Report-Using-Power-BI",
  },
  {
    id: 9,
    name: "Telecom Churn Analysis Using PowerBI",
    description:(
      <>
      "Telecom Churn Analysis project implemented using <strong><i>PowerBI, Power Query, DAX</i></strong> and <strong><i>Microsoft SSMS</i></strong> focuses on analyzing telecom customer churn patterns using SQL ETL workflows, Power Query transformations, and Power BI dashboards. The analysis provides valuable insights into customer behavior, helping telecom companies identify churn trends, optimize marketing strategies, and improve overall customer retention."
      </>
    ),
      image: projectImage6,
    githubLink: "https://github.com/RamadeviKN/Telecom-Churn-Analysis-Using-Power-BI",
  },
  {
    id: 10,
    name: "Medical Symptom and Treatment Search Using PineconeDB",
    description:(
      <>
      "A streamlit application that allows users to search for medical symptoms and their associated diseases, treatments, and precautions using a powerful PineconeDB-backed vector similarity search. This project leverages <strong><i>machine learning models, Python, streamlit, pandas</i></strong> to provide an intuitive and effective user experience."
      </>
    ),
      image: projectImage1,
    githubLink: "https://github.com/RamadeviKN/Medical-Symptom-and-Treatment-Search-Using-PineconeDB",
  },
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
    company: "Cognizant Technology Solutions",
    duration: "April 2013 - April 2014",
    description:
      "In my role as a Programmer Analyst Trainee, I assisted in the development and maintenance of various web applications. I gained hands-on experience in utilizing HTML, CSS, and JavaScript to create user-friendly interfaces and RestFul webservices using Java. I actively participated in team meetings, contributed to project planning, and collaborated with senior developers to implement new features.",
  },
];

export const CERTIFICATIONS = [
  {
    id: 1,
    name: "Power BI",
    image: certImage1,
  },
  {
    id: 2,
    name: "Python Programmer Bootcamp by 365DataScience",
    image: certImage2,
  },
  {
    id: 3,
    name: "Machine Learning in Python by 365DataScience",
    image: certImage3,
  },
  {
    id: 4,
    name: "Power Query and Data Modeling",
    image: certImage9,
  },
  {
    id: 5,
    name: "Introduction to Python by 365DataScience",
    image: certImage4,
  },
  {
    id: 6,
    name: "Intermediate Python Programming by 365DataScience",
    image: certImage5,
  },
  {
    id: 7,
    name: "Data Cleaning and Preprocessing with pandas by 365DataScience",
    image: certImage6,
  },
  {
    id: 8,
    name: "Data Analytics your path to a six-figure salary",
    image: certImage7,
  },
  {
    id: 9,
    name: "Introduction to Vector Databases with Pinecone",
    image: certImage10,
  },
  {
    id: 10,
    name: "SpringBoot for Beginners by Amigoscode",
    image: certImage8,
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

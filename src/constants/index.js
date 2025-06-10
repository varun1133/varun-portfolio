import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  dyashin,
  plasmid,
} from "../assets";

export const navLinks = [
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
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Python Developer",
    icon: backend,
  },
  {
    title: "Data Analytics",
    icon: creator,
  },
  {
    title: "UI/UX Designer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Django",
    icon: redux,
  },
  {
    name: "Java",
    icon: tailwind,
  },
  {
    name: "MySQL",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Power BI",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Flask",
    icon: figma,
  },
  {
    name: "Pandas",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Python and Data Analytics Intern",
    company_name: "Dyashin Technosoft Pvt Ltd",
    icon: dyashin,
    iconBg: "#383E56",
    date: "Feb 2025 - May 2025",
    points: [
      "Developed Python scripts for data cleaning and transformation.",
      "Created interactive dashboards in Power BI.",
      "Automated reporting with Pandas, Matplotlib, Seaborn.",
    ],
  },
  {
    title: "Data Analytics Intern",
    company_name: "Plasmid Innovation",
    icon: plasmid,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "Built responsive UI using HTML, CSS, JavaScript.",
      "Integrated backend APIs and added interactivity.",
    ],
  },
  {
    title: "Python Intern",
    company_name: "Malnad College of Engineering",
    icon: "https://www.immersivetourz.com/mce/skin/Image_1292EDB5_5641_F2C1_41BA_B225C09396B4_en.png?v=1740056425006",
    iconBg: "#383E56",
    date: "Oct 2022 - Nov 2022",
    points: [
      "Automated academic data processing tasks.",
      "Enhanced algorithm performance.",
    ],
  },
];

const involvement = [
  {
    title: "Boy Scout",
    description: "Leadership, community service, survival skills",
    year: "2017-2019",
    category: "Leadership",
    icon: creator,
  },
  {
    title: "Photography",
    description: "Passionate about capturing moments and visual storytelling",
    year: "2020-Present",
    category: "Creative",
    icon: web,
  },
  {
    title: "Video Editing",
    description: "Experience in creating engaging visual content and motion graphics",
    year: "2021-Present",
    category: "Technical",
    icon: mobile,
  },
];

const projects = [
  {
    name: "Real-Time Chat App",
    description: "Built with MERN stack. Achieved 70–90% lower latency using WebSockets.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "websockets",
        color: "pink-text-gradient",
      },
    ],
    image: "https://markovate.com/wp-content/uploads/2022/08/top-MERN-Stack.webp",
    source_code_link: "https://github.com/varun1133/REAL-TIME-CHAT-APPLICATION",
  },
  {
    name: "Spring Boot Heart Monitor API",
    description: "Async REST backend for heart-rate tracking. 60–80% latency reduction.",
    tags: [
      {
        name: "spring",
        color: "blue-text-gradient",
      },
      {
        name: "java",
        color: "green-text-gradient",
      },
      {
        name: "rest",
        color: "pink-text-gradient",
      },
    ],
    image: "https://cdn.servermania.com/images/f_webp,q_auto:best/v1693496622/blog/Featured-4/Featured-4.png?_i=AA",
    source_code_link: "https://github.com/varun1133/API-development-using-spring-boot",
  },
  {
    name: "Smart Advertising ML",
    description: "Built an ML system to recommend ads using click behavior and user profiles.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "ml",
        color: "green-text-gradient",
      },
      {
        name: "data-analytics",
        color: "pink-text-gradient",
      },
    ],
    image: "https://marvel-b1-cdn.bc0a.com/f00000000293946/opportune.com/assets/filesystems/insights/leveraging-ai-the-future-of-commodity-trading/AI_artificial_intelligence_future_of_commodity_trading_natural_language_processing_machine_learning_Opportune_LLP.jpeg",
    source_code_link: "https://github.com/varun1133/Smart-Advertising-Using-Machine-Learning",
  },
  {
    name: "Bank Management System",
    description: "Managed customers and transactions. Reduced latency by 80%.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "tkinter",
        color: "pink-text-gradient",
      },
    ],
    image: "https://cdn-ilcajgj.nitrocdn.com/sgYtAjPswAtSYUPEJOsYocqjmIcTHsju/assets/images/optimized/tanzaniaconsultant.com/wp-content/uploads/2023/06/Tanzania-Banks-and-Banking-System.png",
    source_code_link: "https://github.com/varun1133/BANK-MANAGEMENT",
  },
  {
    name: "Pancreatic Tumor Analysis",
    description: "ML model to classify pancreatic tumor cases using medical imaging data.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "ml",
        color: "green-text-gradient",
      },
      {
        name: "opencv",
        color: "pink-text-gradient",
      },
    ],
    image: "https://www.shutterstock.com/shutterstock/videos/1016571070/thumb/1.jpg?ip=x480",
    source_code_link: "https://github.com/varun1133/Pancreatic-Tumor-Analysis",
  },
  {
    name: "FocusFlow – Productivity App",
    description: "Lightweight Pomodoro timer for remote work.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: "https://www.mbloging.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fyynr1uml%2Fproduction%2Fd3f0ff2ab5398aaffb00fa0b3afcb238772f42e7-1024x576.jpg%3Fw%3D1024%26auto%3Dformat&w=3840&q=75",
    source_code_link: "https://github.com/varun1133/FocusFlow---A-Remote-Work-Productivity-App",
  },
];

export { services, technologies, experiences, involvement, projects };

import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";
import gta6 from "../assets/projects/prj 1.jpg";
import Youtube from "../assets/projects/Logo YouTube png.jpg";
import Calculator from "../assets/projects/Calculator Samsung app icon.jpg";
import Swiggy from "../assets/projects/Swiggy.jpg";
import Swiggy2 from "../assets/projects/swiggy (2).jpg";
import Netflix from "../assets/projects/netflixLogo.jpg";
import InterviewDashboard from "../assets/projects/interview-management-dashboar.png";
import CodersCoffee from "../assets/projects/codersCofee.png";

export const HERO_CONTENT = `I am a passionate front end developer with a knack for crafting robust and scalable web applications. With 3.6 years of hands-on experience, I have honed my skills in front-end technologies like React,React Native and Next.js, as well as back-end technologies like Node.js, and Express. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile front end developer with a passion for creating efficient and user-friendly web applications. With 3.5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Ant design, Tailwind CSS, MUI and Node.js, . My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, reading books, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2022 - Present",
    role: "Senior Frontend Developer",
    company: "Osian infotech pvt ltd",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Created the company website from scratch, focusing on responsive design and optimized performance. Collaborated with UI/UX designers to ensure seamless user experiences. Integrated RESTful APIs. Implemented reusable components and maintained code quality through version control and code reviews. Successfully reduced page load time by 30% and improved overall application stability.`,

    technologies: [
      "Javascript",
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind Css",
      "Ant design",
      "Bootstrap",
      "Node.js",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Coders Coffee",
    image: CodersCoffee,
    description:
      "Modern page for a coffee shop, featuring a user-friendly interface, menu, and online ordering capabilities.",
    technologies: ["HTML", "CSS", "React", "Javascript", "Tailwind CSS","Framer Motion"],
    link: "https://modern-website-using-framer-motion.vercel.app/",
  },
  {
    title: "Grand Theft Auto VI",
    image: gta6,
    description: `A web application clone of the popular video game Grand Theft Auto VI, featuring a user-friendly interface, character customization, and online multiplayer capabilities.`,
    technologies: ["HTML", "CSS", "React", "Javascript", "Tailwind", "GSAP"],
    link: "https://gta-6-website-with-illustrations.vercel.app/",
  },
  {
    title: "Youtube Clone",
    image: Youtube,
    description:
      "A YouTube clone web application featuring video playback, user authentication, and content management capabilities.",
    technologies: ["HTML", "CSS", "React", "Javascript", "Tailwind", "Redux"],
    link: "https://namaste-youtube-jade.vercel.app/",
  },
  {
    title: "Nps Calculator",
    image: Calculator,
    description:
      "An application for calculating the National Pension System (NPS).",
    technologies: [
      "HTML",
      "CSS",
      "React",
      "Tailwind",
      "Highcharts",
      "Ant Design",
    ],
    link: `https://nps-calculator-azure.vercel.app/`,
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind CSS", "Framer Motion"],
    link: "https://portfolio-three-flame-gs4snpeqct.vercel.app/",
  },
  {
    title: "Swiggy Clone",
    image: Swiggy,
    description:
      "A web application clone of the popular food delivery service Swiggy, featuring a user-friendly interface, restaurant filtering, and menu item details.",
    technologies: ["HTML", "CSS", "React", "Javascript", "Tailwind CSS"],
    link: "https://namaste-react-swiggy-tau.vercel.app/",
  },
  {
    title: "Netflix Clone",
    image: Netflix,
    description:
      "A web application clone of the popular streaming service Netflix, featuring a user-friendly interface, movie filtering, and movie details.",
    technologies: [
      "HTML",
      "CSS",
      "React",
      "Javascript",
      "Tailwind CSS",
      "Redux",
    ],
    link: "https://netflix-gpt-namaste-react.vercel.app/",
  },
  {
    title: "Interview Management Dashboard",
    image: InterviewDashboard,
    description:
      "A web application for managing interviews, featuring a user-friendly interface, interview scheduling, and candidate tracking capabilities. ",
    technologies: [
      "HTML",
      "CSS",
      "React",
      "Next js",
      "Javascript",
      "Tailwind CSS",
      "Redux",
    ],
    link: "https://interview-management-dashboard-6im8.vercel.app/",
  },
];

export const CONTACT = {
  // address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+91 9082581804",
  email: "gudigarchetan@gmail.com",
};

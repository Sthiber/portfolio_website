export type Technology = { name: string; color?: string };

export type Award = {
  title: string;
  icon?: string; // emoji or icon
  color?: string;
};

export type Project = {
  id: number;
  title: string;
  period: string;
  description: string;
  technologies: Technology[];
  liveLink?: string;
  codeLink?: string;
  awards?: Award[]; // New field for achievements
  featured?: boolean; // Mark special projects
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Swipe Coach",
    period: "September 2025",
    description:
      "Swipe Coach is a React + Flask + MongoDB web app that helps users choose the best credit card for any purchase and manage their budgets with AI. It includes a Smart Swipe engine that instantly finds which of your cards gives the most rewards, and a recommendation system that suggests new cards based on your spending habits. The Gemini-powered budgeting assistant explains your spending trends, helps set goals, and keeps you on track. Swipe Coach placed Top 5 overall and won Capital One’s Best Financial Hack at HackRice 15 among 86 teams.",
    technologies: [
      { name: "React" },
      { name: "Flask" },
      { name: "MongoDB" },
      { name: "TypeScript" },
      { name: "Auth0" },
      { name: "Gemini" },
      { name: "Tailwind" },
      { name: "Google Cloud" },
      { name: "Docker" },
    ],
    liveLink: "https://hackrice-4afcb.web.app/welcome",
    codeLink: "https://github.com/leo2971998/HackRice25",
    featured: true,
    awards: [
      {
        title: "Top 5 @ HackRice 15",
        color: "from-[#4ECDC4] to-[#556270]",
      },
      {
        title: "Capital One Best Financial Hack",
        color: "from-[#4ECDC4] to-[#556270]",
      },
    ],
  },
  {
    id: 1,
    title: "Volentra",
    period: "July 2025 - August 2025",
    description:
      "Volentra is a full-stack volunteer matching platform built with a scrum-based development approach, emphasizing iterative progress, team collaboration, and continuous improvement. Currently in development, it focuses on streamlining community engagement through intuitive volunteer-event matching.",
    technologies: [
      { name: "React" },
      { name: "Tailwind" },
      { name: "Node" },
      { name: "Express" },
      { name: "Docker" },
      { name: "MySQL" },
    ],
    liveLink: "https://cosc-4353-project.vercel.app/",
    codeLink: "https://github.com/Sthiber/COSC-4353-Project",
  },
  {
    id: 2,
    title: "Decluttr",
    period: "June 2025",
    description:
      "Decluttr is a Python-based automation tool for organizing directories, featuring a simple UI to select file types and define destination folders. Designed for fast cleanup, it streamlines file grouping for deletion or reorganization.",
    technologies: [
      {
        name: "Python",
      },
      {
        name: "Tkinter",
      },
      {
        name: "TTKBootstrap",
      },
      {
        name: "PyInstaller",
      },
    ],
    codeLink: "https://github.com/Sthiber/Decluttr",
  },
  {
    id: 3,
    title: "Womenwell",
    period: "August 2024 - November 2024",
    description:
      "Womenwell is a full-stack medical portal mockup built with a focus on clean database architecture using a fully normalized MySQL schema. RESTful APIs power all CRUD operations for smooth and scalable backend functionality.",
    technologies: [
      { name: "React" },
      { name: "Tailwind" },
      { name: "MySQL" },
      { name: "Node" },
      { name: "Express" },
      { name: "Postman" },
    ],
    codeLink: "https://github.com/Knathmer/Hospital_System",
  },
];

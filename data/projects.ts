export type Technology = { name: string; color?: string };

export type Project = {
  id: number;
  title: string;
  period: string;
  description: string;
  technologies: Technology[];
  liveLink?: string;
  codeLink?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Volentra",
    period: "July 2025 - Present",
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

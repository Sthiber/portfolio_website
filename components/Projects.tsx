import { ProjectCard } from "./ProjectCard";
import { projects } from "../data/projects";
export function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#13151c] relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
      <div className="absolute -right-40 -bottom-40 w-80 h-80 bg-[#556270]/10 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              period={project.period}
              description={project.description}
              technologies={project.technologies}
              liveLink={project.liveLink}
              codeLink={project.codeLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

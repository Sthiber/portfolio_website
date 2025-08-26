import { ExternalLinkIcon, GithubIcon } from "lucide-react";
interface Technology {
  name: string;
  color?: string;
}
interface ProjectCardProps {
  title: string;
  description: string;
  technologies: Technology[];
  period?: string;
  liveLink?: string;
  codeLink?: string;
}
export function ProjectCard({
  title,
  description,
  technologies,
  period,
  liveLink,
  codeLink,
}: ProjectCardProps) {
  return (
    <div className="bg-gradient-to-br from-[#13151c] to-[#1a1d25] rounded-xl overflow-hidden border border-gray-800 hover:border-[#4ECDC4]/50 transition-all duration-300 flex flex-col h-full p-6">
      <div className="flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        {period && (
          <div className="flex items-center mb-4 text-gray-400">
            <span className="text-sm">{period}</span>
          </div>
        )}
        <p className="text-gray-300 mb-6 flex-grow">{description}</p>
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
              <span
                key={tech.name}
                className="text-xs px-3 py-1 rounded-full bg-[#212630] border border-gray-700 text-gray-300"
              >
                {tech.name}
              </span>
            ))}
          </div>
          <div className="flex space-x-4 mt-4">
            {codeLink && (
              <a
                href={codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-[#4ECDC4] transition-colors"
              >
                <GithubIcon size={18} className="mr-2" />
                <span className="text-sm font-medium">View Code</span>
              </a>
            )}
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-[#4ECDC4] transition-colors"
              >
                <ExternalLinkIcon size={18} className="mr-2" />
                <span className="text-sm font-medium">Live Link</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

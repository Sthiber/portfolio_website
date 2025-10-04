import { ExternalLinkIcon, GithubIcon, Trophy } from "lucide-react";
interface Technology {
  name: string;
  color?: string;
}
interface Award {
  title: string;
  icon?: string;
  color?: string;
}
interface ProjectCardProps {
  title: string;
  description: string;
  technologies: Technology[];
  period?: string;
  liveLink?: string;
  codeLink?: string;
  awards?: Award[];
  featured?: boolean;
}
export function ProjectCard({
  title,
  description,
  technologies,
  period,
  liveLink,
  codeLink,
  awards,
  featured,
}: ProjectCardProps) {
  return (
    <div
      className={`bg-gradient-to-br from-[#13151c] to-[#1a1d25] rounded-xl overflow-hidden border transition-all duration-300 flex flex-col h-full ${
        featured
          ? "border-[#4ECDC4] shadow-lg shadow-[#4ECDC4]/20 hover:shadow-xl hover:shadow-[#4ECDC4]/30"
          : "border-gray-800 hover:border-[#4ECDC4]/50"
      }`}
    >
      {/* Award Banner */}
      {awards && awards.length > 0 && (
        <div className="bg-gradient-to-r from-[#4ECDC4]/10 via-[#FF6B6B]/10 to-[#4ECDC4]/10 border-b border-[#4ECDC4]/30 p-3">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <Trophy className="text-[#4ECDC4] animate-pulse" size={18} />
            <span className="text-sm font-semibold text-[#4ECDC4]">
              Award-Winning Project
            </span>
          </div>
        </div>
      )}

      <div className="flex flex-col flex-grow p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        {period && (
          <div className="flex items-center mb-4 text-gray-400">
            <span className="text-sm">{period}</span>
          </div>
        )}

        {/* Awards Badges */}
        {awards && awards.length > 0 && (
          <div className="mb-4 space-y-2">
            {awards.map((award, index) => (
              <div
                key={index}
                className={`inline-flex items-center px-3 py-1.5 rounded-lg bg-gradient-to-r ${
                  award.color || "from-purple-500 to-pink-600"
                } text-white text-xs font-semibold shadow-md mr-2 mb-2`}
              >
                {award.title}
              </div>
            ))}
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

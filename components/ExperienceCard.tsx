type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies?: string[];
  isLast?: boolean;
};

export default function ExperienceCard({
  title,
  company,
  period,
  description,
  technologies,
}: ExperienceItem) {
  return (
    <div className="mb-12 relative">
      <div className="flex">
        <div className="ml-6 bg-[#13151c] p-6 rounded-xl border border-gray-800 hover:border-[#4ECDC4] transition-all duration-300 flex-grow">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
            <div>
              <h3 className="text-xl font-medium">{title}</h3>
              <p className="text-[#4ECDC4]">{company}</p>
            </div>
            <div className="flex items-center mt-2 md:mt-0">
              <span className="text-gray-400 text-sm">{period}</span>
            </div>
          </div>
          <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300">
            {description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          {technologies && (
            <div className="flex flex-wrap gap-2 mt-4">
              {technologies.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full bg-[#1a1d25] text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

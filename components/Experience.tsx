import ExperienceCard from "../components/ExperienceCard";
import { experiences } from "../data/experience";
export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
      <div className="absolute -right-40 top-40 w-80 h-80 bg-[#4ECDC4]/10 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">
          Work Experience
        </h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              title={exp.title}
              company={exp.company}
              period={exp.period}
              description={exp.description}
              technologies={exp.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

type Skill = {
  name: string;
  icon: string;
};

type SkillCardProps = {
  skill: Skill;
};

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="bg-[#13151c] border-2 border-[#4ECDC4]/30 rounded-lg overflow-hidden hover:border-[#4ECDC4] transition-all duration-300 group w-[140px] h-[80px] flex flex-col items-center justify-center">
      <div className="flex items-center justify-center">
        <img
          src={skill.icon}
          alt={skill.name}
          className="w-8 h-8 object-contain"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src =
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg";
          }}
        />
        <span className="ml-2 text-gray-300 group-hover:text-[#4ECDC4] transition-colors">
          {skill.name}
        </span>
      </div>
    </div>
  );
}

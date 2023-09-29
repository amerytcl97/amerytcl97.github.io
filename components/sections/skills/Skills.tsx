import { SKILLSANDTOOLS } from '@/utils/skillstools';
import SkillCard from './SkillCard';

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen space-y-12">
      <h2>
        02. <span className="text-slate-300">Skillsets</span>
      </h2>
      <div className="flex justify-center">
        <ul className="grid grid-cols-3 gap-7">
          {SKILLSANDTOOLS.map((skill) => (
            <li key={skill.label}>
              <SkillCard {...skill} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;

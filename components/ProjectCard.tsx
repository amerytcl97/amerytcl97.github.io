import { Project } from '@/interfaces/Project';
import FolderIcon from '../icons/FolderIcon';

export type ProjectCardProps = Project & { index: number };

const ProjectCard = (props: ProjectCardProps) => {
  const { title, role, description, frameworks, index } = props;

  return (
    <div className="group flex min-h-[15rem] min-w-[18rem] max-w-md translate-y-0 flex-col shadow-lg transition-all duration-200 hover:-translate-y-2 hover:cursor-pointer hover:shadow-xl">
      {/* FOLDER HEAD */}
      <div className="w-[50%] space-x-2 rounded-t-md bg-[#2c3531] px-2 font-mono">
        <span className="text-sm text-[var(--secondary-color)]">
          #{index.toString().length > 1 ? index : `0${index + 1}`}
        </span>
        <span className="text-sm text-slate-400">{role}</span>
      </div>
      {/* FOLDER CONTENT */}
      <article className="flex-1 space-y-5 rounded rounded-tl-none bg-[#2c3531] py-5 px-4">
        <h4 className="text-md font-Cabin font-medium text-[var(--third-color)] transition-colors duration-200 group-hover:text-[var(--secondary-color)]">
          {title}
        </h4>
        <p className="text-sm leading-5 text-slate-400">{description}</p>
        {/* FRAMEWORKS */}
        <ul className="flex flex-row flex-wrap gap-2">
          {frameworks.map((framework) => (
            <li
              key={framework}
              className="whitespace-nowrap rounded-full bg-[var(--primary-color)] py-1 px-2 font-mono text-xs text-slate-400"
            >
              {framework}
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
};

export default ProjectCard;

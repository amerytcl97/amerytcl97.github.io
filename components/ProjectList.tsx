import { Project } from '@/interfaces/Project';
import { useState } from 'react';
import ProjectCard from './ProjectCard';
import clsx from 'clsx';

type ProjectListProps = {
  projects: Project[];
};

const LIMIT_CARDS = 6;

const ProjectList = ({ projects }: ProjectListProps) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="my-4 flex flex-col place-content-center place-items-center justify-center">
      <ul className="lg: grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <li
            key={index}
            className={clsx(
              'animate-fade-appear-below [--animation-delay:0.5s]',
              index >= LIMIT_CARDS && !showMore ? 'hidden' : 'block'
            )}
          >
            <ProjectCard {...project} index={index} />
          </li>
        ))}
      </ul>
      {projects.length > LIMIT_CARDS && (
        <button
          type="button"
          onClick={() => (showMore ? setShowMore(false) : setShowMore(true))}
          className="themed-button"
        >
          {showMore ? 'Show less' : 'Show more'}
        </button>
      )}
    </div>
  );
};

export default ProjectList;

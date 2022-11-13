import { useState } from "react";
import { Project } from "../interfaces/Project";
import ProjectCard from "./ProjectCard";
import Projects from "./sections/Projects";

type ProjectListProps = {
    projects: Project[];
}

const LIMIT_CARDS = 6

const ProjectList = ({ projects }: ProjectListProps) => {
    const [showMore, setShowMore] = useState(false);

    return (
        <div className="my-4 flex flex-col justify-center place-items-center place-content-center">
            <ul className="grid grid-cols-3 gap-10">
                {projects.map((project, index) =>
                    <li
                        key={index}
                        className={`${index >= LIMIT_CARDS && !showMore
                            ? "hidden"
                            : "block"} animate-fade-appear-below [--animation-delay:0.5s]`}
                    >
                        <ProjectCard {...project} index={index} />
                    </li>)}
            </ul>
            {projects.length > LIMIT_CARDS &&
                <button
                    type="button"
                    onClick={() => showMore ? setShowMore(false) : setShowMore(true)}
                    className="border-2 hover:bg-[var(--secondary-color)] hover:text-[var(--primary-color)] border-[var(--secondary-color)] p-2 mt-8 text-xs hover:cursor-pointer text-[var(--secondary-color)] font-Roboto"
                >
                    {showMore ? "Show less" : "Show more"}
                </button>
            }
        </div>
    )
}

export default ProjectList;
import { Inter, Roboto, Roboto_Mono, Roboto_Serif } from "@next/font/google";
import FolderIcon from "../icons/FolderIcon";
import { Project } from "../interfaces/Project";

type ProjectWIndex = Project & { index: number }

const ProjectCard = (props: ProjectWIndex) => {
    return (
        <div className="flex flex-col min-w-[18rem] min-h-[15rem] hover:cursor-pointer group translate-y-0 hover:-translate-y-2 shadow-lg hover:shadow-xl transition-all duration-200">
            {/* FOLDER HEAD */}
            <div className="bg-[#2c3531] font-mono w-[50%] rounded-t-md px-2 space-x-2">
                <span className="text-[var(--secondary-color)] text-sm">
                    #{props.index.toString().length > 1 ? props.index : `0${props.index + 1}`}
                </span>
                <span className="text-slate-400 text-sm">
                    {props.role}
                </span>
            </div>
            {/* FOLDER CONTENT */}
            <article className="bg-[#2c3531] flex-1 py-5 px-4 rounded-tl-none rounded space-y-5">
                <h4 className="text-[var(--third-color)] text-md font-Cabin font-medium group-hover:text-[var(--secondary-color)] transition-colors duration-200">
                    {props.title}
                </h4>
                <p className="text-sm text-slate-400 leading-5">
                    {props.description}
                </p>
                {/* FRAMEWORKS */}
                <ul className="flex flex-row flex-wrap gap-2">
                    {props.frameworks.map((framework) =>
                        <li key={framework} className="text-xs bg-[var(--primary-color)] py-1 px-2 rounded-full text-slate-400 font-mono whitespace-nowrap">
                            {framework}
                        </li>)}
                </ul>
            </article>
        </div>
    )
}

export default ProjectCard;
import { projects } from "../../utils/projects";
import ProjectList from "../ProjectList";



const Projects = () => {
    return (
        <section id="projects" className="min-h-screen space-y-12">
            <h2 className="font-Roboto text-[var(--secondary-color)] text-2xl">03.
                <span className="text-[var(--third-color)]">
                    Projects
                </span>
            </h2>
            <ProjectList projects={projects} />
        </section>
    )
}

export default Projects;
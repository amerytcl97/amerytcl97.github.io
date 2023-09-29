import { PROJECTS } from "@/utils/projects";
import ProjectList from "../ProjectList";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen space-y-12"
    >
      <h2 className="font-Roboto text-2xl text-[var(--secondary-color)]">
        03.
        <span className="text-[var(--third-color)]">Projects</span>
      </h2>
      <ProjectList projects={PROJECTS} />
    </section>
  );
};

export default Projects;

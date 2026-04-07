// sections/ProjectsSection.js
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projectsContent";

const ProjectsSection = ({ className }) => {
  return (
    <section id="projects" className={className}>
      <div className="max-w-6xl py-8">
        <h2 className="text-2xl uppercase font-bold mb-8 text-foreground">
          Web Development Projects
        </h2>

        {/* Grid: 1 col mobile → 2 col md+ */}
        <div className="flex flex-wrap justify-start gap-8 p-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
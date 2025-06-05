// sections/ProjectsSection.js
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projectsContent';

const ProjectsSection = ({className}) => {
  return (
    <section id="projects" className={`${className}`}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-foreground">Projects</h2>
        <div className="px-4 w-full flex flex-col gap-5">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
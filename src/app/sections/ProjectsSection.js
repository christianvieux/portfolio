// sections/ProjectsSection.js
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/webDevProjects';

const ProjectsSection = ({className}) => {
  return (
    <section id="projects" className={`${className}`}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-foreground">Web Development Projects</h2>
        <div className="w-full">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
// components/ProjectCard.js
import { useDisclosure } from "@heroui/react";
import Image from "next/image";
import ProjectModal from "./ProjectModal";
import { ExternalLink, PlayIcon } from "lucide-react";
import ReactMarkdown from "react-markdown";

const ProjectCard = (project) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { title, summary, image, technologies, period } = project;

  return (
    <>
      <div
        id="project-card"
        onClick={onOpen}
        className="group bg-secondary rounded-lg shadow-sm p-6 cursor-pointer 
        hover:shadow-lg hover:scale-[1.01] 
        transition-all duration-200 ease-in-out
        relative hover:before:opacity-100 before:absolute before:inset-0 before:bg-background/80 before:opacity-0 before:transition-opacity before:duration-200 before:rounded-lg before:z-10"
      >
        {/* External Link */}
        <div className="absolute top-4 right-4 text-primary-hover opacity-0 group-hover:opacity-100 transition-opacity z-30">
          <ExternalLink className="w-5 h-5" />
        </div>

        {/* Project Content */}
        <div className="flex flex-col md:flex-row md:space-x-6">
          <div
            className="border-4 border-primary/10 relative w-full md:w-2/6 h-52 mb-4 md:mb-0 rounded-lg overflow-hidden flex-shrink-0
            transition-all"
          >
            {image ? (
              <Image
                src={image}
                alt={title}
                fill
                className="object-fill"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            ) : (
              <div className="w-full h-full bg-secondary flex items-center justify-center">
                <span className="text-secondary-foreground">
                  No preview available
                </span>
              </div>
            )}
          </div>

          <div className="flex-1 flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary-hover transition-colors">
              {title}
            </h3>
            {period && <span className="text-sm text-primary">{period}</span>}
            <div className="text-foreground mb-4 line-clamp-2 flex-grow">
              <ReactMarkdown>{summary}</ReactMarkdown>
            </div>

            <div className="flex flex-wrap gap-2">
              {technologies.slice(0, 3).map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm
                     transition-colors"
                >
                  {tech}
                </span>
              ))}
              {technologies.length > 3 && (
                <span
                  className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm
                  transition-colors"
                >
                  +{technologies.length - 3}
                </span>
              )}
              {/* Demo Video Indicator */}
              {project.demo && (
                <span className="px-2 py-1 bg-accent text-accent-foreground rounded-full text-xs font-medium flex items-center gap-1 flex-shrink-0">
                  <PlayIcon className="fill-current h-4" />
                  <span className="hidden sm:inline">Demo Video</span>
                  <span className="sm:hidden">Demo</span>
                </span>
              )}
            </div>
          </div>
        </div>

        {/* View more details overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20 pointer-events-none">
          <span className="text-primary-hover font-semibold text-lg px-4 py-2 rounded-lg">
            View more details
          </span>
        </div>
      </div>

      <ProjectModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        project={project}
      />
    </>
  );
};

export default ProjectCard;

// components/ProjectCard.js
import { useDisclosure } from "@heroui/react";
import Image from "next/image";
import ProjectModal from "./ProjectModal";

const ProjectCard = (project) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { title, description, image, technologies, period } = project;

  return (
    <>
      <div
        onClick={onOpen}
        className="bg-background rounded-lg shadow-sm p-6 cursor-pointer hover:shadow-md transition-shadow"
      >
        <div className="flex flex-col md:flex-row md:space-x-6">
          {/* Preview Image */}
          <div className="relative w-full md:w-2/6 h-52 mb-4 md:mb-0 rounded-lg overflow-hidden flex-shrink-0">
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

          {/* Content Section */}
          <div className="flex-1 flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-foreground">{title}</h3>
            {period && (
              <span className="text-sm text-primary">{period}</span>
            )}
            <p className="text-secondary-foreground mb-4 line-clamp-2 flex-grow">
              {description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {technologies.slice(0, 3).map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
              {technologies.length > 3 && (
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  +{technologies.length - 3}
                </span>
              )}
            </div>
          </div>
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

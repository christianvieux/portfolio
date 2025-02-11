// components/ProjectCard.js
import { useDisclosure } from "@heroui/react";
import Image from "next/image";
import ProjectModal from "./ProjectModal";
import { ExternalLink } from "lucide-react";

const ProjectCard = (project) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { title, description, image, technologies, period } = project;

  return (
    <>
      <div
        onClick={onOpen}
        className="group bg-background rounded-lg shadow-sm p-6 cursor-pointer 
        hover:shadow-lg hover:scale-[1.01] hover:border-primary/20 
        transition-all duration-200 ease-in-out border border-transparent
        relative"
      >
        <div className="absolute top-4 right-4 text-primary/60 opacity-0 group-hover:opacity-100 transition-opacity">
          <ExternalLink className="w-5 h-5" />
        </div>

        <div className="flex flex-col md:flex-row md:space-x-6">
          <div className="relative w-full md:w-2/6 h-52 mb-4 md:mb-0 rounded-lg overflow-hidden flex-shrink-0
            group-hover:ring-2 ring-primary/20 transition-all">
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
            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
            {period && (
              <span className="text-sm text-primary">{period}</span>
            )}
            <p className="text-secondary-foreground mb-4 line-clamp-2 flex-grow">
              {description}
            </p>

            <div className="flex flex-wrap gap-2">
              {technologies.slice(0, 3).map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm
                    group-hover:bg-primary/20 transition-colors"
                >
                  {tech}
                </span>
              ))}
              {technologies.length > 3 && (
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm
                  group-hover:bg-primary/20 transition-colors">
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
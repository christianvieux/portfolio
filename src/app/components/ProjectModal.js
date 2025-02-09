// components/ProjectModal.js
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
  } from "@heroui/react";
  import Image from "next/image";
  import { ExternalLink, Code } from "lucide-react";
  
  const ProjectModal = ({ isOpen, onOpenChange, project }) => {
    const {
      title,
      description,
      image,
      technologies,
      features,
      liveLink,
      codeLink,
    } = project;
  
    return (
        <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        size="3xl"
        scrollBehavior="inside"
        classNames={{
          base: "bg-background",
          header: "",
          body: "text-secondary-foreground",
          footer: "",
          closeButton: "hover:bg-secondary text-secondary-foreground"
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
              <ModalBody>
                <div className="space-y-6">
                  {/* Project Image */}
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                    {image ? (
                      <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-fill"
                        sizes="(max-width: 1200px) 100vw, 1200px"
                      />
                    ) : (
                      <div className="w-full h-full bg-secondary flex items-center justify-center">
                        <span className="text-secondary-foreground">No preview available</span>
                      </div>
                    )}
                  </div>
  
                  {/* Description */}
                  <p className="text-secondary-foreground text-lg leading-relaxed">
                    {description}
                  </p>
  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
  
                  {/* Features */}
                  {features && features.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-foreground text-xl mb-4">
                        Key Features
                      </h4>
                      <ul className="text-secondary-foreground space-y-2">
                        {features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </ModalBody>
              <ModalFooter>
                {liveLink && (
                  <Button
                    as="a"
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="primary"
                    className="flex items-center gap-2"
                  >
                    <span>View Live</span>
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                )}
                {codeLink && (
                  <Button
                    as="a"
                    href={codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="bordered"
                    className="flex items-center gap-2"
                  >
                    <span>View Code</span>
                    <Code className="w-4 h-4" />
                  </Button>
                )}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    );
  };
  
  export default ProjectModal;
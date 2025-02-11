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
import {
  Layers,
  Library,
  Wrench,
  GitBranch,
  Server,
  ExternalLink,
  Code,
} from "lucide-react";
import VideoPlayerWithTimestamps from "./VideoPlayerWithTimestamps";

const ProjectModal = ({ isOpen, onOpenChange, project }) => {
  const {
    title,
    description,
    demo,
    technologies,
    features,
    libraries,
    frontend,
    backend,
    infrastructure,
    liveLink,
    codeLink,
    developmentPeriod,
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
        closeButton: "hover:bg-secondary text-secondary-foreground",
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            {/* Title */}
            <ModalHeader className="flex flex-col gap-1">
              <h2 className="text-xl font-bold text-foreground">{title}</h2>
              <p className="text-sm text-muted-foreground font-medium">
                {developmentPeriod}
              </p>
            </ModalHeader>
            {/* Body */}
            <ModalBody>
              <div className="space-y-6">
                {/* Project Overview */}
                <div className="bg-secondary/10 rounded-xl">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Project Overview
                  </h3>
                  <p className="text-secondary-foreground/90 leading-relaxed">
                    {description}
                  </p>
                </div>

                {/* Project Demo Video with Timestamps */}
                {project.demo && (
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-foreground">
                      Project Demo
                    </h3>
                    <VideoPlayerWithTimestamps
                      videoUrl={project.demo}
                      timestamps={project.timestamps}
                      thumbnail={project.thumbnail}
                    />
                  </div>
                )}

                {/* Key Features - Enhanced styling */}
                {features && features.length > 0 && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-foreground">
                      <GitBranch className="w-5 h-5 text-primary" />
                      <h3 className="font-semibold">Key Features</h3>
                    </div>
                    <div className="bg-secondary/10 rounded-lg p-4">
                      <div className="grid gap-3">
                        {features.map((feature, index) => (
                          <div key={index} className="flex items-start">
                            <span className="w-1.5 h-1.5 mt-2 rounded-full bg-primary mr-3 flex-shrink-0" />
                            <span className="text-secondary-foreground/90">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Technical Implementation Section */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                    Technical Implementation
                  </h3>

                  {/* Tech Stack Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Frontend Stack */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-foreground">
                        <Layers className="w-5 h-5 text-primary" />
                        <h4 className="font-semibold">Frontend Stack</h4>
                      </div>
                      <div className="bg-secondary/10 rounded-lg p-4 h-full">
                        <div className="flex flex-wrap gap-2">
                          {frontend.map((tech, index) => (
                            <span
                              key={index}
                              className="px-3 py-1.5 bg-secondary/30 text-muted-foreground rounded-full text-sm font-medium transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Backend Stack */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-foreground">
                        <Server className="w-5 h-5 text-primary" />
                        <h4 className="font-medium">Backend Stack</h4>
                      </div>
                      <div className="bg-secondary/10 rounded-lg p-4 h-full">
                        <div className="flex flex-wrap gap-2">
                          {backend.map((tech, index) => (
                            <span
                              key={index}
                              className="px-3 py-1.5 bg-primary/10 text-muted-foreground rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Libraries Section */}
{libraries && libraries.length > 0 && (
  <div className="space-y-4">
    <div className="flex items-center gap-2 text-foreground">
      <Library className="w-5 h-5 text-primary" />
      <h3 className="font-semibold">Libraries & Dependencies</h3>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {libraries.map((group, index) => (
        <div key={index} className="bg-secondary/10 rounded-lg p-4">
          <h5 className="text-sm font-medium text-primary mb-3 uppercase tracking-wide">
            {group.category}
          </h5>
          <div className="grid gap-2.5">
            {group.items.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex items-center gap-2.5 text-secondary-foreground group transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
)}

                  {/* Infrastructure Section */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-foreground border-t pt-6">
                      <Wrench className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold">Infrastructure</h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {infrastructure.map((group, index) => (
                        <div
                          key={index}
                          className="bg-secondary/10 rounded-lg p-4"
                        >
                          <h5 className="text-sm font-medium text-primary mb-3 uppercase tracking-wide">
                            {group.category}
                          </h5>
                          <div className="grid gap-2.5">
                            {group.items.map((item, itemIndex) => (
                              <div
                                key={itemIndex}
                                className="flex items-center gap-2.5 text-secondary-foreground group transition-colors"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                <span className="text-sm">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
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

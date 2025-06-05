// sections/GameDevSection.js
import React, { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { gameDevContent } from "../data/gameDevContent";
import GameProjectModal from "../components/GameProjectModal";
import { useDisclosure } from "@heroui/react";
import { Play, Image } from "lucide-react";
import ReactMarkdown from "react-markdown";

const GameDevSection = ({ className }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
  });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  const [selectedMedia, setSelectedMedia] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <section id="gamedev" className={`${className}`}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl font-bold mb-4 text-foreground">
          {gameDevContent.title}
        </h2>
        <div id="content" className="px-4">
          {/* Description */}
          <div className="text-foreground text-lg leading-relaxed">
            <ReactMarkdown>{gameDevContent.description}</ReactMarkdown>
          </div>
          {/* Projects list */}
          <div className="relative mt-8">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex -ml-4">
                {gameDevContent.projects.map((project, index) => (
                  <div
                    id="project-card"
                    key={index}
                    className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-4"
                  >
                    <div className="bg-background rounded-lg shadow-sm p-6 pb-0 h-full">
                      <div className="aspect-video mb-4 rounded-md overflow-hidden bg-muted">
                        <img
                          src={project.media.thumbnail}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-foreground">
                          {project.title}
                        </h3>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-primary">
                            {project.period}
                          </span>
                          <span className="text-muted-foreground">•</span>
                          <span className="text-sm text-muted-foreground">
                            {project.role}
                          </span>
                        </div>
                        <p className="text-foreground h-40 overflow-y-auto pr-6">
                          {project.description}
                        </p>
                      </div>
                      {/* Attachments section */}
                      {project.attachments &&
                        project.attachments.length > 0 && (
                          <div className="mt-4 pt-4">
                            <div className="text-sm font-medium text-foreground mb-2">
                              Previews
                            </div>
                            <div className="gap-2 flex flex-wrap">
                              {project.attachments.map((attachment, idx) => (
                                <button
                                  key={idx}
                                  onClick={() => {
                                    setSelectedMedia(attachment);
                                    setSelectedTitle(
                                      `${project.title} - ${attachment.name}`
                                    );
                                    onOpen();
                                  }}
                                  className="text-left px-3 py-2 rounded-md text-sm hover:bg-secondary/50 hover:text-primary-hover text-primary flex items-center gap-2 cursor-pointer"
                                >
                                  {attachment.type === "video" ? (
                                    <Play className="w-4 h-4" />
                                  ) : (
                                    <Image className="w-4 h-4" />
                                  )}
                                  {attachment.name}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-background/80 p-2 rounded-full shadow-md hover:bg-background transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-background/80 p-2 rounded-full shadow-md hover:bg-background transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-foreground" />
            </button>
          </div>
        </div>
      </div>
      {/* Modal */}
      <GameProjectModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        media={selectedMedia}
        title={selectedTitle}
      />
    </section>
  );
};

export default GameDevSection;

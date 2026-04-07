// sections/GameDevSection.js
import React, { useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { gameDevContent } from '../data/gameDevContent'
import GameProjectModal from '../components/GameProjectModal'
import { useOverlayState } from '@heroui/react'
import { Play, Image } from 'lucide-react'
import ReactMarkdown from 'react-markdown'

const GameDevSection = ({ className }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: 'start',
        containScroll: 'trimSnaps',
    })

    const scrollPrev = () => emblaApi?.scrollPrev()
    const scrollNext = () => emblaApi?.scrollNext()

    const [selectedMedia, setSelectedMedia] = useState(null)
    const [selectedTitle, setSelectedTitle] = useState('')
    const { isOpen, onOpen, onOpenChange } = useOverlayState()

    return (
        <section id="gamedev" className={`${className}`}>
            <div className="max-w-6xl py-8">
                {/* Title */}
                <h2 className="mb-4 text-2xl font-bold text-foreground">
                    {gameDevContent.title}
                </h2>
                <div id="content" className="px-4">
                    {/* Description */}
                    <div className="text-lg leading-relaxed text-foreground">
                        <ReactMarkdown>
                            {gameDevContent.description}
                        </ReactMarkdown>
                    </div>
                    {/* Projects list */}
                    <div className="relative mt-8">
                        <div className="overflow-hidden" ref={emblaRef}>
                            <div className="-ml-4 flex">
                                {gameDevContent.projects.map(
                                    (project, index) => (
                                        <div
                                            id="project-card"
                                            key={index}
                                            className="min-w-0 flex-[0_0_100%] pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.33%]"
                                        >
                                            <div className="h-full rounded-lg bg-background p-6 pb-0 shadow-sm">
                                                <div className="mb-4 aspect-video overflow-hidden rounded-md bg-muted">
                                                    <img
                                                        src={
                                                            project.media
                                                                .thumbnail
                                                        }
                                                        alt={project.title}
                                                        className="h-full w-full object-cover"
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
                                                        <span className="text-muted-foreground">
                                                            •
                                                        </span>
                                                        <span className="text-sm text-muted-foreground">
                                                            {project.role}
                                                        </span>
                                                    </div>
                                                    <p className="h-40 overflow-y-auto pr-6 text-foreground">
                                                        {project.description}
                                                    </p>
                                                </div>
                                                {/* Attachments section */}
                                                {project.attachments &&
                                                    project.attachments.length >
                                                        0 && (
                                                        <div className="mt-4 pt-4">
                                                            <div className="mb-2 text-sm font-medium text-foreground">
                                                                Previews
                                                            </div>
                                                            <div className="flex flex-wrap gap-2">
                                                                {project.attachments.map(
                                                                    (
                                                                        attachment,
                                                                        idx
                                                                    ) => (
                                                                        <button
                                                                            key={
                                                                                idx
                                                                            }
                                                                            onClick={() => {
                                                                                setSelectedMedia(
                                                                                    attachment
                                                                                )
                                                                                setSelectedTitle(
                                                                                    `${project.title} - ${attachment.name}`
                                                                                )
                                                                                onOpen()
                                                                            }}
                                                                            className="flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-left text-sm text-primary hover:bg-secondary/50 hover:text-primary-hover"
                                                                        >
                                                                            {attachment.type ===
                                                                            'video' ? (
                                                                                <Play className="h-4 w-4" />
                                                                            ) : (
                                                                                <Image className="h-4 w-4" />
                                                                            )}
                                                                            {
                                                                                attachment.name
                                                                            }
                                                                        </button>
                                                                    )
                                                                )}
                                                            </div>
                                                        </div>
                                                    )}
                                            </div>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>

                        <button
                            onClick={scrollPrev}
                            className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 shadow-md transition-colors hover:bg-background"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft className="h-6 w-6 text-foreground" />
                        </button>
                        <button
                            onClick={scrollNext}
                            className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 shadow-md transition-colors hover:bg-background"
                            aria-label="Next slide"
                        >
                            <ChevronRight className="h-6 w-6 text-foreground" />
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
    )
}

export default GameDevSection

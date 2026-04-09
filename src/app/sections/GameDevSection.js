'use client'

// sections/GameDevSection.js
import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { gameDevContent } from '../data/gameDevContent'
import { useOverlayState } from '@heroui/react'
import { Play, Image } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import ReactMarkdown from 'react-markdown'
import GameDevCard from '../components/GameDevCard'
import GameProjectModal from '../components/GameProjectModal'
import { Accordion } from '@heroui/react'
import { ChevronDown } from 'lucide-react'
import Separator from '../components/Seperator'

const GameDevSection = ({ className }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: 'start',
        containScroll: 'trimSnaps',
    })

    const scrollPrev = () => emblaApi?.scrollPrev()
    const scrollNext = () => emblaApi?.scrollNext()

    const [selectedMedia, setSelectedMedia] = useState({})
    const [selectedTitle, setSelectedTitle] = useState('')
    const modalState = useOverlayState()

    return (
        <section id="gamedev" className={`${className} mt-8 mb-20`}>
            <div className="mx-auto w-full max-w-6xl">
                <Accordion className="w-full">
                    <Accordion.Item>
                        <Accordion.Heading>
                            <Accordion.Trigger className="w-full px-0 py-4 text-left">
                                <div className="mx-auto flex items-center gap-3">
                                    <Separator className="min-w-0 grow basis-0" />

                                    <span className="text-sm font-medium whitespace-nowrap text-muted-foreground">
                                        Additional Experience
                                    </span>

                                    <Separator className="min-w-0 grow basis-0" />

                                    <Accordion.Indicator className="ml-2 shrink-0 text-muted-foreground" />
                                </div>
                            </Accordion.Trigger>
                        </Accordion.Heading>

                        <Accordion.Panel>
                            <Accordion.Body className="px-0">
                                <div className="max-w-6xl">
                                    <div id="content" className="">
                                        {/* Overview */}
                                        <p className="mt-6 mb-2 text-2xl font-bold tracking-wide text-foreground uppercase">
                                            Game Development
                                        </p>
                                        {/* Description */}
                                        <div className="max-w-4xl text-base leading-relaxed text-foreground">
                                            <ReactMarkdown>
                                                {gameDevContent.description}
                                            </ReactMarkdown>
                                        </div>
                                        {/* Projects list */}
                                        <div className="relative mt-8 px-20 md:px-12">
                                            <div
                                                className="overflow-hidden"
                                                ref={emblaRef}
                                            >
                                                <div className="flex gap-0 md:gap-4 xl:gap-8">
                                                    {gameDevContent.projects.map(
                                                        (project, index) => (
                                                            <div
                                                                key={index}
                                                                className="min-w-0 flex-[0_0_100%] md:flex-[0_0_30%] xl:flex-[0_0_33.333%]"
                                                            >
                                                                <GameDevCard
                                                                    project={
                                                                        project
                                                                    }
                                                                    onOpen={
                                                                        modalState.open
                                                                    }
                                                                    setSelectedMedia={
                                                                        setSelectedMedia
                                                                    }
                                                                    setSelectedTitle={
                                                                        setSelectedTitle
                                                                    }
                                                                />
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            </div>

                                            {/* Prev / Next buttons — unchanged */}
                                            <button
                                                onClick={scrollPrev}
                                                className="flex items-center justify-center absolute top-1/2 left-20 md:left-12 -translate-x-full -translate-y-1/2 cursor-pointer rounded-full border-3 border-primary bg-background/80 h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 p-0 shadow-md transition-colors hover:bg-background"
                                                aria-label="Previous slide"
                                            >
                                                <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-foreground" />
                                            </button>
                                            <button
                                                onClick={scrollNext}
                                                className="flex items-center justify-center absolute top-1/2 right-20 md:right-12 translate-x-full -translate-y-1/2 cursor-pointer rounded-full border-3 border-primary bg-background/80 h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 p-0 shadow-md transition-colors hover:bg-background"
                                                aria-label="Next slide"
                                            >
                                                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-foreground" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Accordion.Body>
                        </Accordion.Panel>
                    </Accordion.Item>
                </Accordion>
            </div>

            {/* Modal */}
            <GameProjectModal
                isOpen={modalState.isOpen}
                onOpenChange={modalState.setOpen}
                media={selectedMedia}
                title={selectedTitle}
            />
        </section>
    )
}

export default GameDevSection

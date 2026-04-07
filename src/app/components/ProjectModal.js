// components/ProjectModal.js
import React, { useState, useEffect, useRef } from 'react'
import { Modal, Button } from '@heroui/react'
import Image from 'next/image'
import {
    Layers,
    Library,
    Wrench,
    GitBranch,
    Server,
    ExternalLink,
    Code,
} from 'lucide-react'
import VideoPlayerWithTimestamps from './VideoPlayerWithTimestamps'
import ReactMarkdown from 'react-markdown'

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
        githubLink,
        developmentPeriod,
    } = project

    const [showScrollIndicator, setShowScrollIndicator] = useState(true)
    const modalBodyRef = useRef(null)

    useEffect(() => {
        const modalBody = modalBodyRef.current
        if (isOpen && modalBody) {
            const handleScroll = (e) => {
                setShowScrollIndicator(e.target.scrollTop < 100)
            }

            modalBody.addEventListener('scroll', handleScroll)
            return () => modalBody.removeEventListener('scroll', handleScroll)
        }
    }, [isOpen])

    // Reset indicator when modal opens
    useEffect(() => {
        if (isOpen) {
            setShowScrollIndicator(true)
        }
    }, [isOpen])

    return (
        <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            size="3xl"
            scrollBehavior="inside"
            classNames={{
                base: 'bg-secondary border border-muted relative',
                header: '',
                body: 'text-secondary-foreground',
                footer: '',
                closeButton:
                    'hover:bg-secondary-hover text-secondary-foreground',
            }}
        >
            <Modal.Container>
                {(onClose) => (
                    <>
                        {/* Title */}
                        <Modal.Header className="flex flex-col gap-1">
                            <h2 className="text-xl font-bold text-foreground">
                                {title}
                            </h2>
                            {/* Period / Time Period */}
                            {developmentPeriod && (
                                <p className="text-sm font-medium text-muted-foreground">
                                    {developmentPeriod}
                                </p>
                            )}
                        </Modal.Header>
                        {/* Body */}
                        <Modal.Body ref={modalBodyRef}>
                            {/* Scroll Indicator */}
                            {showScrollIndicator && (
                                <div className="origin-x-1/2 absolute bottom-20 left-1/2 z-50 flex -translate-x-1/2 transform items-center justify-center py-2 transition-opacity duration-300">
                                    <div className="text-md flex items-center gap-2 rounded-full bg-secondary/80 px-3 py-1 text-foreground backdrop-blur-sm">
                                        <span>Scroll for more details</span>
                                        <div className="animate-bounce">↓</div>
                                    </div>
                                </div>
                            )}
                            <div className="space-y-6">
                                {/* Project Demo Video with Timestamps */}
                                {project.demo && (
                                    <div className="space-y-3">
                                        <h3 className="text-lg font-semibold text-foreground">
                                            Project Demo
                                        </h3>
                                        <VideoPlayerWithTimestamps
                                            videoUrl={project.demo.url}
                                            timestamps={project.demo.timestamps}
                                            thumbnail={project.thumbnail}
                                        />
                                    </div>
                                )}

                                {/* Project Overview */}
                                <div className="">
                                    <h3 className="mb-3 text-lg font-semibold text-foreground">
                                        Project Overview
                                    </h3>

                                    <div className="leading-relaxed text-foreground">
                                        <ReactMarkdown>
                                            {description}
                                        </ReactMarkdown>
                                    </div>
                                </div>

                                {/* Key Features - Enhanced styling */}
                                {features && features.length > 0 && (
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2 text-foreground">
                                            <GitBranch className="h-5 w-5 text-primary" />
                                            <h3 className="font-semibold">
                                                Key Features
                                            </h3>
                                        </div>
                                        <div className="rounded-lg bg-muted/20 p-4">
                                            <div className="grid gap-3">
                                                {features.map(
                                                    (feature, index) => (
                                                        <div
                                                            key={index}
                                                            className="flex items-start"
                                                        >
                                                            <span className="mt-2 mr-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                                                            <span className="text-foreground">
                                                                <ReactMarkdown>
                                                                    {feature}
                                                                </ReactMarkdown>
                                                            </span>
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Technical Implementation Section */}
                                {((frontend && frontend.length > 0) ||
                                    (backend && backend.length > 0) ||
                                    (libraries && libraries.length > 0) ||
                                    (infrastructure &&
                                        infrastructure.length > 0)) && (
                                    <div className="space-y-6">
                                        <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                                            Technical Implementation
                                        </h3>

                                        {/* Tech Stack Grid */}
                                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                            {/* Frontend Stack */}
                                            {frontend &&
                                                frontend.length > 0 && (
                                                    <div className="space-y-3">
                                                        <div className="flex items-center gap-2 text-foreground">
                                                            <Layers className="h-5 w-5 text-primary" />
                                                            <h4 className="font-semibold">
                                                                Frontend Stack
                                                            </h4>
                                                        </div>
                                                        <div className="h-full rounded-lg bg-muted/20 p-4">
                                                            <div className="flex flex-wrap gap-2">
                                                                {frontend.map(
                                                                    (
                                                                        tech,
                                                                        index
                                                                    ) => (
                                                                        <span
                                                                            key={
                                                                                index
                                                                            }
                                                                            className="rounded-full bg-accent px-3 py-1.5 text-sm font-medium text-accent-foreground"
                                                                        >
                                                                            <ReactMarkdown>
                                                                                {
                                                                                    tech
                                                                                }
                                                                            </ReactMarkdown>
                                                                        </span>
                                                                    )
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}

                                            {/* Backend Stack */}
                                            {backend && backend.length > 0 && (
                                                <div className="space-y-3">
                                                    <div className="flex items-center gap-2 text-foreground">
                                                        <Server className="h-5 w-5 text-primary" />
                                                        <h4 className="font-medium">
                                                            Backend Stack
                                                        </h4>
                                                    </div>
                                                    <div className="h-full rounded-lg bg-muted/20 p-4">
                                                        <div className="flex flex-wrap gap-2">
                                                            {backend.map(
                                                                (
                                                                    tech,
                                                                    index
                                                                ) => (
                                                                    <span
                                                                        key={
                                                                            index
                                                                        }
                                                                        className="rounded-full bg-accent px-3 py-1.5 text-sm font-medium text-accent-foreground"
                                                                    >
                                                                        {tech}
                                                                    </span>
                                                                )
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Libraries Section */}
                                        {libraries && libraries.length > 0 && (
                                            <div className="space-y-4">
                                                <div className="flex items-center gap-2 text-foreground">
                                                    <Library className="h-5 w-5 text-primary" />
                                                    <h3 className="font-semibold">
                                                        Libraries & Dependencies
                                                    </h3>
                                                </div>
                                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                                    {libraries.map(
                                                        (group, index) => (
                                                            <div
                                                                key={index}
                                                                className="rounded-lg bg-muted/20 p-4"
                                                            >
                                                                <h5 className="mb-3 text-sm font-medium tracking-wide text-primary uppercase">
                                                                    {
                                                                        group.category
                                                                    }
                                                                </h5>
                                                                <div className="grid gap-2.5">
                                                                    {group.items.map(
                                                                        (
                                                                            item,
                                                                            itemIndex
                                                                        ) => (
                                                                            <div
                                                                                key={
                                                                                    itemIndex
                                                                                }
                                                                                className="group flex items-center gap-2.5 text-foreground transition-colors"
                                                                            >
                                                                                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                                                                                <span className="text-sm">
                                                                                    <ReactMarkdown>
                                                                                        {
                                                                                            item
                                                                                        }
                                                                                    </ReactMarkdown>
                                                                                </span>
                                                                            </div>
                                                                        )
                                                                    )}
                                                                </div>
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        )}

                                        {/* Infrastructure Section */}
                                        {infrastructure &&
                                            infrastructure.length > 0 && (
                                                <div className="space-y-4">
                                                    <div className="flex items-center gap-2 text-foreground">
                                                        <Wrench className="h-5 w-5 text-primary" />
                                                        <h4 className="font-semibold">
                                                            Infrastructure
                                                        </h4>
                                                    </div>
                                                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                                        {infrastructure.map(
                                                            (group, index) => (
                                                                <div
                                                                    key={index}
                                                                    className="rounded-lg bg-muted/20 p-4"
                                                                >
                                                                    <h5 className="mb-3 text-sm font-medium tracking-wide text-primary uppercase">
                                                                        {
                                                                            group.category
                                                                        }
                                                                    </h5>
                                                                    <div className="grid gap-2.5">
                                                                        {group.items.map(
                                                                            (
                                                                                item,
                                                                                itemIndex
                                                                            ) => (
                                                                                <div
                                                                                    key={
                                                                                        itemIndex
                                                                                    }
                                                                                    className="group flex items-center gap-2.5 text-foreground transition-colors"
                                                                                >
                                                                                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                                                                                    <span className="text-sm">
                                                                                        <ReactMarkdown>
                                                                                            {
                                                                                                item
                                                                                            }
                                                                                        </ReactMarkdown>
                                                                                    </span>
                                                                                </div>
                                                                            )
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            )
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                    </div>
                                )}
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
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
                                    <ExternalLink className="h-4 w-4" />
                                </Button>
                            )}
                            {githubLink && (
                                <Button
                                    as="a"
                                    href={githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variant="faded"
                                    className="flex items-center gap-2"
                                >
                                    <span>View Code</span>
                                    <Code className="h-4 w-4" />
                                </Button>
                            )}
                        </Modal.Footer>
                    </>
                )}
            </Modal.Container>
        </Modal>
    )
}

export default ProjectModal

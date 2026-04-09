// components/ProjectModal.js
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Modal, Button } from '@heroui/react'
import { ExternalLink, Code, Globe, Github } from 'lucide-react'
import VideoPlayerWithTimestamps from './VideoPlayerWithTimestamps'
import ReactMarkdown from 'react-markdown'
import Chip from './Chip'

const TechRow = ({ tech = [] }) => {
    if (!tech.length) return null
    return (
        <div className="flex flex-wrap gap-2">
            {tech.map((t, i) => {
                const Icon = t.icon
                return (
                    <span
                        key={i}
                        className="flex items-center gap-1.5 rounded-full border border-accent/40 bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                        {Icon && <Icon className="h-3.5 w-3.5" />}
                        {t.name}
                    </span>
                )
            })}
        </div>
    )
}

const FeatureList = ({ features = [] }) => (
    <div className="rounded-lg bg-muted/20 p-4">
        <div className="grid gap-3">
            {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                    <span className="mt-2 mr-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span className="text-foreground">
                        <ReactMarkdown>{feature}</ReactMarkdown>
                    </span>
                </div>
            ))}
        </div>
    </div>
)

const ProjectModal = ({ isOpen, onOpenChange, project }) => {
    const scrollRef = useRef(null)


    if (!project) return null

    const { card, modal, meta, demo, tech = [] } = project
    const title = card?.title
    const description = modal?.description
    const features = modal?.features || []
    const developmentPeriod = meta?.developmentPeriod
    const liveLink = meta?.links?.live
    const githubLink = meta?.links?.github

    return (
        <Modal.Backdrop isOpen={isOpen} onOpenChange={onOpenChange}>
            <Modal.Container>
                <Modal.Dialog className='border-3 border-primary/40 bg-secondary my-auto'>
                    <Modal.CloseTrigger className='border-3 border-primary text-primary' />

                    <Modal.Header className="flex flex-col gap-0.5">
                        <Modal.Heading>{title}</Modal.Heading>
                        {developmentPeriod && (
                            <p className="text-sm text-muted-foreground">
                                {developmentPeriod}
                            </p>
                        )}
                    </Modal.Header>

                    <Modal.Body>
                        {/* Scroll wrapper — ref lives here, not on Modal.Body */}
                        <div
                            ref={scrollRef}
                            className=" overflow-y-auto"
                        >

                            <div className="space-y-6">
                                {/* Demo Video */}
                                {demo && (
                                    <div className="space-y-3">
                                        <h3 className="text-lg font-semibold text-foreground">
                                            Project Demo
                                        </h3>
                                        <VideoPlayerWithTimestamps
                                            videoUrl={demo.url}
                                            timestamps={demo.timestamps}
                                            thumbnail={project.thumbnail}
                                        />
                                    </div>
                                )}

                                {/* Overview */}
                                {description && (
                                    <div className="space-y-2">
                                        <h3 className="text-lg font-semibold text-foreground">
                                            Overview
                                        </h3>
                                        <div className="leading-relaxed text-foreground">
                                            <ReactMarkdown>
                                                {description}
                                            </ReactMarkdown>
                                        </div>
                                    </div>
                                )}

                                {/* Key Features */}
                                {features.length > 0 && (
                                    <div className="space-y-3">
                                        <h3 className="text-lg font-semibold text-foreground">
                                            Key Features
                                        </h3>
                                        <FeatureList features={features} />
                                    </div>
                                )}

                                {/* Tech Used */}
                                {tech.length > 0 && (
                                    <div className="space-y-3">
                                        <h3 className="text-lg font-semibold text-foreground">
                                            Tech Used
                                        </h3>
                                        <TechRow tech={tech} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </Modal.Body>

                    <Modal.Footer className="flex items-center gap-4">
                        {/* Action links */}
                        {meta?.links && (
                            <div
                                className="flex items-center gap-4"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {meta.links.live && (
                                    <Link
                                        href={meta.links.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <Chip
                                            label="Live"
                                            icon={Globe}
                                            variant="link"
                                            rawIcon
                                        />
                                    </Link>
                                )}
                                {meta.links.github && (
                                    <Link
                                        href={meta.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <Chip
                                            label="Code"
                                            icon={Github}
                                            variant="link"
                                            rawIcon
                                        />
                                    </Link>
                                )}
                            </div>
                        )}
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal.Container>
        </Modal.Backdrop>
    )
}

export default ProjectModal

// components/ProjectCard.js

'use client'

import Image from 'next/image'
import Chip from './Chip'
import Link from 'next/link'
import Separator from './Seperator'
import { Button } from '@heroui/react'
import { Globe, Github, Video } from 'lucide-react'

// ─── Meta row — handles solo vs team ─────────────────────────────────────────

const MetaRow = ({ stats, eyebrow }) => {
    const isTeam = eyebrow.type === 'team'

    return (
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-muted-foreground">
            <span>{stats.year}</span>
            <span className="text-muted-foreground/40">/</span>

            {isTeam ? (
                <span>Team project</span>
            ) : (
                <span>Solo project</span>
            )}

            {stats.highlight && (
                <>
                    <span className="text-muted-foreground/40">/</span>
                    <span className="font-medium text-foreground">
                        {stats.highlight}
                    </span>
                </>
            )}
        </div>
    )
}

// ─── Thumbnail ────────────────────────────────────────────────────────────────

const Thumbnail = ({ image, title }) => (
    <div className="relative aspect-video w-full rounded-lg border-primary/10 bg-background/30">
        {image ? (
            <Image
                src={image}
                alt={title}
                fill
                className="m-auto !h-max max-h-[90%] !w-max max-w-[90%] rounded-sm border-3 border-primary/40 object-contain"
            />
        ) : (
            <div className="flex h-full w-full items-center justify-center">
                <span className="text-xs text-muted-foreground">
                    No preview
                </span>
            </div>
        )}
    </div>
)

// ─── Tech chips row — max 3 visible + overflow count ─────────────────────────

const TechRow = ({ tech }) => (
    <div className="flex flex-wrap gap-1.5">
        {tech.slice(0, 3).map((t) => (
            <Chip
                key={t.name}
                label={t.name}
                icon={t.icon}
                variant={t.variant || 'tag-a'}
            />
        ))}

        {tech.length > 3 && (
            <Chip label={`+${tech.length - 3}`} variant="tag-a" />
        )}
    </div>
)

// ─── Main card ────────────────────────────────────────────────────────────────

const ProjectCard = ({
    id,
    thumbnail,
    card,
    meta,
    demo,
    tech,
    className = '',
    onOpenModal = () => {
        console.warn('onOpenModal not passed on ProjectCard')
    },
    ...props
}) => {
    const { title, description, solves, stats, badges, eyebrow } = card

    const handleOpen = () => onOpenModal?.(id)

    return (
        <>
            <div
                className={`relative flex w-full max-w-xs flex-col rounded-lg border-2 border-primary/40 bg-secondary transition-all duration-200 ease-in-out ${className} `}
                {...props}
            >
                {/* Thumbnail */}
                <Thumbnail image={thumbnail} title={title} />

                {/* Body */}
                <div className="flex min-h-0 flex-1 flex-col gap-2.5 p-4">
                    {/* Row: title + badges */}
                    <div className="flex justify-between gap-3">
                        <h3 className="text-md leading-snug font-semibold text-foreground transition-colors">
                            {title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-1.5">
                            {badges.featured && (
                                <Chip
                                    label="Featured"
                                    variant="status-featured"
                                    dot
                                />
                            )}
                            {badges.live && (
                                <Chip label="Live" variant="status-live" dot />
                            )}
                        </div>
                    </div>

                    {/* Description */}
                    <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                        {description}
                    </p>

                    {/* Solves */}
                    {solves && (
                        <p className="text-[11px] text-muted-foreground italic">
                            Solves: {solves}
                        </p>
                    )}

                    {/* Meta */}
                    <MetaRow stats={stats} eyebrow={eyebrow} />

                    {/* Footer: chips + links */}
                    <div className="mt-auto flex flex-col justify-between gap-3 pt-1">
                        <TechRow tech={tech} />

                        {/* Separator */}
                        <div className="flex items-center gap-2 text-muted-foreground opacity-50">
                            <Separator className="flex-1" />
                            <p className="text-sm whitespace-nowrap">Links</p>
                            <Separator className="flex-1" />
                        </div>

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
                                {/* Modal Video trigger */}
                                {demo && (
                                    <Button
                                        size="sm"
                                        variant="ghost"
                                        className={'p-0 hover:bg-transparent'}
                                        onClick={handleOpen}
                                    >
                                        <Chip
                                            label="Demo"
                                            icon={Video}
                                            variant="link"
                                            rawIcon
                                        />
                                    </Button>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectCard

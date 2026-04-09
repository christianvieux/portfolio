// components/GameDevCard.js
'use client'

import { Play, Image as ImageIcon } from 'lucide-react'
import Chip from './Chip'
import Image from 'next/image'

// ─── Attachment button — opens media in modal ─────────────────────────────────

const AttachmentButton = ({
    attachment,
    projectTitle,
    setSelectedMedia = () => {
        console.warn('No setSelectedMedia handler provided for AttachmentButton')
    },
    setSelectedTitle = () => {
        console.warn('No setSelectedTitle handler provided for AttachmentButton')
    },
    onOpen = () => {
        console.warn('No onOpen handler provided for AttachmentButton')
    },
}) => (
    <button
        onClick={() => {
            setSelectedMedia(attachment)
            setSelectedTitle(`${projectTitle} - ${attachment.name}`)
            onOpen()
        }}
        className="flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-left text-sm text-primary transition-colors hover:bg-secondary/50 hover:text-primary-hover"
    >
        {attachment.type === 'video' ? (
            <Play className="h-4 w-4 shrink-0" />
        ) : (
            <ImageIcon className="h-4 w-4 shrink-0" />
        )}
        {attachment.name}
    </button>
)

// ─── Main card ────────────────────────────────────────────────────────────────

const GameDevCard = ({
    project,
    onOpen=() => {
        console.warn('No onOpen handler provided for GameDevCard')
    },
    setSelectedMedia=() => {
        console.warn('No setSelectedMedia handler provided for GameDevCard')
    },
    setSelectedTitle=() => {
        console.warn('No setSelectedTitle handler provided for GameDevCard')
    },
    className = '',
    ...props
}) => {
    const { title, period, role, description, media, attachments } = project

    return (
        <div
            id="GameDevCard"
            className={`h-[670px] w-xs max-w-full rounded-lg border-2 border-primary/40 bg-secondary p-6 pb-0 shadow-sm ${className}`}
            {...props}
        >
            {/* Thumbnail */}
            <div className="flex justify-center items-center relative mb-4 aspect-video w-full rounded-lg bg-background/30">
                <Image
                    src={media.thumbnail}
                    alt={title}
                    fill
                    className="!static !h-max max-h-[90%] !w-max max-w-[90%] rounded-md border-3 border-primary/40 object-contain"
                />
            </div>

            {/* Content */}
            <div className="space-y-2">
                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground">
                    {title}
                </h3>

                {/* Period + Role */}
                <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm text-primary">{period}</span>
                    <span className="text-muted-foreground">•</span>
                    <Chip label={role} variant="default" />
                </div>

                {/* Description */}
                <p className="h-40 overflow-y-auto pr-6 text-sm leading-relaxed text-foreground">
                    {description}
                </p>
            </div>

            {/* Attachments */}
            {attachments?.length > 0 && (
                <div className="mt-4 pt-4">
                    <p className="mb-2 text-sm font-medium text-foreground">
                        Previews
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {attachments.map((attachment, idx) => (
                            <AttachmentButton
                                key={idx}
                                attachment={attachment}
                                projectTitle={title}
                                onOpen={onOpen}
                                setSelectedMedia={setSelectedMedia}
                                setSelectedTitle={setSelectedTitle}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default GameDevCard

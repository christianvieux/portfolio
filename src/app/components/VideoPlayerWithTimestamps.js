// components/VideoPlayerWithTimestamps.js
import { useState, useRef } from 'react'
import { PlayCircle } from 'lucide-react'

const VideoPlayerWithTimestamps = ({ videoUrl, timestamps, thumbnail }) => {
    const videoRef = useRef(null)
    const [currentTime, setCurrentTime] = useState(0)
    const [activeSection, setActiveSection] = useState(timestamps[0])

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            const time = videoRef.current.currentTime
            setCurrentTime(time)

            const currentSection = timestamps.reduce((prev, curr) => {
                const currTime = timeToSeconds(curr.time)
                return currTime <= time ? curr : prev
            }, timestamps[0])

            setActiveSection(currentSection)
        }
    }

    const timeToSeconds = (timeStr) => {
        const [minutes, seconds] = timeStr.split(':').map(Number)
        return minutes * 60 + seconds
    }

    const jumpToTimestamp = (time) => {
        if (videoRef.current) {
            videoRef.current.currentTime = timeToSeconds(time)
            videoRef.current.play()
        }
    }

    return (
        <div className="space-y-6">
            {/* Video Player */}
            <div className="relative aspect-video overflow-hidden rounded-xl bg-background shadow-lg">
                <video
                    ref={videoRef}
                    src={videoUrl}
                    controls
                    className="h-full w-full object-fill"
                    poster={thumbnail}
                    preload="metadata"
                    onTimeUpdate={handleTimeUpdate}
                >
                    Your browser does not support the video tag.
                    <a href={videoUrl} className="text-primary">
                        Download video
                    </a>
                </video>
            </div>

            {/* Timeline Navigation */}
            <div className="rounded-xl bg-secondary/10 p-1">
    <div className="grid gap-1">
        {timestamps.map(({ time, label }, index) => {
            const isActive = activeSection?.time === time
            const isLast = index === timestamps.length - 1
            return (
                <button
                    key={time}
                    onClick={() => jumpToTimestamp(time)}
                    className={`group relative flex cursor-pointer items-center gap-4 rounded-lg py-3 text-left transition-colors ${
                        isActive ? 'bg-primary/10' : 'hover:bg-secondary/40'
                    }`}
                >
                    {/* Timeline column */}
                    <div className="relative flex w-6 flex-shrink-0 flex-col items-center self-stretch">
                        {/* Vertical line — hidden for last item */}
                        {!isLast && (
                            <div
                                className={`absolute top-1/2 bottom-0 w-px ${
                                    isActive ? 'bg-primary/30' : 'bg-border'
                                }`}
                            />
                        )}
                        {/* Dot */}
                        <div
                            className={`z-10 mt-auto mb-auto h-2.5 w-2.5 rounded-full transition-colors ${
                                isActive
                                    ? 'bg-primary'
                                    : 'bg-secondary-foreground/30 group-hover:bg-secondary-foreground/50'
                            }`}
                        />
                    </div>

                    {/* Text */}
                    <div className="flex flex-1 items-center gap-3">
                        <span
                            className={`font-mono text-sm transition-colors ${
                                isActive
                                    ? 'font-medium text-primary'
                                    : 'text-muted-foreground'
                            }`}
                        >
                            {time}
                        </span>
                        <span
                            className={`text-sm transition-colors ${
                                isActive
                                    ? 'font-medium text-primary'
                                    : 'text-secondary-foreground'
                            }`}
                        >
                            {label}
                        </span>
                    </div>

                    {/* Play icon — no size change */}
                    <PlayCircle
                        className={`h-4 w-4 flex-shrink-0 transition-opacity ${
                            isActive
                                ? 'text-primary opacity-100'
                                : 'opacity-0 group-hover:opacity-60'
                        }`}
                    />
                </button>
            )
        })}
    </div>
</div>
        </div>
    )
}

export default VideoPlayerWithTimestamps

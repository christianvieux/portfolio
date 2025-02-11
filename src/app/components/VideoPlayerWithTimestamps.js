// components/VideoPlayerWithTimestamps.js
import { useState, useRef } from 'react';
import { PlayCircle } from 'lucide-react';

const VideoPlayerWithTimestamps = ({ videoUrl, timestamps, thumbnail }) => {
  const videoRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [activeSection, setActiveSection] = useState(timestamps[0]);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const time = videoRef.current.currentTime;
      setCurrentTime(time);
      
      const currentSection = timestamps.reduce((prev, curr) => {
        const currTime = timeToSeconds(curr.time);
        return currTime <= time ? curr : prev;
      }, timestamps[0]);
      
      setActiveSection(currentSection);
    }
  };

  const timeToSeconds = (timeStr) => {
    const [minutes, seconds] = timeStr.split(':').map(Number);
    return minutes * 60 + seconds;
  };

  const jumpToTimestamp = (time) => {
    if (videoRef.current) {
      videoRef.current.currentTime = timeToSeconds(time);
      videoRef.current.play();
    }
  };

  return (
    <div className="space-y-6">
      {/* Video Player */}
      <div className="relative aspect-video rounded-xl overflow-hidden bg-background shadow-lg">
        <video
          ref={videoRef}
          src={videoUrl}
          controls
          className="w-full h-full object-fill"
          poster={thumbnail}
          preload="metadata"
          onTimeUpdate={handleTimeUpdate}
        >
          Your browser does not support the video tag.
          <a href={videoUrl} className="text-primary">Download video</a>
        </video>
      </div>

      {/* Timeline Navigation */}
      <div className="bg-secondary/10 rounded-xl p-1">
        <div className="grid gap-1">
          {timestamps.map(({ time, label }, index) => {
            const isActive = activeSection?.time === time;
            return (
              <button
                key={time}
                onClick={() => jumpToTimestamp(time)}
                className={`group relative  py-3 rounded-lg text-left transition-all
                  ${isActive ? 'bg-primary/10' : 'hover:bg-secondary/40'}
                  flex items-center gap-4`}
              >
                {/* Visual Timeline Indicator */}
                <div className="relative flex items-center">
                  <div className={`w-1 h-14 ${index === timestamps.length - 1 ? 'h-7' : ''} 
                    ${isActive ? 'bg-primary/30' : 'bg-border'} 
                    ${index === 0 ? 'rounded-t-full' : ''} 
                    ${index === timestamps.length - 1 ? 'rounded-b-full' : ''} 
                    absolute top-1/2 left-1/2 transform -translate-x-1/2`} 
                  />
                  <div className={`w-3 h-3 rounded-full z-10 transition-colors
                    ${isActive ? 'bg-primary scale-125' : 'bg-secondary-foreground/30 group-hover:bg-secondary-foreground/50'}`} 
                  />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className={`font-mono text-sm transition-colors
                      ${isActive ? 'text-primary font-medium' : 'text-muted-foreground group-hover:text-secondary-foreground'}`}>
                      {time}
                    </span>
                    <span className={`text-sm transition-colors
                      ${isActive ? 'text-primary font-medium' : 'text-secondary-foreground'}`}>
                      {label}
                    </span>
                  </div>
                </div>

                {/* Play Icon */}
                <PlayCircle 
                  className={`w-5 h-5 transition-all
                    ${isActive ? 'text-primary opacity-100' : 'opacity-0 group-hover:opacity-70'}
                    transform group-hover:scale-110`}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayerWithTimestamps;
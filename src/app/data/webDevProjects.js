// data/projects.js
export const projects = [
  {
    title: "TrackFusionWeb - Audio Streaming Platform",
    summary:
      "TrackFusionWeb is a full-featured audio streaming platform that enables users to upload, share, and discover music. The platform includes user authentication, audio file management, streaming capabilities, and a responsive interface that works across all devices.",
    description:
      "A modern streaming platform for discovering, sharing, and analyzing audio content. Built with Next.js and Node.js, deployed through AWS Services.",
    image:
      "https://res.cloudinary.com/dqbydfphk/image/upload/v1739083627/TrackFusionWeb_Thumbnail_ce0rsv.png",
    demo: "https://trackfusionweb-storage.s3.us-east-2.amazonaws.com/TrackFusionWeb_Demo_Video/Demo_Video_trackfusionweb+-+Made+with+Clipchamp.mp4",
    timestamps: [
      { time: "00:00", label: "Project Overview & Tech Stack" },
      { time: "01:18", label: "Homepage & Navigation" },
      { time: "02:00", label: "Account Creation Process" },
      { time: "03:03", label: "Feed Page & Track Listing" },
      { time: "04:04", label: "Queue System & Playback Controls" },
      { time: "05:16", label: "Track Filtering & Search" },
      { time: "06:39", label: "Track Upload Demonstration" },
      { time: "08:28", label: "Account Settings & Wrap-up" },
    ],
    technologies: ["Next.js", "Node.js", "SQL", "AWS"],
    frontend: ["Next.js", "React", "TailwindCSS"],
    backend: ["Node.js", "Express", "PostgreSQL"],
    libraries: [
      // UI Components & Styling
      {
        category: "User Interface",
        items: [
          "NextUI for component library",
          "Embla Carousel for image sliders",
          "Framer Motion for animations",
          "Lucide React for icons",
        ],
      },
      {
        category: "Media Processing",
        items: [
          "Browser Image Compression for upload optimization",
          "Sharp for image optimization",
          "Music Metadata for audio processing",
        ],
      },
      {
        category: "Core Functionality",
        items: [
          "Axios for API requests",
          "Fuse.js for search functionality",
          "React Hot Toast for notifications",
        ],
      },
      {
        category: "Backend Services",
        items: [
          "Express.js for API server",
          "JWT and Bcrypt for authentication",
          "Bull for job queue management",
        ],
      },
    ],
    // Update the Infrastructure section to group by service type
    infrastructure: [
      {
        category: "AWS Services",
        items: [
          "Amplify for frontend hosting",
          "App Runner for API deployment",
          "S3 for audio storage",
          "ECR/ECS for Docker containerization",
          "CloudWatch for monitoring and alerts",
        ],
      },
      {
        category: "Database & Storage",
        items: ["PostgreSQL on Azure for database"],
      },
      {
        category: "Security & DevOps",
        items: [
          "Express.js security middleware (Helmet, CORS, Rate Limiting)",
          "Docker for containerization",
        ],
      },
    ],
    developmentPeriod: "Dec 2023 - Present",
    features: [
      "Simple user accounts to upload and manage audio content",
      "Audio streaming functionality with basic playback controls",
      "Personal library to play/manage uploaded content",
      "Mobile-friendly design for listening on any device",
      "Cloud storage for audio files using modern hosting solutions",
    ],
    liveLink: "https://www.trackfusionweb.com/home",
    codeLink: "https://github.com/christianvieux/TrackFusionWeb",
    period: "Dec 2024",
  },
];

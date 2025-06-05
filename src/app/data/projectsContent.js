import { image } from "@heroui/react";

// data/projects.js
export const projects = [
  // File sharing project
  {
    period: "May 21 2025",
    title: "File Sharing",
    image:
      "https://res.cloudinary.com/dqbydfphk/image/upload/v1748972079/Portfolio/ctyk94f2ctcgk6hzlfmq.jpg",
    summary:
      "**Secure file-sharing application** that lets users upload and share files through a web interface. Features user authentication, access controls, and cloud storage integration.",
    description:
      "Built this tool to provide a **straightforward way to share files securely**. Users can upload files to AWS cloud storage, control who has access to their files, and manage everything through a clean interface. Created with **.NET Core** for handling file operations and **React** for the user interface. Includes essential security features like user authentication and secure file transfers.",
    features: [
      "Secure file upload and storage using AWS S3",
      "User authentication and file access control",
      "Responsive web interface for easy file management",
      "Simple sharing functionality with access controls",
      "Cloud-based storage with AWS integration",
    ],
    technologies: [".NET Core", "React", "AWS", "SQL"],
    frontend: ["React", "JavaScript", "TailwindCSS"],
    backend: [".NET Core", "C#", "AWS SDK"],
    libraries: [
      {
        category: "User Interface",
        items: [
          "React for component structure",
          "TailwindCSS for styling",
          "Material UI for components",
        ],
      },
      {
        category: "Core Functionality",
        items: [
          "Axios for API requests",
          "JWT for secure authentication",
          "React Router for navigation",
        ],
      },
      {
        category: "Backend Services",
        items: [
          ".NET Core Web API",
          "Entity Framework Core",
          "AWS SDK for .NET",
        ],
      },
    ],
    infrastructure: [
      {
        category: "AWS Services",
        items: [
          "S3 for file storage",
          "DynamoDB for metadata",
          "IAM for security management",
        ],
      },
      {
        category: "Security",
        items: [
          "JWT authentication",
          "File access control",
          "Secure file transfer",
        ],
      },
    ],
    developmentPeriod: "May 9 2025 - May 21 2025",
    liveLink: "http://44.203.74.69:3006/home",
    githubLink:
      "https://github.com/christianvieux/GA_Project_Final_File-Sharing-App",
  },

  // ChapterList book tracking Project
  {
    period: "May 6 2025",
    title: "ChapterList",
    summary:
      "**Full-stack reading tracker** built by a team of 4 developers. Features a **responsive interface** for managing books and reviews, with user authentication and cloud deployment.",
    description:
      "Built during a team collaboration at **General Assembly** bootcamp. Created with **React** frontend and **Django** backend, allowing users to track their reading materials and share reviews. Led the **AWS deployment** and infrastructure setup as part of the backend team.",
    features: [
      "Browse and search reading materials collection",
      "Create and manage reading lists",
      "Review system with ratings and comments",
      "Staff picks section for recommendations",
      "Mobile-responsive interface design",
    ],
    image:
      "https://res.cloudinary.com/dqbydfphk/image/upload/v1748974579/Portfolio/km8uqjtm5kwy3bbpjo0v.jpg",
    technologies: ["React", "Django", "PostgreSQL", "AWS"],
    frontend: ["React", "Vite", "CSS"],
    backend: ["Django", "Python", "PostgreSQL"],
    libraries: [
      {
        category: "Frontend",
        items: [
          "React for UI components",
          "Axios for API requests",
          "React Router for navigation",
        ],
      },
      {
        category: "Backend",
        items: [
          "Django REST Framework",
          "Django ORM for database operations",
          "JWT for authentication",
        ],
      },
    ],
    infrastructure: [
      {
        category: "Deployment",
        items: [
          "AWS EC2 for hosting",
          "PostgreSQL database",
          "Nginx web server",
        ],
      },
      {
        category: "Development",
        items: [
          "Git version control",
          "Environment configuration",
          "Team collaboration tools",
        ],
      },
    ],
    developmentPeriod: "April 29 2025 - May 6 2025",
    liveLink: "http://44.203.74.69:3004/",
    githubLink: "https://github.com/christianvieux/GA_Project_4_ChapertList",
  },

  // QuoteFolio Project
  {
    period: "April 2 2025",
    title: "QuoteFolio",
    summary:
      "**Quotes sharing platform** built with the MERN stack. Features a **clean interface** for sharing and discovering quotes, with user authentication and interactive features.",
    description:
      "Created during the **General Assembly** bootcamp. Built with **React** frontend and **Express/MongoDB** backend, allowing users to share and discover quotes. Implemented user authentication, quote management, and AWS deployment.",
    features: [
      "Browse and share quotes with the community",
      "User authentication system",
      "Personal quote collection management",
      "Interactive features like likes and comments",
      "Mobile-responsive design",
    ],
    image:
      "https://res.cloudinary.com/dqbydfphk/image/upload/v1748975242/Portfolio/gkoneomahh2e89fwewhe.jpg",
    technologies: ["React", "Express", "MongoDB", "Node.js"],
    frontend: ["React", "Vite", "TailwindCSS"],
    backend: ["Express.js", "MongoDB", "Node.js"],
    libraries: [
      {
        category: "Frontend",
        items: [
          "React for UI components",
          "TailwindCSS for styling",
          "Axios for API requests",
        ],
      },
      {
        category: "Backend",
        items: [
          "Express.js for API server",
          "Mongoose for database operations",
          "express-session for authentication",
        ],
      },
    ],
    infrastructure: [
      {
        category: "Deployment",
        items: [
          "AWS EC2 for hosting",
          "MongoDB Atlas database",
          "Nginx web server",
        ],
      },
      {
        category: "Development",
        items: [
          "Git version control",
          "Environment configuration",
          "Team collaboration tools",
        ],
      },
    ],
    developmentPeriod: "March 21 2025 - April 2 2025",
    liveLink: "http://44.203.74.69:3002/home",
    githubLink: "https://github.com/christianvieux/GA_Project_3_QuoteFolio",
  },

  // Recipe Project
  {
    period: "March 14 2025",
    title: "Recipes",
    summary:
      "A **recipe management platform** built with Express and MongoDB. Features a **responsive interface** for sharing recipes, with user authentication and commenting system.",
    description:
      "Built during the **General Assembly** bootcamp. Created with **Express.js** and **MongoDB** for managing recipe content. Implemented user authentication, recipe management, and commenting features using **Bootstrap** for a clean, responsive interface.",
    features: [
      "Browse and search recipe collection",
      "User authentication system",
      "Comment on shared recipes",
      "Manage personal recipe collection",
      "Mobile-responsive Bootstrap interface",
    ],
    image:
      "https://res.cloudinary.com/dqbydfphk/image/upload/v1748975732/Portfolio/iklyn9daqvpsurmamior.jpg",
    technologies: ["Express.js", "MongoDB", "Bootstrap", "Node.js"],
    frontend: ["EJS", "Bootstrap", "JavaScript"],
    backend: ["Express.js", "MongoDB", "Node.js"],
    libraries: [
      {
        category: "Frontend",
        items: [
          "Bootstrap for responsive UI",
          "EJS for templating",
          "jQuery for DOM manipulation",
        ],
      },
      {
        category: "Backend",
        items: [
          "Express.js for server routing",
          "Mongoose for database operations",
          "express-session for authentication",
        ],
      },
    ],
    infrastructure: [
      {
        category: "Deployment",
        items: [
          "AWS EC2 for hosting",
          "MongoDB Atlas database",
          "Nginx web server",
        ],
      },
      {
        category: "Development",
        items: [
          "Git version control",
          "Environment configuration",
          "MVC architecture",
        ],
      },
    ],
    developmentPeriod: "March 7 2025 - March 14 2025",
    liveLink: "http://44.203.74.69:3008/home",
    githubLink: "https://github.com/christianvieux/GA_Project_2_Recipe",
  },

  // TrackFusionWeb Project
  {
    period: "Dec 30 2024",
    title: "TrackFusionWeb",
    summary:
      "**Music streaming platform** that lets users upload and discover new music. Features a **modern interface** with playlist creation, audio playback controls, and user profiles.",
    description:
      "Developed a **Spotify-inspired** music platform where artists and listeners can connect. Built with **Next.js** and **Node.js**, the app handles audio streaming, user libraries, and content management through a clean interface. Uses **AWS** for reliable audio delivery and storage. Includes features like **queue management**, **track filtering**, and **mobile-responsive** design.",
    features: [
      "Simple user accounts to upload and manage audio content",
      "Audio streaming functionality with basic playback controls",
      "Personal library to play/manage uploaded content",
      "Mobile-friendly design for listening on any device",
      "Cloud storage for audio files using modern hosting solutions",
    ],
    image:
      "https://res.cloudinary.com/dqbydfphk/image/upload/v1739083627/TrackFusionWeb_Thumbnail_ce0rsv.png",
    demo: {
      url: "https://christianvportfolio.s3.us-east-1.amazonaws.com/Demo_Video_trackfusionweb+",
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
    },

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
    developmentPeriod: "May 10 2023 - Dec 30 2024",
    liveLink: "https://www.trackfusionweb.com/home",
    githubLink: "https://github.com/christianvieux/TrackFusionWeb",
  },
];

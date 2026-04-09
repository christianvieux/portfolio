// data/projectsContent.js

import ExpressIcon from '../Icons/Express.js'
import MongoDBIcon from '../Icons/MongoDB.js'
import DjangoIcon from '../Icons/DjangoREST.js'
import PythonIcon from '../Icons/Python.js'
import NextIcon from '../Icons/Nextjs.js'
import HTMLIcon from '../Icons/HTML5.js'
import JSIcon from '../Icons/JavaScript.js'
import TailwindIcon from '../Icons/TailwindCSS.js'
import BootstrapIcon from '../Icons/BootStrap.js'
import GitIcon from '../Icons/Git.js'
import GithubIcon from '../Icons/GitHub.js'
import VercelIcon from '../Icons/Vercel.js'
import DockerIcon from '../Icons/Docker.js'
import ReactIcon from '../Icons/React.js'
import NodejsIcon from '../Icons/Nodejs.js';
import PostgresSQLIcon from '../Icons/PostgresSQL.js'
import AWSIcon from '../Icons/AWS.js'
import DotNetIcon from '../Icons/DotNet.js'

const tech = (name, icon, variant, category) => ({
    name,
    icon,
    variant,
    category,
})

const project = ({ id, thumbnail, card, meta, tech = [], modal, demo }) => ({
    id,
    thumbnail,
    card,
    meta,
    tech,
    ...(modal && { modal }),
    ...(demo && { demo }),
})

export const projects = [
    project({
        id: 'trackfusionweb',
        thumbnail:
            'https://res.cloudinary.com/dqbydfphk/image/upload/v1739083627/TrackFusionWeb_Thumbnail_ce0rsv.png',
        card: {
            eyebrow: {
                type: 'solo',
                label: 'Solo project',
                teamSize: null,
            },
            title: 'TrackFusionWeb',
            description:
                'Music platform for uploading, streaming, and managing tracks.',
            solves: 'sharing and managing music in one place',
            stats: {
                year: '2024',
                context: 'Solo project',
                highlight: 'Audio processing and storage flow',
            },
            badges: {
                featured: true,
                live: true,
            },
        },
        meta: {
            completedAt: '2024-12-30',
            developmentPeriod: 'May 10 2023 to Dec 30 2024',
            links: {
                live: 'https://trackfusionweb.vercel.app/home',
                github: 'https://github.com/christianvieux/TrackFusion-Frontend',
            },
        },
        modal: {
            description:
                'Built a music platform where users can upload tracks, manage audio content, and stream music through a responsive interface. Used Next.js for the frontend, Node.js and Express for the backend, PostgreSQL for data storage, and AWS for media storage and delivery.',
            features: [
                'Upload and manage audio content',
                'Stream tracks with playback controls',
                'Filter and search uploaded music',
                'Manage personal music libraries',
                'Use cloud storage for audio delivery',
            ],
        },
        demo: {
            url: 'https://christianvieux-public-files.s3.us-east-1.amazonaws.com/videos/Demo_Video_trackfusionweb.mp4',
            timestamps: [
                { time: '00:00', label: 'Project Overview and Tech Stack' },
                { time: '01:18', label: 'Homepage and Navigation' },
                { time: '02:00', label: 'Account Creation Process' },
                { time: '03:03', label: 'Feed Page and Track Listing' },
                { time: '04:04', label: 'Queue System and Playback Controls' },
                { time: '05:16', label: 'Track Filtering and Search' },
                { time: '06:39', label: 'Track Upload Demonstration' },
                { time: '08:28', label: 'Account Settings and Wrap up' },
            ],
        },
        tech: [
            tech('Vercel', VercelIcon, 'tag-c', 'cloud'),
            tech('Next.js', NextIcon, 'tag-a', 'frontend'),
            tech('React', ReactIcon, 'tag-a', 'frontend'),
            tech('Node.js', NodejsIcon, 'tag-b', 'backend'),
            tech('Express', ExpressIcon, 'tag-b', 'backend'),
            tech('PostgreSQL', PostgresSQLIcon, 'tag-b', 'database'),
            tech('AWS', AWSIcon, 'tag-c', 'cloud'),
            tech('Docker', DockerIcon, 'tag-c', 'cloud'),
        ],
    }),

    project({
        id: 'file-sharing',
        thumbnail:
            'https://res.cloudinary.com/dqbydfphk/image/upload/v1748972079/Portfolio/ctyk94f2ctcgk6hzlfmq.jpg',
        card: {
            eyebrow: {
                type: 'solo',
                label: 'Solo project',
                teamSize: null,
            },
            title: 'File Sharing App',
            description:
                'Secure file sharing app with expiring links and AWS backed storage.',
            solves: 'secure file sharing with controlled access',
            stats: {
                year: '2025',
                context: 'Solo project',
                highlight: 'Temporary access link system',
            },
            badges: {
                featured: false,
                live: true,
            },
        },
        meta: {
            completedAt: '2025-05-21',
            developmentPeriod: 'May 9 2025 to May 21 2025',
            links: {
                live: 'https://files.projects.christianvieuxdev.com',
                github: 'https://github.com/christianvieux/file-sharing-frontend',
            },
        },
        tech: [
            tech('React', ReactIcon, 'tag-a', 'frontend'),
            tech('.NET Core', DotNetIcon, 'tag-b', 'backend'),
            tech('PostgreSQL', PostgresSQLIcon, 'tag-b', 'database'),
            tech('AWS', AWSIcon, 'tag-c', 'cloud'),
            tech('Docker', DockerIcon, 'tag-c', 'cloud'),
        ],
    }),

    project({
        id: 'chapterlist',
        thumbnail:
            'https://res.cloudinary.com/dqbydfphk/image/upload/v1748974579/Portfolio/km8uqjtm5kwy3bbpjo0v.jpg',
        card: {
            eyebrow: {
                type: 'team',
                label: 'Team project',
                teamSize: 4,
            },
            title: 'ChapterList',
            description:
                'Book tracking app for managing reading lists, reviews, and recommendations.',
            solves: 'tracking books and sharing reviews',
            stats: {
                year: '2025',
                context: 'Team of 4',
                highlight: 'Collaborative team build',
            },
            badges: {
                featured: false,
                live: true,
            },
        },
        meta: {
            completedAt: '2025-05-06',
            developmentPeriod: 'April 29 2025 to May 6 2025',
            links: {
                live: 'https://reading.projects.christianvieuxdev.com',
                github: 'https://github.com/zackaryoconnor/Reading-Tracker-Front-End',
            },
        },
        tech: [
            tech('React', ReactIcon, 'tag-a', 'frontend'),
            tech('Django', DjangoIcon, 'tag-b', 'backend'),
            tech('Python', PythonIcon, 'tag-b', 'backend'),
            tech('PostgreSQL', PostgresSQLIcon, 'tag-b', 'database'),
            tech('AWS', AWSIcon, 'tag-c', 'cloud'),
        ],
    }),

    project({
        id: 'quotefolio',
        thumbnail:
            'https://res.cloudinary.com/dqbydfphk/image/upload/v1748975242/Portfolio/gkoneomahh2e89fwewhe.jpg',
        card: {
            eyebrow: {
                type: 'solo',
                label: 'Solo project',
                teamSize: null,
            },
            title: 'QuoteFolio',
            description:
                'Quote sharing platform for posting, discovering, and saving quotes.',
            solves: 'sharing and discovering quotes',
            stats: {
                year: '2025',
                context: 'Solo project',
                highlight: 'First full CRUD implementation',
            },
            badges: {
                featured: false,
                live: true,
            },
        },
        meta: {
            completedAt: '2025-04-17',
            developmentPeriod: 'April 11 2025 to April 17 2025',
            links: {
                live: 'https://quotes.projects.christianvieuxdev.com',
                github: 'https://github.com/zackaryoconnor/Famous-Quotes',
            },
        },
        tech: [
            tech('React', ReactIcon, 'tag-a', 'frontend'),
            tech('Node.js', NodejsIcon, 'tag-b', 'backend'),
            tech('Express', ExpressIcon, 'tag-b', 'backend'),
            tech('MongoDB', MongoDBIcon, 'tag-b', 'database'),
        ],
    }),

    project({
        id: 'recipes',
        thumbnail:
            'https://res.cloudinary.com/dqbydfphk/image/upload/v1748975732/Portfolio/iklyn9daqvpsurmamior.jpg',
        card: {
            eyebrow: {
                type: 'solo',
                label: 'Solo project',
                teamSize: null,
            },
            title: 'Recipes',
            description:
                'Recipe management app for sharing recipes, comments, and personal collections.',
            solves: 'organizing and sharing recipes',
            stats: {
                year: '2025',
                context: 'Solo project',
                highlight: 'Early full stack project',
            },
            badges: {
                featured: false,
                live: true,
            },
        },
        meta: {
            completedAt: '2025-04-02',
            developmentPeriod: 'March 27 2025 to April 2 2025',
            links: {
                live: 'https://recipes.projects.christianvieuxdev.com',
                github: 'https://github.com/christianvieux/GA_Project_2_Recipe',
            },
        },
        tech: [
            tech('Node.js', NodejsIcon, 'tag-b', 'backend'),
            tech('Express', ExpressIcon, 'tag-b', 'backend'),
            tech('MongoDB', MongoDBIcon, 'tag-b', 'database'),
            tech('HTML', HTMLIcon, 'tag-a', 'frontend'),
            tech('JavaScript', JSIcon, 'tag-a', 'frontend'),
            tech('Bootstrap', BootstrapIcon, 'tag-a', 'frontend'),
        ],
    }),
]

// sections/AboutSection.js
import { aboutContent } from '../data/aboutContent'
import ReactMarkdown from 'react-markdown'

const SkillsList = ({ skills }) => {
    return (
        <ul className="flex flex-wrap gap-2 leading-relaxed text-muted-foreground">
            {skills.map((skill, index) => (
                <li
                    key={`frontend-skill-${index}`}
                    className="flex items-center"
                >
                    <span className="mr-1">•</span>
                    <span>{skill}</span>
                </li>
            ))}
        </ul>
    )
}

const AboutSection = ({ className }) => {
    const { mainDescription, skills } = aboutContent

    return (
        <section id="about" className={`${className}`}>
            <div className="max-w-6xl px-4">
                <h2 className="mb-8 text-3xl font-bold text-foreground">
                    About Me
                </h2>
                <div className="rounded-lg bg-background">
                    <div className="mb-8 px-4 text-lg leading-relaxed text-foreground">
                        <ReactMarkdown>{mainDescription}</ReactMarkdown>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection

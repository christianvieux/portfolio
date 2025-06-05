// sections/AboutSection.js
import { aboutContent } from '../data/aboutContent';
import ReactMarkdown from "react-markdown";

const SkillsList = ({ skills }) => {
  return (
    <ul className="flex flex-wrap gap-2 text-muted-foreground leading-relaxed">
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
  );
};

const AboutSection = ({ className }) => {
  const { mainDescription, skills } = aboutContent;

  return (
    <section id="about" className={`${className}`}>
      <div className="px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-foreground">About Me</h2>
        <div className="bg-background rounded-lg">
          <div className="px-4 text-foreground text-lg leading-relaxed mb-8">
            <ReactMarkdown>{mainDescription}</ReactMarkdown>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
// sections/AboutSection.js
import { aboutContent } from '../data/aboutContent';

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
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-foreground">About Me</h2>
        <div className="bg-background rounded-lg shadow-sm p-8">
          <p className="text-secondary-foreground text-lg leading-relaxed mb-8">
          {mainDescription.map((segment, index) => (
              segment.highlight ? (
                <span key={index} className="font-semibold text-primary">
                  {segment.text}
                </span>
              ) : (
                <span key={index}>{segment.text}</span>
              )
            ))}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground text-xl mb-4">
                Frontend Development
              </h3>
              <SkillsList skills={skills.frontend}/>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground text-xl mb-4">
                Backend & Infrastructure
              </h3>
              <SkillsList skills={skills.backend}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
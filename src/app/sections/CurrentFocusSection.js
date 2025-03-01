// sections/CurrentFocusSection.js
import { focusContent } from '../data/focusContent';

const CurrentFocusSection = ({ className }) => {
  const { learning, interests } = focusContent;

  const ListItem = ({ text }) => (
    <li className="flex items-center text-secondary-foreground">
      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
      <span>{text}</span>
    </li>
  );

  return (
    <section id="focus" className={`${className}`}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-foreground">Current Focus</h2>
        <div className="bg-background rounded-lg shadow-sm p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-foreground text-xl mb-4">
                Learning & Growth
              </h3>
              <ul className="space-y-3">
                {learning.map((item, index) => (
                  <ListItem key={index} text={item} />
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-xl mb-4">
                Technical Interests
              </h3>
              <ul className="space-y-3">
                {interests.map((item, index) => (
                  <ListItem key={index} text={item} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentFocusSection;
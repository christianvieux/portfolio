// sections/HeroSection.js
import Image from "next/image";
import { heroContent } from "../data/heroContent";
import Markdown from 'react-markdown'

const HeroSection = ({ className }) => {
  const renderTagline = (content) => {
    return content.map((item, index) => (
      <span
        key={index}
        className={item.highlight ? "font-semibold text-primary" : ""}
      >
        {item.text}
      </span>
    ));
  };

  return (
    <section 
      className={`flex items-center justify-center ${className}`}
    >
      <div className="py-8 max-w-6xl mx-auto px-4">
        <div className="text-center space-y-8">
          <div className="mb-8">
            <div className="w-36 h-36 md:w-40 md:h-40 mx-auto relative rounded-full overflow-hidden border-2 border-primary/20 shadow-lg">
              <Image
                src={heroContent.image.src}
                alt={heroContent.image.alt}
                fill
                priority
                className="object-cover transition-transform"
                sizes="(max-width: 768px) 144px, 160px"
              />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
            {heroContent.title}
          </h1>

          <div className="text-lg md:text-xl text-foreground max-w-2xl mx-auto leading-relaxed">
            <Markdown>{heroContent.tagline}</Markdown>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
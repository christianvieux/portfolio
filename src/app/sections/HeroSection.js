// sections/HeroSection.js
import Image from "next/image";

const HeroSection = ({className}) => {
  return (
    <section className={`pt-32 bg-secondary ${className}`}>
      <div className="py-2 max-w-6xl mx-auto px-4">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6 text-foreground">
            Full Stack Web Developer
          </h1>

          <div className="mb-8">
            <div className="w-32 h-32 mx-auto relative rounded-full overflow-hidden border-2 border-primary/20">
              <Image
                src="https://res.cloudinary.com/dqbydfphk/image/upload/v1739083627/profile_fbibnp.jpg"
                alt="Christian Vieux"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 128px"
              />
            </div>
          </div>

          <p className="text-xl text-secondary-foreground mb-8 max-w-2xl mx-auto">
            Focused on crafting robust{" "}
            <span className="font-semibold text-primary">backend solutions</span>{" "}
            with
            <span className="font-semibold text-primary"> Node.js</span>,
            <span className="font-semibold text-primary"> SQL</span>, and
            <span className="font-semibold text-primary"> cloud technologies</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
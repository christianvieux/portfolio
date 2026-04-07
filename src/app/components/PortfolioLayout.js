// components/PortfolioLayout.js
import NavSection from "../sections/NavSection";
import IntroSection from "../sections/IntroSection";
import AboutSection from "../sections/AboutSection";
import ProjectsSection from "../sections/ProjectsSection";
import CurrentFocusSection from "../sections/CurrentFocusSection";
// import ContactSection from "../sections/ContactSection";
import GameDevSection from "../sections/GameDevSection";
import Footer from "./Footer";
import HeroSection from "../sections/HeroSection";
import Separator from "../components/Seperator";

export default function PortfolioLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background relative">
      <NavSection />
      <div id="sections" className="flex flex-col !mx-8 sm:!mx-10 md:!mx-10 lg:!mx-10 xl:!mx-auto max-w-6xl">
        {[
        HeroSection,
        IntroSection,
        ProjectsSection,
        GameDevSection,
        // AboutSection,
        // CurrentFocusSection,
        // ContactSection,
      ].map((Component, index) => (
        <>
          <Component key={index} className={``} />
          {/* {index < 6 && <Separator key={`sep-${index}`} className="" />} */}
        </>
      ))}
      </div>
      <Footer />
    </div>
  );
}

// TODO: need to add a contact me forum (when I have time)
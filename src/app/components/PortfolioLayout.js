// components/PortfolioLayout.js
import NavSection from "../sections/NavSection";
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import ProjectsSection from "../sections/ProjectsSection";
import CurrentFocusSection from "../sections/CurrentFocusSection";
import ContactSection from "../sections/ContactSection";
import GameDevSection from "../sections/GameDevSection";


export default function PortfolioLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background relative">
      <NavSection />
      {[
        HeroSection,
        ProjectsSection,
        GameDevSection,
        AboutSection,
        CurrentFocusSection,
        ContactSection,
      ].map((Component, index) => (
        <Component key={index} className={`bg-secondary py-14`} />
      ))}
    </div>
  );
}

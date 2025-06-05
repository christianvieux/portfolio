// components/PortfolioLayout.js
import NavSection from "../sections/NavSection";
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import ProjectsSection from "../sections/ProjectsSection";
import CurrentFocusSection from "../sections/CurrentFocusSection";
import ContactSection from "../sections/ContactSection";
import GameDevSection from "../sections/GameDevSection";
import Footer from "./Footer";


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
        <Component key={index} className={`py-14`} />
      ))}
      <Footer/>
    </div>
  );
}

// TODO: need to add a contact me forum (when I have time)
// sections/NavSection.js
import { Menu } from "lucide-react";

const NavSection = () => {
  return (
    <nav className="fixed top-0 w-full bg-secondary/80 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-foreground">
            Christian Vieux
          </span>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#projects"
              className="text-secondary-foreground hover:text-primary transition-colors"
            >
              Projects
            </a>

            <a
              href="#gamedev"
              className="text-secondary-foreground hover:text-primary transition-colors"
            >
              Game Dev
            </a>

            <a
              href="#about"
              className="text-secondary-foreground hover:text-primary transition-colors"
            >
              About
            </a>

            <a
              href="#focus"
              className="text-secondary-foreground hover:text-primary transition-colors"
            >
              Focus
            </a>

            <a
              href="#contact"
              className="text-secondary-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavSection;

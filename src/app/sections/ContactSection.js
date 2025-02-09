// sections/ContactSection.js
import { Github, Linkedin, Mail } from "lucide-react";

const ContactSection = ({className}) => {
  return (
    <section id="contact" className={`${className}`}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-foreground">Contact</h2>
        <div className="bg-background rounded-lg shadow-sm p-8">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
            <a
              href="https://github.com/christianvieux"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-secondary-foreground hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/christian-vieux-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-secondary-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:christianvieux.dev@gmail.com"
              className="flex items-center space-x-2 text-secondary-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-6 h-6" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
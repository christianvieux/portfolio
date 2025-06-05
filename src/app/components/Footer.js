import contactContent from "../data/contactContent";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-secondary py-6 border-t border-accent/20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-4 text-secondary-foreground">
        <div className="flex gap-6">
          <a 
            href={contactContent.gitHub} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            GitHub
          </a>
          <a 
            href={contactContent.linkedIn} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
        </div>
        <p className="text-sm text-secondary-foreground/80">
          © {currentYear} Christian Vieux. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
// sections/ContactSection.js
import { Github, Linkedin, Mail } from "lucide-react";
import { Snippet } from "@heroui/react";
import contactContent from "../data/contactContent";

const ContactSection = ({ className }) => {
  return (
    <section id="contact" className={`${className}`}>
      <div className="px-4 max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl font-bold mb-8 text-foreground">Contact</h2>
        {/* Contacts */}
        <div className="bg-background rounded-lg px-4">
          <div className="flex flex-wrap gap-4 space-x-5">
            {[
              {
                icon: Mail,
                href: `mailto:${contactContent.email}`,
                label: contactContent.email,
              },
              {
                icon: Linkedin,
                href: contactContent.linkedIn,
                label: contactContent.linkedIn,
              },
              {
                icon: Github,
                href: contactContent.gitHub,
                label: contactContent.gitHub,
              },
              
              
            ].map(({ icon: Icon, href, label }, index) => (
              <Snippet
                size="md"
                variant="shadow"
                symbol={<Icon className="w-6 h-6" />}
                classNames={{ base: "max-w-full", "copyButton": "w-[10%]", pre: "w-[90%] flex gap-2 items-end text-center" }}
                key={index}
                color="secondary"
              >
                <a
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={
                    href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="overflow-auto flex items-center space-x-2 text-secondary-foreground hover:text-primary transition-colors"
                >
                  {label}
                </a>
              </Snippet>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

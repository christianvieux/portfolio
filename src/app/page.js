// app/page.js
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

const PortfolioLayout = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Background Pattern */}
      <div className="fixed inset-0 bg-pattern" aria-hidden="true" />

      <div className="relative">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-secondary/80 backdrop-blur-sm shadow-sm z-50">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-foreground">
                Christian Vieux
              </span>
              <div className="space-x-8">
                <a
                  href="#about"
                  className="text-secondary-foreground hover:text-primary transition-colors"
                >
                  About
                </a>
                <a
                  href="#project"
                  className="text-secondary-foreground hover:text-primary transition-colors"
                >
                  Project
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

        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-secondary">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6 text-foreground">
                Full Stack Web Developer
              </h1>

              <div className="mb-8">
                <div className="w-32 h-32 mx-auto relative rounded-full overflow-hidden border-2 border-primary/20">
                  <Image
                    src="/images/profile.jpg"
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
                <span className="font-semibold text-primary">
                  backend solutions
                </span>{" "}
                with
                <span className="font-semibold text-primary"> Node.js</span>,
                <span className="font-semibold text-primary"> SQL</span>, and
                <span className="font-semibold text-primary">
                  {" "}
                  cloud technologies
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-foreground">
              About Me
            </h2>
            <div className="bg-secondary rounded-lg shadow-sm p-8">
              <p className="text-secondary-foreground text-lg leading-relaxed mb-8">
                Full stack developer with{" "}
                <span className="font-semibold text-primary">1.5 years</span> of
                self-taught experience through focused learning and project
                development. Completed comprehensive training in
                <span className="font-semibold text-primary">
                  {" "}
                  modern web technologies
                </span>{" "}
                and built a
                <span className="font-semibold text-primary">
                  {" "}
                  production-ready music streaming platform
                </span>
                . Looking to leverage my backend development skills in a
                challenging role while continuing to grow as a developer.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground text-xl mb-4">
                    Frontend Development
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    React • Next.js • Tailwind CSS • HTML/CSS • JavaScript
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground text-xl mb-4">
                    Backend & Infrastructure
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Node.js • SQL • Azure • WSL • Vercel • Render
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Section */}
        <section id="project" className="py-20 bg-secondary">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-foreground">
              Featured Project
            </h2>
            <div className="bg-background rounded-lg shadow-sm p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                TrackFusion - Music Streaming Platform
              </h3>
              <p className="text-secondary-foreground text-lg leading-relaxed mb-8">
                As a passionate music enthusiast who listens daily, I was
                inspired by platforms like Spotify and sound asset libraries to
                create a space where users can share any type of audio content.
                Built with
                <span className="font-semibold text-primary"> Next.js</span> and
                <span className="font-semibold text-primary"> Node.js</span>,
                deployed on
                <span className="font-semibold text-primary"> Vercel</span> (Frontend) and
                <span className="font-semibold text-primary"> Render</span> (Backend).
                TrackFusion allows users to upload, stream, and discover various
                audio content in a simple and intuitive interface.
              </p>
              {/* Key Features section */}
              <div>
                <h4 className="font-semibold text-foreground text-xl mb-4">
                  Key Features
                </h4>
                <ul className="text-secondary-foreground space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Simple user accounts to upload and manage audio content
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Audio streaming functionality with basic playback controls
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Personal library to organize uploaded content</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Mobile-friendly design for listening on any device
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Cloud storage for audio files using modern hosting
                      solutions
                    </span>
                  </li>
                </ul>
              </div>
              <div className="pt-6">
                  <a
                    href="https://track-fusion-frontend.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-primary hover:text-primary-hover font-semibold transition-colors"
                  >
                    <span>View Live Project</span>
                    <span className="text-xl">→</span>
                  </a>
                </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Contact</h2>
            <div className="bg-secondary rounded-lg shadow-sm p-8">
              <div className="flex justify-center space-x-12">
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
      </div>
    </div>
  );
};

export default PortfolioLayout;

//test
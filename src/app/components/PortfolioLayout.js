// components/PortfolioLayout.js
import NavSection from '../sections/NavSection'
import IntroSection from '../sections/IntroSection'
import AboutSection from '../sections/AboutSection'
import ProjectsSection from '../sections/ProjectsSection'
import CurrentFocusSection from '../sections/CurrentFocusSection'
// import ContactSection from "../sections/ContactSection";
import GameDevSection from '../sections/GameDevSection'
import Footer from './Footer'
import HeroSection from '../sections/HeroSection'
import Separator from '../components/Seperator'

export default function PortfolioLayout() {
    return (
        <div className="relative flex min-h-screen flex-col bg-background">
            <NavSection />
            <div
                id="sections"
                className="!mx-8 flex max-w-6xl flex-col sm:!mx-10 md:!mx-10 lg:!mx-10 xl:!mx-auto"
            >
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
    )
}

// TODO: need to add a contact me forum (when I have time)

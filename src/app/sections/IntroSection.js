// sections/IntroSection.js
import Separator from '../components/Seperator'
import IntroSummary from '../components/IntroSummary'
import TechStack from '../components/TechStack'
import contactContent from '../data/contactContent'

export default function IntroSection({ className }) {

    return (
        <section id="about" className={`${className}`}>
            <div className="relative flex max-w-6xl flex-col gap-10 md:gap-0 py-8 md:flex-row md:justify-between">
                {/* Intro + Links */}
                <div
                    id="intro_n_links"
                    className="flex flex-col gap-2 md:max-w-[50%]"
                >
                    <IntroSummary className={``} />

                    <div id="links" className="flex h-10 gap-4 font-semibold">
                        {contactContent.map((contact, index) => (
                            <a
                                key={index}
                                href={contact.key === "Email" ? `mailto:${contact.value}` : contact.value}
                                className="text-md block cursor-pointer text-primary underline underline-offset-4"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {contact.key}
                            </a>
                        ))}
                    </div>
                </div>
                {/*  */}
                <Separator
                    orientation="vertical"
                    variant="tertiary"
                    className="mx-10 mt-8 hidden !h-60 w-0.25 md:block"
                />
                {/*  */}
                <TechStack />
            </div>
        </section>
    )
}

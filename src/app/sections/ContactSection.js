// sections/ContactSection.js
import { Github, Linkedin, Mail } from 'lucide-react'
import { Snippet } from '@heroui/react'
import contactContent from '../data/contactContent'

const ContactSection = ({ className }) => {
    return (
        <section id="contact" className={`${className}`}>
            <div className="mx-auto max-w-6xl px-4">
                {/* Title */}
                <h2 className="mb-8 text-3xl font-bold text-foreground">
                    Contact
                </h2>
                {/* Contacts */}
                <div className="rounded-lg bg-background px-4">
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
                                symbol={<Icon className="h-6 w-6" />}
                                classNames={{
                                    base: 'max-w-full',
                                    copyButton: 'w-[10%]',
                                    pre: 'w-[90%] flex gap-2 items-end text-center',
                                }}
                                key={index}
                                color="secondary"
                            >
                                <a
                                    href={href}
                                    target={
                                        href.startsWith('mailto:')
                                            ? undefined
                                            : '_blank'
                                    }
                                    rel={
                                        href.startsWith('mailto:')
                                            ? undefined
                                            : 'noopener noreferrer'
                                    }
                                    className="flex items-center space-x-2 overflow-auto text-secondary-foreground transition-colors hover:text-primary"
                                >
                                    {label}
                                </a>
                            </Snippet>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection

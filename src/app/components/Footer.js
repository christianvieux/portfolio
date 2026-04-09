import contactContent from '../data/contactContent'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="w-full border-t border-accent/20 bg-secondary py-6">
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 text-secondary-foreground">
                <div id="contact" 
                className="flex gap-6 px-4 py-2 rounded-md transition-all duration-300 
               target:bg-primary/10 
               target:ring-2 
               target:ring-primary/40"
                >
                    {contactContent.map((item) => {
                        const isEmail = item.key === 'Email'

                        return (
                            <a
                                key={item.key}
                                href={
                                    isEmail
                                        ? `mailto:${item.value}`
                                        : item.value
                                }
                                target={isEmail ? undefined : '_blank'}
                                rel={
                                    isEmail ? undefined : 'noopener noreferrer'
                                }
                                className="transition-colors hover:text-primary"
                            >
                                {item.key}
                            </a>
                        )
                    })}
                </div>
                <p className="text-sm text-secondary-foreground/80">
                    © {currentYear} Christian Vieux. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

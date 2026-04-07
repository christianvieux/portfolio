import contactContent from '../data/contactContent'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="w-full border-t border-accent/20 bg-secondary py-6">
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 text-secondary-foreground">
                <div className="flex gap-6">
                    <a
                        href={contactContent.gitHub}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-primary"
                    >
                        GitHub
                    </a>
                    <a
                        href={contactContent.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-primary"
                    >
                        LinkedIn
                    </a>
                </div>
                <p className="text-sm text-secondary-foreground/80">
                    © {currentYear} Christian Vieux. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

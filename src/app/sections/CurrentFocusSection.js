// sections/CurrentFocusSection.js
import { focusContent } from '../data/focusContent'

const CurrentFocusSection = ({ className }) => {
    const { learning, interests } = focusContent

    const ListItem = ({ text }) => (
        <li className="flex items-center text-foreground">
            <span className="mr-3 h-2 w-2 rounded-full bg-primary"></span>
            <span>{text}</span>
        </li>
    )

    return (
        <section id="focus" className={`${className}`}>
            <div className="max-w-6xl px-4">
                <h2 className="mb-8 text-3xl font-bold text-foreground">
                    Current Focus
                </h2>
                <div className="rounded-lg bg-background px-4">
                    <div className="grid gap-8 md:grid-cols-2">
                        <div>
                            <h3 className="mb-4 text-xl font-semibold text-foreground">
                                Learning & Growth
                            </h3>
                            <ul className="space-y-3">
                                {learning.map((item, index) => (
                                    <ListItem key={index} text={item} />
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-4 text-xl font-semibold text-foreground">
                                Technical Interests
                            </h3>
                            <ul className="space-y-3">
                                {interests.map((item, index) => (
                                    <ListItem key={index} text={item} />
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CurrentFocusSection

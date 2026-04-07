// components/CurrentFocusSection.js
const CurrentFocusSection = () => {
    return (
        <section className="bg-background py-20">
            <div className="mx-auto max-w-4xl px-4">
                <h2 className="mb-8 text-3xl font-bold text-foreground">
                    Current Focus
                </h2>
                <div className="rounded-lg bg-secondary p-8 shadow-sm">
                    <div className="grid gap-8 md:grid-cols-2">
                        <div>
                            <h3 className="mb-4 text-xl font-semibold text-foreground">
                                Learning & Growth
                            </h3>
                            <ul className="space-y-3 text-secondary-foreground">
                                <li className="flex items-center">
                                    <span className="mr-3 h-2 w-2 rounded-full bg-primary"></span>
                                    <span>
                                        AWS Cloud Certification (In Progress)
                                    </span>
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-3 h-2 w-2 rounded-full bg-primary"></span>
                                    <span>Daily LeetCode Practice</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

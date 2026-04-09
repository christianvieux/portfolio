// components/IntroSummary.js

import Markdown from 'react-markdown'
import { aboutContent } from '../data/aboutContent'

export default function IntroSummary({ className }) {
    return (
        <div id="description" className={`${className}`}>
            <h2 className="mb-5 text-xl font-bold tracking-wide text-foreground uppercase">
                About Me
            </h2>
            <Markdown
                components={{
                    p: ({ node, children, ...props }) => (
                        <p
                            className="mb-4 leading-relaxed text-foreground"
                            {...props}
                        >
                            {children}
                        </p>
                    ),
                }}
            >
                {aboutContent.mainDescription}
            </Markdown>
        </div>
    )
}

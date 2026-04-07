// sections/IntroSection.js
import Image from 'next/image'
import { heroContent } from '../data/heroContent'
import Markdown from 'react-markdown'
import { Chip } from '@heroui/react'
import Separator from '../components/Seperator'
import IntroSummary from '../components/IntroSummary'
import TechStack from '../components/TechStack'

export default function IntroSection({ className }) {
    const renderTagline = (content) => {
        return content.map((item, index) => (
            <span
                key={index}
                className={item.highlight ? 'font-semibold text-primary' : ''}
            >
                {item.text}
            </span>
        ))
    }

    return (
        <section id="intro-section" className={`${className}`}>
            <div className="flex max-w-6xl flex-col md:flex-row md:justify-between">
                <IntroSummary className={`py-8 md:max-w-[50%]`} />
                {/*  */}
                <Separator
                    orientation="vertical"
                    variant="tertiary"
                    className="!mx-5 my-10 hidden !w-0.5 md:block"
                />
                {/*  */}
                <TechStack className="py-8" />
            </div>
        </section>
    )
}

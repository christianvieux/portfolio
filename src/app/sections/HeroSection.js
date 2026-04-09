// sections/HeroSection.js

import Image from 'next/image'
import { heroContent } from '../data/heroContent'
import Chip from '../components/Chip'

export default function HeroSection({ className }) {
    return (
        <section id="hero-section" className={`${className}`}>
            <div className="flex items-center gap-6 py-8">
                <div id="pfp">
                    <div className="relative mx-auto h-36 w-36 overflow-hidden rounded-full border-2 border-primary/20 shadow-lg md:h-40 md:w-40">
                        <Image
                            src={heroContent.image.src}
                            alt={heroContent.image.alt}
                            fill
                            priority
                            className="object-cover transition-transform"
                            sizes="(max-width: 768px) 144px, 160px"
                        />
                    </div>
                </div>
                {/*  */}
                <div id="name-n-title" className="flex flex-col gap-2">
                    <h1
                        id="name"
                        className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
                    >
                        {heroContent.name}
                    </h1>
                    <h2
                        id="title"
                        className="text-2xl font-medium tracking-tight text-foreground/70 md:text-3xl lg:text-4xl"
                    >
                        {heroContent.title}
                    </h2>
                    <Chip
                        size="lg"
                        dot
                        label={'Open to work'}
                        id="attribute-pills"
                        variant="status-live"
                        className="w-max rounded-full border-2 bg-transparent px-3"
                    ></Chip>
                </div>
            </div>
        </section>
    )
}

// TODO: The scaling on this section only works up to the 'mobile' breakpoint. Needs to support smaller widths.

// components/TechStack.js
import Chip from '../components/Chip'
import { techStackData } from '../data/techStack'

function TechCategory({ title, variant, items = [] }) {
    return (
        <div className="space-y-2.5">
            <h3 className="text-xs font-bold tracking-wide text-primary uppercase">
                {title}
            </h3>
            <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                    <Chip
                        key={item.label}
                        label={item.label}
                        icon={item.icon}
                        variant={variant}
                    />
                ))}
            </div>
        </div>
    )
}

export default function TechStack({
    title = 'Tech Stack',
    categories = techStackData,
    className = '',
}) {
    return (
        <aside className={`space-y-6 ${className}`}>
            <h2 className="text-xl font-bold tracking-wide text-foreground uppercase">
                {title}
            </h2>
            <div className="space-y-6">
                {categories.map((category) => (
                    <TechCategory
                        key={category.title}
                        title={category.title}
                        variant={category.variant}
                        items={category.items}
                    />
                ))}
            </div>
        </aside>
    )
}

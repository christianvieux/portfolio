import { Separator as HeroSeparator } from '@heroui/react'

export default function Separator({
    className,
    orientation = 'horizontal',
    ...props
}) {
    return (
        <>
            <HeroSeparator
                orientation={orientation}
                variant="tertiary"
                className={`bg-muted-foreground/30 ${orientation === 'horizontal' ? 'block h-px w-full' : 'block h-full w-px'} ${className}`}
                {...props}
            />
        </>
    )
}

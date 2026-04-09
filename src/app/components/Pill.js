// Pill component

import { Chip } from '@heroui/react'
import React from 'react'

export default function Pill({
    children,
    className = '',
    variant = 'flat',
    ...props
}) {
    return (
        <Chip
            className={`rounded-full bg-accent px-3 py-1.5 text-sm font-medium text-accent-foreground ${className}`}
            variant={variant}
            {...props}
        >
            {children}
        </Chip>
    )
}

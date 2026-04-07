// Pill component

import { Chip } from '@heroui/react';
import React from 'react';

export default function Pill({ children, className = "", variant = "flat", ...props }) {
  return (
    <Chip
     className={`px-3 py-1.5 bg-accent text-accent-foreground rounded-full text-sm font-medium ${className}`}
     variant={variant}
     {...props}
    >
      {children}
    </Chip>
  );
}
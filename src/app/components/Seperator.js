import { Separator as HeroSeparator } from "@heroui/react";

export default function Separator({ className, orientation = "horizontal", ...props }) {

    return <>
        <HeroSeparator variant="tertiary" className={`bg-muted-foreground/25 ${orientation === "horizontal" ? "h-[2px]" : "w-[2px]"} ${className}`} {...props} />
    </>;
};
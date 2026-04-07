// components/Chip.js
import { Chip as HeroChip } from "@heroui/react";

const VARIANT_STYLES = {
  "tag-a": {
    bg: "bg-primary/10",
    border: "border-primary/30",
    text: "text-primary",
  },
  "tag-b": {
    bg: "bg-tag-b-bg",
    border: "border-tag-b-border",
    text: "text-tag-b",
  },
  "tag-c": {
    bg: "bg-tag-c-bg",
    border: "border-tag-c-border",
    text: "text-tag-c",
  },
  "status-live": {
    bg: "bg-success/10",
    border: "border-success/30",
    text: "text-success",
  },
  "status-featured": {
    bg: "bg-primary/10",
    border: "border-primary/30",
    text: "text-primary",
  },
  "link-primary": {
    bg: "bg-primary/15",
    border: "border-primary/40",
    text: "text-primary",
  },
  "link-secondary": {
    bg: "bg-transparent",
    border: "border-primary/20",
    text: "text-muted-foreground",
  },
  default: {
    bg: "bg-primary/10",
    border: "border-primary/30",
    text: "text-primary",
  },
};

export default function Chip({ label, icon: Icon, variant = "default", dot = false, rawIcon = false, className = "", ...props }) {
  const { bg, border, text } = VARIANT_STYLES[variant] ?? VARIANT_STYLES.default;

  return (
    <HeroChip
      variant="bordered"
      className={`rounded-md border-2 font-medium shadow-none ${bg} ${border} ${text} ${className}`}
      {...props}
    >
      <span className="flex items-center gap-1.5">
        {dot && <span className="size-1.5 rounded-full bg-current inline-block shrink-0" />}
        {Icon && (
          rawIcon
            ? <Icon aria-hidden="true" className="size-3 shrink-0" />
            : <span className="inline-flex size-[15px] shrink-0 items-center justify-center rounded-[3px] bg-white p-px">
                <Icon aria-hidden="true" className="size-3" />
              </span>
        )}
        <span>{label}</span>
      </span>
    </HeroChip>
  );
}
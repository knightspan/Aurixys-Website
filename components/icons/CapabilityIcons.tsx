import { cn } from "@/lib/utils";

interface Props {
  name: "detect" | "navigate" | "diagnose" | "disclose";
  className?: string;
}

const COMMON = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function CapabilityIcon({ name, className }: Props) {
  const cls = cn("inline-block", className);

  if (name === "detect") {
    return (
      <svg viewBox="0 0 48 48" className={cls} {...COMMON} aria-hidden>
        <circle cx="24" cy="24" r="2" />
        <circle cx="24" cy="24" r="8" />
        <circle cx="24" cy="24" r="15" />
        <circle cx="24" cy="24" r="22" opacity="0.5" />
        <path d="M24 2 L24 8 M24 40 L24 46 M2 24 L8 24 M40 24 L46 24" />
        <path d="M9 9 L13 13 M35 35 L39 39 M39 9 L35 13 M13 35 L9 39" opacity="0.5" />
      </svg>
    );
  }

  if (name === "navigate") {
    return (
      <svg viewBox="0 0 48 48" className={cls} {...COMMON} aria-hidden>
        <polygon points="24,4 28,22 24,18 20,22" fill="currentColor" />
        <circle cx="24" cy="24" r="18" />
        <circle cx="24" cy="24" r="2" fill="currentColor" stroke="none" />
        <path d="M24 8 L24 14 M24 34 L24 40 M8 24 L14 24 M34 24 L40 24" />
        <text x="24" y="11" textAnchor="middle" fontSize="6" fill="currentColor" stroke="none" fontFamily="monospace">N</text>
      </svg>
    );
  }

  if (name === "diagnose") {
    return (
      <svg viewBox="0 0 48 48" className={cls} {...COMMON} aria-hidden>
        <path d="M4 14 Q12 10, 24 14 T44 14" />
        <path d="M4 22 Q12 18, 24 22 T44 22" opacity="0.6" />
        <line x1="24" y1="14" x2="24" y2="38" />
        <rect x="20" y="38" width="8" height="6" />
        <line x1="22" y1="26" x2="26" y2="26" />
        <line x1="22" y1="30" x2="26" y2="30" />
        <line x1="22" y1="34" x2="26" y2="34" />
      </svg>
    );
  }

  // disclose
  return (
    <svg viewBox="0 0 48 48" className={cls} {...COMMON} aria-hidden>
      <rect x="8" y="6" width="32" height="36" />
      <line x1="14" y1="14" x2="34" y2="14" />
      <line x1="14" y1="20" x2="34" y2="20" />
      <line x1="14" y1="26" x2="28" y2="26" />
      <line x1="14" y1="32" x2="30" y2="32" />
      <circle cx="36" cy="36" r="6" fill="var(--color-bg)" />
      <path d="M32 36 L35 39 L40 33" />
    </svg>
  );
}

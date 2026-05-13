import { cn } from "@/lib/utils";

interface AssetPlaceholderProps {
  path: string;
  className?: string;
  ratio?: string;
  note?: string;
}

export function AssetPlaceholder({ path, className, ratio = "aspect-[16/9]", note }: AssetPlaceholderProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden border border-rule bg-bg-elevated",
        ratio,
        className
      )}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent 0 18px, rgba(255,255,255,0.025) 18px 19px)",
        }}
      />
      <div className="relative flex h-full w-full flex-col items-start justify-end gap-1 p-4">
        <span className="text-mono text-ink-mute">[ ASSET: {path} ]</span>
        {note ? <span className="text-mono text-ink-mute/70">{note}</span> : null}
      </div>
    </div>
  );
}

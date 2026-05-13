import { Battery, ShieldCheck, Boxes, Activity, Flag, FileCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const ICONS = [Battery, ShieldCheck, Boxes, Activity, Flag, FileCheck] as const;

export function FeatureIcon({ index, className }: { index: number; className?: string }) {
  const Icon = ICONS[index % ICONS.length];
  return <Icon className={cn("stroke-[1.2]", className)} strokeWidth={1.2} aria-hidden />;
}

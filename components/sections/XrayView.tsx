"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/common/Reveal";
import { JP_XRAY_PINS, JP_TABS, type XrayPin } from "@/lib/data/jal-prahari";
import { cn } from "@/lib/utils";

export function XrayView() {
  const [active, setActive] = useState("base");
  const [hover, setHover] = useState<string | null>(null);

  return (
    <Reveal>
      <div>
        <div className="mb-6 flex items-end justify-between gap-6">
          <div>
            <div className="text-mono mb-2 text-ink-mute">{"// EXPLODED VIEW"}</div>
            <h3 className="font-display text-d-md uppercase tracking-[-0.02em] text-ink">
              Inside Jal Prahari.
            </h3>
          </div>
          <span className="text-mono hidden text-ink-mute md:inline">Hover pins to inspect</span>
        </div>

        <div className="relative border border-rule bg-bg-elevated" style={{ height: "min(720px, 75vw)" }}>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(70% 50% at 50% 60%, rgba(0,212,255,0.08), transparent 70%), repeating-linear-gradient(0deg, transparent 0 32px, rgba(255,255,255,0.025) 32px 33px), repeating-linear-gradient(90deg, transparent 0 32px, rgba(255,255,255,0.025) 32px 33px)",
            }}
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-10 text-center">
            <span className="text-mono text-ink-mute/60">
              [ ASSET: jal-prahari/xray-render-001.png · exploded cutaway view ]
            </span>
          </div>

          {JP_XRAY_PINS.map((p) => (
            <Pin key={p.id} pin={p} active={hover === p.id} setHover={setHover} />
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-rule pt-6">
          {JP_TABS.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => tab.active && setActive(tab.key)}
              disabled={!tab.active}
              className={cn(
                "text-mono border px-4 py-2 transition-colors",
                active === tab.key
                  ? "border-accent text-accent"
                  : tab.active
                  ? "border-rule text-ink-dim hover:border-ink hover:text-ink"
                  : "cursor-not-allowed border-rule text-ink-mute opacity-60"
              )}
              title={tab.active ? undefined : "Configuration coming soon"}
            >
              {tab.label}
              {!tab.active ? <span className="ml-2 opacity-60">· soon</span> : null}
            </button>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

function Pin({
  pin,
  active,
  setHover,
}: {
  pin: XrayPin;
  active: boolean;
  setHover: (id: string | null) => void;
}) {
  return (
    <div
      className="absolute"
      style={{ left: `${pin.x}%`, top: `${pin.y}%`, transform: "translate(-50%, -50%)" }}
      onMouseEnter={() => setHover(pin.id)}
      onMouseLeave={() => setHover(null)}
      onFocus={() => setHover(pin.id)}
      onBlur={() => setHover(null)}
    >
      <button
        type="button"
        aria-label={pin.label}
        className="relative flex h-6 w-6 items-center justify-center"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-accent/40 opacity-70" />
        <span className="relative block h-2 w-2 rounded-full bg-accent" />
        <span className="absolute left-1/2 top-1/2 h-px w-6 -translate-x-1/2 -translate-y-1/2 bg-accent/60" />
        <span className="absolute left-1/2 top-1/2 h-6 w-px -translate-x-1/2 -translate-y-1/2 bg-accent/60" />
      </button>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.18 }}
            className="absolute left-8 top-0 w-56 border border-rule bg-bg-elevated p-3"
          >
            <div className="text-mono mb-1 text-accent">{pin.id.toUpperCase()}</div>
            <div className="font-display text-sm uppercase tracking-[0.04em] text-ink">{pin.label}</div>
            <div className="mt-1 text-xs text-ink-dim">{pin.note}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

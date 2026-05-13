"use client";

import { motion } from "framer-motion";
import { FadingVideo } from "@/components/common/FadingVideo";
import { MaterialIcon } from "@/components/icons/MaterialIcons";
import { CAPABILITIES, type Capability } from "@/lib/data/capabilities";

const CAPS_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_094631_d30ab262-45ee-4b7d-99f3-5d5848c8ef13.mp4";

const ease = [0.16, 1, 0.3, 1];

export function Capabilities() {
  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-heading"
      className="relative min-h-screen w-full overflow-hidden bg-black"
    >
      <FadingVideo
        src={CAPS_VIDEO}
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />

      <div className="relative z-10 flex min-h-screen flex-col px-8 pb-10 pt-24 md:px-16 lg:px-20">
        <header className="mb-auto">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease }}
            className="font-body mb-6 text-sm text-white/80"
          >
            {"// Capabilities"}
          </motion.p>
          <motion.h2
            id="capabilities-heading"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            className="font-heading text-6xl italic leading-[0.9] tracking-[-3px] text-white md:text-7xl lg:text-[6rem]"
          >
            River-grade
            <br />
            intelligence.
          </motion.h2>
        </header>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {CAPABILITIES.map((cap, i) => (
            <CapabilityCard key={cap.key} cap={cap} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CapabilityCard({ cap, index }: { cap: Capability; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease, delay: 0.1 + index * 0.08 }}
      className="liquid-glass flex min-h-[360px] flex-col rounded-[1.25rem] p-6"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="liquid-glass flex h-11 w-11 items-center justify-center rounded-[0.75rem]">
          <MaterialIcon name={cap.icon} className="h-6 w-6 text-white" />
        </div>
        <div className="flex max-w-[70%] flex-wrap justify-end gap-1.5">
          {cap.tags.map((t) => (
            <span
              key={t}
              className="liquid-glass font-body whitespace-nowrap rounded-full px-3 py-1 text-[11px] text-white/90"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="flex-1" />

      <div className="mt-6">
        <h3 className="font-heading text-3xl italic leading-none tracking-[-1px] text-white md:text-4xl">
          {cap.title}
        </h3>
        <p className="font-body mt-3 max-w-[32ch] text-sm font-light leading-snug text-white/90">
          {cap.copy}
        </p>
      </div>
    </motion.article>
  );
}

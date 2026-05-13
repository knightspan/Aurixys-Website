"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduced = useReducedMotion();
  const [hasVideo, setHasVideo] = useState(false);

  useEffect(() => {
    if (reduced) return;
    fetch("/assets/hero/jal-prahari-water.mp4", { method: "HEAD" })
      .then((r) => {
        if (r.ok && r.headers.get("content-type")?.startsWith("video")) {
          setHasVideo(true);
        }
      })
      .catch(() => setHasVideo(false));
  }, [reduced]);

  useEffect(() => {
    if (hasVideo && videoRef.current && !reduced) {
      videoRef.current.play().catch(() => {});
    }
  }, [hasVideo, reduced]);

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-bg"
    >
      <div className="absolute inset-0 -z-10">
        {hasVideo ? (
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            preload="metadata"
            poster="/assets/hero/jal-prahari-water-poster.jpg"
            className="h-full w-full object-cover"
            style={{ filter: "saturate(0.6) contrast(1.05)" }}
          >
            <source src="/assets/hero/jal-prahari-water.mp4" type="video/mp4" />
          </video>
        ) : (
          <div className="relative h-full w-full">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(80% 60% at 70% 40%, rgba(0,212,255,0.06), transparent 70%), repeating-linear-gradient(45deg, transparent 0 24px, rgba(255,255,255,0.018) 24px 25px)",
              }}
            />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
          </div>
        )}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col px-6 pb-24 pt-32 lg:px-10 lg:pt-40">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-mono ml-auto hidden gap-8 self-end text-right text-ink-mute md:flex"
        >
          <span>SYS / AURIXYS · TRL-6 · ACTIVE</span>
          <span>LOC / NASHIK, IN</span>
          <span>GRANT / DoWR · IN PROCESS</span>
        </motion.div>

        <div className="mt-auto max-w-[1100px]">
          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-display font-display text-[clamp(48px,9.5vw,128px)] font-700 leading-[0.92]"
          >
            <span className="block text-ink">AUTONOMOUS RIVER</span>
            <span className="block text-ink">INTELLIGENCE.</span>
            <span className="block text-accent">BUILT IN INDIA.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 max-w-[540px] text-[18px] leading-relaxed text-ink-dim"
          >
            Field-validated on the Godavari and Ganga. National Champion of the Jal Shakti Hackathon 2025,
            Ministry of Jal Shakti, Government of India.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="/products/jal-prahari"
              className="text-mono group inline-flex items-center justify-between gap-4 border border-accent px-6 py-4 text-accent transition-colors hover:bg-accent hover:text-bg"
            >
              <span>Explore Jal Prahari</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/#missions"
              className="text-mono group inline-flex items-center justify-between gap-4 border border-rule bg-bg-elevated/30 px-6 py-4 text-ink transition-colors hover:border-ink hover:bg-bg-elevated"
            >
              <span>Watch Field Footage</span>
              <Play className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 border-t border-rule">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 lg:px-10">
          <span className="text-mono text-ink-mute">Scroll</span>
          <span className="block h-4 w-px animate-pulse bg-ink-dim" />
        </div>
      </div>
    </section>
  );
}

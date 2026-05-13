"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import { FadingVideo } from "@/components/common/FadingVideo";
import { BlurText } from "@/components/common/BlurText";
import { MaterialIcon } from "@/components/icons/MaterialIcons";

const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4";

const PARTNERS = ["Jal Shakti", "NIH Roorkee", "DoWR", "Hindalco", "Veolia"];

const ease = [0.16, 1, 0.3, 1];
const baseInitial = { filter: "blur(10px)", opacity: 0, y: 20 };
const baseAnimate = { filter: "blur(0px)", opacity: 1, y: 0 };

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      <FadingVideo
        src={HERO_VIDEO}
        className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top z-0"
        style={{ width: "120%", height: "120%" }}
      />

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex flex-1 flex-col items-center justify-center px-4 pt-24 text-center">
          <motion.div
            initial={baseInitial}
            animate={baseAnimate}
            transition={{ duration: 0.7, ease, delay: 0.4 }}
          >
            <div className="liquid-glass inline-flex items-center gap-2 rounded-full py-1 pl-1 pr-3">
              <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-black">
                Live
              </span>
              <span className="font-body text-sm text-white/90">
                National Champion · Jal Shakti Hackathon 2025
              </span>
            </div>
          </motion.div>

          <BlurText
            text="Autonomous river intelligence built in India"
            as="h1"
            className="font-heading mt-6 max-w-3xl text-6xl italic leading-[0.8] tracking-[-4px] text-white md:text-7xl lg:text-[5.5rem]"
          />

          <motion.p
            initial={baseInitial}
            animate={baseAnimate}
            transition={{ duration: 0.7, ease, delay: 0.8 }}
            className="font-body mt-4 max-w-2xl text-sm font-light leading-tight text-white md:text-base"
          >
            Field-validated on the Godavari and Ganga. Solar-hybrid autonomous vessels and audit-grade
            telemetry bring continuous river intelligence within reach &mdash; sovereign and extraordinary.
          </motion.p>

          <motion.div
            initial={baseInitial}
            animate={baseAnimate}
            transition={{ duration: 0.7, ease, delay: 1.1 }}
            className="mt-6 flex items-center gap-6"
          >
            <Link
              href="/products/jal-prahari"
              className="liquid-glass-strong inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white"
            >
              Explore Jal Prahari
              <ArrowUpRight className="h-5 w-5" />
            </Link>
            <a
              href="#missions"
              className="font-body inline-flex items-center gap-2 text-sm font-medium text-white"
            >
              View Field Footage
              <Play className="h-4 w-4" fill="currentColor" />
            </a>
          </motion.div>

          <motion.div
            initial={baseInitial}
            animate={baseAnimate}
            transition={{ duration: 0.7, ease, delay: 1.3 }}
            className="mt-8 flex items-stretch gap-4"
          >
            <StatCard icon="clock" value="34.5 Min" label="Median continuous deployment per ghat" />
            <StatCard icon="globe" value="2.8B+" label="Indians downstream of the basins we monitor" />
          </motion.div>
        </div>

        <motion.div
          initial={baseInitial}
          animate={baseAnimate}
          transition={{ duration: 0.7, ease, delay: 1.4 }}
          className="flex flex-col items-center gap-4 pb-8"
        >
          <span className="liquid-glass font-body inline-flex rounded-full px-3.5 py-1 text-xs font-medium text-white">
            Built with government. Building with industry.
          </span>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
            {PARTNERS.map((name) => (
              <span
                key={name}
                className="font-heading text-2xl italic tracking-tight text-white md:text-3xl"
              >
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatCard({ icon, value, label }: { icon: "clock" | "globe"; value: string; label: string }) {
  return (
    <div className="liquid-glass w-[220px] rounded-[1.25rem] p-5">
      <MaterialIcon name={icon} className="h-7 w-7 text-white" />
      <div className="font-heading mt-2 text-4xl italic leading-none tracking-[-1px] text-white">
        {value}
      </div>
      <div className="font-body mt-2 text-xs font-light text-white">{label}</div>
    </div>
  );
}


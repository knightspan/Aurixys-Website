"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface BlurTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "p" | "div";
  stepDuration?: number;
  staggerMs?: number;
}

export function BlurText({
  text,
  className,
  as = "p",
  stepDuration = 0.35,
  staggerMs = 100,
}: BlurTextProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);
  const reduced = useReducedMotion();
  const words = text.split(/\s+/).filter(Boolean);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduced) {
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [reduced]);

  const Tag = as as React.ElementType;

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        rowGap: "0.1em",
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          initial={
            reduced ? { opacity: 1 } : { filter: "blur(10px)", opacity: 0, y: 50 }
          }
          animate={
            inView
              ? reduced
                ? { opacity: 1 }
                : {
                    filter: ["blur(10px)", "blur(5px)", "blur(0px)"],
                    opacity: [0, 0.5, 1],
                    y: [50, -5, 0],
                  }
              : undefined
          }
          transition={
            reduced
              ? { duration: 0 }
              : {
                  duration: stepDuration * 2,
                  times: [0, 0.5, 1],
                  ease: "easeOut",
                  delay: (i * staggerMs) / 1000,
                }
          }
          style={{ display: "inline-block", marginRight: "0.28em" }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
}

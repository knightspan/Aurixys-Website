"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Jal Prahari", href: "/products/jal-prahari" },
  { label: "Missions", href: "/#missions" },
  { label: "Recognition", href: "/#recognition" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav className="fixed left-0 right-0 top-4 z-50 flex items-center justify-between px-6 lg:px-16">
        <Link
          href="/"
          aria-label="Aurixys home"
          className="liquid-glass flex h-12 w-12 items-center justify-center rounded-full"
        >
          <span className="font-heading text-2xl italic leading-none text-white">a</span>
        </Link>

        <div className="liquid-glass hidden items-center gap-1 rounded-full px-1.5 py-1.5 lg:flex">
          {LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="font-body rounded-full px-3 py-2 text-sm font-medium text-white/90 hover:text-white"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="font-body ml-1 inline-flex items-center gap-1 whitespace-nowrap rounded-full bg-white px-3 py-2 text-sm font-medium text-black"
          >
            Take Contact
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="liquid-glass flex h-12 w-12 items-center justify-center rounded-full text-white lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
        <div className="hidden h-12 w-12 lg:block" aria-hidden />
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex flex-col bg-black/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex items-center justify-between px-6 py-4">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="liquid-glass flex h-12 w-12 items-center justify-center rounded-full"
              >
                <span className="font-heading text-2xl italic leading-none text-white">a</span>
              </Link>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="liquid-glass flex h-12 w-12 items-center justify-center rounded-full text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex flex-1 flex-col items-center justify-center gap-6 px-6">
              {LINKS.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-heading text-5xl italic text-white"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="font-body mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-medium text-black"
              >
                Take Contact
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

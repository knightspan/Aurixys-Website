"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { AnimatePresence, motion } from "framer-motion";
import { NAV } from "@/lib/data/nav";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 h-16 transition-colors duration-300",
          scrolled
            ? "border-b border-rule bg-bg/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-6 lg:px-10">
          <Link
            href="/"
            aria-label="Aurixys home"
            className="font-display text-[20px] font-700 tracking-[0.12em] text-ink"
          >
            AURIXYS
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {NAV.map((item) =>
              item.children ? (
                <DropdownMenu.Root key={item.label}>
                  <DropdownMenu.Trigger asChild>
                    <button className="text-mono flex items-center gap-1 text-ink-dim transition-colors hover:text-ink data-[state=open]:text-ink">
                      {item.label}
                      <ChevronDown className="h-3 w-3" aria-hidden />
                    </button>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Portal>
                    <DropdownMenu.Content
                      sideOffset={20}
                      align="end"
                      className="z-50 min-w-[260px] border border-rule bg-bg-elevated p-2 shadow-[0_24px_80px_-24px_rgba(0,0,0,0.6)] data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0"
                    >
                      {item.children.map((child) => (
                        <DropdownMenu.Item key={child.href} asChild>
                          <Link
                            href={child.href}
                            className="block cursor-pointer border-l border-transparent px-4 py-3 outline-none transition-colors hover:border-accent hover:bg-bg-panel focus:border-accent focus:bg-bg-panel"
                          >
                            <div className="font-display text-sm uppercase tracking-[0.06em] text-ink">
                              {child.label}
                            </div>
                            {child.description ? (
                              <div className="mt-0.5 text-xs text-ink-mute">{child.description}</div>
                            ) : null}
                          </Link>
                        </DropdownMenu.Item>
                      ))}
                    </DropdownMenu.Content>
                  </DropdownMenu.Portal>
                </DropdownMenu.Root>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-mono text-ink-dim transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/#contact"
              className="text-mono hidden border border-rule px-4 py-2 text-ink transition-colors hover:border-accent hover:text-accent lg:inline-block"
            >
              Contact →
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center border border-rule text-ink lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="mobile-nav"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] flex flex-col bg-bg lg:hidden"
          >
            <div className="flex h-16 items-center justify-between border-b border-rule px-6">
              <span className="font-display text-[20px] font-700 tracking-[0.12em] text-ink">AURIXYS</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex h-10 w-10 items-center justify-center border border-rule text-ink"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-1 flex-col gap-2 overflow-y-auto px-6 py-10">
              {NAV.flatMap((item) =>
                item.children
                  ? [
                      <div key={item.label} className="text-mono pt-6 text-ink-mute">
                        {item.label}
                      </div>,
                      ...item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="font-display block text-d-md uppercase tracking-[-0.02em] text-ink hover:text-accent"
                        >
                          {child.label}
                        </Link>
                      )),
                    ]
                  : [
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="font-display block text-d-md uppercase tracking-[-0.02em] text-ink hover:text-accent"
                      >
                        {item.label}
                      </Link>,
                    ]
              )}
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="font-display mt-8 block text-d-md uppercase tracking-[-0.02em] text-accent"
              >
                Contact →
              </Link>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

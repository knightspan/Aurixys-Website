import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/common/Reveal";

const PRODUCTS = [
  {
    name: "ANVAY",
    sub: "VYUHA-LATTICE",
    href: "/products/anvay",
    body:
      "Sovereign data-ontology engine. GraphRAG architecture. Dynamic knowledge graphs across strategic domains for Indian institutions.",
  },
  {
    name: "QuMail",
    sub: "Post-Quantum Comms",
    href: "/products/qumail",
    body:
      "Post-quantum secure communication protocol. Hybrid encryption with CRYSTALS-Kyber. Built to neutralise “Harvest Now, Decrypt Later” threats at the infrastructure level. Developed at MIT iQuHACK 2026.",
  },
];

export function SecondaryProducts() {
  return (
    <section
      id="anvay"
      aria-label="Other research programmes"
      className="border-t border-rule bg-bg py-24"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <Reveal>
          <h2 className="font-display text-d-md uppercase tracking-[-0.02em] text-ink">
            Beyond the river.
          </h2>
          <p className="mt-3 max-w-[640px] text-sm text-ink-dim">
            Two parallel research programmes Aurixys is building in service of the same mission &mdash; sovereign,
            audit-grade, peer-level Indian deep-tech infrastructure.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.05}>
              <Link
                href={p.href}
                id={p.name === "QuMail" ? "qumail" : undefined}
                className="group relative flex h-full flex-col justify-between border border-rule bg-bg-elevated p-8 transition-colors hover:border-accent"
              >
                <span className="text-mono absolute right-6 top-6 text-accent">RESEARCH PROGRAMME</span>
                <div>
                  <div className="font-display text-d-lg uppercase tracking-[-0.02em] text-ink">{p.name}</div>
                  <div className="text-mono mt-2 text-ink-mute">{p.sub}</div>
                  <p className="mt-8 max-w-[55ch] text-[15px] leading-relaxed text-ink-dim">{p.body}</p>
                </div>
                <div className="text-mono mt-10 inline-flex items-center gap-3 text-ink group-hover:text-accent">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

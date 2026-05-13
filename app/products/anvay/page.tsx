import { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/common/Reveal";

export const metadata: Metadata = {
  title: "ANVAY — Sovereign Data-Ontology Engine",
  description:
    "ANVAY (VYUHA-LATTICE): a GraphRAG architecture for dynamic knowledge graphs across strategic Indian domains.",
};

export default function AnvayPage() {
  return (
    <>
      <PageHero
        eyebrow="Research Programme"
        title="ANVAY"
        intro="VYUHA-LATTICE. A sovereign data-ontology engine built on a GraphRAG architecture, designed to maintain dynamic knowledge graphs across strategic domains for Indian institutions. Built for the long arc, not the demo loop."
      />

      <section className="bg-bg py-24">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
          <Reveal>
            <div className="grid grid-cols-1 gap-px border border-rule bg-rule md:grid-cols-3">
              {[
                { h: "GraphRAG", b: "Retrieval over typed knowledge graphs, not flat embeddings." },
                { h: "Sovereign", b: "Indian institutions, Indian infrastructure, Indian control surface." },
                { h: "Dynamic", b: "Ontologies that evolve as the underlying domain knowledge does." },
              ].map((c) => (
                <div key={c.h} className="bg-bg p-8">
                  <div className="font-display text-base uppercase tracking-[0.06em] text-ink">{c.h}</div>
                  <p className="mt-3 text-mono leading-relaxed text-ink-dim">{c.b}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <p className="text-mono mt-16 text-ink-mute">
              Full programme brief available under <span className="text-ink">NDA</span>. Reach out via the
              contact form on the home page.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}

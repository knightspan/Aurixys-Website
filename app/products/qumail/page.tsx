import { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/common/Reveal";

export const metadata: Metadata = {
  title: "QuMail — Post-Quantum Communications",
  description:
    "Post-quantum secure communication protocol with CRYSTALS-Kyber hybrid encryption. Built to neutralise Harvest-Now-Decrypt-Later threats.",
};

export default function QumailPage() {
  return (
    <>
      <PageHero
        eyebrow="Research Programme"
        title="QuMail"
        intro="A post-quantum secure communication protocol built on a hybrid encryption stack anchored by CRYSTALS-Kyber. Designed to neutralise “Harvest Now, Decrypt Later” adversaries at the infrastructure level. Developed at MIT iQuHACK 2026."
      />

      <section className="bg-bg py-24">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
          <Reveal>
            <div className="grid grid-cols-1 gap-px border border-rule bg-rule md:grid-cols-3">
              {[
                { h: "Hybrid", b: "Classical + post-quantum primitives composed defensively." },
                { h: "Kyber", b: "CRYSTALS-Kyber for the post-quantum key encapsulation layer." },
                { h: "Infra-level", b: "Built to slot into existing institutional email transport." },
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
              Protocol whitepaper available under <span className="text-ink">NDA</span>. Reach out via the
              contact form on the home page.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}

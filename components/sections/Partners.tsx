import { Reveal } from "@/components/common/Reveal";
import { PARTNERS_GOV, PARTNERS_INDUSTRY, type Partner } from "@/lib/data/partners";

export function Partners() {
  return (
    <section
      id="partners"
      aria-labelledby="partners-heading"
      className="border-t border-rule bg-bg py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <Reveal>
          <h2
            id="partners-heading"
            className="font-display text-[clamp(36px,5vw,64px)] font-700 uppercase tracking-[-0.02em] text-ink"
          >
            Built With Government.
            <br />
            <span className="text-ink-dim">Building With Industry.</span>
          </h2>
        </Reveal>

        <div className="mt-16 space-y-8">
          <Reveal>
            <PartnerRow title="Government" tag="Grant counterparties" partners={PARTNERS_GOV} />
          </Reveal>
          <Reveal>
            <PartnerRow title="Industry" tag="In active conversation" partners={PARTNERS_INDUSTRY} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function PartnerRow({ title, tag, partners }: { title: string; tag: string; partners: Partner[] }) {
  return (
    <div className="border border-rule bg-bg-elevated">
      <div className="flex items-center justify-between border-b border-rule px-6 py-3">
        <span className="font-display text-sm uppercase tracking-[0.08em] text-ink">{title}</span>
        <span className="text-mono text-ink-mute">{tag}</span>
      </div>
      <div className="grid grid-cols-1 gap-px bg-rule sm:grid-cols-2 lg:grid-cols-3">
        {partners.map((p) => (
          <div key={p.name} className="flex flex-col gap-2 bg-bg-elevated px-6 py-8">
            <span className="text-mono text-accent">{p.tag}</span>
            <span className="font-display text-base uppercase tracking-[0.04em] text-ink">{p.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

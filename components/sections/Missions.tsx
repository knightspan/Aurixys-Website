import { Reveal } from "@/components/common/Reveal";
import { AssetPlaceholder } from "@/components/common/AssetPlaceholder";
import { MISSIONS } from "@/lib/data/missions";

export function Missions() {
  return (
    <section
      id="missions"
      aria-labelledby="missions-heading"
      className="border-t border-rule bg-bg py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <Reveal>
          <div className="text-mono mb-4 text-ink-mute">{"// FIELD DEPLOYMENTS"}</div>
          <h2
            id="missions-heading"
            className="font-display text-[clamp(36px,5vw,64px)] font-700 uppercase tracking-[-0.02em] text-ink"
          >
            Field-Proven. River-Tested.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {MISSIONS.map((m, i) => (
            <Reveal key={m.number} delay={i * 0.05}>
              <article className="flex h-full flex-col border border-rule bg-bg-elevated">
                <div className="relative border-b border-rule">
                  <span className="text-mono absolute left-4 top-4 z-10 text-accent">{m.number}</span>
                  <AssetPlaceholder
                    path={m.asset}
                    note={`${m.river} · ${m.location} · ${m.year}`}
                    ratio="aspect-[16/9]"
                    className="border-0"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-6 p-8">
                  <div>
                    <div className="text-mono text-ink-mute">{m.location} · {m.year}</div>
                    <h3 className="font-display mt-1 text-d-md uppercase tracking-[-0.02em] text-ink">
                      {m.river}
                    </h3>
                  </div>
                  <dl className="grid grid-cols-1 gap-3 border-y border-rule py-5 text-sm">
                    <Row label="Profile" value={m.profile} />
                    <Row label="Conditions" value={m.conditions} />
                    <Row label="Outcome" value={m.outcome} />
                  </dl>
                  <p className="mt-auto text-[13px] italic text-ink-dim">&ldquo;{m.context}&rdquo;</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[140px_1fr] gap-4">
      <dt className="text-mono text-ink-mute">{label}</dt>
      <dd className="text-ink">{value}</dd>
    </div>
  );
}

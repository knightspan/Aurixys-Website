import { Reveal } from "@/components/common/Reveal";
import { AssetPlaceholder } from "@/components/common/AssetPlaceholder";
import { TEAM } from "@/lib/data/team";

export function Team() {
  return (
    <section
      id="team"
      aria-labelledby="team-heading"
      className="border-t border-rule bg-bg py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <Reveal>
          <div className="text-mono mb-4 text-ink-mute">{"// PEOPLE"}</div>
          <h2
            id="team-heading"
            className="font-display text-[clamp(40px,6vw,72px)] font-700 uppercase tracking-[-0.02em] text-ink"
          >
            The Team.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-px border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.04}>
              <article className="group flex h-full flex-col bg-bg">
                <div className="relative">
                  <AssetPlaceholder
                    path={m.asset}
                    note={m.name}
                    ratio="aspect-square"
                    className="border-0 transition duration-500 group-hover:saturate-150"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-6">
                  <div className="font-display text-d-xs uppercase tracking-[0.02em] text-ink">{m.name}</div>
                  <div className="text-mono text-accent">{m.role}</div>
                  <p className="text-sm leading-relaxed text-ink-dim">{m.tagline}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

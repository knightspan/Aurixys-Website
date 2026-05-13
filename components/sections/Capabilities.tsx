import { Reveal } from "@/components/common/Reveal";
import { CAPABILITIES } from "@/lib/data/capabilities";
import { CapabilityIcon } from "@/components/icons/CapabilityIcons";

const DIM = ["text-ink", "text-ink/90", "text-ink/80", "text-ink/70"] as const;

export function Capabilities() {
  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-heading"
      className="relative border-t border-rule bg-bg py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <Reveal>
          <h2
            id="capabilities-heading"
            className="text-display font-display flex flex-wrap items-end gap-x-6 gap-y-2 text-[clamp(36px,6vw,80px)] font-700 uppercase tracking-[-0.03em]"
          >
            {CAPABILITIES.map((c, i) => (
              <span key={c.key} className={DIM[i]}>
                {c.title}.
              </span>
            ))}
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-px border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-4">
          {CAPABILITIES.map((c, i) => (
            <Reveal key={c.key} delay={i * 0.05}>
              <article className="group flex h-full flex-col gap-6 bg-bg p-8 transition-colors hover:bg-bg-elevated">
                <CapabilityIcon
                  name={c.key}
                  className="h-10 w-10 text-ink-dim transition-transform duration-500 group-hover:rotate-[5deg]"
                />
                <h3 className="font-display text-d-sm uppercase tracking-[0.04em] text-ink">{c.title}</h3>
                <p className="max-w-[28ch] text-[15px] leading-relaxed text-ink-dim">{c.copy}</p>
                <ul className="mt-auto space-y-1.5">
                  {c.bullets.map((b) => (
                    <li
                      key={b}
                      className="text-mono text-ink-mute transition-transform duration-300 group-hover:translate-x-px"
                    >
                      · {b}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

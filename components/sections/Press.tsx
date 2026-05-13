import { Reveal } from "@/components/common/Reveal";
import { PRESS } from "@/lib/data/press";
import { ArrowUpRight } from "lucide-react";

export function Press() {
  return (
    <section
      id="press"
      aria-labelledby="press-heading"
      className="border-t border-rule bg-bg py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
        <Reveal>
          <h2
            id="press-heading"
            className="font-display text-[clamp(36px,5vw,64px)] font-700 uppercase tracking-[-0.02em] text-ink"
          >
            In The Press.
          </h2>
        </Reveal>

        <Reveal>
          <ul className="mt-12 divide-y divide-rule border-y border-rule">
            {PRESS.map((p, i) => (
              <li key={i} className="grid grid-cols-1 gap-3 py-6 md:grid-cols-[180px_1fr_auto] md:items-center md:gap-8">
                <span className="font-display text-sm uppercase tracking-[0.06em] text-ink-mute">
                  {p.outlet}
                </span>
                {p.href ? (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 text-[15px] text-ink hover:text-accent"
                  >
                    {p.headline}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                ) : (
                  <span className="text-[15px] text-ink-dim">{p.headline}</span>
                )}
                <span className="text-mono text-ink-mute md:text-right">{p.date}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

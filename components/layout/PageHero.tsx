import { ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  intro?: string;
  children?: ReactNode;
}

export function PageHero({ eyebrow, title, intro, children }: PageHeroProps) {
  return (
    <section className="relative border-b border-rule bg-bg pb-20 pt-40 lg:pt-48">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
        <div className="text-mono mb-6 text-accent">{`// ${eyebrow}`}</div>
        <h1 className="font-display text-[clamp(48px,8vw,96px)] font-700 uppercase leading-[0.95] tracking-[-0.03em] text-ink">
          {title}
        </h1>
        {intro ? (
          <p className="mt-10 max-w-[720px] text-[16px] leading-[1.7] text-ink-dim">{intro}</p>
        ) : null}
        {children}
      </div>
    </section>
  );
}

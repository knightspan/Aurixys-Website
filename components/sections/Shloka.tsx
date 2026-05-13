import { Reveal } from "@/components/common/Reveal";

export function Shloka() {
  return (
    <section
      aria-label="Reflection"
      className="border-t border-rule bg-bg py-32 lg:py-48"
    >
      <Reveal>
        <div className="mx-auto max-w-[820px] px-6 text-center">
          <p
            className="text-[clamp(28px,3.6vw,40px)] leading-[1.4] text-ink"
            style={{ fontFamily: "var(--font-deva)" }}
          >
            जलम् विना न जीवनम् । सर्वथा एव रक्षणीयम् ॥
          </p>
          <p className="mt-10 text-[clamp(16px,1.8vw,20px)] italic text-ink-dim">
            Without water, there is no life. It must be protected, in every way.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

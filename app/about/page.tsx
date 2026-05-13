import { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/common/Reveal";

export const metadata: Metadata = {
  title: "About",
  description: "Aurixys is an Indian deep-tech company building autonomous water-intelligence and industrial telemetry systems.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="Aurixys"
        intro="An Indian deep-tech company building autonomous river-intelligence and industrial water-telemetry systems. National Champion of the Jal Shakti Hackathon 2025, Ministry of Jal Shakti, Government of India. Operating as Team JyotirVega."
      />

      <section className="border-b border-rule bg-bg py-24">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <Reveal>
              <h2 className="font-display text-d-md uppercase tracking-[-0.02em] text-ink">Mission.</h2>
              <p className="mt-6 max-w-[55ch] text-[15px] leading-[1.8] text-ink-dim">
                Field-validated, audit-grade water-intelligence for India&rsquo;s rivers and industrial sites. Built
                in India, deployed in India, sovereign in control. We engineer the platforms regulators and
                institutions can stake reputation on.
              </p>
            </Reveal>
            <Reveal>
              <h2 className="font-display text-d-md uppercase tracking-[-0.02em] text-ink">Vision.</h2>
              <p className="mt-6 max-w-[55ch] text-[15px] leading-[1.8] text-ink-dim">
                Continuous, court-admissible water telemetry across every basin of consequence in India, fused
                with sovereign data-ontology and post-quantum communications. A complete instrumented stack for
                the next century of Indian water.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-bg py-32">
        <div className="mx-auto max-w-[820px] px-6 text-center">
          <Reveal>
            <p
              className="text-[clamp(28px,3.6vw,40px)] leading-[1.4] text-ink"
              style={{ fontFamily: "var(--font-deva)" }}
            >
              जलम् विना न जीवनम् । सर्वथा एव रक्षणीयम् ॥
            </p>
            <p className="mt-10 text-[clamp(16px,1.8vw,20px)] italic text-ink-dim">
              Without water, there is no life. It must be protected, in every way.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}

import { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { XrayView } from "@/components/sections/XrayView";
import { SpecTable } from "@/components/sections/SpecTable";
import { VesselViewer } from "@/components/three/VesselViewer";
import { Reveal } from "@/components/common/Reveal";
import { JP_FEATURES } from "@/lib/data/jal-prahari";
import { FeatureIcon } from "@/components/icons/FeatureIcon";

export const metadata: Metadata = {
  title: "Jal Prahari — Autonomous River Vessel",
  description:
    "Solar-hybrid autonomous surface vessel for India's rivers. Twin-hull catamaran. Pixhawk autopilot. Jetson edge AI. Active Dipping sensor cage.",
};

export default function JalPrahariPage() {
  return (
    <>
      <PageHero
        eyebrow="Flagship Product · TRL-6"
        title="Jal Prahari"
        intro="A solar-hybrid autonomous surface vessel engineered for the strongest Indian river currents. Twin-hull catamaran for stability. Pixhawk autopilot for waypoint navigation. NVIDIA Jetson on-board for edge AI inference. Active Dipping linear actuator that deploys an industrial sensor cage beneath the surface layer — where the readings actually mean something."
      />

      <section className="border-b border-rule bg-bg py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal>
            <VesselViewer fallbackAsset="jal-prahari/hero-render-001.png" />
          </Reveal>
        </div>
      </section>

      <section className="border-b border-rule bg-bg py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal>
            <h2 className="font-display text-d-md uppercase tracking-[-0.02em] text-ink">
              Six properties.
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-px border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-3">
            {JP_FEATURES.map((f, i) => (
              <Reveal key={f.name} delay={i * 0.04}>
                <div className="flex h-full flex-col gap-4 bg-bg p-8">
                  <FeatureIcon index={i} className="h-8 w-8 text-ink-dim" />
                  <h3 className="font-display text-base uppercase tracking-[0.06em] text-ink">{f.name}</h3>
                  <p className="text-mono leading-relaxed text-ink-dim">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-rule bg-bg py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <XrayView />
        </div>
      </section>

      <section className="bg-bg py-24">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
          <SpecTable />
        </div>
      </section>
    </>
  );
}

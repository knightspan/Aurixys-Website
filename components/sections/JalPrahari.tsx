import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { Reveal } from "@/components/common/Reveal";
import { AssetPlaceholder } from "@/components/common/AssetPlaceholder";
import { JP_FEATURES } from "@/lib/data/jal-prahari";
import { XrayView } from "./XrayView";
import { SpecTable } from "./SpecTable";
import { FeatureIcon } from "@/components/icons/FeatureIcon";

export function JalPrahari() {
  return (
    <section
      id="jal-prahari"
      aria-labelledby="jp-heading"
      className="relative border-t border-rule bg-bg py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <Reveal>
          <div className="text-mono mb-6 text-accent">{"// FLAGSHIP PRODUCT"}</div>
          <h2
            id="jp-heading"
            className="text-display font-display text-[clamp(48px,8vw,96px)] font-700 uppercase tracking-[-0.02em] text-ink"
          >
            Jal Prahari
          </h2>
          <p className="font-display mt-4 text-d-sm tracking-tight text-ink-dim">
            The autonomous river guardian.
          </p>
        </Reveal>

        <Reveal>
          <p className="mt-12 max-w-[720px] text-[16px] leading-[1.7] text-ink-dim">
            Jal Prahari is a solar-hybrid autonomous surface vessel engineered for India&rsquo;s rivers.
            Twin-hull catamaran architecture for stability, Pixhawk-based waypoint navigation, NVIDIA Jetson
            Nano on-board for edge AI inference, and a key innovation &mdash; the Active Dipping linear-actuator
            assembly that lowers an industrial sensor cage below the surface scum into the laminar flow zone
            beneath, where the readings actually mean something. Field-validated on the Godavari at Nashik
            and the Ganga at Varanasi. Designed in India, built in India, deployed in India. TRL-6 today,
            ready to ship.
          </p>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-px border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-3">
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

        <Reveal>
          <div className="mt-24">
            <AssetPlaceholder
              path="jal-prahari/hero-render-001.png"
              note="Primary 3D render · 3/4 angle · transparent bg · 2400px wide"
              ratio="aspect-[16/9]"
            />
          </div>
        </Reveal>

        <div className="mt-24">
          <XrayView />
        </div>

        <div className="mt-24 grid grid-cols-1 gap-12 lg:grid-cols-[2fr_1fr]">
          <SpecTable />
          <Reveal>
            <div className="flex h-full flex-col justify-between border border-rule p-8">
              <div>
                <div className="text-mono mb-3 text-ink-mute">Documentation</div>
                <p className="font-display text-d-sm uppercase tracking-[-0.02em] text-ink">
                  Download the full datasheet.
                </p>
                <p className="mt-3 text-sm text-ink-dim">
                  Complete spec sheet, sensor matrix, communication profile, mission configurations.
                </p>
              </div>
              <a
                href="/assets/jal-prahari/jal-prahari-datasheet.pdf"
                className="text-mono group mt-8 inline-flex items-center justify-between gap-3 border border-rule px-5 py-4 text-ink transition-colors hover:border-accent hover:text-accent"
              >
                <span className="inline-flex items-center gap-3">
                  <Download className="h-4 w-4" /> Datasheet (PDF)
                </span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <Link
                href="/products/jal-prahari"
                className="text-mono group mt-3 inline-flex items-center justify-between gap-3 border border-transparent px-5 py-4 text-ink-dim transition-colors hover:border-rule hover:text-ink"
              >
                <span>Open product page</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

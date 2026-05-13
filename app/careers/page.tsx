import { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/common/Reveal";

export const metadata: Metadata = {
  title: "Careers",
  description: "Aurixys is hiring. Roles in autonomous robotics, edge AI, hardware integration, and field operations.",
};

const ROLES = [
  { team: "Hardware", title: "Marine Hardware Engineer", location: "Nashik" },
  { team: "Autonomy", title: "Autonomy & Edge-AI Engineer", location: "Nashik / Remote" },
  { team: "Sensors", title: "Sensor Systems Engineer", location: "Nashik" },
  { team: "Field Ops", title: "Field Operations Lead", location: "Nashik (mobile)" },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build Indian Deep-Tech."
        intro="We are hiring engineers who want their work to spend most of its life in the river, not the lab. If the idea of taking a 45 kg autonomous vessel into a monsoon-swollen Ganga is animating rather than alarming, we want to talk."
      />

      <section className="border-b border-rule bg-bg py-24">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
          <Reveal>
            <h2 className="font-display text-d-md uppercase tracking-[-0.02em] text-ink">Open roles.</h2>
          </Reveal>
          <Reveal>
            <ul className="mt-12 divide-y divide-rule border-y border-rule">
              {ROLES.map((r) => (
                <li key={r.title} className="grid grid-cols-1 gap-3 py-6 md:grid-cols-[160px_1fr_180px] md:items-center md:gap-8">
                  <span className="text-mono text-ink-mute">{r.team}</span>
                  <span className="font-display text-base uppercase tracking-[0.04em] text-ink">{r.title}</span>
                  <span className="text-mono text-ink-dim md:text-right">{r.location}</span>
                </li>
              ))}
            </ul>
            <p className="text-mono mt-8 text-ink-mute">
              Don&rsquo;t see your role? Mail <a className="text-ink hover:text-accent" href="mailto:info@aurixys.com">info@aurixys.com</a> with subject <span className="text-ink">Careers</span>.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}

import { Reveal } from "@/components/common/Reveal";
import { AssetPlaceholder } from "@/components/common/AssetPlaceholder";

const CONFERRERS = [
  "Shri C.R. Patil, Hon'ble Union Minister of Jal Shakti",
  "Shri V. Somanna",
  "Shri V.L. Kantha Rao",
  "Dr. N. Kalaiselvi",
  "Ms. Naina Lal Kidwai",
  "Ms. Archana Varma",
];

export function Recognition() {
  return (
    <section
      id="recognition"
      aria-labelledby="recognition-heading"
      className="border-t border-rule bg-bg py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1240px] px-6 text-center lg:px-10">
        <Reveal>
          <div className="text-mono mb-6 text-accent">{"// RECOGNITION"}</div>
          <h2
            id="recognition-heading"
            className="font-display text-[clamp(40px,6vw,80px)] font-700 uppercase tracking-[-0.02em] text-ink"
          >
            National Champion
          </h2>
          <p className="font-display mx-auto mt-3 text-d-sm tracking-tight text-ink-dim">
            Jal Shakti Hackathon 2025
          </p>
        </Reveal>

        <Reveal>
          <p className="text-mono mx-auto mt-12 max-w-[920px] text-ink-mute">
            Conferred by{" "}
            {CONFERRERS.map((c, i) => (
              <span key={c}>
                <span className="text-ink-dim">{c}</span>
                {i < CONFERRERS.length - 1 ? <span> · </span> : null}
              </span>
            ))}{" "}
            · World Water Day Conclave 2026, Dr. Ambedkar International Centre, New Delhi.
          </p>
        </Reveal>

        <Reveal>
          <p className="text-mono mt-8 text-ink-mute">
            <span className="text-accent-warm">GRAND FINALIST</span> · Smart India Hackathon 2025 · Ministry
            of Earth Sciences · Sole Maharashtra team in problem statement.
          </p>
        </Reveal>

        <Reveal>
          <div className="mt-16">
            <AssetPlaceholder
              path="recognition/award-ceremony.jpg"
              note="World Water Day Conclave 2026 · New Delhi"
              ratio="aspect-[21/9]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

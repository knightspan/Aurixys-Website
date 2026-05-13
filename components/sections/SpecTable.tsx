import { Reveal } from "@/components/common/Reveal";
import { JP_SPECS } from "@/lib/data/jal-prahari";

export function SpecTable() {
  return (
    <Reveal>
      <div className="border border-rule">
        <div className="border-b border-rule px-6 py-4">
          <div className="text-mono text-ink-mute">{"// SPECIFICATIONS"}</div>
          <h3 className="font-display mt-1 text-d-sm uppercase tracking-[-0.02em] text-ink">
            Jal Prahari · Technical Profile
          </h3>
        </div>
        <table className="w-full text-sm">
          <tbody>
            {JP_SPECS.map((row) => (
              <tr key={row.label} className="border-b border-rule last:border-0">
                <th
                  scope="row"
                  className="text-mono w-[40%] px-6 py-4 text-left align-top text-ink-mute"
                >
                  {row.label}
                </th>
                <td className="font-mono px-6 py-4 text-ink">{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Reveal>
  );
}

export type Capability = {
  key: "detect" | "navigate" | "diagnose" | "disclose";
  title: string;
  copy: string;
  bullets: string[];
};

export const CAPABILITIES: Capability[] = [
  {
    key: "detect",
    title: "Detect",
    copy: "Satellite intelligence across whole river basins, continuously.",
    bullets: ["Multispectral pipeline · MX bands", "6–24 hr advance contamination alerts", "GPS hotspot extraction, autonomous tasking"],
  },
  {
    key: "navigate",
    title: "Navigate",
    copy: "Autonomous twin-hull catamaran, validated against the strongest Indian river currents.",
    bullets: ["Pixhawk-class flight controller", "NVIDIA Jetson edge inference", "Solar + LiPo hybrid, manual fallback"],
  },
  {
    key: "diagnose",
    title: "Diagnose",
    copy: "Active-dipping sensor cage takes readings beneath the surface layer, where the data is actually valid.",
    bullets: ["Industrial linear actuator", "Multi-parameter sensor suite", "Sub-surface laminar-flow sampling"],
  },
  {
    key: "disclose",
    title: "Disclose",
    copy: "Continuous, AI-validated, time-stamped, audit-grade evidence trail.",
    bullets: ["BRSR · TNFD · CDP-aligned", "SCADA / DCS / OPC-UA integration", "Court-admissible telemetry"],
  },
];

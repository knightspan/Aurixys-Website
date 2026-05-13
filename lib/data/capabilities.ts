export type Capability = {
  key: "detect" | "navigate" | "diagnose" | "disclose";
  icon: "image" | "movie" | "lightbulb" | "clock";
  title: string;
  copy: string;
  bullets: string[];
  tags: string[];
};

export const CAPABILITIES: Capability[] = [
  {
    key: "detect",
    icon: "image",
    title: "Detect",
    copy: "Satellite intelligence across whole river basins, continuously.",
    bullets: [
      "Multispectral pipeline · MX bands",
      "6–24 hr advance contamination alerts",
      "GPS hotspot extraction, autonomous tasking",
    ],
    tags: ["Multispectral", "Basin Scale", "Hotspot AI", "Continuous"],
  },
  {
    key: "navigate",
    icon: "movie",
    title: "Navigate",
    copy: "Autonomous twin-hull catamaran, validated against the strongest Indian river currents.",
    bullets: [
      "Pixhawk-class flight controller",
      "NVIDIA Jetson edge inference",
      "Solar + LiPo hybrid, manual fallback",
    ],
    tags: ["Twin Hull", "Pixhawk", "Edge AI", "Solar Hybrid"],
  },
  {
    key: "diagnose",
    icon: "lightbulb",
    title: "Diagnose",
    copy: "Active-dipping sensor cage takes readings beneath the surface layer, where the data is actually valid.",
    bullets: [
      "Industrial linear actuator",
      "Multi-parameter sensor suite",
      "Sub-surface laminar-flow sampling",
    ],
    tags: ["Active Dipping", "Laminar Zone", "Multi-Parameter", "pH · DO · Turb"],
  },
  {
    key: "disclose",
    icon: "clock",
    title: "Disclose",
    copy: "Continuous, AI-validated, time-stamped, audit-grade evidence trail.",
    bullets: [
      "BRSR · TNFD · CDP-aligned",
      "SCADA / DCS / OPC-UA integration",
      "Court-admissible telemetry",
    ],
    tags: ["BRSR", "TNFD", "Audit-Grade", "Time-Stamped"],
  },
];

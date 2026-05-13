export type Feature = { name: string; desc: string };
export type SpecRow = { label: string; value: string };
export type XrayPin = { id: string; x: number; y: number; label: string; note: string };

export const JP_FEATURES: Feature[] = [
  { name: "Persistent", desc: "Solar-electric primary, LiPo reserve. Multi-day autonomous missions." },
  { name: "Rugged", desc: "Validated in Ganga and Godavari currents during monsoon." },
  { name: "Modular", desc: "Sensor payload swap in minutes. C2 interoperable." },
  { name: "Multi-Parameter", desc: "pH, DO, conductivity, turbidity, temperature, depth, chlorophyll-a, nutrients." },
  { name: "Indigenous", desc: "Designed in India. Made in India. No foreign control surface." },
  { name: "Auditable", desc: "Time-stamped, AI-validated telemetry. BRSR/TNFD-grade." },
];

export const JP_SPECS: SpecRow[] = [
  { label: "Weight", value: "≈ 45 kg" },
  { label: "Top Speed", value: "4 kts (cruise)" },
  { label: "Endurance", value: "Multi-day autonomous" },
  { label: "Payload Capacity", value: "Configurable sensor cage" },
  { label: "Hull", value: "Twin-hull catamaran, composite" },
  { label: "Comms", value: "4G/LTE + satellite" },
  { label: "Compute", value: "NVIDIA Jetson (edge AI)" },
  { label: "Autopilot", value: "Pixhawk-class" },
  { label: "Power", value: "Solar primary + LiPo hybrid" },
  { label: "Sea State", value: "Tested: monsoon-active Ganga, Godavari" },
  { label: "TRL", value: "6 (field-validated)" },
];

// Positions are percentages; edit to match the actual xray render.
export const JP_XRAY_PINS: XrayPin[] = [
  { id: "comms",     x: 78, y: 22, label: "Satellite + 4G/LTE Comms",   note: "Iridium-style global reach with cellular fallback" },
  { id: "solar",     x: 52, y: 14, label: "Marinised Solar Array",      note: "Primary energy source, monsoon-rated" },
  { id: "pixhawk",   x: 42, y: 44, label: "Pixhawk Autopilot Stack",    note: "Waypoint navigation, station-keeping, RTL failsafe" },
  { id: "jetson",    x: 60, y: 50, label: "Jetson Edge AI",             note: "On-board inference for debris detection and AI-annotated video" },
  { id: "actuator",  x: 30, y: 64, label: "Active Dipping Actuator",    note: "Industrial linear actuator, sub-surface sensor deployment" },
  { id: "cage",      x: 24, y: 84, label: "Multi-Parameter Sensor Cage", note: "pH, DO, conductivity, turbidity, temperature, chl-a" },
];

export const JP_TABS = [
  { key: "base", label: "Base Model", active: true },
  { key: "ghat", label: "Ghat Monitoring", active: false },
  { key: "outfall", label: "Industrial Outfall", active: false },
  { key: "watershed", label: "Watershed Recharge", active: false },
];

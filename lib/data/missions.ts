export type Mission = {
  number: string;
  river: string;
  location: string;
  year: string;
  profile: string;
  conditions: string;
  outcome: string;
  asset: string;
  context: string;
};

export const MISSIONS: Mission[] = [
  {
    number: "MISSION 01",
    river: "Godavari",
    location: "Nashik",
    year: "2025",
    profile: "Multi-day autonomous deployment, ghat-area water-quality profiling.",
    conditions: "Monsoon-active, high current, dense pilgrim activity.",
    outcome: "Pre-deployment for Simhastha Kumbh Mela 2027.",
    asset: "missions/godavari-001.jpg",
    context: "Field validation under the conditions Aurixys is built for.",
  },
  {
    number: "MISSION 02",
    river: "Ganga",
    location: "Varanasi",
    year: "2025",
    profile: "Strong-current validation, Active Dipping mechanism trial.",
    conditions: "Heavy floating-debris load, varying turbidity.",
    outcome: "Demonstrated station-keeping against worst-case Indian river current.",
    asset: "missions/ganga-001.jpg",
    context: "Trial of the sub-surface sensor cage in laminar flow.",
  },
];

export type Partner = { name: string; tag: "GRANT COUNTERPARTY" | "IN DISCUSSION" };

export const PARTNERS_GOV: Partner[] = [
  { name: "Ministry of Jal Shakti", tag: "GRANT COUNTERPARTY" },
  { name: "Department of Water Resources, RD & GR", tag: "GRANT COUNTERPARTY" },
  { name: "National Institute of Hydrology, Roorkee", tag: "GRANT COUNTERPARTY" },
];

export const PARTNERS_INDUSTRY: Partner[] = [
  { name: "Hindalco Industries", tag: "IN DISCUSSION" },
  { name: "Veolia India", tag: "IN DISCUSSION" },
  { name: "Cleantec Infra", tag: "IN DISCUSSION" },
];

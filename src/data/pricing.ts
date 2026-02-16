// src/lib/pricing.ts
export type QuoteInput = {
  acres: number;
  density: "light" | "medium" | "heavy";
  terrain: "flat" | "moderate" | "steep";
  access: "easy" | "tight" | "remote";
  addons?: {
    debris?: boolean;
    stumps?: boolean;
    seeding?: boolean;
  };
};

export type QuoteOutput = {
  price: number;
  breakdown: Record<string, any>;
  flags: string[]; // “needs review”, “steep terrain risk”, etc.
};

export function computeQuote(input: QuoteInput): QuoteOutput {
  const FLOOR = 4500;
  const BASE_PER_ACRE = 3800;

  const densityMult = { light: 1.0, medium: 1.25, heavy: 1.6 }[input.density];
  const terrainMult = { flat: 1.0, moderate: 1.2, steep: 1.45 }[input.terrain];
  const accessAdd = { easy: 0, tight: 500, remote: 900 }[input.access];

  let subtotal = BASE_PER_ACRE * input.acres * densityMult * terrainMult;
  subtotal += accessAdd;

  if (input.addons?.debris) subtotal += 1500;
  if (input.addons?.stumps) subtotal += 1200;
  if (input.addons?.seeding) subtotal += 900;

  // Risk buffer for margin protection
  const risk = (input.density === "heavy" || input.terrain === "steep") ? 0.08 : 0.04;
  subtotal *= (1 + risk);

  const rounded = Math.round(subtotal / 50) * 50;
  const price = Math.max(FLOOR, rounded);

  const flags: string[] = [];
  if (input.terrain === "steep") flags.push("steep_terrain");
  if (input.density === "heavy") flags.push("heavy_density");
  if (input.acres <= 0.25) flags.push("small_job_floor_applied");

  return {
    price,
    breakdown: { FLOOR, BASE_PER_ACRE, densityMult, terrainMult, accessAdd, risk },
    flags
  };
}

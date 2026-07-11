/**
 * products.ts — offer-ladder → Stripe Price mapping.
 *
 * Prices live in Stripe (one Price object per tier); this file only maps
 * our tier ids to the env vars that hold those Price ids. No amounts are
 * hardcoded here — Stripe is the source of truth for money.
 *
 * The "bump" (Day Kit laptop stand) is modelled as a SEPARATE Stripe Price
 * so it can be attached as its own Checkout line item on top of Core.
 */

export type TierId = "core" | "bump" | "family";

export interface CheckoutLine {
  price: string; // Stripe Price id
  quantity: number;
}

/** Env var name that holds the Stripe Price id for each purchasable unit. */
const PRICE_ENV: Record<TierId, string> = {
  core: "STRIPE_PRICE_CORE",
  bump: "STRIPE_PRICE_BUMP",
  family: "STRIPE_PRICE_FAMILY",
};

function priceId(tier: TierId): string {
  const id = process.env[PRICE_ENV[tier]];
  if (!id) {
    throw new Error(
      `Missing Stripe Price env var ${PRICE_ENV[tier]} for tier "${tier}". ` +
        `Set it in .env.local (see .env.example).`,
    );
  }
  return id;
}

/**
 * Build the Checkout line items for a selected tier.
 *
 * - core   → 1× core
 * - bump   → 1× core + 1× bump (Day Kit = core device + laptop stand line item)
 * - family → 1× family (bundle of two, single Price)
 */
export function linesForTier(tier: TierId): CheckoutLine[] {
  switch (tier) {
    case "core":
      return [{ price: priceId("core"), quantity: 1 }];
    case "bump":
      return [
        { price: priceId("core"), quantity: 1 },
        { price: priceId("bump"), quantity: 1 },
      ];
    case "family":
      return [{ price: priceId("family"), quantity: 1 }];
    default:
      throw new Error(`Unknown tier: ${tier as string}`);
  }
}

export const VALID_TIERS: TierId[] = ["core", "bump", "family"];

export function isValidTier(value: unknown): value is TierId {
  return typeof value === "string" && (VALID_TIERS as string[]).includes(value);
}

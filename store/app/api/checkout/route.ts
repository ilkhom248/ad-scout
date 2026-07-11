import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { isValidTier, linesForTier } from "@/app/lib/products";

/**
 * POST /api/checkout
 * Body: { tier: "core" | "bump" | "family" }
 *
 * Creates a hosted Stripe Checkout session and returns { url } for a
 * client-side redirect. No BNPL / instalments — card + wallets only,
 * to stay halal-clean per the store gates.
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function getStripe(): Stripe {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error("STRIPE_SECRET_KEY is not set (see .env.example).");
  }
  return new Stripe(key, { apiVersion: "2024-06-20" });
}

export async function POST(req: NextRequest) {
  let tier: unknown;
  try {
    const body = await req.json();
    tier = body?.tier;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  if (!isValidTier(tier)) {
    return NextResponse.json(
      { error: "Invalid tier. Expected one of: core, bump, family." },
      { status: 400 },
    );
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  try {
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: linesForTier(tier),
      // Card + wallets only. Explicitly NO Affirm/Klarna/Afterpay (interest / BNPL).
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      shipping_address_collection: {
        allowed_countries: ["US", "GB", "AU"],
      },
      allow_promotion_codes: true,
      success_url: `${siteUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/cancel`,
      metadata: { tier, line: "NeckReset", brand: "Quelra" },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Checkout failed.";
    // Surface config errors clearly in dev; keep it generic in production.
    const isProd = process.env.NODE_ENV === "production";
    return NextResponse.json(
      { error: isProd ? "Unable to start checkout. Please try again." : message },
      { status: 500 },
    );
  }
}

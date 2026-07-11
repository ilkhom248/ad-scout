# Quelra — umbrella wellness store (repo config)

Umbrella brand of everyday tension-relief products. Domain + pixel are
**neutral and shared** so product lines enter without rebranding. Hero line at
launch: **NeckReset** (gentle cervical traction). Backups enter the same
domain/pixel later: **TensionEase** → **Still**.

Stack: Next.js (App Router) + TypeScript + Tailwind. Stripe Checkout (hosted).

## Hard gates (any failure = stop and fix, not "launch and see")

1. **Halal + non-medical claims.** Storefront + ads may only say "relieves
   tension / eases tightness". FORBIDDEN: "cures/treats hernia", "fixes posture
   permanently", "medical device", or any diagnose/treat/cure/prevent claim. The
   contraindications block (`DISCLAIMER.md`, footer) is mandatory on every page.
2. **No fabrication.** No invented reviews, no fake experts/doctors, no fake
   logos/credentials, no fake "only 3 left" counters. Review slots are marked
   `REAL_REVIEW_PLACEHOLDER` and filled by the owner with genuine reviews/UGC.
3. **Creative ↔ landing consistency.** Every promise in `creative/` must match a
   landing-page section. No drift.
4. **Honest price anchor.** Physio figures ($85/session, $850/course) are real
   market numbers labelled "typical" — a cost comparison, not an outcome claim.
5. **Halal payments.** Card + wallets only. No BNPL / instalments / interest
   (no Affirm/Klarna/Afterpay). Struck-through prices, if used, must be real.

Run the gate checklist before every launch. One failure = rework.

## Offer ladder (NeckReset)

| Tier | Price | Stripe Price env | Notes |
|---|---|---|---|
| Core | $44.99 | `STRIPE_PRICE_CORE` | Device + 14-day protocol |
| Day Kit (bump, hit) | $69.99 | `STRIPE_PRICE_BUMP` | Core + laptop stand (separate line item) |
| Family ×2 | $79 | `STRIPE_PRICE_FAMILY` | Two devices, single bundle Price |

Guarantee: 30 nights, full refund. Sourcing $4–7 → retail $40–50 (6–8× margin).

## Environment variables

See `.env.example`. Never commit real secrets.
- Server: `STRIPE_SECRET_KEY`, `STRIPE_PRICE_CORE|BUMP|FAMILY`, `NEXT_PUBLIC_SITE_URL`
- Public pixels: `NEXT_PUBLIC_META_PIXEL_ID`, `NEXT_PUBLIC_TIKTOK_PIXEL_ID`, `NEXT_PUBLIC_GA4_ID`

## Copy source of truth

All storefront copy lives in `app/lib/copy.ts`, sourced strictly from the
NeckReset passport (`../reports/creatives-2026-07-06.md`, section 4). Do not
invent copy beyond the passport. Markets: US + GB + AU. Language: English.

## Adding a backup line (TensionEase → Still) to the same domain/pixel

1. Add its copy to `app/lib/copy.ts` (or a sibling `copy-<line>.ts`), sourced
   from that product's passport. Run gate 1 on every claim.
2. Add its Stripe Prices to `.env` and map them in `app/lib/products.ts`
   (extend `TierId` / `PRICE_ENV` / `linesForTier`).
3. Add a route (e.g. `app/tensionease/page.tsx`) reusing the same section
   components. **Do not add new pixels** — the shared base pixels in
   `app/components/Pixels.tsx` already cover the whole domain.
4. Reuse `app/lib/analytics.ts` events (ViewContent / InitiateCheckout /
   Purchase) with the new `content_name`.
5. Ship the line's own creative pack under `creative/<line>/` and its own
   disclaimer if the claims differ. Re-run the gate checklist.

## Project layout

```
app/
  page.tsx                landing (hero → problem → mechanism → protocol →
                          objections → social proof → offer → guarantee → FAQ → disclaimer)
  layout.tsx              metadata + shared pixels
  success/ cancel/        post-checkout pages (Purchase fires on success)
  api/checkout/route.ts   Stripe hosted Checkout session (3 tiers)
  lib/copy.ts             ALL storefront copy (passport-sourced)
  lib/products.ts         tier → Stripe Price mapping
  lib/analytics.ts        pixel event wrappers
  components/             section + interactive components
creative/                 video scripts + Meta/TikTok ad copy
tracking/                 pixel setup + canonical event names
DISCLAIMER.md             mandatory contraindications block
```

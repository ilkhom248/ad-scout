# Quelra — NeckReset store

Production-ready landing page for **NeckReset** (gentle cervical traction), the
hero line of the **Quelra** umbrella wellness store. Next.js (App Router) +
TypeScript + Tailwind + hosted Stripe Checkout. Mobile-first, no heavy libs.

> All storefront copy is sourced strictly from the NeckReset passport
> (`../reports/creatives-2026-07-06.md`, section 4) and lives in
> `app/lib/copy.ts`. See `CLAUDE.md` for the store gates and how to add backup
> lines. See `DISCLAIMER.md` for the mandatory contraindications block.

## Run locally

```bash
cd store
cp .env.example .env.local   # fill in Stripe test keys + Price ids
npm install
npm run dev                  # http://localhost:3000
```

Type-check / build:

```bash
npm run typecheck
npm run build
```

## Environment variables

| Var | Where | Purpose |
|---|---|---|
| `STRIPE_SECRET_KEY` | server | Stripe secret (use `sk_test_…` first) |
| `STRIPE_PRICE_CORE` | server | Price id — Core $44.99 |
| `STRIPE_PRICE_BUMP` | server | Price id — Day Kit laptop-stand add-on |
| `STRIPE_PRICE_FAMILY` | server | Price id — Family ×2 $79 |
| `NEXT_PUBLIC_SITE_URL` | both | Base URL for Checkout success/cancel redirects |
| `NEXT_PUBLIC_META_PIXEL_ID` | client | Meta Pixel (shared, whole domain) |
| `NEXT_PUBLIC_TIKTOK_PIXEL_ID` | client | TikTok Pixel (shared) |
| `NEXT_PUBLIC_GA4_ID` | client | GA4 measurement id (shared) |

Never commit `.env.local`.

## Stripe setup (test mode)

1. Dashboard → **Products**: create three Prices —
   Core $44.99, Day Kit laptop-stand add-on, Family ×2 $79.
2. Copy each Price id into `.env.local` (`STRIPE_PRICE_*`).
3. Use your **test** secret key (`sk_test_…`).
4. `npm run dev`, click a tier CTA → you land on hosted Stripe Checkout.
   Test card `4242 4242 4242 4242`, any future expiry/CVC → redirects to
   `/success` (Purchase fires) or `/cancel`.

The Day Kit tier sends Core **plus** the bump as a separate line item; Family is
a single bundle Price. Card + wallets only — no BNPL/instalments (halal-clean).

## Deploy (Railway / Replit)

- **Build:** `npm run build` · **Start:** `npm start` (Next.js needs a Node
  runtime; not a static export).
- Set every env var above in the host's secrets manager. Set
  `NEXT_PUBLIC_SITE_URL` to the deployed URL so Checkout redirects resolve.
- Railway: new project → deploy from repo (root = `store/`) → add variables.
- Replit: import repo, set the run command to `npm run start` after a build
  step, add Secrets.
- Switch Stripe keys/Prices to live values only after the gate checklist passes.

## Deliverables map

| Brief item | Location |
|---|---|
| Landing page | `app/page.tsx` + `app/components/*` |
| Copy blocks (English, passport) | `app/lib/copy.ts` |
| Stripe Checkout (3 Prices + bump line item) | `app/api/checkout/route.ts`, `app/lib/products.ts` |
| Creative pack (V1/V2/V3 + Meta/TikTok copy) | `creative/` |
| Tracking (Meta + TikTok + GA4) | `tracking/`, `app/components/Pixels.tsx`, `app/lib/analytics.ts` |
| Store repo config + how to add backups | `CLAUDE.md` |
| Mandatory disclaimer | `DISCLAIMER.md`, footer |

## Adding a backup line

See **"Adding a backup line"** in `CLAUDE.md` — reuse the same domain, pixel,
and section components; add copy + Stripe Prices; do not create new pixels.

# Tracking — Meta Pixel + TikTok Pixel + GA4

**One pixel per platform for the whole umbrella domain.** The "tension / stress
relief" audience warmed on NeckReset carries over to the backup lines
(TensionEase → Still) with no re-instrumentation. Do not create a second pixel
per product.

## What's already wired

| File | Role |
|---|---|
| `app/components/Pixels.tsx` | Base snippets for Meta, TikTok, GA4. Each renders only if its public env id is set. Injected once in `app/layout.tsx`, so it covers every page. |
| `app/lib/analytics.ts` | Safe wrappers → `trackViewContent`, `trackInitiateCheckout`, `trackPurchase`. No-ops when a pixel is absent. |
| `app/components/ViewContentTracker.tsx` | Fires **ViewContent** on the landing page. |
| `app/components/CheckoutButton.tsx` | Fires **InitiateCheckout** before redirecting to Stripe. |
| `app/components/PurchaseTracker.tsx` | Fires **Purchase** on `/success`. |

## Standard events → platform mapping

| Funnel step | Meta (`fbq`) | TikTok (`ttq`) | GA4 (`gtag`) |
|---|---|---|---|
| View landing | `ViewContent` | `ViewContent` | `view_item` |
| Click a tier CTA | `InitiateCheckout` | `InitiateCheckout` | `begin_checkout` |
| Order complete | `Purchase` | `CompletePayment` | `purchase` |

## Setup

1. Create the assets: Meta Pixel (Events Manager), TikTok Pixel (Events Manager),
   GA4 property (Admin → Data Streams).
2. Put the ids in `.env.local`:
   ```
   NEXT_PUBLIC_META_PIXEL_ID=xxxxxxxxxx
   NEXT_PUBLIC_TIKTOK_PIXEL_ID=xxxxxxxx
   NEXT_PUBLIC_GA4_ID=G-XXXXXXX
   ```
3. Deploy. Verify with the Meta Pixel Helper, TikTok Pixel Helper, and GA4
   DebugView.

## Accurate Purchase value (recommended before scaling spend)

The client can't be trusted with the order amount, so `PurchaseTracker` fires
Purchase **without** value/currency. For correct ROAS, read the real figures
from the Stripe session on the success page (server component), then pass them
to a small client tracker:

```ts
// app/success/page.tsx (sketch)
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2024-06-20" });
const session = await stripe.checkout.sessions.retrieve(searchParams.session_id);
const value = (session.amount_total ?? 0) / 100;
const currency = session.currency?.toUpperCase() ?? "USD";
// pass { value, currency } into PurchaseTracker
```

For the most reliable attribution, add server-side events later (Meta
Conversions API / TikTok Events API / GA4 Measurement Protocol) keyed off the
Stripe webhook — see `tracking/events.ts` for the canonical event names to reuse.

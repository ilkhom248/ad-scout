/**
 * Canonical event-name constants, shared by client pixels (app/lib/analytics.ts)
 * and any future server-side integration (Meta CAPI / TikTok Events API / GA4
 * Measurement Protocol via the Stripe webhook). Keep names identical across
 * client and server so events deduplicate correctly.
 */

export const META_EVENTS = {
  viewContent: "ViewContent",
  initiateCheckout: "InitiateCheckout",
  purchase: "Purchase",
} as const;

export const TIKTOK_EVENTS = {
  viewContent: "ViewContent",
  initiateCheckout: "InitiateCheckout",
  purchase: "CompletePayment",
} as const;

export const GA4_EVENTS = {
  viewContent: "view_item",
  initiateCheckout: "begin_checkout",
  purchase: "purchase",
} as const;

/** Default content descriptor for the hero line (reuse for backups). */
export const CONTENT = {
  neckreset: { content_name: "NeckReset", content_type: "product" },
} as const;

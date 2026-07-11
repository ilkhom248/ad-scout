/**
 * analytics.ts — thin, safe wrappers for the shared umbrella pixels.
 *
 * ONE pixel per platform for the WHOLE domain (Meta / TikTok / GA4), so the
 * "tension / stress relief" audience warmed on NeckReset carries over to the
 * backup lines (TensionEase → Still) without re-instrumenting.
 *
 * Standard events used across the funnel: ViewContent, InitiateCheckout,
 * Purchase. All calls are no-ops if the pixel isn't present, so nothing
 * throws when IDs are unset in dev.
 */

type Params = Record<string, unknown>;

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    ttq?: { track: (event: string, params?: Params) => void };
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackViewContent(params: Params = {}): void {
  if (typeof window === "undefined") return;
  window.fbq?.("track", "ViewContent", params);
  window.ttq?.track("ViewContent", params);
  window.gtag?.("event", "view_item", params);
}

export function trackInitiateCheckout(params: Params = {}): void {
  if (typeof window === "undefined") return;
  window.fbq?.("track", "InitiateCheckout", params);
  window.ttq?.track("InitiateCheckout", params);
  window.gtag?.("event", "begin_checkout", params);
}

/**
 * Purchase should be fired on the post-checkout success page, ideally with the
 * real order value/currency read from the Stripe session (see tracking/README.md).
 */
export function trackPurchase(params: Params = {}): void {
  if (typeof window === "undefined") return;
  window.fbq?.("track", "Purchase", params);
  window.ttq?.track("CompletePayment", params);
  window.gtag?.("event", "purchase", params);
}

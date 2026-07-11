"use client";

import { useEffect } from "react";
import { trackPurchase } from "../lib/analytics";

/**
 * Fires Purchase once on the success page. Value/currency are omitted here
 * because the client can't be trusted with the amount; wire the real figures
 * server-side from the Stripe session (tracking/README.md) for accurate ROAS.
 */
export default function PurchaseTracker() {
  useEffect(() => {
    trackPurchase({ content_name: "NeckReset", content_type: "product" });
  }, []);
  return null;
}

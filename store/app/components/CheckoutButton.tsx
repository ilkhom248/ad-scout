"use client";

import { useState } from "react";
import type { TierId } from "../lib/products";
import { trackInitiateCheckout } from "../lib/analytics";

interface Props {
  tier: TierId;
  label: string;
  className?: string;
}

/**
 * CheckoutButton — posts the selected tier to /api/checkout and redirects to
 * the hosted Stripe Checkout URL. Fires InitiateCheckout on the shared pixels.
 * No purchase logic depends on localStorage.
 */
export default function CheckoutButton({ tier, label, className }: Props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function startCheckout() {
    setLoading(true);
    setError(null);
    trackInitiateCheckout({ content_name: "NeckReset", content_type: "product", tier });
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tier }),
      });
      const data = await res.json();
      if (!res.ok || !data?.url) {
        throw new Error(data?.error ?? "Could not start checkout.");
      }
      window.location.href = data.url as string;
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong.");
      setLoading(false);
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={startCheckout}
        disabled={loading}
        className={className ?? "btn-primary w-full"}
        aria-busy={loading}
      >
        {loading ? "Redirecting…" : label}
      </button>
      {error && (
        <p role="alert" className="mt-2 text-sm text-signal">
          {error}
        </p>
      )}
    </div>
  );
}

import Link from "next/link";
import PurchaseTracker from "../components/PurchaseTracker";

/**
 * Post-checkout success page. Fires the Purchase event on the shared pixels.
 * For accurate value/currency, read the Stripe session server-side using the
 * session_id query param (see tracking/README.md) and pass real numbers in.
 */
export default function SuccessPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-mist px-5">
      <PurchaseTracker />
      <div className="max-w-lg rounded-2xl border border-sand bg-white p-10 text-center shadow-sm">
        <div className="text-4xl">✓</div>
        <h1 className="mt-4 text-2xl font-bold text-ink">You&apos;re all set</h1>
        <p className="mt-3 text-slate">
          Thank you for your order. A confirmation with honest shipping times is on
          its way to your inbox. Your 14-day protocol is in the box — start with
          Days 1–3 and go slow.
        </p>
        <Link href="/" className="btn-primary mt-8">
          Back to home
        </Link>
      </div>
    </main>
  );
}

import Link from "next/link";

/** Checkout cancelled — soft return, no dark patterns. */
export default function CancelPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-mist px-5">
      <div className="max-w-lg rounded-2xl border border-sand bg-white p-10 text-center shadow-sm">
        <h1 className="text-2xl font-bold text-ink">No worries</h1>
        <p className="mt-3 text-slate">
          Your checkout was cancelled and you weren&apos;t charged. NeckReset comes
          with a 30-night guarantee whenever you&apos;re ready.
        </p>
        <Link href="/#offer" className="btn-primary mt-8">
          Back to the offer
        </Link>
      </div>
    </main>
  );
}

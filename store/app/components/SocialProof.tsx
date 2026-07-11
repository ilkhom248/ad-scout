import { socialProof } from "../lib/copy";

/**
 * Social proof — REAL reviews only. Placeholders are explicit and must be
 * replaced by the owner with genuine reviews/UGC. No fabricated advertorial
 * characters (the whole niche is mined with Hugterra fakes — we go the
 * opposite way).
 */
export default function SocialProof() {
  return (
    <section id="reviews" className="section bg-mist">
      <div className="container-x">
        <h2 className="h2">{socialProof.heading}</h2>
        <p className="mt-2 text-sm text-slate">{socialProof.disclaimer}</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {socialProof.placeholders.map((p) => (
            <div
              key={p}
              className="flex min-h-[9rem] items-center justify-center rounded-2xl border border-dashed border-slate/40 bg-white p-6 text-center text-sm italic text-slate/70"
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { mechanism } from "../lib/copy";

/** Named mechanism — the core differentiator vs massagers. */
export default function Mechanism() {
  return (
    <section id="mechanism" className="section bg-white">
      <div className="container-x">
        <p className="text-sm font-semibold uppercase tracking-widest text-calm">
          The mechanism
        </p>
        <h2 className="h2 mt-2">{mechanism.heading}</h2>
        <p className="mt-2 text-lg font-semibold text-calm">{mechanism.name}</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {mechanism.points.map((point) => (
            <div
              key={point}
              className="rounded-2xl border border-sand bg-mist p-6 text-ink"
            >
              {point}
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-lg text-slate">{mechanism.differentiator}</p>
      </div>
    </section>
  );
}

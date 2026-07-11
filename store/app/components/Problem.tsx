import { problem } from "../lib/copy";

/** Problem / agitate — the 45° = ~22 kg load fact, honestly framed. */
export default function Problem() {
  return (
    <section id="problem" className="section bg-mist">
      <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="h2">{problem.heading}</h2>
          <p className="mt-4 text-slate">{problem.timelapse}</p>
          <ul className="mt-6 space-y-3">
            {problem.body.map((line) => (
              <li key={line} className="flex gap-3 text-ink">
                <span aria-hidden className="mt-1 text-signal">
                  —
                </span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>

        <figure className="rounded-2xl border border-sand bg-white p-8 text-center shadow-sm">
          <div className="text-6xl font-extrabold text-calm">{problem.loadFact.stat}</div>
          <figcaption className="mt-2 text-lg font-semibold text-ink">
            {problem.loadFact.equals}
          </figcaption>
          <p className="mt-3 text-sm text-slate">{problem.loadFact.note}</p>
          <p className="mt-4 text-xs italic text-slate/70">
            3D load illustration placeholder — owner adds real visual.
          </p>
        </figure>
      </div>
    </section>
  );
}

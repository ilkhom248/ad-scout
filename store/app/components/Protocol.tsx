import { protocol } from "../lib/copy";

/** 14-day protocol — the thing nobody else in the niche ships. */
export default function Protocol() {
  return (
    <section id="protocol" className="section bg-sand/40">
      <div className="container-x">
        <h2 className="h2">{protocol.heading}</h2>
        <p className="mt-4 max-w-3xl text-slate">{protocol.body}</p>

        <ol className="mt-8 grid gap-4 sm:grid-cols-3">
          {protocol.days.map((d, i) => (
            <li
              key={d.range}
              className="rounded-2xl border border-sand bg-white p-6 shadow-sm"
            >
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-extrabold text-calm">{i + 1}</span>
                <span className="text-sm font-semibold uppercase tracking-wide text-slate">
                  {d.range}
                </span>
              </div>
              <div className="mt-2 font-semibold text-ink">{d.label}</div>
              <p className="mt-2 text-sm text-slate">{d.note}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

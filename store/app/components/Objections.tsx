import { objections } from "../lib/copy";

/**
 * Objections — safety first (the #1 anxiety), then an honest "who it's NOT
 * for" block, effectiveness, and the price anchor. The honest narrowing is
 * intentional: it builds trust in everything else on the page.
 */
export default function Objections() {
  const items = [objections.safety, objections.effectiveness, objections.price];

  return (
    <section id="objections" className="section bg-white">
      <div className="container-x">
        <h2 className="h2">{objections.heading}</h2>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.q} className="rounded-2xl border border-sand bg-mist p-6">
              <h3 className="font-semibold text-ink">{item.q}</h3>
              <p className="mt-2 text-sm text-slate">{item.a}</p>
            </div>
          ))}
        </div>

        {/* Honest "who it's NOT for" — safety narrowing */}
        <div className="mt-6 rounded-2xl border-l-4 border-signal bg-signal/5 p-6">
          <h3 className="font-semibold text-ink">{objections.notForYou.heading}</h3>
          <p className="mt-2 text-slate">{objections.notForYou.body}</p>
        </div>
      </div>
    </section>
  );
}

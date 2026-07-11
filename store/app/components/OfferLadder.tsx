import { offer } from "../lib/copy";
import type { TierId } from "../lib/products";
import CheckoutButton from "./CheckoutButton";

/** Offer ladder — 3 tiers, Day Kit highlighted. Honest physio price anchor. */
export default function OfferLadder() {
  return (
    <section id="offer" className="section bg-white">
      <div className="container-x">
        <h2 className="h2 text-center">{offer.heading}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-slate">
          {offer.priceAnchor}
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {offer.tiers.map((tier) => (
            <div
              key={tier.id}
              className={
                "relative flex flex-col rounded-2xl border bg-white p-7 shadow-sm " +
                (tier.highlight
                  ? "border-signal ring-2 ring-signal"
                  : "border-sand")
              }
            >
              {tier.highlight && "badge" in tier && tier.badge && (
                <span className="absolute -top-3 left-7 rounded-full bg-signal px-3 py-1 text-xs font-semibold text-white">
                  {tier.badge}
                </span>
              )}
              <h3 className="text-lg font-bold text-ink">{tier.name}</h3>
              <div className="mt-2 text-3xl font-extrabold text-calm">{tier.price}</div>
              <p className="mt-2 text-sm text-slate">{tier.blurb}</p>

              <ul className="mt-5 flex-1 space-y-2 text-sm text-ink">
                {tier.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span aria-hidden className="text-calm">
                      ✓
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <CheckoutButton tier={tier.id as TierId} label={tier.cta} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

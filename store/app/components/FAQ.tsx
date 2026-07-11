import { faq } from "../lib/copy";

/** FAQ — scariest question first (safety), native <details> for zero-JS a11y. */
export default function FAQ() {
  return (
    <section id="faq" className="section bg-mist">
      <div className="container-x max-w-3xl">
        <h2 className="h2">{faq.heading}</h2>
        <div className="mt-8 divide-y divide-sand">
          {faq.items.map((item) => (
            <details key={item.q} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink">
                {item.q}
                <span
                  aria-hidden
                  className="text-signal transition group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-slate">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

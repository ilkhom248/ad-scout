import { disclaimer, footer } from "../lib/copy";

/** Mandatory disclaimer + contraindications, in the footer of every page. */
export default function DisclaimerFooter() {
  return (
    <footer id="disclaimer" className="bg-ink text-white/80">
      <div className="container-x py-14">
        <h2 className="text-lg font-bold text-white">{disclaimer.heading}</h2>
        <div className="mt-4 space-y-3 text-sm leading-relaxed">
          {disclaimer.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <hr className="my-8 border-white/15" />

        <div className="flex flex-col gap-2 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <span>{footer.brandLine}</span>
          <span className="italic">{footer.contactPlaceholder}</span>
        </div>
      </div>
    </footer>
  );
}

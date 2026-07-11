import { guarantee } from "../lib/copy";

/** 30-night risk reversal. */
export default function Guarantee() {
  return (
    <section id="guarantee" className="section bg-calm text-white">
      <div className="container-x max-w-3xl text-center">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          {guarantee.heading}
        </h2>
        <p className="mt-4 text-white/85">{guarantee.body}</p>
      </div>
    </section>
  );
}

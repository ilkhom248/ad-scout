import { hero } from "../lib/copy";

/**
 * Above-fold: hook + one-line named mechanism + CTA.
 * Rating is a REAL_REVIEW_PLACEHOLDER — no fabricated star counts.
 */
export default function Hero() {
  return (
    <header className="relative overflow-hidden bg-calm text-white">
      <div className="container-x grid gap-10 py-16 sm:py-24 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/70">
            {hero.eyebrow}
          </p>
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            {hero.headline}
          </h1>
          <p className="mt-4 max-w-xl text-lg font-medium text-white/90">
            {hero.mechanismLine}
          </p>
          <p className="mt-3 max-w-xl text-white/75">{hero.sub}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#offer" className="btn-primary">
              {hero.ctaPrimary}
            </a>
            <a
              href="#mechanism"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-medium text-white transition hover:border-white/80"
            >
              {hero.ctaSecondary}
            </a>
          </div>

          <p className="mt-4 text-sm text-white/70">{hero.underCta}</p>
          <p className="mt-2 text-xs italic text-white/50">{hero.ratingPlaceholder}</p>
        </div>

        {/* Product visual placeholder — owner replaces with real device photo/video */}
        <div
          className="flex aspect-[4/3] items-center justify-center rounded-2xl border border-white/20 bg-white/5 text-center text-sm text-white/60"
          role="img"
          aria-label="NeckReset device — 6-second autoplay demo placeholder (owner adds real media)"
        >
          Product media placeholder
          <br />
          (6s autoplay demo — owner adds real footage)
        </div>
      </div>
    </header>
  );
}

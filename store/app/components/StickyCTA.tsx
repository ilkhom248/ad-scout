import { hero } from "../lib/copy";

/** Sticky mobile CTA — jumps to the offer ladder. Hidden on desktop. */
export default function StickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-sand bg-white/95 p-3 backdrop-blur sm:hidden">
      <a href="#offer" className="btn-primary w-full">
        {hero.ctaPrimary}
      </a>
    </div>
  );
}

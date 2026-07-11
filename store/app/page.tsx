import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Mechanism from "./components/Mechanism";
import Protocol from "./components/Protocol";
import Objections from "./components/Objections";
import SocialProof from "./components/SocialProof";
import OfferLadder from "./components/OfferLadder";
import Guarantee from "./components/Guarantee";
import FAQ from "./components/FAQ";
import DisclaimerFooter from "./components/DisclaimerFooter";
import StickyCTA from "./components/StickyCTA";
import ViewContentTracker from "./components/ViewContentTracker";

/**
 * NeckReset landing — structure per the launch brief:
 * above-fold → problem/agitate → named mechanism → 14-day protocol →
 * objections (safety + "who it's NOT for") → social proof (placeholders) →
 * offer ladder → guarantee → FAQ → disclaimer/contraindications footer.
 */
export default function Page() {
  return (
    <main className="pb-20 sm:pb-0">
      <ViewContentTracker />
      <Hero />
      <Problem />
      <Mechanism />
      <Protocol />
      <Objections />
      <SocialProof />
      <OfferLadder />
      <Guarantee />
      <FAQ />
      <DisclaimerFooter />
      <StickyCTA />
    </main>
  );
}

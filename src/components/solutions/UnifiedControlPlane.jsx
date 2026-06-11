import HeroSection from "./unified-control-plane/HeroSection.jsx";
import ProblemOverview from "./unified-control-plane/ProblemOverview.jsx";
import ChallengesSolutions from "./unified-control-plane/ChallengesSolutions.jsx";
import MessagePillars from "./unified-control-plane/MessagePillars.jsx";
import ReadyToChange from "./unified-control-plane/ReadyToChange.jsx";

function UnifiedControlPlane() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <ProblemOverview />
      <ChallengesSolutions />
      <MessagePillars />
      <ReadyToChange />
    </main>
  );
}

export default UnifiedControlPlane;

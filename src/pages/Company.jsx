import HeroSection from "../components/company/HeroSection.jsx";
import LeadershipTeam from "../components/company/LeadershipTeam.jsx";
import Mission from "../components/company/Mission.jsx";
import OurStory from "../components/company/OurStory.jsx";
import ReadyToChange from "../components/company/ReadyToChange.jsx";

function Company() {
  return (
    <>
      {/* Wrap the entire page in a flex column to maintain vertical flow */}
      <main className="flex flex-col">
        <HeroSection />
        <LeadershipTeam />
        <Mission />
        <OurStory />
        <ReadyToChange />
      </main>
    </>
  );
}

export default Company;
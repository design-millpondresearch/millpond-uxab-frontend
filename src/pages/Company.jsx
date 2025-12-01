import HeroSection from "../components/company/HeroSection.jsx";
import LeadershipTeam from "../components/company/LeadershipTeam.jsx";
import Mission from "../components/company/Mission.jsx";

function Company() {
  return (
    <>
      <main className="flex flex-col">
        <HeroSection />
        <LeadershipTeam />
        <Mission />
      </main>
    </>
  );
}

export default Company;


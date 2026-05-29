import HeroSection from "./workbench/HeroSection.jsx";
import Revolutionize from "./workbench/Revolutionize.jsx";
import Usages from "./workbench/Usages.jsx";
import FAQ from "./workbench/FAQ.jsx";
import ReadyToChange from "./workbench/ReadyToChange.jsx";
import PricingTable from "../../components/pricing/PricingTable.jsx";

function Workbench() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <Revolutionize />
      <Usages />
      <PricingTable inline />
      <FAQ />
      <ReadyToChange />
    </main>
  );
}

export default Workbench;
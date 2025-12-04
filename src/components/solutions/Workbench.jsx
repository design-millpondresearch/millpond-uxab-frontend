import HeroSection from "./workbench/HeroSection.jsx";
import Revolutionize from "./workbench/Revolutionize.jsx";
import Usages from "./workbench/Usages.jsx";
import ReadyToChange from "./workbench/ReadyToChange.jsx";

function Workbench() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <Revolutionize />
      <Usages />
      <ReadyToChange />
    </main>
  );
}

export default Workbench;



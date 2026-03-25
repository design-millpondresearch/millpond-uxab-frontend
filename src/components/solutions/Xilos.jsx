import HeroSection from "./xilos/HeroSection.jsx";
import TameShadowStorm from "./xilos/TameShadowStorm.jsx";
import Usages from "./xilos/Usages.jsx";
import FAQ from "./xilos/FAQ.jsx";
import ReadyToChange from "./xilos/ReadyToChange.jsx";

function Xilos() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <TameShadowStorm />
      <Usages />
      <FAQ />
      <ReadyToChange />
    </main>
  );
}

export default Xilos;



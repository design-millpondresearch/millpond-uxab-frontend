import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Section components for the home page
import HeroSection from "../components/home/HeroSection.jsx";
import StrategyRisksSection from "../components/home/StrategyRisksSection.jsx";
import ApproachSecuritySection from "../components/home/ApproachSecuritySection.jsx";
import RoleCardsSection from "../components/home/RoleCardsSection.jsx";
import NewsHighlightsSection from "../components/home/NewsHighlightsSection.jsx";
import SolutionsSection from "../components/home/SolutionsSection.jsx";
import AdvantagesSection from "../components/home/AdvantagesSection.jsx";
import PartnersSection from "../components/home/PartnersSection.jsx";
import RoiSection from "../components/home/RoiSection.jsx";
import ContactSection from "../components/home/ContactSection.jsx";

// Decorative assets extracted from the Figma design
// These SVGs live under src/assets/decorative.  They are saved as separate files so they
// can be reused anywhere on the site.  To keep the markup semantic, all images have
// empty alt attributes and pointer events disabled so they don’t interfere with user
// interaction.  The position and sizing classes below were chosen to roughly match
// the locations of the blobs, gradients and waves in the Figma PNG.  Feel free to
// tweak the classes to refine the layout.
// Only import the beige gradient block for the home page.  The Figma
// mock‑up for the homepage uses a photographic water texture and a
// simple beige footer band.  To better match that design, we avoid
// overlaying numerous abstract shapes here and just apply a warm
// gradient at the bottom of the page.
import deco13 from "../assets/decorative/element13.svg";

function Home() {
  return (
    <>
      <main className="relative flex flex-col">
      {/* Simple footer gradient: the only decorative element on the home page */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10">
          <img src={deco13} alt="" className="w-full h-40 md:h-56" />
        </div>

        {/* Home page content sections */}
        <HeroSection />
        <StrategyRisksSection />
        <ApproachSecuritySection />
        <RoleCardsSection />
        <NewsHighlightsSection />
        <SolutionsSection />
        <AdvantagesSection />
        <PartnersSection />
        <RoiSection />
        <ContactSection />
      </main>
    </>
  );
}

export default Home;
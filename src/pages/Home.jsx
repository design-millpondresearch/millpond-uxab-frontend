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
import deco1 from "../assets/elements/element1.svg";
import deco2 from "../assets/elements/element2.svg";
import deco3 from "../assets/elements/element3.svg";
import deco4 from "../assets/elements/element4.svg";
import deco5 from "../assets/elements/element5.svg";
import deco6 from "../assets/elements/element6.svg";
import deco8 from "../assets/elements/element8.svg";
import deco10 from "../assets/elements/element10.svg";
import deco11 from "../assets/elements/element11.svg";
import deco12 from "../assets/elements/element12.svg";
import deco13 from "../assets/elements/element13.svg";

function Home() {
  return (
    <>
      <main className="relative flex flex-col">
        {/* Globally-positioned decorative elements.  Setting pointer-events-none and a negative
            z-index ensures they sit behind all page content without intercepting clicks. */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
          {/* Top-right wavy pink gradient */}
          <img src={deco1} alt="" className="absolute top-0 right-0 w-56 md:w-72" />
          {/* Large grey radial blob at top-left */}
          <img src={deco2} alt="" className="absolute top-8 left-0 w-64 md:w-80" />
          {/* Large pale-blue radial blob near top centre */}
          <img src={deco3} alt="" className="absolute top-0 left-1/4 w-56 md:w-72" />
          {/* Blue wave shape along the right side */}
          <img src={deco4} alt="" className="absolute top-1/4 right-0 w-72 md:w-96" />
          {/* Soft semi‑ellipse gradient behind mid‑page content */}
          <img src={deco5} alt="" className="absolute top-1/3 left-1/3 w-64 md:w-80" />
          {/* Smaller pale-blue circle floating mid‑page */}
          <img src={deco6} alt="" className="absolute top-1/2 right-4 w-40 md:w-56" />
          {/* Concentric ring motif along right side */}
          <img src={deco8} alt="" className="absolute top-2/3 right-0 w-56 md:w-72" />
          {/* Beige circular glow near bottom section */}
          <img src={deco10} alt="" className="absolute bottom-1/3 left-1/3 w-64 md:w-80" />
          {/* Rounded rectangle backdrop on lower left */}
          <img src={deco11} alt="" className="absolute top-2/3 left-0 w-80 md:w-96" />
          {/* Faint blue circle at very bottom left */}
          <img src={deco12} alt="" className="absolute bottom-0 left-0 w-64 md:w-80" />
          {/* Large beige gradient block at bottom stretching across page */}
          <img src={deco13} alt="" className="absolute bottom-0 right-0 w-full h-40 md:h-56" />
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
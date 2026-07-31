import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Section components for the home page
import HeroSection from "../components/home/HeroSection.jsx";
import CredibilityBar from "../components/home/CredibilityBar.jsx";
import MagicSection from "../components/home/MagicSection.jsx";
import MarketContext from "../components/home/MarketContext.jsx";
import ProductShowcase from "../components/home/ProductShowcase.jsx";
import FeatureGrid from "../components/home/FeatureGrid.jsx";
import CompetitiveLandscape from "../components/home/CompetitiveLandscape.jsx";
import DeploymentModels from "../components/home/DeploymentModels.jsx";
import PartnersSection from "../components/home/PartnersSection.jsx";
import RoiSection from "../components/home/RoiSection.jsx";
import ContactSection from "../components/home/ContactSection.jsx";

function Home() {
  return (
    <>
      <main className="relative flex flex-col">
        {/* New homepage flow: show the magic, not the words */}
        <HeroSection />
        <CredibilityBar />
        <MagicSection />
        <MarketContext />
        <ProductShowcase />
        <FeatureGrid />
        <CompetitiveLandscape />
        <DeploymentModels />
        <PartnersSection />
        <RoiSection />
        <ContactSection />
      </main>
    </>
  );
}

export default Home;

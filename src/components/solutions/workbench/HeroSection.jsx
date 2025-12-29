import { Link } from 'react-router-dom';

// Import decorative elements used in the WorkBench hero section. These SVGs live in
// src/assets/elements and were extracted from the Figma design. By placing
// them here we avoid duplicating assets across different pages.
import greyBlob from "../../../assets/elements/element2.svg";
import beigeGlow from "../../../assets/elements/element10.svg";

function HeroSection() {
  return (
    <section className="relative regular-banner-blue flex items-center justify-center px-6 md:px-8 lg:px-12 overflow-hidden" style={{ paddingTop: '65px', paddingBottom: '65px' }}>
      
      {/* Off-white gradient blob in center */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(circle 250px at center, rgba(251, 250, 248, 1) 0%, rgba(251, 250, 248, 0.9) 75%, rgba(251, 250, 248, 0.5) 85%, transparent 95%)',
          zIndex: 0,
        }}
      />
      
      {/* Glass orb - top left */}
      <div
        className="pointer-events-none absolute"
        style={{
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.3), inset 0 -1px 0 rgba(0, 0, 0, 0.1)',
          left: '20%',
          top: '40%',
          transform: 'translate(-50%, -50%)',
          zIndex: 4,
        }}
      />
      
      {/* Glass orb - bottom right */}
      <div
        className="pointer-events-none absolute"
        style={{
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.3), inset 0 -1px 0 rgba(0, 0, 0, 0.1)',
          right: '20%',
          bottom: '40%',
          transform: 'translate(50%, 50%)',
          zIndex: 4,
        }}
      />
      
      {/* Decorative shapes behind the hero content */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        {/* Large grey radial glow on the left and warm beige glow on the right mimic the two
            soft circles in the Figma hero without introducing additional motifs. */}
        <img src={greyBlob} alt="" className="absolute top-0 left-0 w-60 md:w-80" />
        <img src={beigeGlow} alt="" className="absolute top-12 left-1/3 w-72 md:w-96" />
      </div>
      <div className="hero-banner-clear flex max-w-7xl flex-col items-center gap-12 text-center relative z-10">
        <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl" style={{ color: "#567C8D" }}>
          WorkBench
        </h1>
        <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl" style={{ color: "#1F4E79" }}>
          Unified Workspace. Efficient Authoring. Tailored Agents.
        </h1>
        <h3 className="subheader w-full max-w-4xl text-sm md:text-xl lg:text-2xl" style={{ color: "#4B4B4B" }}>
          The ultimate AI authoring platform that unifies all models in one customizable, enterprise-ready workspace.
        </h3>
        <div className="mt-4 flex justify-center">
          <Link to="/contactus" className="hero-button-primary">Learn More</Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
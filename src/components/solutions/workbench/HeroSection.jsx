import { Link } from 'react-router-dom';

// Import decorative elements used in the WorkBench hero section. These SVGs live in
// src/assets/elements and were extracted from the Figma design. By placing
// them here we avoid duplicating assets across different pages.
import greyBlob from "../../../assets/elements/element2.svg";
import beigeGlow from "../../../assets/elements/element10.svg";
import workbenchLogo from "../../../assets/workbench-logo-name-blue.svg";

/*
 * This modified WorkBench hero section tweaks the layout and decorative orb
 * implementation to improve cross‑device compatibility. The original
 * implementation used inline styles with a non‑prefixed `backdropFilter`, which
 * is unsupported on older iOS and Android browsers. Here we define a shared
 * glass orb style that includes both the standard and vendor‑prefixed
 * `backdropFilter` property, plus a fallback semi‑opaque background color so
 * the design remains readable when blur filters are unavailable. Spacing has
 * been tuned with responsive Tailwind classes: padding and gaps shrink on
 * small screens but expand on medium/large screens. No visual hierarchy or
 * content has changed.
 */

function HeroSection() {
  // Shared style for glass orbs. Including both standard and vendor‑prefixed
  // properties increases support across browsers. A semi‑transparent
  // `backgroundColor` provides a fallback if blur filters aren’t available.
  const glassOrbBase = {
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    boxShadow:
      '0 12px 40px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.3), inset 0 -1px 0 rgba(0, 0, 0, 0.1)',
    zIndex: 4,
  };

  return (
    <section
      className="relative regular-banner-blue flex items-center justify-center px-4 md:px-6 lg:px-12 overflow-hidden"
      style={{ paddingTop: '65px', paddingBottom: '65px' }}
    >
      {/* Off‑white gradient blob in center */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle 250px at center, rgba(251, 250, 248, 1) 0%, rgba(251, 250, 248, 0.9) 75%, rgba(251, 250, 248, 0.5) 85%, transparent 95%)',
          zIndex: 0,
        }}
      />

      {/* Glass orb – top left */}
      <div
        className="pointer-events-none absolute"
        style={{
          ...glassOrbBase,
          left: '20%',
          top: '40%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Glass orb – bottom right */}
      <div
        className="pointer-events-none absolute"
        style={{
          ...glassOrbBase,
          right: '20%',
          bottom: '40%',
          transform: 'translate(50%, 50%)',
        }}
      />

      <div className="hero-banner-clear flex max-w-7xl flex-col items-center gap-8 md:gap-12 text-center relative z-10">
        <img
          src={workbenchLogo}
          alt="WorkBench"
          className="hero-logo h-40 mx-auto"
        />
        <h1
          className="hero-title text-5xl md:text-7xl lg:text-8xl"
          style={{ color: '#1F4E79' }}
        >
          Unified Workspace. Efficient Authoring. Tailored Agents.
        </h1>
        <h3
          className="subheader w-full max-w-4xl text-sm md:text-xl lg:text-2xl"
          style={{ color: '#4B4B4B' }}
        >
          The ultimate AI authoring platform that unifies all models in one customizable,
          enterprise‑ready workspace.
        </h3>
        <div className="mt-4 flex justify-center">
          <Link to="/contactus" className="hero-button-primary">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
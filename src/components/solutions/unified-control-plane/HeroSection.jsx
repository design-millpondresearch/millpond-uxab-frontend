import { Link } from 'react-router-dom';
import element2 from "../../../assets/elements/element2.svg";
import element10 from "../../../assets/elements/element10.svg";

function HeroSection() {
  return (
    <section
      className="relative regular-banner-blue flex items-center justify-center px-4 md:px-6 lg:px-12 overflow-hidden"
      style={{ paddingTop: '65px', paddingBottom: '65px' }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(circle 250px at center, rgba(251, 250, 248, 1) 0%, rgba(251, 250, 248, 0.9) 75%, rgba(251, 250, 248, 0.5) 85%, transparent 95%)',
          zIndex: 0,
        }}
      />
      <div
        className="pointer-events-none absolute"
        style={{
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.3), inset 0 -1px 0 rgba(0, 0, 0, 0.1)',
          left: '20%',
          top: '40%',
          transform: 'translate(-50%, -50%)',
          zIndex: 4,
        }}
      />
      <div
        className="pointer-events-none absolute"
        style={{
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.3), inset 0 -1px 0 rgba(0, 0, 0, 0.1)',
          right: '20%',
          bottom: '40%',
          transform: 'translate(50%, 50%)',
          zIndex: 4,
        }}
      />
      <img src={element2} alt="" className="pointer-events-none absolute top-0 left-0 w-40 md:w-72 opacity-30" />
      <img src={element10} alt="" className="pointer-events-none absolute bottom-0 right-0 w-40 md:w-72 opacity-30" />

      <div className="hero-banner-clear flex max-w-7xl flex-col items-center gap-8 md:gap-12 text-center relative z-10">
        <h1
          className="hero-title text-5xl md:text-7xl lg:text-8xl"
          style={{ color: '#1F4E79' }}
        >
          Unified Control Plane
        </h1>
        <h3
          className="subheader w-full max-w-4xl text-sm md:text-xl lg:text-2xl"
          style={{ color: '#4B4B4B' }}
        >
          Deploy, secure, orchestrate, and control agentic AI at scale. One platform that unites WorkBench and Xilos into a single operational and governance control plane for your entire agentic AI ecosystem.
        </h3>
        <div className="mt-4 flex justify-center">
          <Link to="/contact" className="hero-button-primary">Request a Demo</Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

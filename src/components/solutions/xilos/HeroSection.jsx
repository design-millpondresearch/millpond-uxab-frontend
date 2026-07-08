import xilosLogo from "../../../assets/xilos-logo-name-blue.svg";

function HeroSection() {
    return (
      <section className="regular-banner-blue flex items-center justify-center px-6 md:px-8 lg:px-12 relative overflow-hidden" style={{ paddingTop: '128px', paddingBottom: '45px' }}>
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
        
        <div className="hero-banner-clear flex max-w-7xl flex-col items-center gap-12 text-center relative z-10">
          <img
          src={xilosLogo}
          alt="Xilos"
          className="hero-logo h-40 mx-auto"
        />

          <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl" style={{ color: "#1F4E79" }}>
            Point your agents at Xilos. We handle the rest.
          </h1>
  
          <h3 className="subheader w-full max-w-4xl text-sm md:text-xl lg:text-2xl" style={{ color: "#4B4B4B" }}>
            Routing. Guardrails. Caching. Workflows. Knowledge. Audit logs. Every LLM call your agents make — secured, optimized, and logged through a single OpenAI-compatible endpoint. Change one URL, get full visibility and control. No SDK. No vendor lock-in.
          </h3>
  
          <div className="mt-4 flex justify-center gap-4 flex-wrap">
            <a href="https://xilos.ai" className="hero-button-primary">Explore Xilos</a>
            <a href="https://xilos.ai/login" className="hero-button-tertiary">Get Started</a>
          </div>
        </div>
      </section>
    );
  }
  
  export default HeroSection;

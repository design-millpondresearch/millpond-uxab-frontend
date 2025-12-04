import { Link } from 'react-router-dom';

function HeroSection() {
    return (
      <section className="regular-banner-blue flex items-center justify-center px-4 pt-24 pb-2 md:px-6 md:pt-24 md:pb-4">
        <div className="hero-banner-clear flex max-w-7xl flex-col items-center gap-12 text-center">
          <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl" style={{ color: "#567C8D" }}>
            Xilos
          </h1>

          <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl" style={{ color: "#1F4E79" }}>
            Extraordinary Efficiency. Real-Time Decisions. Safe and Secure.
          </h1>
  
          <h3 className="subheader w-full max-w-4xl text-sm md:text-xl lg:text-2xl" style={{ color: "#4B4B4B" }}>
            Xilos gives you complete control over your AI agents, protecting sensitive data while maximizing efficiency and business value across your organization.
          </h3>
  
          <div className="mt-4 flex justify-center">
            <Link to="/contactus" className="button-primary">Learn More</Link>
          </div>
        </div>
      </section>
    );
  }
  
  export default HeroSection;


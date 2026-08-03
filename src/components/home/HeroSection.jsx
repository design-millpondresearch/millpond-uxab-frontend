import { Link } from "react-router-dom";
import xilosDashboard from "../../assets/xilos-dashboard.PNG";

function HeroSection() {
  return (
    <section className="hero-dark" style={{ marginTop: '65px' }}>
      <div className="hero-dark-gradient" />
      <div className="hero-dark-grid" />

      <div className="hero-dark-content">
        <h1 className="hero-dark-title">
          Your business runs on AI.
          <br />
          <span className="accent">Xilos runs the AI.</span>
        </h1>
        <p className="hero-dark-subtitle">
          One platform behind every LLM call your company makes — agent routing, governance, cost control, and now full business applications. CRM, email, support, websites, and more, all powered by the same engine. The only platform that does what we do.
        </p>
        <div className="hero-dark-cta">
          <Link to="/contact" className="btn-hero-primary">Request a Demo</Link>
          <Link to="/solutions/xilos" className="btn-hero-ghost">Explore Xilos</Link>
        </div>

        <div className="hero-dashboard">
          <div className="hero-dashboard-frame">
            <img src={xilosDashboard} alt="Xilos dashboard showing real-time AI usage, cost tracking, and model routing" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

import { Link } from "react-router-dom";
import xilosDashboard from "../../assets/xilos-dashboard.PNG";

function HeroSection() {
  return (
    <section className="hero-dark" style={{ marginTop: '65px' }}>
      <div className="hero-dark-gradient" />
      <div className="hero-dark-grid" />

      <div className="hero-dark-content">
        <h1 className="hero-dark-title">
          Point your agents at Xilos.
          <br />
          <span className="accent">We handle the rest.</span>
        </h1>
        <p className="hero-dark-subtitle">
          Routing. Guardrails. Caching. Cost visibility. Audit logs. Every LLM call your agents make — secured, optimized, and logged through a single OpenAI-compatible endpoint. The only platform that does all of this.
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

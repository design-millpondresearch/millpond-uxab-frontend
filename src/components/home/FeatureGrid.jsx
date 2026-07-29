import eye from "../../assets/icons/eye.svg";
import enhanced_security from "../../assets/icons/enhanced_security.svg";
import orchestrate from "../../assets/icons/orchestrate1.svg";
import connect from "../../assets/icons/connect.svg";
import organizational_intelligence from "../../assets/icons/organizational_intelligence.svg";
import regulatory_compliance from "../../assets/icons/regulatory_compliance.svg";

const features = [
  {
    icon: eye,
    title: "Complete Visibility",
    body: "Real-time insight into token usage, model spend, and compliance by user and department.",
  },
  {
    icon: enhanced_security,
    title: "Intent-Based Security",
    body: "Behavior-based governance understands intent and enforces policy at the prompt layer.",
  },
  {
    icon: orchestrate,
    title: "Smart Routing",
    body: "Route every query to the right model based on cost, latency, or capability. Define rules in natural language.",
  },
  {
    icon: connect,
    title: "Semantic Cache",
    body: "Patented caching that learns from every interaction. Cache hits bypass LLMs entirely — 60-73% lower costs.",
  },
  {
    icon: organizational_intelligence,
    title: "Knowledge That Compounds",
    body: "Every answered query becomes a searchable asset. Your agents' collective experience grows automatically.",
  },
  {
    icon: regulatory_compliance,
    title: "Regulatory Compliance",
    body: "Modular rule engine with vertical-specific controls for GDPR, HIPAA, and more. Built for audit.",
  },
];

function FeatureGrid() {
  return (
    <section className="dark-section">
      <h2>Everything your agents need.</h2>
      <p className="dark-sub">
        One platform for routing, caching, guardrails, and cost visibility — with an API your agents already speak.
      </p>

      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((f) => (
          <div key={f.title} className="feature-card-dark">
            <div className="feature-icon-dark">
              <img src={f.icon} alt="" />
            </div>
            <h3>{f.title}</h3>
            <p>{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeatureGrid;

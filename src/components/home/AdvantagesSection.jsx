import rapid_development from "../../assets/icons/rapid_development.svg";
import eye from "../../assets/icons/eye.svg";
import enhanced_security from "../../assets/icons/enhanced_security.svg";
import organizational_intelligence from "../../assets/icons/organizational_intelligence.svg";
import regulatory_compliance from "../../assets/icons/regulatory_compliance.svg";
import ai_gov_ecosystem from "../../assets/icons/ai_gov_ecosystem.svg";

const advantages = [
  {
    title: "Rapid Development",
    body: "Accelerate production cycles to minimize time-to-value",
    icon: rapid_development,
  },
  {
    title: "Complete Visibility",
    body: "Know exactly what's happening in your AI ecosystem",
    icon: eye,
  },
  {
    title: "Enhanced Security",
    body: "Automatically protect your most valuable information",
    icon: enhanced_security,
  },
  {
    title: "Organizational Intelligence",
    body: "Convert isolated tools into a unified knowledge network",
    icon: organizational_intelligence,
  },
  {
    title: "Regulatory Compliance",
    body: "Simplify governance with automatic policy enforcement",
    icon: regulatory_compliance,
  },
  {
    title: "AI Governance Ecosystem",
    body: "Maximize security, compliance, and business outcomes",
    icon: ai_gov_ecosystem,
  },
];

function AdvantagesSection() {
  return (
    <section className="regular-banner-sand px-4 md:px-6 py-12 md:py-16 relative overflow-hidden">
      {/* Outer ring gradient - top right */}
      <div
        className="pointer-events-none absolute"
        style={{
          width: '800px',
          height: '800px',
          background:
            'radial-gradient(circle, transparent 30%, rgba(86, 124, 141, 0.1) 40%, rgba(86, 124, 141, 0.15) 45%, rgba(86, 124, 141, 0.1) 50%, rgba(86, 124, 141, 0.05) 55%, transparent 70%)',
          borderRadius: '50%',
          right: '15%',
          top: '15%',
          zIndex: 0,
          transform: 'translate(50%, -50%)',
        }}
      />
      {/* Inner ring gradient - top right */}
      <div
        className="pointer-events-none absolute"
        style={{
          width: '550px',
          height: '550px',
          background:
            'radial-gradient(circle, transparent 25%, rgba(86, 124, 141, 0.1) 35%, rgba(86, 124, 141, 0.15) 40%, rgba(86, 124, 141, 0.1) 45%, rgba(86, 124, 141, 0.05) 50%, transparent 65%)',
          borderRadius: '50%',
          right: '15%',
          top: '15%',
          zIndex: 0,
          transform: 'translate(50%, -50%)',
        }}
      />

      {/* Outer ring gradient - bottom left */}
      <div
        className="pointer-events-none absolute"
        style={{
          width: '800px',
          height: '800px',
          background:
            'radial-gradient(circle, transparent 30%, rgba(86, 124, 141, 0.1) 40%, rgba(86, 124, 141, 0.15) 45%, rgba(86, 124, 141, 0.1) 50%, rgba(86, 124, 141, 0.05) 55%, transparent 70%)',
          borderRadius: '50%',
          left: '15%',
          bottom: '15%',
          zIndex: 0,
          transform: 'translate(-50%, 50%)',
        }}
      />
      {/* Inner ring gradient - bottom left */}
      <div
        className="pointer-events-none absolute"
        style={{
          width: '550px',
          height: '550px',
          background:
            'radial-gradient(circle, transparent 25%, rgba(86, 124, 141, 0.1) 35%, rgba(86, 124, 141, 0.15) 40%, rgba(86, 124, 141, 0.1) 45%, rgba(86, 124, 141, 0.05) 50%, transparent 65%)',
          borderRadius: '50%',
          left: '15%',
          bottom: '15%',
          zIndex: 0,
          transform: 'translate(-50%, 50%)',
        }}
      />

      <div className="mx-auto max-w-6xl relative z-10">
        <div className="mb-8 md:mb-10 text-center">
          <h2 className="section-header text-3xl md:text-4xl lg:text-5xl" style={{ color: "#1F4E79" }}>
            Essential AI Governance Advantages.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center gap-3 rounded-2xl p-4 md:p-6 text-center"
            >
              <div className="h-10 w-10 rounded-full mt-2">
                <img src={item.icon} alt={item.title} className="h-10 w-10" />
              </div>
              <h4 className="subheader" style={{ color: "#1F4E79" }}>
                {item.title}
              </h4>
              <p className="small-font mx-4 mb-2" style={{ color: "#4B4B4B" }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AdvantagesSection;
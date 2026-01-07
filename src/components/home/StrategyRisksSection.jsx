import unified_policies from "../../assets/icons/unified_policies.svg";
import connected_intelligence from "../../assets/icons/connected_intelligence.svg";
import simplified_security from "../../assets/icons/simplified_security.svg";
import future_proof from "../../assets/icons/future-proof.svg";

const risks = [
  {
    title: "Unified Policies",
    body: "Delivers a single source of truth for AI governance and compliance",
    icon: unified_policies,
  },
  {
    title: "Connected Intelligence",
    body: "Breaks down AI silos to create seamless auditing and governance flows",
    icon: connected_intelligence,
  },
  {
    title: "Departmental AI Silos",
    body: "Departmental AI silos that prevent you from realizing the full ROI of your technology investments.",
    icon: simplified_security,
  },
  {
    title: "Future-Proof Management",
    body: "Purpose-built for tomorrow's agent-driven enterprise environment",
    icon: future_proof,
  },
];

function StrategyRisksSection() {
  return (
    <section className="regular-banner-white flex flex-col items-center px-4 md:px-6 py-12 md:py-16">
      {/* Heading */}
      <div className="max-w-7xl text-center mx-auto">
        <h2
          className="section-header mb-4 text-3xl md:text-4xl lg:text-5xl"
          style={{ color: "#1F4E79" }}
        >
          Evolve Your AI Strategy with Complete Control
        </h2>
        <h3
          className="subheader text-base md:text-xl lg:text-2xl"
          style={{ color: "#4B4B4B" }}
        >
          Supercharge your AI initiatives with streamlined management and robust compliance. Mill Pond Research makes AI management complexity a thing of the past:
        </h3>
      </div>

      {/* Grid with radial glow */}
      <div className="relative w-full max-w-6xl mx-auto mt-12 md:mt-16">
        {/* subtle background glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: 'radial-gradient(circle_at_center,_rgba(225,233,243,0.35)_0%,_rgba(255,255,255,0)_70%)',
          }}
        />

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-y-20 gap-x-12 md:gap-x-24 px-4 md:px-8">
          {risks.map((risk) => (
            <div
              key={risk.title}
              className="relative flex flex-col items-center text-center max-w-md mx-auto"
            >
              {/* Radial glow behind each option */}
              <div
                className="pointer-events-none absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(circle at center, rgba(86, 124, 141, 0.15) 0%, rgba(86, 124, 141, 0) 40%)',
                  transform: 'scale(1.0)',
                }}
              />

              {/* Icon 48x48px per Figma */}
              <div className="relative z-10">
                <img
                  src={risk.icon}
                  alt={risk.title}
                  className="w-12 h-12 mb-6"
                />
              </div>

              {/* Subheader — EXACT Figma size 28px */}
              <h4
                className="subheader mb-3 text-center relative z-10"
                style={{ color: "#1F4E79" }}
              >
                {risk.title}
              </h4>

              {/* Body text */}
              <p
                className="small-font md:text-base leading-relaxed text-[#4B4B4B] relative z-10"
              >
                {risk.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StrategyRisksSection;
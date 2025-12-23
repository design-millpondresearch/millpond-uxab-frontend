import eye from "../../assets/logos-general/eye.svg";
import shieldoff from "../../assets/logos-general/shield-off.svg";
import users from "../../assets/logos-general/users.svg";
import lock from "../../assets/logos-general/lock.svg";

const risks = [
  {
    title: "Invisible AI Agents",
    body: "Invisible AI agents operating across your network, accessing sensitive data without your knowledge.",
    icon: eye,
  },
  {
    title: "Security Gaps",
    body: "Security gaps that put your organization at risk as AI tools proliferate beyond IT oversight.",
    icon: shieldoff,
  },
  {
    title: "Departmental AI Silos",
    body: "Departmental AI silos that prevent you from realizing the full ROI of your technology investments.",
    icon: users,
  },
  {
    title: "Data Exposure",
    body: "Customer and proprietary data exposure that could damage trust and compliance.",
    icon: lock,
  },
];

function StrategyRisksSection() {
  return (
    <section className="regular-banner-white flex flex-col items-center px-4 md:px-6 py-16">
      {/* Heading */}
      <div className="max-w-7xl text-center mx-auto">
        <h2
          className="section-header mb-4 text-3xl md:text-4xl lg:text-5xl"
          style={{ color: "#1F4E79" }}
        >
          Evolve Your AI Strategy with Complete Control.
        </h2>
        <h3
          className="subheader text-base md:text-xl lg:text-2xl"
          style={{ color: "#4B4B4B" }}
        >
          Traditional AI management creates hidden risks. Mill Pond turns them into insight.
        </h3>
      </div>

      {/* Grid with radial glow */}
      <div className="relative w-full max-w-6xl mx-auto mt-16">
        {/* subtle background glow */}
        <div
          className="
            pointer-events-none absolute inset-0
            bg-[radial-gradient(circle_at_center,_rgba(225,233,243,0.35)_0%,_rgba(255,255,255,0)_70%)]
          "
        />

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-24 px-4 md:px-8">
          {risks.map((risk) => (
            <div
              key={risk.title}
              className="flex flex-col items-center text-center max-w-md mx-auto"
            >
              {/* Icon 48x48px per Figma */}
              <img
                src={risk.icon}
                alt={risk.title}
                className="w-12 h-12 mb-6"  // 48px = 12 tailwind units
              />

              {/* Subheader — EXACT Figma size 28px */}
              <h4
                className="subheader mb-3 text-center"
                style={{ color: "#1F4E79" }}
              >
                {risk.title}
              </h4>

              {/* Body text */}
              <p
                className="small-font md:text-base leading-relaxed text-[#4B4B4B]"
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

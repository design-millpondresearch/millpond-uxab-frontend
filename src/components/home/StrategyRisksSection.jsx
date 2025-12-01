import eye from "../../assets/eye.svg";
import shieldoff from "../../assets/shield-off.svg";
import users from "../../assets/users.svg";
import lock from "../../assets/lock.svg";


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
    <section className="regular-banner-white flex flex-col items-center">
      {/* Heading */}
      <div className="max-w-4xl text-center">
        <h2 className="section-header mb-4" style={{ color: "#1F4E79" }}>
          Evolve Your AI Strategy with Complete Control.
        </h2>
        <h3 className="subheader" style={{ color: "#4B4B4B" }}>
          Traditional AI management creates hidden risks. Mill Pond turns them into insight.
        </h3>
      </div>

      {/* 2x2 grid */}
      <div className="mt-12 w-full max-w-5xl">
        <div className="grid gap-12 grid-cols-2">
          {risks.map((risks) => (
            <div
              key={risks.title}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full">
                <img src={risks.icon} alt={risks.title} className="h-10 w-10" />
              </div>
              <h4
                className="mb-2 text-xl font-semibold"
                style={{ color: "#1F4E79" }}
              >
                {risks.title}
              </h4>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#4B4B4B" }}
              >
                {risks.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StrategyRisksSection;

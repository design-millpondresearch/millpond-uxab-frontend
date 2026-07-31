const models = [
  {
    title: "SaaS",
    subtitle: "Fully Managed",
    description: "Xilos hosted by MPR. Zero infrastructure. Sign up, change your base_url, and go.",
    badge: "Most Popular",
  },
  {
    title: "VPC",
    subtitle: "Your Cloud",
    description: "Deploy inside your own AWS, Azure, or GCP account. Data never leaves your environment.",
    badge: null,
  },
  {
    title: "On-Premises",
    subtitle: "Your Data Center",
    description: "Run on your own hardware behind your firewall. Complete sovereignty for regulated industries.",
    badge: null,
  },
  {
    title: "Air-Gapped",
    subtitle: "Zero Connectivity",
    description: "Fully isolated, zero external access. Built for defense, intelligence, and classified environments.",
    badge: "Maximum Security",
  },
];

function DeploymentModels() {
  return (
    <section className="light-section" style={{ background: "#fff" }}>
      <h2>Deploy anywhere.</h2>
      <p className="light-sub">
        From fully managed SaaS to air-gapped classified environments — without compromise.
      </p>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {models.map((model) => (
          <div key={model.title} className="market-stat-card relative text-left">
            {model.badge && (
              <span className="absolute top-4 right-4 rounded-full px-2.5 py-1 text-xs font-semibold" style={{ backgroundColor: "#E2ECF4", color: "#1F4E79" }}>
                {model.badge}
              </span>
            )}
            <h4 className="text-xl font-semibold" style={{ color: "#1F4E79", fontFamily: "var(--font-sora)" }}>{model.title}</h4>
            <p className="text-sm font-semibold mb-3" style={{ color: "#567C8D" }}>{model.subtitle}</p>
            <p className="text-sm leading-relaxed" style={{ color: "#4B4B4B", fontFamily: "var(--font-geist)" }}>{model.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DeploymentModels;

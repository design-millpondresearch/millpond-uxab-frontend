const models = [
  {
    title: "SaaS",
    subtitle: "Fully Managed",
    description:
      "Xilos hosted and managed by MPR. Zero infrastructure to maintain. Fastest path to value \u2014 sign up, change your base_url, and go.",
    badge: "Most Popular",
  },
  {
    title: "VPC",
    subtitle: "Your Cloud",
    description:
      "Deploy Xilos inside your own virtual private cloud on AWS, Azure, or GCP. Data never leaves your environment. Full control, zero vendor lock-in.",
    badge: null,
  },
  {
    title: "On-Premises",
    subtitle: "Your Data Center",
    description:
      "Run Xilos on your own hardware behind your firewall. Complete sovereignty for regulated industries and air-gapped-adjacent environments.",
    badge: null,
  },
  {
    title: "Air-Gapped",
    subtitle: "Zero Connectivity",
    description:
      "Fully isolated deployment with zero external network access. Built for defense, intelligence, and classified environments where no traffic egresses.",
    badge: "Maximum Security",
  },
];

function DeploymentModels() {
  return (
    <section className="regular-banner-sand px-4 md:px-6 py-12 md:py-16 relative overflow-hidden">
      {/* Center blob gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 1500px 150% at center center, rgba(86, 124, 141, 0.12) 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="mb-8 md:mb-10 text-center">
          <h2
            className="section-header text-3xl md:text-4xl lg:text-5xl"
            style={{ color: "#1F4E79" }}
          >
            Deploy Anywhere
          </h2>
          <h3 className="subheader" style={{ color: "#4B4B4B" }}>
            From fully managed SaaS to air-gapped classified environments &mdash; Xilos meets your security and compliance requirements without compromise.
          </h3>
        </div>

        {/* Deployment cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {models.map((model) => (
            <div
              key={model.title}
              className="flex flex-col rounded-2xl bg-white p-6 md:p-8 text-center shadow-sm ring-1 ring-[#E5E7EB] drop-shadow hover:drop-shadow-lg transition-all duration-300 relative"
            >
              {model.badge && (
                <span
                  className="absolute top-4 right-4 rounded-full px-2.5 py-1 text-xs font-semibold"
                  style={{ backgroundColor: "#E2ECF4", color: "#1F4E79" }}
                >
                  {model.badge}
                </span>
              )}

              <h4
                className="subheader text-2xl"
                style={{ color: "#1F4E79" }}
              >
                {model.title}
              </h4>
              <p
                className="small-font text-sm font-semibold mb-4"
                style={{ color: "#567C8D" }}
              >
                {model.subtitle}
              </p>
              <p
                className="small-font text-sm leading-relaxed"
                style={{ color: "#4B4B4B" }}
              >
                {model.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DeploymentModels;

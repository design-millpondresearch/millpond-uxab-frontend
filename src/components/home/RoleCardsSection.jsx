const roles = [
  {
    title: "For the CISO & GRC teams",
    description:
      "Create AI policy guardrails that ensure workforce safety across assistants and agents.",
  },
  {
    title: "For Policy Leadership",
    description:
      "Create industry-relevant data and content guidelines that keep prompts compliant.",
  },
  {
    title: "For IT Leadership & GovOps",
    description:
      "Provide visibility into AI agent behavior across systems with actionable insights.",
  },
];

function RoleCardsSection() {
  return (
    <section className="regular-banner-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="section-header" style={{ color: "#1F4E79" }}>
            Every Role Faces a Different Challenge.
          </h2>
          <h3 className="subheader" style={{ color: "#4B4B4B" }}>
            See how Mill Pond Research empowers your team.
          </h3>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {roles.map((role) => (
            <div
              key={role.title}
              className="rounded-2xl bg-white p-6 text-left shadow-sm ring-1 ring-[#E5E7EB]"
            >
              <h4 className="mb-2 text-xl font-semibold" style={{ color: "#1F4E79" }}>
                {role.title}
              </h4>
              <p className="text-sm leading-relaxed" style={{ color: "#4B4B4B" }}>
                {role.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RoleCardsSection;

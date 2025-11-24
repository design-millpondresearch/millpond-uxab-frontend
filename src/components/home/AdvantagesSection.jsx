const advantages = [
  {
    title: "Visibility",
    body: "Full oversight of assistant activity and data movement across your environment.",
  },
  {
    title: "Protection",
    body: "Enforce data masking, prompt guardrails, and policy compliance in real time.",
  },
  {
    title: "Unify",
    body: "Connect AI governance with your existing enterprise security stack and workflows.",
  },
  {
    title: "Compliance",
    body: "Continuous controls to meet industry and regulatory requirements with confidence.",
  },
  {
    title: "Ecosystem",
    body: "Works across assistants, agents, and data sources to keep teams aligned.",
  },
  {
    title: "Optimize",
    body: "Insights to reduce AI cost while improving usage quality and safety.",
  },
];

function AdvantagesSection() {
  return (
    <section className="regular-banner-sand px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="section-header" style={{ color: "#1F4E79" }}>
            Essential AI Governance Advantages.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-3 rounded-2xl bg-white p-6 text-left shadow-sm ring-1 ring-[#E5E7EB]"
            >
              <div className="h-10 w-10 rounded-full bg-[#E2ECF4]" />
              <h4 className="text-lg font-semibold" style={{ color: "#1F4E79" }}>
                {item.title}
              </h4>
              <p className="text-sm leading-relaxed" style={{ color: "#4B4B4B" }}>
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

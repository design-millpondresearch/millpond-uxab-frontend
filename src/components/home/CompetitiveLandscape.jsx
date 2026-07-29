const tiers = [
  {
    tier: "Tier 1",
    title: "Hyperscaler Features",
    players: "Microsoft, AWS, Google",
    problem:
      "Cloud providers bolt AI governance onto their existing platforms. Their governance exists to keep you locked into their cloud \u2014 no cost optimization, no cross-model routing, no real orchestration.",
    counter: "Microsoft built a smoke detector. We built the fire department.",
  },
  {
    tier: "Tier 2",
    title: "Acquired Point Solutions",
    players: "Lakera / Check Point, Galileo / Cisco",
    problem:
      "Once-independent AI security startups absorbed by networking giants. Research output has stalled, specialized focus is lost, and roadmaps are dictated by acquirers.",
    counter: "Lakera isn\u2019t Lakera anymore.",
  },
  {
    tier: "Tier 3",
    title: "Independent Specialists",
    players: "HiddenLayer, MPR / Xilos",
    problem:
      "HiddenLayer is the most active researcher, but they diagnose \u2014 they don\u2019t deploy. No orchestration layer, no application layer, no cost optimization. Research stops at the report.",
    counter: "Research firms diagnose. Platforms deploy.",
  },
];

function CompetitiveLandscape() {
  return (
    <section className="regular-banner-white px-4 md:px-6 py-12 md:py-16 relative overflow-hidden">
      {/* Top right ellipse gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 1500px 150% at right top, rgba(86, 124, 141, 0.15) 0%, transparent 70%)",
          right: 0,
          top: 0,
        }}
      />
      {/* Bottom left ellipse gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 1500px 150% at left bottom, rgba(86, 124, 141, 0.15) 0%, transparent 70%)",
          left: 0,
          bottom: 0,
        }}
      />

      <div className="mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="mb-8 md:mb-10 text-center">
          <h2
            className="section-header text-3xl md:text-4xl lg:text-5xl"
            style={{ color: "#1F4E79" }}
          >
            The Competitive Landscape
          </h2>
          <h3 className="subheader" style={{ color: "#4B4B4B" }}>
            Everyone else gives you pieces. Xilos is the only independent platform that combines security, routing, cost optimization, and orchestration.
          </h3>
        </div>

        {/* Tier cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {tiers.map((t) => (
            <div
              key={t.tier}
              className="flex flex-col rounded-2xl bg-[#F5EFE7] p-6 md:p-8 shadow-sm ring-1 ring-[#E5E7EB] drop-shadow hover:drop-shadow-lg transition-all duration-300"
            >
              {/* Tier badge */}
              <span
                className="inline-block self-start rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ backgroundColor: "#E2ECF4", color: "#1F4E79" }}
              >
                {t.tier}
              </span>

              <h4
                className="subheader text-xl md:text-2xl mb-1"
                style={{ color: "#1F4E79" }}
              >
                {t.title}
              </h4>
              <p
                className="small-font text-sm mb-4"
                style={{ color: "#567C8D" }}
              >
                {t.players}
              </p>

              <p
                className="small-font text-sm leading-relaxed mb-6"
                style={{ color: "#4B4B4B" }}
              >
                {t.problem}
              </p>

              {/* Xilos counter — emphasized */}
              <div
                className="mt-auto rounded-xl px-4 py-4 border-l-4"
                style={{
                  backgroundColor: "#E2ECF4",
                  borderColor: "#1F4E79",
                }}
              >
                <p
                  className="small-font-bold text-base md:text-lg italic"
                  style={{ color: "#1F4E79" }}
                >
                  {t.counter}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CompetitiveLandscape;

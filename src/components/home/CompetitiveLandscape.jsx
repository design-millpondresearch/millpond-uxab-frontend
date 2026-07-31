const tiers = [
  {
    tier: "Tier 1",
    title: "Hyperscaler Features",
    players: "Microsoft, AWS, Google",
    problem: "AI governance exists to keep you locked into their cloud. No cost optimization, no cross-model routing, no real orchestration.",
    counter: "Microsoft built a smoke detector. We built the fire department.",
  },
  {
    tier: "Tier 2",
    title: "Acquired Point Solutions",
    players: "Lakera / Check Point, Galileo / Cisco",
    problem: "Independent startups absorbed by networking giants. Research stalled, focus lost, roadmaps dictated by acquirers.",
    counter: "Lakera isn't Lakera anymore.",
  },
  {
    tier: "Tier 3",
    title: "Independent Specialists",
    players: "HiddenLayer, MPR / Xilos",
    problem: "HiddenLayer is the most active researcher, but they diagnose — they don't deploy. No orchestration, no application layer, no cost optimization.",
    counter: "Research firms diagnose. Platforms deploy.",
  },
];

function CompetitiveLandscape() {
  return (
    <section className="light-section" style={{ background: "#F5EFE7" }}>
      <h2>Every competitor solves part of the problem. Xilos solves all of it.</h2>
      <p className="light-sub">
        The AI governance market has three tiers. Only one company spans all three.
      </p>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-5">
        {tiers.map((t) => (
          <div key={t.tier} className="compact-tier-card">
            <span className="compact-tier-badge">{t.tier}</span>
            <h4 className="compact-tier-title">{t.title}</h4>
            <p className="compact-tier-players">{t.players}</p>
            <p className="text-sm leading-relaxed" style={{ color: "#4B4B4B", fontFamily: "var(--font-geist)" }}>
              {t.problem}
            </p>
            <div className="compact-tier-counter">{t.counter}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CompetitiveLandscape;

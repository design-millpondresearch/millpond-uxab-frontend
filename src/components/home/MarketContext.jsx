const stats = [
  { figure: "68%", label: "Shadow AI", detail: "of employees use unauthorized AI tools you can't see", source: "Gartner 2025" },
  { figure: "22x", label: "Spending Surge", detail: "enterprise AI spend: $1.7B → $37B in two years", source: "IDC 2025" },
  { figure: "84%", label: "Stuck in Pilot", detail: "of AI deployments never reach production", source: "Gartner 2025" },
  { figure: "40%+", label: "Canceled by 2027", detail: "of agentic AI projects per Gartner, due to cost and risk", source: "Gartner 2026" },
];

function MarketContext() {
  return (
    <section className="light-section" style={{ background: "#F5EFE7" }}>
      <h2>The market has moved.</h2>
      <p className="light-sub">
        The question is no longer "should we use AI?" — it's "how do we control, optimize, and monetize the AI we're already using?"
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((stat) => (
          <div key={stat.label} className="market-stat-card">
            <p className="market-stat-figure">{stat.figure}</p>
            <p className="market-stat-label">{stat.label}</p>
            <p className="market-stat-detail">{stat.detail}</p>
            <p className="market-stat-source">{stat.source}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MarketContext;

const metrics = [
  { label: "Cost Reduction", icon: "60-73%" },
  { label: "Reduction in Data Risk", icon: "100%" },
  { label: "Vendor Lock-In", icon: "0" },
];

function RoiSection() {
  return (
    <section className="dark-section">
      <h2>Measurable impact.</h2>
      <p className="dark-sub">
        Efficiency, security, and cost control at scale.
      </p>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-center gap-6">
        {metrics.map((m) => (
          <div key={m.label} className="flex items-center gap-4 px-8 py-6 rounded-2xl" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(200,217,230,0.08)" }}>
            <span className="text-3xl font-bold" style={{ color: "#C8D9E6", fontFamily: "var(--font-sora)" }}>{m.icon}</span>
            <span className="text-base font-medium" style={{ color: "rgba(255,255,255,0.8)", fontFamily: "var(--font-sora)" }}>{m.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RoiSection;

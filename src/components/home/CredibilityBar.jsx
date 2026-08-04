const stats = [
  { value: "18+", label: "LLM Providers" },
  { value: "60-73%", label: "Lower Token Costs" },
  { value: "<1ms", label: "Cache Response Time" },
  { value: "100%", label: "OpenAI-Compatible" },
];

const credentials = [
  { label: "AI Gateway Technology", detail: "9-step orchestration pipeline" },
  { label: "IBM Silver Business Partner", detail: "Enterprise go-to-market" },
  { label: "TechCrunch Battlefield 200", detail: "Class of 2025" },
];

function CredibilityBar() {
  return (
    <>
      {/* Dark stat bar — flows from hero */}
      <div className="stat-bar-dark">
        <div className="stat-bar-dark-grid">
          {stats.map((s) => (
            <div key={s.label} className="stat-bar-item">
              <div className="stat-bar-number">{s.value}</div>
              <div className="stat-bar-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Light credibility bar */}
      <section className="px-6 py-10 border-b border-[#E5E7EB] bg-white">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: "#567C8D" }}>
            Trusted & Recognized
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
            {credentials.map((cred) => (
              <div key={cred.label} className="text-center">
                <p className="text-base md:text-lg font-semibold" style={{ color: "#1F4E79", fontFamily: "var(--font-sora)" }}>
                  {cred.label}
                </p>
                <p className="text-sm mt-0.5" style={{ color: "#4B4B4B", fontFamily: "var(--font-geist)" }}>
                  {cred.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default CredibilityBar;

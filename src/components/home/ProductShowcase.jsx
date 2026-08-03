import xilosDashboard from "../../assets/xilos-dashboard.PNG";

function ProductShowcase() {
  return (
    <section className="light-section" style={{ background: "#fff" }}>
      <h2>See your AI. Control your AI.</h2>
      <p className="light-sub">
        Xilos sits between your agents and every LLM provider. One base_url change gives you real-time visibility, governance, and cost control.
      </p>

      {/* Xilos — full-width showcase */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center mb-12">
        <div className="rounded-2xl overflow-hidden shadow-lg border border-[#E5E7EB]">
          <img src={xilosDashboard} alt="Xilos dashboard — real-time token usage, cost tracking, model routing" className="w-full h-auto block" />
        </div>
        <div className="text-left px-2">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#567C8D" }}>Xilos — The Platform</p>
          <h3 className="text-2xl md:text-3xl font-semibold mb-3" style={{ color: "#1F4E79", fontFamily: "var(--font-sora)" }}>
            Observe, Secure, Orchestrate
          </h3>
          <p className="text-base mb-4" style={{ color: "#4B4B4B", fontFamily: "var(--font-geist)", lineHeight: 1.6 }}>
            Real-time visibility into token usage by user, department, and routing rule. Behavior-aware governance at the prompt layer. Patented semantic caching that cuts costs 60-73%. Works with any model — bring your own keys, self-hostable.
          </p>
          <div className="flex gap-3">
            <a href="https://xilos.ai" className="button-primary">Explore Xilos</a>
            <a href="https://xilos.ai/login" className="button-secondary">Get Started</a>
          </div>
        </div>
      </div>

      {/* WorkBench — slim banner, not a co-equal product */}
      <div className="max-w-6xl mx-auto rounded-2xl px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4" style={{ background: "#F8FAFC", border: "1px solid #E5E7EB" }}>
        <div className="text-left">
          <p className="text-sm font-semibold" style={{ color: "#1F4E79", fontFamily: "var(--font-sora)" }}>
            WorkBench — the application layer, included with every Xilos account
          </p>
          <p className="text-sm mt-1" style={{ color: "#4B4B4B", fontFamily: "var(--font-geist)" }}>
            Prototype, test, and deploy agents. Knowledge-sharing that turns company data into institutional assets.
          </p>
        </div>
        <a href="https://xilos.ai" className="button-secondary" style={{ whiteSpace: "nowrap" }}>Explore at xilos.ai</a>
      </div>
    </section>
  );
}

export default ProductShowcase;

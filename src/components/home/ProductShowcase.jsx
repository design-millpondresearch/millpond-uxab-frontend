import { Link } from "react-router-dom";
import xilosDashboard from "../../assets/xilos-dashboard.PNG";
import workbenchScreenshot from "../../assets/workbench-screenshot-v1-2026.PNG";

function ProductShowcase() {
  return (
    <section className="light-section" style={{ background: "#fff" }}>
      <h2>See your AI. Control your AI.</h2>
      <p className="light-sub">
        Xilos sits between your agents and every LLM provider. One base_url change gives you real-time visibility, governance, and cost control.
      </p>

      {/* Xilos showcase */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center mb-16">
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

      {/* WorkBench showcase */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="text-left px-2 md:order-1">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#567C8D" }}>WorkBench — Included with Xilos</p>
          <h3 className="text-2xl md:text-3xl font-semibold mb-3" style={{ color: "#1F4E79", fontFamily: "var(--font-sora)" }}>
            The Application Layer
          </h3>
          <p className="text-base mb-4" style={{ color: "#4B4B4B", fontFamily: "var(--font-geist)", lineHeight: 1.6 }}>
            The employee-facing AI workspace built into Xilos. Prototype, test, and deploy agents in minutes. Knowledge-sharing transforms company data into institutional assets. Not a separate product — part of the platform.
          </p>
          <Link to="/solutions/workbench#top" onClick={() => setTimeout(() => window.scrollTo({ top: 0, behavior: "auto" }), 0)} className="button-primary">
            Explore WorkBench
          </Link>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg border border-[#E5E7EB] md:order-2">
          <img src={workbenchScreenshot} alt="WorkBench — agent prototyping, testing, and deployment workspace" className="w-full h-auto block" />
        </div>
      </div>
    </section>
  );
}

export default ProductShowcase;

const workbenchFeatures = [
  "Comprehensive AI analysis across workforce and customer experiences.",
  "Workforce AI insights to keep teams productive and responsible.",
  "Customer experience AI insights for higher quality interactions.",
  "Robust AI security governance baked into every workflow.",
];

const aipaHighlights = [
  "Single assistant that connects to your enterprise data and tools.",
  "Context-aware responses with governed, approved prompts.",
  "Streamlined workflows for revenue, operations, and support teams.",
];

const xliosPoints = [
  "Deploy across your AI ecosystem with centralized guardrails.",
  "Monitor usage patterns, prompts, and data access in real time.",
  "Automated remediation actions when policy violations occur.",
  "Governance reports with risk metrics and policy coverage.",
];

const xliosTags = [
  "Usage monitoring",
  "Policy orchestration",
  "Risk metrics",
  "Automated remediation",
  "Guardrails",
];

function SolutionsSection() {
  return (
    <section className="regular-banner-white px-6 py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <div className="text-center">
          <h2 className="section-header" style={{ color: "#1F4E79" }}>
            Our Solutions
          </h2>
          <h3 className="subheader" style={{ color: "#4B4B4B" }}>
            Your complete AI governance ecosystem. From creation to security.
          </h3>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 text-left shadow-sm ring-1 ring-[#E5E7EB]">
            <p
              className="text-xs font-semibold uppercase tracking-[0.18em]"
              style={{ color: "#567C8D" }}
            >
              Built AI Solutions.
            </p>
            <h3 className="mt-2 text-2xl font-semibold" style={{ color: "#1F4E79" }}>
              WorkBench: AI That Understands Your Business
            </h3>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: "#4B4B4B" }}>
              WorkBench is a comprehensive AI analysis platform that guides your workforce and customer experiences
              with governed insights.
            </p>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed" style={{ color: "#4B4B4B" }}>
              {workbenchFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#1F4E79]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="mt-5 button-primary">Learn More</button>
          </div>

          <div className="flex flex-col gap-3 rounded-2xl bg-[#0F3C5F] p-6 text-left text-white shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A8D1F0]">
              AI Productivity Assistant
            </p>
            <h3 className="text-2xl font-semibold">ASK AIPA</h3>
            <p className="text-sm leading-relaxed text-[#E5F2FB]">
              AIPA brings together your enterprise data with governed prompts to deliver faster decisions and safer
              automation.
            </p>
            <ul className="mt-2 space-y-2 text-sm leading-relaxed text-[#E5F2FB]">
              {aipaHighlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#A8D1F0]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid gap-8 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-[#E5E7EB] md:grid-cols-2">
          <div className="rounded-lg bg-[#F5F7FB] p-4 shadow-inner">
            <div className="h-64 w-full rounded-lg bg-white shadow-sm" />
            <p className="mt-3 text-xs" style={{ color: "#4B4B4B" }}>
              Xlios dashboard preview placeholder
            </p>
          </div>

          <div className="flex flex-col gap-4 text-left">
            <p
              className="text-xs font-semibold uppercase tracking-[0.18em]"
              style={{ color: "#567C8D" }}
            >
              AI Security & Orchestration
            </p>
            <h3 className="text-2xl font-semibold" style={{ color: "#1F4E79" }}>
              Xlios: Your AI Command Center
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "#4B4B4B" }}>
              Xlios lets you deploy governance guardrails across your AI ecosystem with centralized monitoring,
              automated remediation, and risk reporting.
            </p>
            <ul className="space-y-2 text-sm leading-relaxed" style={{ color: "#4B4B4B" }}>
              {xliosPoints.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#1F4E79]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 text-xs font-semibold" style={{ color: "#567C8D" }}>
              {xliosTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[#F0F4F8] px-3 py-1 ring-1 ring-[#D6E0EA]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="button-primary">Try Xlios</button>
              <button className="button-secondary">Request a Demo</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SolutionsSection;

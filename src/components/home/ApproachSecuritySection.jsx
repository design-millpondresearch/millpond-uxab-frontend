const comparisonRows = [
  {
    label: "Real-time detection and isolation of malicious agent behavior",
    integrated: true,
    nonSafeguarded: false,
  },
  {
    label: "Observation of usage patterns and prompts",
    integrated: true,
    nonSafeguarded: false,
  },
  {
    label: "Agent and prompt guardrails to prevent policy violations",
    integrated: true,
    nonSafeguarded: false,
  },
  {
    label: "Automated policy orchestration",
    integrated: true,
    nonSafeguarded: false,
  },
  {
    label: "Auto learning policy engine (no coding required)",
    integrated: true,
    nonSafeguarded: false,
  },
  {
    label: "Data masking and data fidelity matching technology",
    integrated: true,
    nonSafeguarded: false,
  },
];

const guardrailPoints = [
  "Real-time detection of malicious agent behavior with automated isolation actions.",
  "Prompt guardrails that protect proprietary data and user trust.",
  "Automated policy orchestration with continuous learning — no coding required.",
  "Data masking and fidelity matching to keep sensitive information safeguarded.",
];

function Indicator({ state }) {
  const tone = state ? "bg-[#1BB47B]" : "bg-[#E05C43]";
  const label = state ? "Yes" : "No";

  return (
    <span
      className={`inline-flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold text-white ${tone}`}
    >
      {label}
    </span>
  );
}

function ApproachSecuritySection() {
  return (
    <section className="regular-banner-sand px-6 py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <h2 className="section-header text-center" style={{ color: "#1F4E79" }}>
          Our Approach to AI Security.
        </h2>

        <div className="flex flex-col gap-8 md:flex-row md:items-start">
          <div className="flex-1 rounded-2xl bg-white p-6 text-left shadow-sm">
            <p
              className="text-xs font-semibold uppercase tracking-[0.18em]"
              style={{ color: "#567C8D" }}
            >
              Mill Pond AI Context Aware Security Approach.
            </p>
            <p className="mt-3 text-base leading-relaxed" style={{ color: "#4B4B4B" }}>
              Mill Pond Research protects AI usage through prompt-aware controls that secure assistants and agents
              without slowing innovation.
            </p>
            <ul
              className="mt-4 space-y-2 text-sm leading-relaxed"
              style={{ color: "#4B4B4B" }}
            >
              {guardrailPoints.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#1F4E79]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 rounded-2xl bg-white p-6 shadow-sm">
            <div
              className="mb-2 flex items-center justify-between border-b border-[#E5E7EB] pb-3 text-sm font-semibold"
              style={{ color: "#1F4E79" }}
            >
              <span>Integrated Assistants</span>
              <span>Non-Safeguarded LLMs</span>
            </div>
            <div className="divide-y divide-[#E5E7EB]">
              {comparisonRows.map((row) => (
                <div key={row.label} className="flex items-center justify-between gap-3 py-3">
                  <p
                    className="flex-1 text-left text-sm leading-relaxed"
                    style={{ color: "#4B4B4B" }}
                  >
                    {row.label}
                  </p>
                  <div className="flex w-40 items-center justify-between">
                    <Indicator state={row.integrated} />
                    <Indicator state={row.nonSafeguarded} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-2 text-center text-sm leading-relaxed" style={{ color: "#4B4B4B" }}>
          Mill Pond Research uses a prompt-based layer that secures AI use without slowing innovation, offering
          security, speed, and cost savings.
        </p>
      </div>
    </section>
  );
}

export default ApproachSecuritySection;

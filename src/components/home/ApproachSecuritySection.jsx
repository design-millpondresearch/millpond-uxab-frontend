import check from "../../assets/check.svg";
import x from "../../assets/x.svg";
import question from "../../assets/unknown.svg";


const comparisonRows = [
  {
    title: "Approach",
    description: "Adaptive, real-time filtering that analyzes both user intent and model output to maintain safety without restricting productivity.",
    promptBased: "check",
    modelBased: "x",
  },
  {
    title: "Flexibility",
    description: "Instantly updated policies without retraining, allowing organizations to react quickly to new threats, regulations, or internal requirements.",
    promptBased: "check",
    modelBased: "question",
  },
  {
    title: "Implementation",
    description: "Compatible with any LLM and integrates directly into existing workflows, avoiding vendor lock-in and long deployment cycles.",
    promptBased: "check",
    modelBased: "question",
  },
  {
    title: "Cost Efficiency",
    description: "Cuts operational overhead by eliminating retraining costs and minimizing model calls through optimized filtering.",
    promptBased: "check",
    modelBased: "x",
  },
  {
    title: "Transparency",
    description: "Real-time insights into what's being blocked, allowed, or modified, building trust and ensuring compliance.",
    promptBased: "check",
    modelBased: "question",
  },
  {
    title: "Security Coverage",
    description: "Monitors prompts, outputs, and context continuously, protecting against injection attacks, data leaks, and unauthorized usage.",
    promptBased: "check",
    modelBased: "question",
  },
  {
    title: "Innovation",
    description: "Allows safe experimentation with new models and tools by ensuring everything is governed at the prompt layer.",
    promptBased: "check",
    modelBased: "x",
  },
];

function Indicator({ type }) {
  if (type === "check") {
    return (
      <img src={check} alt="check" className="h-7 w-7" />
    );
  } else if (type === "x") {
    return (
      <img src={x} alt="x" className="h-7 w-7" />
    );
  } else if (type === "question") {
    return (
      <img src={question} alt="question" className="h-7 w-7" />
    );
  }
  return null;
}

function ApproachSecuritySection() {
  return (
    <section className="regular-banner-sand px-6 py-20">
      <div className="mx-auto flex max-w-4xl flex-col gap-10">
        <h2 className="section-header text-center" style={{ color: "#1F4E79" }}>
          Our Approach to AI Security.
        </h2>

        <div className="rounded-3xl bg-white py-8 px-12 shadow-sm" style={{ backgroundColor: '#FFFFFF', borderRadius: '1.5rem' }}>
          <div
            className="mb-6 flex items-center gap-6 border-b border-[#E5E7EB] pb-6 text-base font-semibold"
            style={{ color: "black" }}
          >
            <span className="flex-1 text-left px-2"></span>
            <span className="large-font-bold text-center flex-shrink-0 px-2 w-32">Prompt-Based AI security</span>
            <span className="large-font-bold text-center flex-shrink-0 px-2 w-32">Model-Based</span>
          </div>
          <div className="divide-y divide-[#E5E7EB]">
            {comparisonRows.map((row) => (
              <div key={row.title} className="py-6">
                <div className="mb-2 flex items-start gap-6">
                  <div className="flex-1 text-left px-2">
                    <h4 className="small-font-bold mb-2 text-sm font-bold" style={{ color: "#1F4E79" }}>
                      {row.title}
                    </h4>
                    <p className="small-font text-sm leading-relaxed text-left" style={{ color: "#4B4B4B" }}>
                      {row.description}
                    </p>
                  </div>
                  <div className="flex w-32 items-center justify-center flex-shrink-0 px-2">
                    <Indicator type={row.promptBased} />
                  </div>
                  <div className="flex w-32 items-center justify-center flex-shrink-0 px-2">
                    <Indicator type={row.modelBased} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="subheader" style={{ color: "#4B4B4B" }}>
          Mill Pond Research uses a prompt-based layer that secures AI use without slowing innovation, offering
          security, speed, and cost savings.
        </p>
      </div>
    </section>
  );
}

export default ApproachSecuritySection;

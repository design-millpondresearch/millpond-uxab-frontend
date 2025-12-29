import check from "../../assets/logos-general/check.svg";
import x from "../../assets/x.svg";
import question from "../../assets/logos-general/unknown.svg";

const comparisonRows = [
  {
    title: "Approach",
    description:
      "Adaptive, real-time filtering that analyzes both user intent and model output to maintain safety without restricting productivity.",
    promptBased: "check",
    modelBased: "x",
  },
  {
    title: "Flexibility",
    description:
      "Instantly updated policies without retraining, allowing organizations to react quickly to new threats, regulations, or internal requirements.",
    promptBased: "check",
    modelBased: "question",
  },
  {
    title: "Implementation",
    description:
      "Compatible with any LLM and integrates directly into existing workflows, avoiding vendor lock-in and long deployment cycles.",
    promptBased: "check",
    modelBased: "question",
  },
  {
    title: "Cost Efficiency",
    description:
      "Cuts operational overhead by eliminating retraining costs and minimizing model calls through optimized filtering.",
    promptBased: "check",
    modelBased: "x",
  },
  {
    title: "Transparency",
    description:
      "Real-time insights into what's being blocked, allowed, or modified, building trust and ensuring compliance.",
    promptBased: "check",
    modelBased: "question",
  },
  {
    title: "Security Coverage",
    description:
      "Monitors prompts, outputs, and context continuously, protecting against injection attacks, data leaks, and unauthorized usage.",
    promptBased: "check",
    modelBased: "question",
  },
  {
    title: "Innovation",
    description:
      "Allows safe experimentation with new models and tools by ensuring everything is governed at the prompt layer.",
    promptBased: "check",
    modelBased: "x",
  },
];

function Indicator({ type }) {
  if (type === "check") {
    return <img src={check} alt="check" className="h-8 w-8 md:h-9 md:w-9" />;
  }
  if (type === "x") {
    return <img src={x} alt="x" className="h-8 w-8 md:h-9 md:w-9" />;
  }
  if (type === "question") {
    return (
      <img
        src={question}
        alt="question"
        className="h-8 w-8 md:h-9 md:w-9"
      />
    );
  }
  return null;
}

function ApproachSecuritySection() {
  return (
    <section className="regular-banner-sand px-4 md:px-8 py-12 md:py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 md:gap-10">
        {/* Title */}
        <h2
          className="section-header text-center text-3xl md:text-4xl lg:text-5xl"
          style={{ color: "#1F4E79" }}
        >
          Our Approach to AI Security.
        </h2>

        {/* Gradient “faded” background + sharp content */}
        <div className="relative w-full max-w-4xl mx-auto">
          {/* Faded white background: NO blur, just radial gradient */}
          <div
            className="
              pointer-events-none
              absolute inset-0
              rounded-[32px]
              bg-white/80 blur-[20px]
              "
          />

          {/* Content (transparent) */}
          <div className="relative px-4 py-6 md:px-10 md:py-8">
            {/* Header row – using your spacing: gap-20, ml-[110px] */}
            <div className="hidden md:flex justify-center gap-20 ml-[440px] mb-8 text-sm font-semibold text-[#4B4B4B]">
              <span>Prompt-Based AI security</span>
              <span>Model-Based</span>
            </div>

            {/* Rows */}
            <div className="space-y-10">
              {comparisonRows.map((row) => (
                <div key={row.title}>
                  {/* Mobile layout */}
                  <div className="flex flex-col gap-3 md:hidden">
                    <div className="text-left">
                      <h4
                        className="mb-2 text-sm font-semibold"
                        style={{ color: "#1F4E79" }}
                      >
                        {row.title}
                      </h4>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "#4B4B4B" }}
                      >
                        {row.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <span
                          className="text-xs font-semibold"
                          style={{ color: "#1F4E79" }}
                        >
                          Prompt-Based:
                        </span>
                        <Indicator type={row.promptBased} />
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className="text-xs font-semibold"
                          style={{ color: "#1F4E79" }}
                        >
                          Model-Based:
                        </span>
                        <Indicator type={row.modelBased} />
                      </div>
                    </div>
                  </div>

                  {/* Desktop layout */}
                  <div className="hidden md:grid md:grid-cols-[minmax(0,_440px)_minmax(0,_120px)_minmax(0,_120px)] md:gap-x-20 items-center">
                    <div className="text-left max-w-[440px]">
                      <h4
                        className="mb-2 text-sm font-semibold"
                        style={{ color: "#1F4E79" }}
                      >
                        {row.title}
                      </h4>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "#4B4B4B" }}
                      >
                        {row.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-center">
                      <Indicator type={row.promptBased} />
                    </div>
                    <div className="flex items-center justify-center">
                      <Indicator type={row.modelBased} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tagline */}
        <p
          className="subheader max-w-7xl text-center"
          style={{ color: "#4B4B4B" }}
        >
          Mill Pond Research uses a prompt-based layer that secures AI use
          without slowing innovation, offering security, speed, and cost
          savings.
        </p>
      </div>
    </section>
  );
}

export default ApproachSecuritySection;
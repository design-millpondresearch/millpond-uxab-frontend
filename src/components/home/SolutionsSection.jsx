import workbenchPic from "../../assets/WorkBenchPhoto.svg";
import xilosPic from "../../assets/XilosPhoto.svg";

const workbenchFeatures = [
  "Comprehensive AI analysis across workforce and customer experiences.",
  "Workforce AI insights to keep teams productive and responsible.",
  "Customer experience AI insights for higher quality interactions.",
  "Robust AI security governance baked into every workflow.",
];

// const aipaHighlights = [
//   "Single assistant that connects to your enterprise data and tools.",
//   "Context-aware responses with governed, approved prompts.",
//   "Streamlined workflows for revenue, operations, and support teams.",
// ];

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
    <section className="regular-banner-white px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 items-center">
        <div className="text-center">
          <h2 className="section-header" style={{ color: "#1F4E79" }}>
            Our Solutions
          </h2>
          <h3 className="subheader" style={{ color: "#4B4B4B" }}>
            Your complete AI governance ecosystem. From creation to security.
          </h3>
        </div>
        
        <div className="flex flex-col gap-24">

          {/* WorkBench Grid */}
          <div className="px-8 md:px-16">
            <div className="max-w-5xl mx-auto grid gap-8 grid-cols-2">
              
              {/* Left Column */}
              <div className="rounded-2xl bg-white px-4 text-left shadow-sm">
                <p className="subheader" style={{ color: "#4B4B4B" }}>
                  Built AI Solutions.
                </p>

                <h2 className="section-header" style={{ color: "#1F4E79" }}>
                  WorkBench: AI That Understands Your Business
                </h2>

                <p className="mt-3 text-sm leading-relaxed" style={{ color: "#4B4B4B" }}>
                  Your teams need AI that speaks your industry's language and understands your unique processes. 
                  WorkBench puts that power directly in your hands with an intuitive environment to build AI solutions that deliver immediate value.
                </p>

                {/* <ul className="mt-4 space-y-2 text-sm leading-relaxed" style={{ color: "#4B4B4B" }}>
                  {workbenchFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#1F4E79]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul> */}

                <button className="mt-5 button-primary">Explore WorkBench</button>
              </div>

              {/* Right Column */}
              <div className="rounded-lg p-4 shadow-inner flex items-center justify-center">
                <img
                  src={workbenchPic}
                  alt="WorkBench Product Shot"
                  className="rounded-lg shadow-sm max-w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Xilos Grid */}
          <div className="px-8 md:px-16">
            <div className="max-w-5xl mx-auto grid gap-8 grid-cols-2">
                  
              {/* Left Column */}
              <div className="rounded-lg p-4 shadow-inner flex items-center justify-center">
                <img
                  src={xilosPic}
                  alt="Xilos Product Shot"
                  className="rounded-lg shadow-sm max-w-full h-auto"
                />
              </div>

              {/* Right Column */}
              <div className="rounded-2xl bg-white px-4 text-right shadow-sm">
                <p className="subheader" style={{ color: "#4B4B4B" }}>
                  AI Security & Orchestration
                </p>

                <h2 className="section-header" style={{ color: "#1F4E79" }}>
                  Xilos: Your AI Command Center
                </h2>

                <p className="text-sm leading-relaxed" style={{ color: "#4B4B4B" }}>
                  Benefit from AI without compromising security. Xilos acts as your intelligent guardian and conductor, 
                  working with all your AI systems to enhance security while breaking down information barriers.
                </p>

                <div className="flex flex-wrap gap-3 justify-end mt-5">
                  <button className="button-primary">Explore Xilos</button>
                </div>
              </div>

            </div>
          </div>
        
        </div>
      </div>
    </section>
  );
}

export default SolutionsSection;

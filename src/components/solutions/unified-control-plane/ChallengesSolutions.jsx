import unified_policies from "../../../assets/icons/unified_policies.svg";
import rapid_development from "../../../assets/icons/rapid_development.svg";
import connected_intelligence from "../../../assets/icons/connected_intelligence.svg";
import enhanced_security from "../../../assets/icons/enhanced_security.svg";
import regulatory_compliance from "../../../assets/icons/regulatory_compliance.svg";
import simplified_security from "../../../assets/icons/simplified_security.svg";
import future_proof from "../../../assets/icons/future-proof.svg";

const challenges = [
  {
    icon: unified_policies,
    challenge: "Teams are using multiple AI tools with different capabilities, creating inconsistent outputs and duplicated subscriptions across the organization.",
    solution: "The UCP provides unified access to state-of-the-art models from all major providers in a single platform, eliminating the need for multiple subscriptions while ensuring consistent, high-quality outputs.",
  },
  {
    icon: rapid_development,
    challenge: "Teams lack access to the latest AI models and capabilities, putting them at a competitive disadvantage.",
    solution: "The UCP provides daily updates and rapid integration of new AI models and features, ensuring teams always have access to cutting-edge capabilities.",
  },
  {
    icon: connected_intelligence,
    challenge: "AI tools do not integrate with our existing systems and workflows, creating friction and reducing adoption.",
    solution: "The UCP offers seamless integrations with any API, MCP, or Skills, so agents work with your existing enterprise stack.",
  },
  {
    icon: enhanced_security,
    challenge: "Employees routinely bring outside AI systems onto the network without the knowledge, visibility, or control of security or IT.",
    solution: "The UCP is a multi-modal platform that supports all major public LLMs and any organizational private models, eliminating the need to bring models from the outside. All models share learned intelligence across the platform so every model benefits from shared organizational context.",
  },
  {
    icon: regulatory_compliance,
    challenge: "Agents require access to sensitive information across multiple repositories, potentially creating compliance issues with regulations like GDPR or HIPAA.",
    solution: "The UCP Rules Engine is built from the ground up as a modular system supported by a deep ecosystem of third-party partners, enabling vertical-specific rule sets to resolve any agentic AI breaches of external policies such as GDPR.",
  },
  {
    icon: simplified_security,
    challenge: "The organization's security systems lack the capability to detect and remediate sensitive company and customer information in real time.",
    solution: "The UCP can deconstruct and modify queries to mask or remove any components deemed unsafe or that violate existing regulations or policies, while enabling the remainder of the query to pass through so agents can continue to operate without interruption.",
  },
  {
    icon: future_proof,
    challenge: "Due to the company's intensive need for privacy, the usage of any public LLM presents an unacceptable level of risk. However, disallowing AI renders the organization incapable of taking advantage of its benefits.",
    solution: "The UCP can simultaneously host public and private LLMs, enabling highly regulated organizations and those with a deep need for data privacy to reap the extraordinary benefits of AI without the risk of exposing sensitive data to the outside world.",
  },
];

function ChallengesSolutions() {
  return (
    <section className="regular-banner-sand px-4 md:px-6 py-12 md:py-16 relative overflow-hidden">
      {/* Center blob gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 1500px 150% at center center, rgba(86, 124, 141, 0.12) 0%, transparent 70%)',
        }}
      />

      <div className="mx-auto max-w-6xl relative z-10">
        <div className="mb-8 md:mb-10 text-center">
          <h2 className="section-header text-3xl md:text-4xl lg:text-5xl" style={{ color: "#1F4E79" }}>
            Key Challenges. Unified Solutions.
          </h2>
          <h3 className="subheader mt-2" style={{ color: "#4B4B4B" }}>
            How the UCP solves the most pressing agentic AI challenges.
          </h3>
        </div>

        <div className="space-y-4">
          {challenges.map((item, index) => (
            <div
              key={index}
              className="rounded-xl bg-white p-5 md:p-6 shadow-sm ring-1 ring-[#E5E7EB] hover:shadow-md transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                <div className="flex items-start gap-3 md:w-2/5">
                  <img src={item.icon} alt="" className="w-8 h-8 mt-0.5 flex-shrink-0" />
                  <p className="small-font" style={{ color: "#4B4B4B" }}>
                    {item.challenge}
                  </p>
                </div>
                <div className="hidden md:block w-px bg-[#E5E7EB] self-stretch" />
                <div className="md:w-3/5">
                  <p className="small-font" style={{ color: "#1F4E79" }}>
                    <strong>{item.solution}</strong>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ChallengesSolutions;

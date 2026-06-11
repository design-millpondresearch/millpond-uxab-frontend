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
    solution: "The MPR Unified Control Plane provides unified access to state-of-the-art models from all major providers in a single platform, eliminating the need for multiple subscriptions while ensuring consistent, high-quality outputs.",
  },
  {
    icon: rapid_development,
    challenge: "Teams lack access to the latest AI models and capabilities, putting them at a competitive disadvantage.",
    solution: "The MPR Unified Control Plane provides daily updates and rapid integration of new AI models and features, ensuring teams always have access to cutting-edge capabilities.",
  },
  {
    icon: connected_intelligence,
    challenge: "AI tools do not integrate with our existing systems and workflows, creating friction and reducing adoption.",
    solution: "The MPR Unified Control Plane offers seamless integrations with any API, MCP, or Skills, so agents work with your existing enterprise stack.",
  },
  {
    icon: enhanced_security,
    challenge: "Employees routinely bring outside AI systems onto the network without the knowledge, visibility, or control of security or IT.",
    solution: "The MPR Unified Control Plane is a multi-modal platform that supports all major public LLMs and any organizational private models, eliminating the need to bring models from the outside. All models share learned intelligence across the platform so every model benefits from shared organizational context.",
  },
  {
    icon: regulatory_compliance,
    challenge: "Agents require access to sensitive information across multiple repositories, potentially creating compliance issues with regulations like GDPR or HIPAA.",
    solution: "The MPR Unified Control Plane Rules Engine is built from the ground up as a modular system supported by a deep ecosystem of third-party partners, enabling vertical-specific rule sets to resolve any agentic AI breaches of external policies such as GDPR.",
  },
  {
    icon: simplified_security,
    challenge: "The organization's security systems lack the capability to detect and remediate sensitive company and customer information in real time.",
    solution: "The MPR Unified Control Plane can deconstruct and modify queries to mask or remove any components deemed unsafe or that violate existing regulations or policies, while enabling the remainder of the query to pass through so agents can continue to operate without interruption.",
  },
  {
    icon: future_proof,
    challenge: "Due to the company's intensive need for privacy, the usage of any public LLM presents an unacceptable level of risk. However, disallowing AI renders the organization incapable of taking advantage of its benefits.",
    solution: "The MPR Unified Control Plane can simultaneously host public and private LLMs, enabling highly regulated organizations and those with a deep need for data privacy to reap the extraordinary benefits of AI without the risk of exposing sensitive data to the outside world.",
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
            Organizations struggle to implement agentic AI safely and cost-effectively without unified end-to-end capabilities. Here is how the MPR Unified Control Plane solves each challenge.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {challenges.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-4 md:p-6 shadow-sm ring-1 ring-[#E5E7EB] hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-3">
                <img src={item.icon} alt="" className="w-10 h-10" />
                <h4 className="subheader" style={{ color: "#1F4E79" }}>
                  Challenge
                </h4>
              </div>
              <p className="small-font mb-4" style={{ color: "#4B4B4B" }}>
                {item.challenge}
              </p>
              <div className="mt-auto pt-4 border-t border-[#E5E7EB]">
                <h4 className="subheader mb-2" style={{ color: "#567C8D" }}>
                  Solution
                </h4>
                <p className="small-font" style={{ color: "#4B4B4B" }}>
                  {item.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ChallengesSolutions;

import deployIcon from "../../../assets/icons/deploy.svg";
import secureIcon from "../../../assets/icons/enhanced_security.svg";
import orchestrateIcon from "../../../assets/icons/orchestrate1.svg";
import controlIcon from "../../../assets/icons/eye.svg";
import element2 from "../../../assets/elements/element2.svg";
import element10 from "../../../assets/elements/element10.svg";

const pillars = [
  {
    title: "Deploy",
    benefit: "Seamlessly deploy across all major public and any corporate private models, and natively integrate with your existing systems.",
    points: [
      "Seamless integrations with existing systems (Snowflake, Google Cloud, AWS, Slack, Microsoft 365, Salesforce, REST APIs)",
      "Agents work seamlessly with any model on the platform",
      "Model training occurs at the platform level and shares contextual intelligence with all models and agents",
      "Universal compatibility ensures flexibility without redundant training",
      "Move quickly from prototyping to deployment",
      "Create and edit agents that share knowledge across the organization",
    ],
    icon: deployIcon,
  },
  {
    title: "Secure",
    benefit: "Secure the entire AI infrastructure to embrace agentic AI and maximize innovation while protecting private company and customer data.",
    points: [
      "Intercepts outbound LLM calls to determine which are allowed",
      "Deconstructs and dynamically modifies queries on the fly to mask or remove unsafe components",
      "Proprietary natural language model makes it easy for admins to secure enterprise AI",
      "Proprietary query assessment determines intent, even when advanced methods circumvent guardrails",
    ],
    icon: secureIcon,
  },
  {
    title: "Orchestrate",
    benefit: "Get contextually relevant results across every model and agent to maximize the efficiency and precision of your AI program.",
    points: [
      "Agents throughout the company learn from one another to deliver more precise, context-based answers",
      "Learns about the company and the type of information each functional area requires",
      "Enables organizations to host private, air-gapped LLMs and automatically route sensitive traffic to those LLMs",
      "Dynamic model routing based on task requirements",
      "Private knowledge base stores every query and answer",
    ],
    icon: orchestrateIcon,
  },
  {
    title: "Control",
    benefit: "Gain the transparency and control needed to support innovation while avoiding waste and optimizing spend.",
    points: [
      "At-a-glance visibility into token and model usage by user",
      "Real-time visibility into spend drivers, including average cost per query and total spend by model, user, routing rule, and department",
      "Repeat questions answered directly from knowledge base without requiring new token spend",
      "At-a-glance visibility into fines avoided by maintaining compliance",
      "Avoid defaulting to the most expensive models for every query",
      "Operational control that supports normalized spend",
    ],
    icon: controlIcon,
  },
];

function MessagePillars() {
  return (
    <section className="relative regular-banner-white px-4 md:px-6 py-12 md:py-16 overflow-hidden">
      {/* Decorative shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        <img src={element2} alt="" className="absolute top-0 right-0 w-64 md:w-80 opacity-30" />
        <img src={element10} alt="" className="absolute bottom-0 left-0 w-64 md:w-80 opacity-30" />
      </div>

      {/* Top right ellipse gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 1500px 150% at right top, rgba(86, 124, 141, 0.15) 0%, transparent 70%)',
          right: 0,
          top: 0,
        }}
      />

      {/* Bottom left ellipse gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 1500px 150% at left bottom, rgba(86, 124, 141, 0.15) 0%, transparent 70%)',
          left: 0,
          bottom: 0,
        }}
      />

      <div className="mx-auto max-w-6xl relative z-10">
        <div className="mb-8 md:mb-10 text-center">
          <h2 className="section-header text-3xl md:text-4xl lg:text-5xl" style={{ color: "#1F4E79" }}>
            Deploy. Secure. Orchestrate. Control.
          </h2>
          <h3 className="subheader mt-2" style={{ color: "#4B4B4B" }}>
            The four pillars of the MPR Unified Control Plane that turn AI complexity into competitive advantage.
          </h3>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl bg-[#F5EFE7] hover:bg-[#C8D9E6] p-4 md:p-6 shadow-sm ring-1 ring-[#E5E7EB] hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-3">
                <img src={pillar.icon} alt={pillar.title} className="w-10 h-10" />
                <h4 className="large-font-bold" style={{ color: "#1F4E79" }}>
                  {pillar.title}
                </h4>
              </div>
              <p className="small-font-bold mb-4" style={{ color: "#4B4B4B" }}>
                {pillar.benefit}
              </p>
              <ul className="space-y-2">
                {pillar.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#567C8D] mt-1">&bull;</span>
                    <span className="small-font" style={{ color: "#4B4B4B" }}>
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MessagePillars;

// FAQ data for Xilos page
export const faqData = [
  {
    id: 1,
    question: "What is Xilos?",
    answer: `Xilos is Mill Pond Research's enterprise governance platform for agentic AI. It functions as an intelligent middleware layer that intercepts, analyzes, and governs every AI interaction before it reaches any external or internal model — whether it's initiated by a human user or an autonomous agent. Xilos observes, secures, and orchestrates all AI activity across your network, providing complete visibility and control from a single source of truth.`
  },
  {
    id: 2,
    question: "Why do enterprises need a dedicated AI security and governance solution?",
    answer: `Legacy cybersecurity tools were designed for a fundamentally different threat model—one where humans initiate actions, applications operate within defined parameters, and network activity follows predictable patterns. Agentic AI shatters these assumptions. Autonomous agents issue prompts, transmit sensitive data, and make decisions at machine speed across multiple models and services. Without purpose-built governance infrastructure, organizations face an expanding attack surface they can't see, audit, or control — creating material risk for data leakage, compliance violations, and unmanaged shadow AI proliferating across the enterprise.`
  },
  {
    id: 3,
    question: "What is shadow AI, and why is it a critical concern?",
    answer: `Shadow AI refers to the unsanctioned use of AI tools such as chatbots, coding assistants, productivity agents, and other services that employees and systems operate outside the view of IT. The challenge isn't that these tools lack value. In fact, they often deliver significant productivity gains. The challenge is that every interaction with an unmanaged AI tool is a potential vector for data exfiltration. Once proprietary or sensitive data is transmitted to an external model for processing, it's effectively absorbed into that model's training corpus — an irreversible event. Xilos eliminates the shadow by creating a mandatory, intelligent checkpoint through which all AI traffic must pass, restoring complete visibility and policy enforcement across the organization.`
  },
  {
    id: 4,
    question: `What is the "interaction layer," and why is it the critical security perimeter for AI?`,
    answer: `The interaction layer is the space where prompts are composed, data is transmitted, and AI models generate responses. In other words, it's the active surface where human users and autonomous agents engage with AI systems in real time. This is where sensitive data is most vulnerable: the moment a prompt containing proprietary code, PII, financial records, or strategic plans leaves the network perimeter, the organization's control over that data ends. Legacy security tools weren't designed to operate here. The interaction layer represents the new security perimeter for the AI era, and it requires a purpose-built infrastructure — like Xilos — to govern it.`
  },
  {
    id: 5,
    question: "Why can't identity-based security solutions address this problem?",
    answer: `Identity-based security answers a foundational question: Who's authorized to access AI systems? It governs authentication, authorization, and access control. These are essential capabilities and therefore an essential piece to your security stack — but they're useless for AI security and governance. Identity security is blind to what happens after access is granted. It can't analyze the content of a prompt, detect whether proprietary data is being transmitted to an external model, evaluate the intent of an autonomous agent's request, or enforce policies based on the sensitivity of the information in transit. Xilos operates precisely where identity security stops — at the content and intent layer of every interaction. Xilos goes beyond analyzing the credentials of the actor by performing real-time semantic analysis, data loss prevention, and policy enforcement on the substance of AI activity.`
  },
  {
    id: 6,
    question: "Why can't model predictive control (MPC) solve the AI governance challenge?",
    answer: `MPC is an established methodology for optimizing system-level behavior by predicting future states and adjusting control actions accordingly. It operates on system dynamics and process variables — not on the semantic content of natural language interactions. MPC can't interpret the meaning of a prompt, determine whether it contains sensitive data, evaluate whether an autonomous agent is behaving within policy boundaries, or enforce governance rules at the point of data transmission. The AI governance challenge is fundamentally a content-, intent-, and interaction-level problem. Xilos is engineered specifically for this domain, using advanced natural language processing and a proprietary security Small Language Model to analyze, classify, and govern every interaction in real time.`
  },
  {
    id: 7,
    question: "Why should AI governance happen at the interaction layer rather than independently for each model?",
    answer: `Enterprises today operate across a fragmented landscape of AI models and providers—OpenAI, Anthropic, Google, privately-hosted open-source models, and more. Attempting to secure and govern each model independently creates three compounding problems: inconsistent policy enforcement across different provider ecosystems; exponential administrative complexity as the number of models grows; and persistent blind spots wherever a new model or tool is adopted without the knowledge of IT or before governance catches up — which is precisely how shadow AI emerges. Xilos solves this architecturally by operating as a centralized governance layer that sits upstream of every model. Regardless of which (or how many!) models, providers, or deployment environments are involved, every interaction passes through the same intelligent checkpoint with the identical policies, analysis, and audit trail. This model-agnostic approach ensures that governance scales with AI adoption rather than falling behind it.`
  },
  {
    id: 8,
    question: "How does Xilos protect sensitive data in real time?",
    answer: `Xilos employs a multi-layered approach to data loss prevention at the prompt layer. Its proprietary security Small Language Model performs real-time semantic analysis on every outbound prompt, while pattern recognition engines detect high-entropy strings such as API credentials and structured data signatures. When sensitive content such as PII, financial records, proprietary code, or strategic information is identified, Xilos enforces configurable severity protocols. These include automatically masking sensitive entities, changing the prompt to remove the portion that violates policy, flagging interactions for audit review, rerouting queries to secure private models, or blocking the transmission entirely. This ensures a state of zero external data transmission for any query containing sensitive information. The data never leaves the network perimeter.`
  },
  {
    id: 9,
    question: "How does Xilos provide visibility and auditability for compliance?",
    answer: `Xilos maintains comprehensive, granular logs of every AI interaction across the organization—capturing the user or agent, the initial prompt, any system enrichments, the final response, and every policy decision applied along the way. These logs feed centralized analytics dashboards that deliver real-time insight into query volumes, threat detection patterns, treatment categorization (unrestricted, blocked, masked, or flagged), and system performance. This creates a complete, immutable audit trail that's essential for regulatory compliance and forensic investigation of security events, as well as demonstrating responsible AI governance to auditors, regulators, and executive stakeholders.`
  },
  {
    id: 10,
    question: "How is Xilos deployed?",
    answer: `Xilos offers three deployment pathways to accommodate diverse security postures and data sovereignty requirements:

Organizations can select our Managed SaaS model, where we provision a dedicated, isolated single-tenant environment on secure AWS infrastructure.

For strict data residency mandates, Private Cloud deployment installs Xilos directly within your own Virtual Private Cloud.

For the most sensitive environments, full on-premises deployment supports air-gapped and other highly restricted infrastructures.

Regardless of the deployment model, Xilos' containerized architecture enables rapid implementation, with system configuration typically completed within hours of provisioning the underlying hardware.`
  }
];

export default faqData;

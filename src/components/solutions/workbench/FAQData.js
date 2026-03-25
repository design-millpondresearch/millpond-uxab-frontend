// FAQ data for WorkBench page
export const faqData = [
  {
    id: 1,
    question: "Why do we need a unified AI workspace instead of letting teams manage their own model subscriptions?",
    answer: `Allowing fragmented AI adoption across the enterprise creates two critical risks: operational inefficiency and strategic vulnerability. When teams manage their own disconnected subscriptions to various providers (OpenAI, Anthropic, Google, etc.), the organization suffers from redundant costs, inconsistent outputs, and "prompt silos" where valuable techniques remain trapped within specific departments.

More dangerously, this fragmentation leads to vendor lock-in. By building workflows and dependencies directly onto specific model APIs, significant re-engineering is required for organizations to switch providers as models evolve and pricing changes. WorkBench solves this by providing a unified, model-agnostic workspace. It gives your teams unlimited access to state-of-the-art models through a single interface, centralizing management while ensuring your organization retains control over your AI strategy — not individual vendors.`
  },
  {
    id: 2,
    question: "What is WorkBench and how does it accelerate our ability to deploy AI agents?",
    answer: `WorkBench is Mill Pond Research's premier platform designed to streamline the entire lifecycle of agentic AI — from initial authoring and rapid prototyping to rigorous testing and enterprise-scale deployment. It transforms AI from a series of disjointed experiments into a scalable, manageable production capability.

For innovation leaders and department heads pressed to show speed-to-value, WorkBench removes the friction that typically stalls AI projects. It provides intuitive authoring tools for creating specialized agents, integrated testing environments to validate performance against different underlying models, and seamless deployment mechanisms to quickly get agents into the hands of users.`
  },
  {
    id: 3,
    question: "How does WorkBench prevent AI vendor lock-in?",
    answer: `WorkBench acts as an intelligent abstraction layer between your organization's workflows and the rapidly changing landscape of underlying Large Language Models (LLMs). Instead of hard-coding your applications or training your staff on one specific vendor's ecosystem, you build your agents, define your prompts, and establish your context within WorkBench.

The platform then routes these interactions to whichever model provides the best performance, cost-efficiency, or capability for the specific task at hand. If a new, superior model emerges next quarter, or if a current provider changes their terms, you can instantly switch underlying models within WorkBench without rebuilding your agents or retraining your workforce. You own the workflow; WorkBench manages the model connections.`
  },
  {
    id: 4,
    question: "How does WorkBench protect us from losing institutional knowledge every time we switch models?",
    answer: `This is one of the most significant, yet often overlooked, costs of the current AI landscape. When teams spend months refining prompts and building context within a specific vendor's platform, that intellectual property is effectively trapped there. Switching models often means starting from scratch.

WorkBench transforms temporary AI interactions into permanent institutional assets. By centralizing agent authoring and prompt management in a model-agnostic environment, the context and relevance you build persist regardless of the underlying LLM. Your organization's "prompt engineering" expertise becomes a compounding asset that grows with every interaction, rather than a depreciating resource tied to a specific vendor's lifecycle.`
  },
  {
    id: 5,
    question: "Can WorkBench support complex, multi-step agentic workflows, or is it primarily for simple chatbot interactions?",
    answer: `WorkBench is purpose-built for the era of agentic AI. While it handles simple conversational tasks easily, its architecture is designed to support the development and deployment of sophisticated autonomous agents capable of executing complex, multi-step workflows.

Innovation teams can use WorkBench to author agents that have specific roles, defined constraints, access to necessary tools, and the ability to chain together reasoning steps to achieve operational goals. It's the bridge between simple generative AI prompting and true enterprise automation.`
  },
  {
    id: 6,
    question: "Does WorkBench support a multi-model strategy to enable various departments to employ different models for different tasks?",
    answer: `Yes. A pragmatic enterprise AI strategy recognizes that no single model is best at everything. Your engineering team might need a model optimized for code generation, while your marketing team needs one optimized for creative copy, and your legal team needs one that can be hosted privately.

WorkBench embraces this reality by providing unified access to a wide spectrum of state-of-the-art models—including leading commercial APIs and powerful open-source alternatives. It allows you to assign the right model to the right agent for the right task, with a single control pane to optimize performance and cost across the enterprise.`
  },
  {
    id: 7,
    question: `How does WorkBench help us move from "pilot purgatory" to scaled deployment across the organization?`,
    answer: `Many organizations struggle to move AI past the proof-of-concept phase because the tools used for experimentation are ill-suited for production. WorkBench is engineered to close this gap. It provides a structured environment where agents can be rapidly prototyped, tested against real-world scenarios, and iteratively refined. Once an agent is validated, WorkBench offers streamlined deployment pathways to roll it out to specific departments or the entire organization, ensuring that what worked in the lab also works reliably in production.`
  },
  {
    id: 8,
    question: "How does the platform foster collaboration and ensure consistency across teams?",
    answer: `WorkBench functions as a knowledge-sharing ecosystem that breaks down AI silos. Instead of individual employees developing brilliant prompts that no one else sees, WorkBench allows teams to build shared libraries of verified agents, templates, and best practices.

For department heads, this ensures consistency in how AI is applied to business processes. A successful agent developed by one team can quickly be adapted and deployed by another, accelerating the learning curve and ensuring that the entire organization benefits from individual breakthroughs.`
  },
  {
    id: 9,
    question: "Does WorkBench require a steep learning curve for our non-technical team leaders?",
    answer: `No. WorkBench is designed to democratize access to powerful AI capabilities. While it offers the depth required by technical engineers building complex agents, its interface is accessible to business analysts, department heads, and subject matter experts.

We believe that the people closest to the business problems are often best equipped to design the agents that solve them. WorkBench empowers these leaders with intuitive tools to author and test agents without needing deep coding expertise, thereby accelerating digital transformation that's led by the business units, themselves.`
  },
  {
    id: 10,
    question: "How quickly can we integrate WorkBench into our current environment?",
    answer: `Speed is a primary design principle of WorkBench. It's engineered to readily integrate with existing enterprise infrastructure. Whether you require a managed cloud deployment for rapid activation or a private cloud installation to meet specific governance mandates, WorkBench is designed to quickly get your teams out of the infrastructure setup phase, so they can begin creating value.`
  }
];

export default faqData;

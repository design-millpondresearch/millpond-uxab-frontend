import element4 from "../../assets/elements/element4.svg";

const endtoendagentic = [
  {
    title: "Deploy",
    description: "Seamlessly deploy across major public and any corporate private models, and integrate with your existing systems.",
  },
  {
    title: "Secure",
    description: "Secure the full agentic AI workflow with real-time, behavior-aware governance that protects private company and customer data.",
  },
  {
    title: "Orchestrate",
    description: "Get contextually relevant results across every model and agent to maximize efficiency and output quality.",
  },
  {
    title: "Control",
    description: "Gain the transparency and policy control needed to support innovation while optimizing spend and preventing wasted tokens.",
  },
];

function EndToEndAgenticSection() {
  return (
    <section className="regular-banner-white px-4 md:px-6 py-12 md:py-16 relative overflow-hidden">
      {/* Background decorative element */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <img
          src={element4}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
      </div>
      
      {/* Right side ellipse gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 800px 100% at right center, rgba(86, 124, 141, 0.3) 0%, transparent 70%)',
          right: 0,
        }}
      />
      
      {/* Bottom ellipse gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 100% 400px at center bottom, rgba(86, 124, 141, 0.15) 0%, transparent 70%)',
          bottom: 0,
        }}
      />
      
      <div className="mx-auto max-w-6xl relative z-10">
        <div className="mb-8 md:mb-10 text-center">
          <h2 className="section-header text-3xl md:text-4xl lg:text-5xl" style={{ color: "#1F4E79" }}>
           Create, Deploy, Observe, Secure, Orchestrate, and Control Your Entire Agentic AI Ecosystem
          </h2>
          <h3 className="subheader" style={{ color: "#4B4B4B" }}>
            Mill Pond Research combines WorkBench and Xilos into a single platform for building and governing agentic AI. Built to help you create, deploy, observe, secure, orchestrate, and control your entire agentic AI ecosystem.
          </h3>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {endtoendagentic.map((role) => (
            <div
              key={role.title}
              className="rounded-2xl bg-[#F5EFE7] hover:bg-[#C8D9E6] p-4 md:p-6 text-center shadow-sm ring-1 ring-[#E5E7EB] drop-shadow hover:drop-shadow-lg transition-all duration-300 flex flex-col items-center"
            >
              <h4 className="large-font-bold mb-2 text-xl font-semibold" style={{ color: "#1F4E79", fontSize: "24px" }}>
                {role.title}
              </h4>
              <p className="small-font text-sm leading-relaxed mb-4" style={{ color: "#4B4B4B", fontSize: "14px" }}>
                {role.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EndToEndAgenticSection;

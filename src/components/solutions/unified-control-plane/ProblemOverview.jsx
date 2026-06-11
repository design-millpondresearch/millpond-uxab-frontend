import element4 from "../../../assets/elements/element4.svg";

function ProblemOverview() {
  return (
    <section className="regular-banner-white px-4 md:px-6 py-12 md:py-16 relative overflow-hidden">
      {/* Background decorative element */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <img
          src={element4}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Right side ellipse gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 800px 100% at right center, rgba(86, 124, 141, 0.3) 0%, transparent 70%)',
          right: 0,
        }}
      />

      <div className="mx-auto max-w-6xl relative z-10">
        <div className="mb-8 md:mb-10 text-center">
          <h2 className="section-header text-3xl md:text-4xl lg:text-5xl" style={{ color: "#1F4E79" }}>
            Why Organizations Need a Unified Control Plane
          </h2>
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="large-font" style={{ color: "#4B4B4B" }}>
            Every modern organization is racing to adopt agentic AI, but standard experimentation can not handle the complexity. Teams juggle multiple models across use cases and departments with different costs, performance characteristics, and operational constraints. That fragmentation creates disjointed initiatives, data silos, and integration gaps that prevent agents from working with a consistent business context.
          </p>
          <p className="large-font" style={{ color: "#4B4B4B" }}>
            On the control side, agentic AI breaks long-standing security assumptions. As agent-driven prompts increase in volume and autonomy, security teams lose visibility into what is being sent to external models, what is being returned, and whether prompts comply with enterprise policy. Legacy security controls were built for predictable, human-initiated activity, whereas agentic AI operates continuously, generates prompts dynamically, and crosses boundaries in ways that make unmanaged AI a governance and compliance crisis.
          </p>
          <p className="large-font" style={{ color: "#4B4B4B" }}>
            Mill Pond Research solves these challenges by combining WorkBench and Xilos into a single operational and governance control plane that manages the organization&apos;s entire agentic AI ecosystem from end to end.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProblemOverview;

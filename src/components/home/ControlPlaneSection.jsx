import { Link } from "react-router-dom";

function ControlPlaneSection() {
  return (
    <section className="regular-banner-white px-4 md:px-6 py-12 md:py-16 relative overflow-hidden">
      {/* Top right ellipse gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 1500px 150% at right top, rgba(86, 124, 141, 0.12) 0%, transparent 70%)',
          right: 0,
          top: 0,
        }}
      />

      {/* Bottom left ellipse gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 1500px 150% at left bottom, rgba(86, 124, 141, 0.12) 0%, transparent 70%)',
          left: 0,
          bottom: 0,
        }}
      />

      <div className="mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-10">
          <h2
            className="section-header text-3xl md:text-4xl lg:text-5xl"
            style={{ color: "#1F4E79" }}
          >
            One Platform. Two Products. Total Control.
          </h2>
          <h3
            className="subheader mt-4 max-w-4xl mx-auto text-base md:text-xl lg:text-2xl"
            style={{ color: "#4B4B4B" }}
          >
            Mill Pond Research deploys, secures, orchestrates, and controls agentic AI at scale. WorkBench enables rapid agent creation while Xilos provides granular model and token visibility, platform-layer intelligence for effortless model switching, and real-time intent-based governance that allows, blocks, or modifies prompts. A private knowledge base prevents repeat token spend, and dynamic routing minimizes costs.
          </h3>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          <Link
            to="/solutions/workbench#top"
            className="flex-1 max-w-sm rounded-2xl bg-[#F5EFE7] px-6 py-8 text-center shadow-sm ring-1 ring-[#E5E7EB] hover:bg-[#C8D9E6] transition-all duration-300"
          >
            <p className="text-sm uppercase tracking-wide mb-2" style={{ color: "#567C8D" }}>
              Deploy & Prototype
            </p>
            <h4 className="subheader mb-3" style={{ color: "#1F4E79" }}>
              WorkBench
            </h4>
            <p className="small-font" style={{ color: "#4B4B4B" }}>
              Professional-grade authoring tools to prototype, test, and deploy agents with universal model compatibility.
            </p>
          </Link>

          <div className="flex flex-col items-center gap-2 px-4">
            <div className="w-px h-8 bg-[#1F4E79] opacity-40 hidden md:block" />
            <span className="text-sm font-semibold" style={{ color: "#1F4E79" }}>
              MPR
            </span>
            <div className="w-px h-8 bg-[#1F4E79] opacity-40 hidden md:block" />
          </div>

          <Link
            to="/solutions/xilos#top"
            className="flex-1 max-w-sm rounded-2xl bg-[#F5EFE7] px-6 py-8 text-center shadow-sm ring-1 ring-[#E5E7EB] hover:bg-[#C8D9E6] transition-all duration-300"
          >
            <p className="text-sm uppercase tracking-wide mb-2" style={{ color: "#567C8D" }}>
              Secure & Control
            </p>
            <h4 className="subheader mb-3" style={{ color: "#1F4E79" }}>
              Xilos
            </h4>
            <p className="small-font" style={{ color: "#4B4B4B" }}>
              Real-time visibility, intent-based governance, and dynamic routing to optimize every interaction's cost and compliance.
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ControlPlaneSection;


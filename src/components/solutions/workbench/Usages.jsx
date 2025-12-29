// Cards content for usage section
const usages = [
  {
    title: "One Workspace. Every Model.",
    description:
      "Experience unlimited AI with no token caps, constant updates, parallel generation, and seamless integration with 500+ platforms.",
  },
  {
    title: "Unlimited AI Power at Your Fingertips.",
    description:
      "Accelerate workflows and drive innovation with boundless AI capabilities, zero limitations, and seamless integration across your tools.",
  },
  {
    title: "AI Solutions as Unique as Your Business.",
    description:
      "Develop specialized agents and custom knowledge bases that deliver results perfectly aligned with your organization's exact needs.",
  },
];

// Decorative shapes used in the usages section
import greyBlob from "../../../assets/elements/element2.svg";
import blueBlob from "../../../assets/elements/element3.svg";
import beigeGlow from "../../../assets/elements/element10.svg";

function Usages() {
  return (
    <section className="relative regular-banner-sand px-6 flex flex-col items-center overflow-hidden">
      {/* Large centered gradient blob */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 800px 500px at center, rgba(86, 124, 141, 0.1) 0%, rgba(86, 124, 141, 0.07) 40%, rgba(86, 124, 141, 0.04) 60%, transparent 80%)',
          zIndex: 0,
        }}
      />
      
      {/* Background elements behind the usages cards */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        <img src={beigeGlow} alt="" className="absolute top-0 right-0 w-64 md:w-80" />
        <img src={greyBlob} alt="" className="absolute bottom-0 left-0 w-56 md:w-72" />
        <img src={blueBlob} alt="" className="absolute top-1/3 left-1/3 w-48 md:w-64" />
      </div>
      <div className="text-center relative z-10">
        <h2 className="section-header mb-4 text-3xl md:text-4xl lg:text-5xl" style={{ color: "#1F4E79" }}>
          Harness the power of agentic AI without sacrificing security.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 my-12 max-w-6xl mx-auto">
          {usages.map((usage) => (
            <div
              key={usage.title}
              className="flex flex-col items-center text-center px-4 py-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="min-h-[60px] flex items-center justify-center mb-4">
                <h4 className="large-font-bold" style={{ color: "#1F4E79" }}>{usage.title}</h4>
              </div>
              <p className="small-font" style={{ color: "#4B4B4B" }}>{usage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Usages;
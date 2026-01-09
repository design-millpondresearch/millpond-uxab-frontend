// Cards content for usage section
const usages = [
  {
    title: "Rapid Agent Development",
    description:
      "Access leading AI models and professional authoring tools with extensive prompt libraries — all unified in one powerful platform",
  },
  {
    title: "Intelligent Model Optimization",
    description:
      "Test agents across all models to make data-driven selection decisions to ensure optimal performance",
  },
  {
    title: "Universal Compatibility & Integration",
    description:
      "Deploy anywhere with universal compatibility, native integrations, and zero vendor lock-in for rapid production scaling",
  },
];

// Decorative shapes used in the usages section
import greyBlob from "../../../assets/elements/element2.svg";
import blueBlob from "../../../assets/elements/element3.svg";
import beigeGlow from "../../../assets/elements/element10.svg";

/*
 * This modified Usages section reduces horizontal padding and adjusts
 * margins and grid spacing for a more comfortable layout on mobile
 * screens. Cards now use a unified `p-4 md:p-6` to shrink their padding
 * when space is limited. Vertical padding has been added to the section
 * itself to align with other sections in the site (`py-12 md:py-16`).
 */

function Usages() {
  return (
    <section className="relative regular-banner-sand px-4 md:px-6 py-12 md:py-16 flex flex-col items-center overflow-hidden">
      {/* Large centered gradient blob */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 800px 500px at center, rgba(86, 124, 141, 0.1) 0%, rgba(86, 124, 141, 0.07) 40%, rgba(86, 124, 141, 0.04) 60%, transparent 80%)',
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
        <h2
          className="section-header mb-4 text-3xl md:text-4xl lg:text-5xl"
          style={{ color: "#1F4E79" }}
        >
          From Fragmented AI Tools to Unified Competitive Advantage
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 my-8 md:my-12 max-w-6xl mx-auto">
          {usages.map((usage) => (
            <div
              key={usage.title}
              className="flex flex-col items-center text-center p-4 md:p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="min-h-[60px] flex items-center justify-center mb-4">
                <h4 className="large-font-bold" style={{ color: "#1F4E79" }}>
                  {usage.title}
                </h4>
              </div>
              <p className="small-font" style={{ color: "#4B4B4B" }}>
                {usage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Usages;
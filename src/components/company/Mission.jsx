import rocket from "../../assets/logos-general/rocket.svg";
import shield from "../../assets/logos-general/shield.svg";
import target from "../../assets/logos-general/target.svg";

// Decorative elements
import element2 from "../../assets/elements/element2.svg";
import element8 from "../../assets/elements/element8.svg";
import element10 from "../../assets/elements/element10.svg";

// Data describing the three ideals highlighted in this section.
const ideals = [
  {
    title: "Revolutionary Power",
    body:
      "Unleash AI's transformative capabilities with complete organizational confidence and control.",
    icon: rocket,
  },
  {
    title: "Unified Security",
    body:
      "Innovation and security work together as complementary forces, not opposing constraints.",
    icon: shield,
  },
  {
    title: "Network Intelligence",
    body:
      "AI systems that collaborate as a unified network, enhancing performance while maintaining protection.",
    icon: target,
  },
];

/**
 * Mission section
 *
 * Displays a mission statement about uniting power, protection and performance.
 * Adds subtle decorative SVGs behind the heading and grid for visual
 * interest. The shapes are absolutely positioned and faded so that
 * they complement rather than distract from the content.
 */
function Mission() {
  return (
    <section className="regular-banner-white flex flex-col items-center px-4 md:px-6 py-12 md:py-16 relative overflow-hidden">
      {/* Decorative backdrop */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Soft grey glow top left */}
        <img
          src={element2}
          alt=""
          className="absolute -top-32 -left-20 w-80 md:w-96 opacity-40"
        />
        {/* Pale ring motif at mid section */}
        <img
          src={element8}
          alt=""
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 md:w-72 opacity-30"
        />
        {/* Warm beige glow bottom right */}
        <img
          src={element10}
          alt=""
          className="absolute bottom-0 right-0 w-80 md:w-96 opacity-50"
        />
      </div>

      {/* Heading */}
      <div className="text-center w-full max-w-7xl">
        <h2
          className="section-header mb-4 text-3xl md:text-4xl lg:text-5xl mx-4 md:mx-0 max-w-7xl"
          style={{ color: "#1F4E79" }}
        >
          Uniting Power, Protection, and Performance.
        </h2>
        <h3
          className="subheader mx-2 md:mx-6 text-base md:text-xl lg:text-2xl max-w-7xl"
          style={{ color: "#4B4B4B" }}
        >
          We envision a world where organizations harness the revolutionary power of AI with complete confidence,
          where innovation and security strengthen rather than oppose each other, and where AI systems operate as
          a unified intelligence network that continuously enhances business performance while protecting what matters most.
        </h3>
      </div>

      {/* Grid of ideals */}
      <div className="mt-6 md:mt-8 w-full max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-6 md:gap-14 mx-4 md:mx-0">
          {ideals.map((item) => (
            <div
              key={item.title}
              className="relative flex flex-col items-center text-center px-4"
            >
              {/* #F5EFE7 ellipse blob gradient behind ideal */}
              <div
                className="pointer-events-none absolute inset-0 rounded-lg"
                style={{
                  background:
                    'radial-gradient(ellipse 200px 120px at center, rgba(245, 239, 231, 0.8) 0%, rgba(245, 239, 231, 0.6) 40%, rgba(245, 239, 231, 0.4) 60%, transparent 85%)',
                  zIndex: 0,
                }}
              />

              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full relative z-10">
                <img src={item.icon} alt={item.title} className="h-10 w-10" />
              </div>
              <h3
                className="subheader text-lg md:text-xl lg:text-2xl mb-2 relative z-10"
                style={{ color: "#1F4E79" }}
              >
                {item.title}
              </h3>
              <p className="small-font relative z-10" style={{ color: "#4B4B4B" }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Mission;
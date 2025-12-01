import rocket from "../../assets/rocket.svg";
import shield from "../../assets/shield.svg";
import target from "../../assets/target.svg";

const ideals = [
  {
    title: "Revolutionary Power",
    body: "Unleash AI's transformative capabilities with complete organizational confidence and control.",
    icon: rocket, 
  },
  {
    title: "Unified Security",
    body: "Innovation and security work together as complementary forces, not opposing constraints.",
    icon: shield,
  },
  {
    title: "Network Intelligence",
    body: "AI systems that collaborate as a unified network, enhancing performance while maintaining protection.",
    icon: target,
  }
];

function Mission() {
  return (
    <section className="regular-banner-white flex flex-col items-center">
      {/* Heading */}
      <div className="max-w-4xl text-center">
        <h2 className="section-header mb-4" style={{ color: "#1F4E79" }}>
          Uniting Power, Protection, and Performance.
        </h2>
        <h3 className="subheader" style={{ color: "#4B4B4B" }}>
          We envision a world where organizations harness the revolutionary power of AI with complete confidence, 
          where innovation and security strengthen rather than oppose each other, and where AI systems operate as 
          a unified intelligence network that continuously enhances business performance while protecting what matters most.
        </h3>
      </div>

      {/* grid */}
      <div className="mt-12 w-full">
        <div className="grid grid-cols-3 justify-items-center gap-6">
          {ideals.map((ideals) => (
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full">
                <img src={ideals.icon} alt={ideals.title} className="h-10 w-10" />
              </div>

              <h3
                className="subheader"
                style={{ color: "#567C8D" }}
              >
                {ideals.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#4B4B4B" }}
              >
                {ideals.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Mission;
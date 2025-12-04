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
    <section className="regular-banner-white flex flex-col items-center px-4 md:px-6 py-4 md:py-6">
      {/* Heading */}
      <div className="text-center w-full max-w-4xl">
        <h2 className="section-header mb-4 text-3xl md:text-4xl lg:text-5xl mx-4 md:mx-0" style={{ color: "#1F4E79" }}>
          Uniting Power, Protection, and Performance.
        </h2>
        <h3 className="subheader mx-2 md:mx-6 text-base md:text-xl lg:text-2xl" style={{ color: "#4B4B4B" }}>
          We envision a world where organizations harness the revolutionary power of AI with complete confidence, 
          where innovation and security strengthen rather than oppose each other, and where AI systems operate as 
          a unified intelligence network that continuously enhances business performance while protecting what matters most.
        </h3>
      </div>

      {/* grid */}
      <div className="mt-6 md:mt-8 w-full max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-8 md:gap-14 mx-4 md:mx-0">
          {ideals.map((ideals) => (
            <div key={ideals.title} className="flex flex-col items-center text-center px-4">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full">
                <img src={ideals.icon} alt={ideals.title} className="h-10 w-10" />
              </div>

              <h3
                className="subheader text-lg md:text-xl lg:text-2xl mb-2"
                style={{ color: "#567C8D" }}
              >
                {ideals.title}
              </h3>
              <p
                className="small-font"
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
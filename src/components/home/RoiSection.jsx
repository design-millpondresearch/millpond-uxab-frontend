import coinstack from "../../assets/logos-general/coin-stack.svg";
import warning from "../../assets/logos-general/alert-triangle.svg";
import shield from "../../assets/logos-general/shield.svg";

const metrics = [
  { label: "30% â†“ AI Cost", icon: coinstack },
  { label: "50% â†“ Data Risk", icon: warning },
  { label: "Zero Vendor Lock-In", icon: shield },
];

function RoiSection() {
  return (
    <section className="regular-banner-sand px-4 md:px-6 py-12 md:py-16 relative overflow-hidden">
      {/* Center blob gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 1500px 150% at center center, rgba(86, 124, 141, 0.12) 0%, transparent 70%)',
        }}
      />

      <div className="mx-auto max-w-6xl text-center relative z-10">
        <h2
          className="section-header text-3xl md:text-4xl lg:text-5xl"
          style={{ color: "#1F4E79" }}
        >
          Measurable Impact Across Innovation and Governance
        </h2>

        <p
          className="subheader mt-2 text-lg md:text-2xl"
          style={{ color: "#4B4B4B" }}
        >
          The UCP delivers efficiency, security, and cost control at scale.
        </p>

        <div className="mt-6 md:mt-8 flex flex-wrap justify-center gap-4 md:gap-6 max-w-7xl mx-auto">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="
                flex items-center justify-center gap-4
                bg-white
                px-6 md:px-10 py-4 md:py-5
                rounded-2xl
                shadow-sm
                ring-1 ring-[#E5E7EB]
                transition-all duration-300 hover:drop-shadow-lg
                min-w-[280px] md:min-w-[320px]
              "
            >
              <img
                src={metric.icon}
                alt={metric.label}
                className="h-7 w-7 md:h-8 md:w-8"
              />
              <p className="text-lg md:text-xl font-semibold text-[#1F4E79]">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RoiSection;

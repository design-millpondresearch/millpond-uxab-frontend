import coinstack from "../../assets/coin-stack.svg";
import warning from "../../assets/alert-triangle.svg";
import shield from "../../assets/shield.svg";

const metrics = [
  { label: "30% ↓ AI Cost", icon: coinstack },
  { label: "50% ↓ Data Risk", icon: warning },
  { label: "5M+ Protected Prompts", icon: shield },
];

function RoiSection() {
  return (
    <section className="regular-banner-sand px-6 py-16">
      <div className="mx-auto max-w-6xl text-center">
        <h2
          className="section-header text-3xl md:text-4xl lg:text-5xl"
          style={{ color: "#1F4E79" }}
        >
          ROI Metrics.
        </h2>

        <p
          className="subheader mt-2 text-lg md:text-2xl"
          style={{ color: "#4B4B4B" }}
        >
          See measurable impact across your entire AI ecosystem.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="
                flex items-center justify-center gap-4
                bg-white
                px-10 py-5
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

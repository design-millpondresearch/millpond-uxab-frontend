import coinstack from "../../assets/coin-stack.svg";
import warning from "../../assets/alert-triangle.svg";
import shield from "../../assets/shield.svg";


const metrics = [
  { label: "30% ↓ AI Cost",
    icon: coinstack,
  },
  { label: "50% ↓ Data Risk",
    icon: warning,
  },
  { label: "5M+ Protected Prompts",
    icon: shield,
  },
];

function RoiSection() {
  return (
    <section className="regular-banner-sand px-6">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="section-header text-3xl md:text-4xl lg:text-5xl" style={{ color: "#1F4E79" }}>
          ROI Metrics.
        </h2>
        <p className="subheader mt-2" style={{ color: "#4B4B4B" }}>
          See measurable impact across your entire AI ecosystem.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-semibold text-[#1F4E79] shadow-sm ring-1 ring-[#E5E7EB] drop-shadow hover:drop-shadow-lg transition-all duration-300"
            >
              <img src={metric.icon} alt={metric.label} className="h-6 w-6" />
              <p className="text-base font-semibold text-[#1F4E79]">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RoiSection;

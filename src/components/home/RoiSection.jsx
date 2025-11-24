const metrics = [
  { label: "50% lower AI Cost" },
  { label: "50% lower Data Risk" },
  { label: "3M+ Protected Prompts" },
];

function RoiSection() {
  return (
    <section className="regular-banner-sand px-6 py-16">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="section-header" style={{ color: "#1F4E79" }}>
          ROI Metrics.
        </h2>
        <p className="mt-2 text-sm leading-relaxed" style={{ color: "#4B4B4B" }}>
          See measurable impact across your entire AI ecosystem.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1F4E79] shadow-sm ring-1 ring-[#E5E7EB]"
            >
              {metric.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RoiSection;

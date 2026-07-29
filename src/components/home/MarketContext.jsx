const stats = [
  {
    figure: "68%",
    label: "Shadow AI",
    detail: "of employees use unauthorized AI tools you can\u2019t see",
  },
  {
    figure: "22x",
    label: "Spending Surge",
    detail: "enterprise AI spend: $1.7B (2023) \u2192 $37B (2025)",
  },
  {
    figure: "84%",
    label: "Stuck in Pilot",
    detail: "of AI deployments never reach production",
  },
  {
    figure: "40%+",
    label: "Canceled by 2027",
    detail: "of agentic AI projects per Gartner, due to cost and risk",
  },
];

function MarketContext() {
  return (
    <section className="regular-banner-sand px-4 md:px-6 py-12 md:py-16 relative overflow-hidden">
      {/* Center blob gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 1500px 150% at center center, rgba(86, 124, 141, 0.12) 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-6xl relative z-10">
        <div className="mb-8 md:mb-10 text-center">
          <h2
            className="section-header text-3xl md:text-4xl lg:text-5xl"
            style={{ color: "#1F4E79" }}
          >
            The Market Has Moved
          </h2>
          <h3 className="subheader" style={{ color: "#4B4B4B" }}>
            The question is no longer &ldquo;should we use AI?&rdquo; &mdash; it&rsquo;s &ldquo;how do we control, optimize, and monetize the AI we&rsquo;re already using?&rdquo;
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center rounded-2xl bg-white p-6 md:p-8 shadow-sm ring-1 ring-[#E5E7EB] drop-shadow hover:drop-shadow-lg transition-all duration-300"
            >
              <p
                className="text-4xl md:text-5xl font-bold"
                style={{ color: "#1F4E79" }}
              >
                {stat.figure}
              </p>
              <p
                className="subheader mt-3 text-lg"
                style={{ color: "#567C8D" }}
              >
                {stat.label}
              </p>
              <p
                className="small-font text-sm leading-relaxed mt-2"
                style={{ color: "#4B4B4B" }}
              >
                {stat.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MarketContext;

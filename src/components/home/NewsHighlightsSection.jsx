const stories = [
  {
    source: "TechCrunch",
    date: "Nov 1, 2024",
    title: "Mill Pond Research advances prompt security with enterprise-ready guardrails.",
    cta: "Read more",
  },
  {
    source: "Press Release",
    date: "Oct 15, 2024",
    title: "Mill Pond launches Xlios for AI security and orchestration.",
    cta: "View more",
  },
];

function NewsHighlightsSection() {
  return (
    <section className="regular-banner-sand px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 text-center">
          <h2 className="section-header text-3xl md:text-4xl lg:text-5xl" style={{ color: "#1F4E79" }}>
            News and Highlights
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {stories.map((story) => (
            <article
              key={story.title}
              className="flex h-full flex-col justify-between rounded-2xl bg-white p-6 text-left shadow-sm ring-1 ring-[#E5E7EB] drop-shadow hover:drop-shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-between text-sm font-semibold">
                <span className="rounded-full bg-[#E9F3FB] px-3 py-1 text-[#1F4E79]">{story.source}</span>
                <span className="text-[#567C8D]">{story.date}</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: "#4B4B4B" }}>
                {story.title}
              </p>
              <div className="mt-6">
                <button className="button-secondary">{story.cta}</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewsHighlightsSection;

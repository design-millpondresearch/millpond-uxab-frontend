import techcrunch from "../../assets/TechCrunchLogo.svg";
import bbc from "../../assets/BBCLogo.svg";
import marketwatch from "../../assets/marketwatch.jpeg";
import bankinfosecurity from "../../assets/bankinfosecurity.webp";

const stories = [
  {
    logo: marketwatch,
    source: "MarketWatch",
    title:
      "Can China just steal America’s AI brain that’s costing trillions to develop?",
    category: "News",
    link: "https://www.marketwatch.com/story/can-china-just-steal-americas-ai-brain-thats-costing-trillions-to-develop-da126634",
  },
  {
    logo: techcrunch,
    source: "TechCrunch",
    title:
      "The 2025 Startup Battlefield 200 is here — see who made the cut.",
    category: "Event/Competition",
    link: "https://techcrunch.com/2025/08/27/the-2025-startup-battlefield-200-is-here-see-who-made-the-cut/#millpondresearch",
  },
  {
    logo: bbc,
    source: "BBC",
    title:
      "It shocked the market but has China's DeepSeek changed AI?",
    category: "Publication",
    link: "https://www.bbc.com/news/articles/c4gez754mn6o",
  },
  {
    logo: bankinfosecurity,
    source: "BankInfoSecurity",
    title:
      "Hegseth's Anthropic Deadline Risks Severe Defense AI Gaps.",
    category: "Publication",
    link: "https://www.bankinfosecurity.com/hegseths-anthropic-deadline-risks-severe-defense-ai-gaps-a-30865",
  },
];

function NewsHighlightsSection() {
  return (
    <section className="regular-banner-sand px-4 md:px-6 py-12 md:py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 text-center">
          <h2
            className="section-header text-3xl md:text-4xl lg:text-5xl"
            style={{ color: "#1F4E79" }}
          >
            News and Highlights
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {stories.map((story) => (
            <article
              key={story.title}
              className="flex h-full flex-col rounded-2xl bg-white p-4 md:p-6 text-center shadow-sm ring-1 ring-[#E5E7EB] drop-shadow hover:drop-shadow-lg transition-all duration-300 cursor-default"
            >
              <div className="flex-1 flex flex-col items-center justify-center mb-4">
                <img
                  src={story.logo}
                  alt={story.source}
                  className="object-contain mb-2"
                  style={{ width: '55px', height: '28px' }}
                />
                <p className="subheader font-semibold" style={{ color: "#1F4E79" }}>
                  {story.source}
                </p>
              </div>
              <p
                className="small-font leading-relaxed mb-4"
                style={{ color: "#4B4B4B" }}
              >
                {story.title}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <a
                  href={story.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#1F4E79] hover:text-[#1F4E79] transition-all duration-300 hover:translate-x-1"
                  style={{ textDecoration: 'none' }}
                >
                  Read Article →
                </a>
                <span
                  className="rounded-full px-3 py-1 text-sm font-semibold text-[#4B4B4B]"
                  style={{ backgroundColor: '#FBFAF8' }}
                >
                  {story.category}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewsHighlightsSection;
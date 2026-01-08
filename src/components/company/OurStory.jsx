import vision from "../../assets/logos-general/eye.svg";
import barchart from "../../assets/logos-general/barchart.svg";
import users from "../../assets/logos-general/users.svg";
import teampic from "../../assets/teamimage.svg";
import brothersImage from "../../assets/brothers-v1.png";

// Decorative elements
import element2 from "../../assets/elements/element2.svg";
import element8 from "../../assets/elements/element8.svg";
import element10 from "../../assets/elements/element10.svg";
import element13 from "../../assets/elements/element13.svg";

// Timeline data
const story = [
  {
    year: "2023",
    title: "The Beginning of Mill Pond Research",
    body:
      "Founded by brothers Andrew and Pete Shimshock with a vision to empower businesses to build secure, localized AI systems.",
  },
  {
    year: "2024",
    title: "Launch of WorkBench",
    body:
      "Introduced our AI development platform that enables organizations to build custom AI solutions with enhanced security and control.",
  },
  {
    year: "2025",
    title: "Patented Xilos, Launched Xilos",
    body:
      "Successfully patented and launched our flagship AI security orchestration platform, addressing the critical shadow AI crisis.",
  },
];

// Traits data
const traits = [
  {
    icon: vision,
    title: "The Vision",
    body:
      "Founded by brothers Andrew and Pete Shimshock, Mill Pond Research emerged from a bold vision to empower businesses to build their own AI systems. Challenging “Big Token” models, they championed AI that's localized, distributed, and personalized while maintaining privacy and security.",
  },
  {
    icon: barchart,
    title: "The Evolution",
    body:
      "As agentic AI revolutionizes business operations, Mill Pond evolved from services to pioneering software development. Their flagship product, Xilos, addresses the critical “shadow AI crisis” facing organizations by providing infrastructure that observes, secures, and orchestrates AI agents across networks.",
  },
  {
    icon: users,
    title: "The Commitment",
    body:
      "As US AI Safety Institute Consortium members, they're committed to developing frameworks that enable companies to harness AI's powerful capabilities while maintaining control and security. This partnership reinforces their dedication to responsible AI innovation.",
  },
];

/**
 * Our Story section
 *
 * Presents a three‑column timeline of key milestones, a team photograph,
 * and descriptive traits about the company’s vision, evolution and
 * commitments. Subtle decorative shapes are layered behind the content to
 * echo the soft swirls and glows from the Figma design. The shapes are
 * positioned absolutely within the section.
 */
function OurStory() {
  return (
    <section id="our-story" className="regular-banner-sand px-4 md:px-6 py-12 md:py-16 flex flex-col items-center relative overflow-hidden">
      {/* Decorative backdrop */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Large beige gradient washing across the background */}
        <img
          src={element13}
          alt=""
          className="absolute top-0 right-0 w-full max-w-none h-96 opacity-30"
        />
        {/* Soft grey glow at bottom left */}
        <img
          src={element2}
          alt=""
          className="absolute bottom-0 left-0 w-96 md:w-[450px] opacity-50"
        />
        {/* Concentric rings floating near timeline */}
        <img
          src={element8}
          alt=""
          className="absolute top-1/3 right-1/4 w-64 md:w-72 opacity-30"
        />
        {/* Warm beige glow behind the team traits */}
        <img
          src={element10}
          alt=""
          className="absolute bottom-32 right-0 w-80 md:w-96 opacity-40"
        />
      </div>

      <div className="text-center">
        <h2
          className="section-header mb-4 text-3xl md:text-4xl lg:text-5xl"
          style={{ color: "#1F4E79" }}
        >
          Our Story
        </h2>
        <h3
          className="section-header mb-8 text-2xl md:text-3xl lg:text-4xl"
          style={{ color: "#1F4E79" }}
        >
          Securing the Future of Agentic AI
        </h3>
      </div>

      {/* Story content */}
      <div className="w-full max-w-6xl mx-auto mb-12 md:mb-16 px-4 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left column - Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={brothersImage}
              alt="Andrew and Pete Shimshock"
              className="w-full max-w-sm lg:max-w-md h-auto rounded-lg shadow-lg"
            />
          </div>
          
          {/* Right column - Text */}
          <div className="flex flex-col">
            <p className="large-font text-lg md:text-xl leading-relaxed" style={{ color: "#4B4B4B" }}>
              Founded in 2023 by brothers Andrew and Pete Shimshock, Mill Pond Research emerged from a vision to empower businesses to build their own AI systems. Challenging "Big Token" models, they championed AI that's localized, distributed, and personalized while maintaining privacy and security.
            </p>
            <p className="large-font text-lg md:text-xl leading-relaxed mt-6" style={{ color: "#4B4B4B" }}>
              As agentic AI revolutionizes business operations, Mill Pond evolved from services to pioneering software development. Their flagship product, Xilos, addresses the critical "shadow AI crisis" facing organizations by providing infrastructure that observes, secures, and orchestrates AI agents across networks. As US AI Safety Institute Consortium members, they're committed to developing frameworks that enable companies to harness AI's powerful capabilities while maintaining control and security.
            </p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-16 lg:gap-20 w-full max-w-7xl mt-6 md:mt-8 justify-items-start">
        {story.map((item) => (
          <div key={item.year} className="relative flex flex-col items-start w-full">
            {/* Blob gradient behind story */}
            <div
              className="pointer-events-none absolute inset-0 rounded-lg"
              style={{
                background:
                  'radial-gradient(ellipse 240px 180px at center, rgba(86, 124, 141, 0.18) 0%, rgba(86, 124, 141, 0.12) 40%, rgba(86, 124, 141, 0.06) 60%, transparent 85%)',
                zIndex: 0,
              }}
            />

            {/* Year with line */}
            <div className="flex items-center mb-4 w-full relative z-10">
              <h3 className="subheader mr-4" style={{ color: "#567C8D" }}>
                {item.year}
              </h3>
              <div className="flex-1 h-px bg-[#567C8D]"></div>
            </div>
            {/* Title */}
            <h4
              className="subheader md:text-xl font-semibold mb-2 text-left relative z-10"
              style={{ color: "#4B4B4B" }}
            >
              {item.title}
            </h4>
            {/* Description */}
            <p
              className="large-font md:text-base leading-relaxed text-left relative z-10"
              style={{ color: "#4B4B4B" }}
            >
              {item.body}
            </p>
          </div>
        ))}
      </div>

      {/* Traits */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 lg:gap-16 mx-2 mt-6 md:mt-8 max-w-7xl">
        {traits.map((item) => (
          <div key={item.title} className="relative flex flex-col items-center text-center">
            {/* Blob gradient behind trait */}
            <div
              className="pointer-events-none absolute inset-0 rounded-lg"
              style={{
                background:
                  'radial-gradient(ellipse 240px 180px at center, rgba(86, 124, 141, 0.18) 0%, rgba(86, 124, 141, 0.12) 40%, rgba(86, 124, 141, 0.06) 60%, transparent 85%)',
                zIndex: 0,
              }}
            />

            {/* Icon with white gradient circular blob */}
            <div className="mb-4 relative flex items-center justify-center">
              {/* White gradient circular blob */}
              <div
                className="pointer-events-none absolute rounded-full"
                style={{
                  background:
                    'radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.9) 18%, rgba(255, 255, 255, 0.75) 32%, rgba(255, 255, 255, 0.6) 42%, rgba(255, 255, 255, 0.45) 52%, rgba(255, 255, 255, 0.3) 62%, rgba(255, 255, 255, 0.2) 68%, rgba(255, 255, 255, 0.1) 73%, rgba(255, 255, 255, 0.05) 78%, transparent 82%)',
                  width: '100px',
                  height: '100px',
                  zIndex: 9,
                }}
              />
              {/* Icon */}
              <img src={item.icon} alt={item.title} className="h-10 w-10 relative z-10" />
            </div>
            <h3 className="subheader mb-2 relative z-10" style={{ color: "#1F4E79" }}>
              {item.title}
            </h3>
            <p className="large-font relative z-10" style={{ color: "#4B4B4B" }}>
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurStory;
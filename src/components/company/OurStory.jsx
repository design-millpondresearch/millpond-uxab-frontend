import vision from "../../assets/logos-general/eye.svg";
import barchart from "../../assets/logos-general/barchart.svg";
import users from "../../assets/logos-general/users.svg";
import teampic from "../../assets/teamimage.svg";

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
      "Founded by brothers Andrew and Pete Shimshock, Mill Pond Research emerged from a bold vision to empower businesses to build their own AI systems. Challenging \u201cBig Token\u201d models, they championed AI that's localized, distributed, and personalized while maintaining privacy and security.",
  },
  {
    icon: barchart,
    title: "The Evolution",
    body:
      "As agentic AI revolutionizes business operations, Mill Pond evolved from services to pioneering software development. Their flagship product, Xilos, addresses the critical \u201cshadow AI crisis\u201d facing organizations by providing infrastructure that observes, secures, and orchestrates AI agents across networks.",
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
    <section className="regular-banner-sand px-6 flex flex-col items-center relative overflow-hidden">
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
      </div>

      {/* Timeline */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 lg:gap-20 w-full max-w-7xl mt-8 justify-items-start">
        {story.map((item) => (
          <div key={item.year} className="flex flex-col items-start w-full">
            {/* Year with line */}
            <div className="flex items-center mb-4 w-full">
              <h3 className="subheader mr-4" style={{ color: "#567C8D" }}>
                {item.year}
              </h3>
              <div className="flex-1 h-px bg-[#567C8D]"></div>
            </div>
            {/* Title */}
            <h4
              className="subheader md:text-xl font-semibold mb-2 text-left"
              style={{ color: "#4B4B4B" }}
            >
              {item.title}
            </h4>
            {/* Description */}
            <p
              className="large-font md:text-base leading-relaxed text-left"
              style={{ color: "#4B4B4B" }}
            >
              {item.body}
            </p>
          </div>
        ))}
      </div>

      {/* Team image */}
      <div className="w-full max-w-6xl my-8 flex justify-center items-center">
        <img
          src={teampic}
          alt="team"
          className="w-128 h-auto drop-shadow hover:drop-shadow-lg transition-all duration-300"
        />
      </div>

      {/* Traits */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 mx-2 mt-8 max-w-7xl">
        {traits.map((item) => (
          <div key={item.title} className="flex flex-col items-center text-center">
            {/* Icon in white circle */}
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white">
              <img src={item.icon} alt={item.title} className="h-10 w-10" />
            </div>
            <h3 className="subheader mb-2" style={{ color: "#1F4E79" }}>
              {item.title}
            </h3>
            <p className="large-font" style={{ color: "#4B4B4B" }}>
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurStory;
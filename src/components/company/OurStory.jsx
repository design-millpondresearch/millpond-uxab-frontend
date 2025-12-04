import vision from "../../assets/eye.svg";
import barchart from "../../assets/barchart.svg";
import users from "../../assets/users.svg";
import teampic from "../../assets/teamimage.svg";

const story = [
  {
    year: "2023",
    title: "The Beginning of Mill Pond Research",
    body: "Founded by brothers Andrew and Pete Shimshock with a vision to empower businesses to build secure, localized AI systems.",
  },
  {
    year: "2024",
    title: "Launch of WorkBench",
    body: "Introduced our AI development platform that enables organizations to build custom AI solutions with enhanced security and control.",
  },
  {
    year: "2025",
    title: "Patented Xilos, Launched Xilos",
    body: "Successfully patented and launched our flagship AI security orchestration platform, addressing the critical shadow AI crisis.",
  },
];

const traits = [
  {
    icon: vision,
    title: "The Vision",
    body: "Founded by brothers Andrew and Pete Shimshock, Mill Pond Research emerged from a bold vision to empower businesses to build their own AI systems. Challenging &ldquo;Big Token&rdquo; models, they championed AI that's localized, distributed, and personalized while maintaining privacy and security.",
  },
  {
    icon: barchart,
    title: "The Evolution",
    body: "As agentic AI revolutionizes business operations, Mill Pond evolved from services to pioneering software development. Their flagship product, Xilos, addresses the critical &ldquo;shadow AI crisis&rdquo; facing organizations by providing infrastructure that observes, secures, and orchestrates AI agents across networks.",
  },
  {
    icon: users,
    title: "The Commitment",
    body: "As US AI Safety Institute Consortium members, they're committed to developing frameworks that enable companies to harness AI's powerful capabilities while maintaining control and security. This partnership reinforces their dedication to responsible AI innovation.",
  },
]

function OurStory() {
  return (
    <section className="regular-banner-sand px-6 py-4 md:py-6 flex flex-col items-center">
      <div className="text-center">
        <h2 className="section-header mb-4 text-3xl md:text-4xl lg:text-5xl" style={{ color: "#1F4E79" }}>
          Our Story
        </h2>
      </div>

      {/* story */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 lg:gap-20 w-full max-w-6xl mt-8 justify-items-start">
        {story.map((item) => (
          <div key={item.year} className="flex flex-col items-start w-full">
            {/* Year with line */}
            <div className="flex items-center mb-4 w-full">
              <h3 className="subheader mr-4" style={{ color: "#1F4E79" }}>
                {item.year}
              </h3>
              <div className="flex-1 h-px bg-[#1F4E79]"></div>
            </div>
            
            {/* Title */}
            <h4 className="text-lg md:text-xl font-semibold mb-2 text-left" style={{ color: "#1F4E79" }}>
              {item.title}
            </h4>
            
            {/* Description */}
            <p className="text-sm md:text-base leading-relaxed text-left" style={{ color: "#4B4B4B" }}>
              {item.body}
            </p>
          </div>
        ))}
      </div>

      {/* team image */}
      <div className="w-full max-w-6xl my-8 flex justify-center items-center">
        <img src={teampic} alt="team" className="w-128 h-auto drop-shadow hover:drop-shadow-lg transition-all duration-300" />
      </div>

      {/* traits */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 mx-2 mt-8">
        {traits.map((item) => (
          <div key={item.title} className="flex flex-col items-center text-center">
            {/* Icon in white circle */}
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white">
              <img src={item.icon} alt={item.title} className="h-10 w-10" />
            </div>
            
            <h3 className="subheader mb-2" style={{ color: "#1F4E79" }}>{item.title}</h3>
            <p className="large-font" style={{ color: "#4B4B4B" }}>{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurStory;
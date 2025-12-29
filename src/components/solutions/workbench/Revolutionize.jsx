import workbenchSamplePic from "../../../assets/WorkBenchSample.svg";
import share from "../../../assets/logos-general/share.svg";
import watch from "../../../assets/logos-general/watch.svg";
import usercheck from "../../../assets/logos-general/usercheck.svg";

// Decorative elements
import beigeGlow from "../../../assets/elements/element10.svg";
import blueBlob from "../../../assets/elements/element3.svg";

const traits = [
  {
    icon: share,
    title: "Unified",
    description:
      "WorkBench seamlessly consolidates every AI model into one intuitive interface, future-proofed for tomorrow's breakthroughs.",
  },
  {
    icon: watch,
    title: "Efficient",
    description:
      "WorkBench saves you time and resources by unifying all AI models in one platform, eliminating token limits and redundant queries.",
  },
  {
    icon: usercheck,
    title: "Tailored",
    description:
      "Evolve generic AI into your organization's collective intelligence with specialized agents, custom knowledge, and tailored outputs.",
  },
];

/*
 * The Revolutionize section outlines WorkBench's value pillars. In this
 * version we've adjusted padding, margins and grid gaps to better adapt to
 * small screens while preserving the desktop layout. Each trait card uses
 * responsive padding so text remains readable on mobile, and the section
 * overall gains `py-12`/`md:py-16` for consistent vertical rhythm across
 * pages. The decorative blobs remain unchanged.
 */

function Revolutionize() {
  return (
    <section className="relative regular-banner-white px-4 md:px-6 py-12 md:py-16 flex flex-col items-center">
      {/* Decorative shapes behind the revolutionize section */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        <img src={beigeGlow} alt="" className="absolute top-0 right-0 w-64 md:w-80" />
        <img src={blueBlob} alt="" className="absolute top-1/4 left-0 w-56 md:w-72" />
      </div>
      <div className="text-center">
        <h2
          className="section-header mb-4 text-3xl md:text-5xl lg:text-6xl"
          style={{ color: "#1F4E79" }}
        >
          Revolutionize How Your Teams Work with AI
        </h2>
        <img
          src={workbenchSamplePic}
          alt="Workbench Sample Picture"
          className="w-full max-w-[320px] md:max-w-xl lg:max-w-2xl h-auto my-8 md:my-12 mx-auto"
        />
        <h3
          className="subheader mx-4 w-full max-w-7xl mb-8 md:mb-18"
          style={{ color: "#4B4B4B" }}
        >
          WorkBench gives teams one powerful platform to access every AI model without limits. Build agents tailored to
          your industry, integrate with existing tools, and secure your data, all while eliminating redundant work.
          Deliver measurable results with solutions calibrated to your unique needs.
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 my-8 md:my-12 max-w-7xl mx-auto">
          {traits.map((trait) => (
            <div
              key={trait.title}
              className="flex flex-col items-center text-center p-4 md:p-6 bg-white rounded-lg relative"
            >
              {/* Blob gradient behind trait */}
              <div
                className="pointer-events-none absolute inset-0 rounded-lg"
                style={{
                  background:
                    'radial-gradient(ellipse 240px 180px at center, rgba(86, 124, 141, 0.18) 0%, rgba(86, 124, 141, 0.12) 40%, rgba(86, 124, 141, 0.06) 60%, transparent 85%)',
                  zIndex: 0,
                }}
              />

              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full relative z-10">
                <img src={trait.icon} alt={trait.title} className="h-10 w-10" />
              </div>
              <div className="min-h-[40px] flex items-center justify-center mb-4 relative z-10">
                <h3 className="subheader" style={{ color: "#1F4E79" }}>{trait.title}</h3>
              </div>
              <p className="large-font relative z-10" style={{ color: "#4B4B4B" }}>
                {trait.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Revolutionize;
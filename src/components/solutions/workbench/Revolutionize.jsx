import workbenchSamplePic from "../../../assets/WorkBenchSample.svg";
import share from "../../../assets/share.svg";
import watch from "../../../assets/watch.svg";
import usercheck from "../../../assets/usercheck.svg";

const traits = [
    {
        icon: share,
        title: "Unified",
        description: "WorkBench seamlessly consolidates every AI model into one intuitive interface, future-proofed for tomorrow's breakthroughs.",
    },
    {
        icon: watch,
        title: "Efficient",
        description: "WorkBench saves you time and resources by unifying all AI models in one platform, eliminating token limits and redundant queries.",
    },
    {
        icon: usercheck,
        title: "Tailored",
        description: "Evolve generic AI into your organization's collective intelligence with specialized agents, custom knowledge, and tailored outputs.",
    },
];

function Revolutionize() {
    return (
        <section className="regular-banner-white px-6 py-4 md:py-6 flex flex-col items-center">
            <div className="text-center">
                <h2 className="section-header mb-4 text-3xl md:text-5xl lg:text-6xl" style={{ color: "#1F4E79" }}>
                    Revolutionize How Your Teams Work with AI
                </h2>
                <img src={workbenchSamplePic} alt="Workbench Sample Picture" className="w-full max-w-[320px] md:max-w-xl lg:max-w-2xl h-auto my-12 mx-auto" />
                <h3 className="subheader mx-4 w-full max-w-7xl text-base md:text-xl lg:text-2xl mb-18" style={{ color: "#4B4B4B" }}>
                    WorkBench gives teams one powerful platform to access every AI model without limits. 
                    Build agents tailored to your industry, integrate with existing tools, and secure your data, 
                    all while eliminating redundant work. Deliver measurable results with solutions calibrated 
                    to your unique needs.
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-12 max-w-7xl mx-auto">
                    {traits.map((trait) => (
                        <div key={trait.title} className="flex flex-col items-center text-center px-4 py-6 bg-white rounded-lg">
                            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full">
                                <img src={trait.icon} alt={trait.title} className="h-10 w-10" />
                            </div>
                            <div className="min-h-[40px] flex items-center justify-center mb-4">
                                <h4 className="large-font-bold" style={{ color: "#1F4E79" }}>{trait.title}</h4>
                            </div>
                            <p className="small-font" style={{ color: "#4B4B4B" }}>{trait.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Revolutionize;
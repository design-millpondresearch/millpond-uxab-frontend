import shield from "../../../assets/shield.svg";
import share from "../../../assets/share.svg";
import pencil from "../../../assets/pencil.svg";

const traits = [
    {
        icon: shield,
        title: "Secure",
        description: "Xilos protects your sensitive data in real-time by automatically filtering AI interactions - allowing legitimate requests while blocking potential security risks.",
    },
    {
        icon: share,
        title: "Orchestrate",
        description: "Break down AI silos across your organization as Xilos connects your agents, creating a unified intelligence network that grows smarter with every interaction.",
    },
    {
        icon: pencil,
        title: "Refine",
        description: "Watch your teams excel as Xilos learns your business needs, delivering precisely targeted information to each department while eliminating redundancy and knowledge gaps.",
    },
];

function TameShadowStorm() {
    return (
        <section className="regular-banner-white px-6 py-4 md:py-6 flex flex-col items-center">
            <div className="text-center">
                <h2 className="section-header mb-4 text-3xl md:text-5xl lg:text-6xl" style={{ color: "#1F4E79" }}>
                    Tame the Shadow AI Storm
                </h2>
                <div className="w-full max-w-[320px] md:max-w-xl lg:max-w-2xl my-12 mx-auto aspect-video">
                    <iframe
                        className="w-full h-full rounded-lg"
                        src="https://www.youtube.com/embed/nJ1YIbrTL3s"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
                <h3 className="subheader mx-4 w-full max-w-7xl text-base md:text-xl lg:text-2xl mb-18" style={{ color: "#4B4B4B" }}>
                    Take control of your AI ecosystem with Xilos. Our intelligent infrastructure protects your organization from data breaches while orchestrating every agent into a unified knowledge network. Gain visibility, refine interactions, and collaborate seamlessly, all without compromising security or compliance.
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

export default TameShadowStorm;
import shield from "../../../assets/logos-general/shield.svg";
import share from "../../../assets/logos-general/share.svg";
import pencil from "../../../assets/logos-general/pencil.svg";

const traits = [
    {
        icon: shield,
        title: "Smart Routing",
        description: "Route every query to the right model based on cost, latency, or capability. Define rules in natural language — no code required.",
    },
    {
        icon: share,
        title: "Agent Guardrails",
        description: "Local PII detection, jailbreak prevention, and content filters. Keep your autonomous agents safe — no data leaves your infrastructure.",
    },
    {
        icon: pencil,
        title: "Semantic Cache",
        description: "Patented caching that learns from every interaction. Cache hits bypass LLMs entirely — lower cost, faster responses, smarter over time.",
    },
];

function TameShadowStorm() {
    return (
        <section className="regular-banner-white px-6 flex flex-col items-center">
            <div className="text-center">
                <h2 className="section-header mb-4 text-3xl md:text-5xl lg:text-6xl" style={{ color: "#1F4E79" }}>
                    Everything your agents need. Own your AI.
                </h2>
                <div className="w-full max-w-[320px] md:max-w-xl lg:max-w-2xl my-12 mx-auto aspect-video">
                    <iframe
                        className="w-full h-full rounded-lg"
                        src="https://www.youtube.com/embed/9pIMw7NYxc4"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
                <h3 className="subheader mx-4 w-full max-w-7xl text-base md:text-xl lg:text-2xl mb-18" style={{ color: "#4B4B4B" }}>
                    One platform for routing, caching, guardrails, and cost visibility — with an API your agents already speak. Smart routing sends simple queries to cheap models. Semantic cache skips the LLM entirely on repeats. PII detection and guardrails run locally before any model is called. Stop paying frontier prices for work a smaller model handles perfectly.
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-12 max-w-7xl mx-auto">
                    {traits.map((trait) => (
                        <div key={trait.title} className="flex flex-col items-center text-center px-4 py-6 bg-white rounded-lg relative">
                            {/* Blob gradient behind trait */}
                            <div
                                className="pointer-events-none absolute inset-0 rounded-lg"
                                style={{
                                    background: 'radial-gradient(ellipse 240px 180px at center, rgba(86, 124, 141, 0.18) 0%, rgba(86, 124, 141, 0.12) 40%, rgba(86, 124, 141, 0.06) 60%, transparent 85%)',
                                    zIndex: 0,
                                }}
                            />
                            
                            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full relative z-10">
                                <img src={trait.icon} alt={trait.title} className="h-10 w-10" />
                            </div>
                            <div className="min-h-[40px] flex items-center justify-center mb-4 relative z-10">
                                <h3 className="subheader" style={{ color: "#1F4E79" }}>{trait.title}</h3>
                            </div>
                            <p className="large-font relative z-10" style={{ color: "#4B4B4B" }}>{trait.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TameShadowStorm;
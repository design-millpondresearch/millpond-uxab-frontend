import shield from "../../../assets/logos-general/shield.svg";
import share from "../../../assets/logos-general/share.svg";
import pencil from "../../../assets/logos-general/pencil.svg";

const traits = [
    {
        icon: shield,
        title: "Cost Visibility",
        description: "Gain at-a-glance visibility into token and model usage by user, department, and routing rule. Real-time insight into spend drivers keeps budgets predictable.",
    },
    {
        icon: share,
        title: "Cost Avoidance",
        description: "A private knowledge base stores every query and answer, so repeated questions can be answered without triggering new token consumption—and with audit-ready governance.",
    },
    {
        icon: pencil,
        title: "Cost Optimization",
        description: "Dynamic routing selects the right model for each job, ensuring the most expensive models are used only when warranted. Operational control supports normalized spend.",
    },
];

function TameShadowStorm() {
    return (
        <section className="regular-banner-white px-6 flex flex-col items-center">
            <div className="text-center">
                <h2 className="section-header mb-4 text-3xl md:text-5xl lg:text-6xl" style={{ color: "#1F4E79" }}>
                    Govern Agentic AI with Cost-Aware Controls
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
                    Agentic AI is moving from experimentation to production faster than finance teams can establish cost controls. Xilos makes AI costs predictable by turning governance into a control plane that enables finance to control spend without impeding innovation. It prevents repeat token waste, routes work to the most cost-effective model, and provides granular, real-time visibility into token usage and costs across the organization—so you can scale with confidence.
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
const usages = [
    {
        title: "Protect Your Sensitive Information.",
        description: "Keep your sensitive information secure as Xilos automatically prevents confidential data from leaving your network through AI interactions.",
    },
    {
        title: "Maximize Output Relevance.",
        description: "Your AI grows smarter every day as Xilos learns from each interaction, automatically refining queries to match your specific business needs.",
    },
    {
        title: "Optimize Your Shared Knowledge.",
        description: "Eliminate departmental knowledge barriers as Xilos ensures every team receives precisely the insights they need when they need them.",
    },
];

function Usages() {
    return (
        <section className="regular-banner-sand px-6 py-4 md:py-6 flex flex-col items-center">
            <div className="text-center">
                <h2 className="section-header mb-4 text-3xl md:text-4xl lg:text-5xl" style={{ color: "#1F4E79" }}>
                    Harness the power of agentic AI without sacrificing security.
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 my-12 max-w-6xl mx-auto">
                    {usages.map((usage) => (
                        <div key={usage.title} className="flex flex-col items-center text-center px-4 py-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                            <div className="min-h-[60px] flex items-center justify-center mb-4">
                                <h4 className="large-font-bold" style={{ color: "#1F4E79" }}>{usage.title}</h4>
                            </div>
                            <p className="small-font" style={{ color: "#4B4B4B" }}>{usage.description}</p>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Usages;
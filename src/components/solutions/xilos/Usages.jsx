const usages = [
    {
        title: "Multi-Model Workflows",
        description: "Chain LLMs sequentially, run in parallel, merge outputs. Build multi-stage pipelines — search with one model, reason with another, summarize with a third.",
    },
    {
        title: "Cost Visibility",
        description: "Per-agent, per-model, per-department cost tracking. Know exactly what your autonomous agents are spending, in real time.",
    },
    {
        title: "Context Engine",
        description: "Every answered query becomes a searchable knowledge asset. Your agents' collective experience compounds — same questions get smarter answers over time.",
    },
];

function Usages() {
    return (
        <section className="relative regular-banner-sand px-6 flex flex-col items-center overflow-hidden">
            {/* Large centered gradient blob */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background: 'radial-gradient(ellipse 800px 500px at center, rgba(86, 124, 141, 0.1) 0%, rgba(86, 124, 141, 0.07) 40%, rgba(86, 124, 141, 0.04) 60%, transparent 80%)',
                    zIndex: 0,
                }}
            />
            
            <div className="text-center relative z-10">
                <h2 className="section-header mb-4 text-3xl md:text-4xl lg:text-5xl" style={{ color: "#1F4E79" }}>
                    How Xilos Secures and Optimizes Your AI
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
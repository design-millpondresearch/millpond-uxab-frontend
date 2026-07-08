function ReadyToChange() {
  return (
    <section className="regular-banner-white px-6 flex flex-col items-center relative overflow-hidden">
      {/* #567C8D colored blob centered at bottom */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 100% 100% at center 120%, rgba(86, 124, 141, 0.3) 0%, rgba(86, 124, 141, 0.2) 50%, transparent 80%)',
          zIndex: 0,
        }}
      />
      
      <div className="text-center relative z-10">
        <h2 className="section-header mb-4 text-3xl md:text-4xl lg:text-5xl" style={{ color: "#1F4E79" }}>
            Own Your AI Infrastructure
        </h2>
        <h3 className="subheader mx-4" style={{ color: "#4B4B4B" }}>
        Point your existing agents at Xilos. One base_url change gives you routing, caching, guardrails, cost tracking, and full audit logs. No SDK required. No vendor lock-in.
        </h3>
        <div className="flex gap-4 mt-12 justify-center flex-wrap">
          <a href="https://xilos.ai" className="button-primary">Explore Xilos</a>
          <a href="https://xilos.ai/login" className="button-primary">Get Started</a>
        </div>
      </div>
    </section>
  );
}

export default ReadyToChange;
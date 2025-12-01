function HeroSection() {
  return (
    <section className="regular-banner-sand flex items-center justify-center px-6 py-20">
      <div className="hero-banner flex max-w-4xl flex-col items-center gap-6 text-center">
        <h1 className="hero-title" style={{ color: "#1F4E79" }}>
          Secure the Future for Enterprise AI.
        </h1>

        <h3 className="subheader" style={{ color: "#4B4B4B", marginBottom:'6rem'}}>
          Prompt-based protection that empowers safe, efficient AI adoption.
        </h3>

        <div className="mt-8 flex flex-wrap justify-center" style={{ gap: '1rem' }}>
          <button className="button-primary" style={{ marginRight: '1.5rem' }}>Request a Demo</button>
          <button className="button-secondary">Explore Solutions</button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

function HeroSection() {
  return (
    <section className="regular-banner-surface flex items-center justify-center px-4 pt-24 pb-6 md:px-6 md:py-12">
      <div className="hero-banner-surface flex max-w-4xl flex-col items-center gap-6 text-center">
        <h1 className="hero-title" style={{ color: "#1F4E79" }}>
          Secure the Bridge to Your AI Future.
        </h1>

        <h3 className="subheader" style={{ color: "#4B4B4B" }}>
          We're on a mission to help every organization convert their shadow AI into their most powerful competitive advantage.
        </h3>

        <div className="mt-4 flex justify-center">
          <button className="button-primary">Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

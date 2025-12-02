import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section className="regular-banner-sand flex items-center justify-center px-4 pt-24 pb-12 md:px-6 md:py-20">
      <div className="hero-banner flex max-w-4xl flex-col items-center gap-4 md:gap-6 text-center">
        <h1 className="hero-title" style={{ color: "#1F4E79" }}>
          Secure the Future for Enterprise AI.
        </h1>

        <h3 className="subheader mb-6 md:mb-12 text-lg md:text-2xl" style={{ color: "#4B4B4B"}}>
          Prompt-based protection that empowers safe, efficient AI adoption.
        </h3>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          <Link to="/contactus" className="button-primary">Request a Demo</Link>
          <Link to="/solutions/xilos" className="button-secondary">Explore Solutions</Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

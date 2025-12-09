import { Link } from 'react-router-dom';
import heroVideo from '../../assets/videos/HomeBGVL.mp4';

function HeroSection() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden flex items-center justify-center">

      {/* BACKGROUND VIDEO */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* GLASS LAYER*/}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-2xl"></div>

      {/* FOREGROUND CONTENT */}
      <div className="relative z-10 flex flex-col items-center text-center gap-4 md:gap-6 px-4">

        <h1 className="hero-title" style={{ color: '#1F4E79' }}>
          Secure the Future for Enterprise AI.
        </h1>

        <h3 className="subheader mb-6 md:mb-12 text-lg md:text-2xl" style={{ color: '#4B4B4B' }}>
          Prompt-based protection that empowers safe, efficient AI adoption.
        </h3>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          <button className="button-primary">Request a Demo</button>
          <button className="button-secondary">Explore Solutions</button>
        </div>

      </div>
    </section>
  );
}

export default HeroSection;

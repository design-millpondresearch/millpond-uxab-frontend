import { Link } from 'react-router-dom';
import heroVideo from '../../assets/videos/HomeBGVL2.mp4';

function HeroSection() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden flex items-center justify-center">

      {/* BACKGROUND VIDEO */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        playsInline
        preload="auto"
        muted="muted"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* SOFT SAND OVERLAY LAYER*/}
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(245, 239, 231, 0.85)' }}></div>

      {/* FOREGROUND CONTENT */}
      <div className="relative z-10 flex flex-col items-center text-center gap-4 md:gap-6 px-4">
      {/* Light Spot Behind Text
      <div className="absolute z-10 top-1/3 w-[60%] h-[40%] 
          bg-[radial-gradient(circle,rgba(255,255,255,0.6)_0%,rgba(255,255,255,0)_70%)]
          blur-2xl pointer-events-none">
      </div> */}

        <h1 className="hero-title max-w-[638px] leading-tight" style={{ color: '#1F4E79' }}>
          Secure the Future for Enterprise AI.
        </h1>

        <h3 className="subheader max-w-[623px] mb-6 md:mb-12 text-lg md:text-2xl" style={{ color: '#4B4B4B' }}>
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

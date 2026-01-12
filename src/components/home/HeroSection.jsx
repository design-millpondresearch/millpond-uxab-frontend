import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import heroVideo from "../../assets/videos/HomeBGVL2.mp4";

/*
 * Home page hero section featuring a background video. This updated
 * version adjusts horizontal padding and spacing for the text content
 * container to improve readability on smaller screens. Vertical margins
 * for the subheader are tightened on mobile, and the button group
 * remains responsive.
 */

function HeroSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const t = setTimeout(() => {
      v.play().catch(() => {});
    }, 150);

    return () => clearTimeout(t);
  }, []);

  const tryPlay = () => {
    videoRef.current?.play().catch(() => {});
  };

  return (
    <section
      className="relative w-full min-h-[90vh] overflow-hidden flex items-center justify-center pb-16"
      style={{ marginTop: '65px' }}
      onTouchStart={tryPlay}
      onClick={tryPlay}
    >
      {/* BACKGROUND VIDEO */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        playsInline
        preload="auto"
        muted
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* SOFT SAND OVERLAY LAYER*/}
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(245, 239, 231, 0.85)' }}></div>

      {/* FOREGROUND CONTENT */}
      <div className="relative z-10 flex flex-col items-center text-center gap-3 md:gap-6 px-4 md:px-6 lg:px-12">
        <h1
          className="hero-title max-w-[638px] leading-tight"
          style={{ color: '#1F4E79' }}
        >
          Deploy, Secure, and Orchestrate Enterprise AI
        </h1>
        <h3
          className="subheader max-w-[623px] mb-4 md:mb-10 text-lg md:text-2xl"
          style={{ color: '#4B4B4B' }}
        >
          Reduce your AI risk while maximizing operational efficiency
        </h3>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          <Link to="/contactus" className="hero-button-primary">Request a Demo</Link>
          <Link to="/solutions/xilos" className="hero-button-tertiary">Explore Solutions</Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
function HeroSection() {
  return (
    <section className="relative regular-banner-white flex items-center justify-center resources-hero-banner px-6 md:px-8 lg:px-12 py-8 overflow-hidden">
      {/* Curved line across the page */}
      <svg
        className="absolute inset-x-0 top-3/4 -translate-y-1/2 pointer-events-none w-full"
        height="400"
        viewBox="0 0 1000 400"
        preserveAspectRatio="none"
        style={{ zIndex: 0 }}
      >
        <defs>
          <linearGradient id="curveGradientDown" x1="0%" y1="0%" x2="0%" y2="100%" gradientUnits="objectBoundingBox">
            <stop offset="0%" stopColor="#C8D9E6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#C8D9E6" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="curveGradientUp" x1="0%" y1="100%" x2="0%" y2="0%" gradientUnits="objectBoundingBox">
            <stop offset="0%" stopColor="#C8D9E6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#C8D9E6" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="whiteLineGradient" x1="380" y1="0" x2="620" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="20%" stopColor="white" stopOpacity="0.3" />
            <stop offset="50%" stopColor="white" stopOpacity="1" />
            <stop offset="80%" stopColor="white" stopOpacity="0.3" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <filter id="whiteGlow">
            <feGaussianBlur stdDeviation="15" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        {/* Curved line */}
        <path
          d="M 0 100 Q 250 0, 500 100 Q 750 310, 1000 220"
          stroke="none"
          fill="none"
        />
        {/* Gradient extending downward for first half */}
        <path
          d="M 0 100 Q 250 0, 500 100 L 500 400 L 0 400 Z"
          fill="url(#curveGradientDown)"
        />
        {/* Gradient extending upward for second half */}
        <path
          d="M 500 100 Q 750 310, 1000 220 L 1000 0 L 500 0 Z"
          fill="url(#curveGradientUp)"
        />
        {/* White line with gradient fade from center */}
        <rect
          x="380"
          y="0"
          width="240"
          height="400"
          fill="url(#whiteLineGradient)"
          filter="url(#whiteGlow)"
        />
      </svg>
      
      <div className="resources-hero-banner-clear flex max-w-4xl flex-col items-center gap-6 text-center relative z-10">
        <h1 className="hero-title" style={{ color: "#1F4E79" }}>
          Resources
        </h1>
        <h3 className="subheader" style={{ color: "#4B4B4B" }}>
            Gain insights from Mill Pond Research experts.
        </h3>
      </div>
    </section>
  );
}

export default HeroSection;
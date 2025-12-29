import element2 from "../../assets/elements/element2.svg";
import element3 from "../../assets/elements/element3.svg";
import element8 from "../../assets/elements/element8.svg";

/**
 * Company hero section
 *
 * This component mirrors the hero banner from the Figma design for the
 * company page. It overlays several decorative SVGs (soft radial glows
 * and concentric rings) behind the headline to hint at the swirling
 * background in the mock‑ups. The shapes are positioned absolutely
 * within the section container so they don’t interfere with the
 * content. Adjust the Tailwind classes on the images to tweak size
 * and placement.
 *
 * In this updated version we've tightened horizontal padding on small
 * screens (`px-4 md:px-6 lg:px-12`) and reduced the vertical gap
 * between heading, subheader and button for mobile (`gap-8 md:gap-12`).
 */
function HeroSection() {
  return (
    <section
      className="regular-banner-surface flex items-center justify-center px-4 md:px-6 lg:px-12 relative overflow-hidden"
      style={{ paddingTop: '128px', paddingBottom: '128px' }}
    >
      {/* Red dot top left with ring gradients */}
      <div className="absolute top-48 left-0 pointer-events-none" style={{ zIndex: 50 }}>
        {/* Ring 1 */}
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, transparent 0%, transparent 35%, rgba(86, 124, 141, 0.08) 40%, rgba(86, 124, 141, 0.05) 45%, rgba(86, 124, 141, 0.03) 50%, transparent 55%)',
          }}
        />
        {/* Ring 2 */}
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, transparent 0%, transparent 50%, rgba(86, 124, 141, 0.06) 55%, rgba(86, 124, 141, 0.04) 60%, rgba(86, 124, 141, 0.02) 65%, transparent 70%)',
          }}
        />
        {/* Ring 3 */}
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, transparent 0%, transparent 65%, rgba(86, 124, 141, 0.05) 70%, rgba(86, 124, 141, 0.03) 75%, rgba(86, 124, 141, 0.015) 80%, transparent 85%)',
          }}
        />
      </div>
      {/* Red dot bottom right with ring gradients */}
      <div className="absolute bottom-12 right-1/4 pointer-events-none" style={{ zIndex: 50 }}>
        {/* Ring 1 */}
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, transparent 0%, transparent 35%, rgba(86, 124, 141, 0.08) 40%, rgba(86, 124, 141, 0.05) 45%, rgba(86, 124, 141, 0.03) 50%, transparent 55%)',
          }}
        />
        {/* Ring 2 */}
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, transparent 0%, transparent 50%, rgba(86, 124, 141, 0.06) 55%, rgba(86, 124, 141, 0.04) 60%, rgba(86, 124, 141, 0.02) 65%, transparent 70%)',
          }}
        />
        {/* Ring 3 */}
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, transparent 0%, transparent 65%, rgba(86, 124, 141, 0.05) 70%, rgba(86, 124, 141, 0.03) 75%, rgba(86, 124, 141, 0.015) 80%, transparent 85%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="hero-banner-surface flex max-w-4xl flex-col items-center gap-8 md:gap-12 text-center z-10">
        <h1 className="hero-title" style={{ color: '#1F4E79' }}>
          Secure the Bridge to Your AI Future.
        </h1>
        <h3 className="subheader" style={{ color: '#4B4B4B' }}>
          We're on a mission to help every organization convert their shadow AI into their most powerful competitive advantage.
        </h3>
        <div className="flex justify-center">
          <button className="hero-button-primary">Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
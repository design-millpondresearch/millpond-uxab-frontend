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
 */
function HeroSection() {
  return (
    <section
      className="regular-banner-surface flex items-center justify-center px-6 md:px-8 lg:px-12 relative overflow-hidden"
      style={{ marginTop: "128px" }}
    >
      {/* Decorative backdrop */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Large grey radial glow in the upper left */}
        <img
          src={element2}
          alt=""
          className="absolute -top-40 -left-32 w-96 md:w-[450px] opacity-60"
        />
        {/* Pale blue radial glow anchored to the lower right */}
        <img
          src={element3}
          alt=""
          className="absolute bottom-0 right-0 w-96 md:w-[500px] opacity-50"
        />
        {/* Concentric ring motif floating mid‑screen */}
        <img
          src={element8}
          alt=""
          className="absolute top-1/3 left-1/4 w-72 md:w-80 opacity-40"
        />
      </div>

      {/* Content */}
      <div className="hero-banner-surface flex max-w-4xl flex-col items-center gap-6 text-center z-10">
        <h1 className="hero-title" style={{ color: "#1F4E79" }}>
          Secure the Bridge to Your AI Future.
        </h1>
        <h3 className="subheader" style={{ color: "#4B4B4B" }}>
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
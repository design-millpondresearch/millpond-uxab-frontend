import { Link } from 'react-router-dom';

// Decorative elements
import element2 from "../../assets/elements/element2.svg";
import element10 from "../../assets/elements/element10.svg";
import element13 from "../../assets/elements/element13.svg";

/**
 * Company call‑to‑action section
 *
 * Encourages visitors to transform their AI strategy and provides a link
 * to the contact page. A couple of soft radial glows and a warm
 * gradient block are layered behind the content to echo the Figma
 * design. The shapes are placed absolutely with reduced opacity so
 * they don’t obstruct the text.
 */
function ReadyToChange() {
  return (
    <section className="regular-banner-white px-6 flex flex-col items-center relative overflow-hidden">
      {/* Decorative backdrop */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Warm beige gradient across the bottom half */}
        <img
          src={element13}
          alt=""
          className="absolute bottom-0 left-0 w-full h-3/5 opacity-30"
        />
        {/* Large grey glow in the upper left */}
        <img
          src={element2}
          alt=""
          className="absolute -top-24 -left-24 w-80 md:w-96 opacity-40"
        />
        {/* Soft beige glow floating mid‑section */}
        <img
          src={element10}
          alt=""
          className="absolute top-1/3 right-1/4 w-64 md:w-80 opacity-40"
        />
      </div>
      <div className="text-center">
        <h2
          className="section-header mb-4 text-3xl md:text-4xl lg:text-5xl"
          style={{ color: "#1F4E79" }}
        >
          Ready to Transform Your AI Strategy?
        </h2>
        <h3 className="subheader mx-4" style={{ color: "#4B4B4B" }}>
          Join the organizations already building secure, controlled AI systems with Xilos.
        </h3>
        <Link to="/contactus" className="button-primary my-12">
          Start Your Journey
        </Link>
      </div>
    </section>
  );
}

export default ReadyToChange;
import { Link } from 'react-router-dom';
import beigeBlock from "../../../assets/elements/element13.svg";
import blueBlob from "../../../assets/elements/element3.svg";

function ReadyToChange() {
  return (
    <section className="relative regular-banner-sand px-4 md:px-6 py-12 md:py-16 flex flex-col items-center overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 100% 100% at center 120%, rgba(86, 124, 141, 0.3) 0%, rgba(86, 124, 141, 0.2) 50%, transparent 80%)',
          zIndex: 0,
        }}
      />
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        <img src={beigeBlock} alt="" className="absolute inset-x-0 bottom-0 w-full h-40 md:h-56 object-cover" />
        <img src={blueBlob} alt="" className="absolute top-0 right-0 w-40 md:w-56" />
      </div>
      <div className="text-center relative z-10 max-w-4xl mx-auto">
        <h2
          className="section-header mb-6 text-3xl md:text-4xl lg:text-5xl"
          style={{ color: "#1F4E79" }}
        >
          Deploy the UCP
        </h2>
        <div className="space-y-4 mb-8">
          <p className="large-font" style={{ color: "#4B4B4B" }}>
            Transition from multiple disjointed AI tools to a single platform that deploys, observes, secures, orchestrates, and controls agentic AI at scale.
          </p>
          <p className="large-font" style={{ color: "#4B4B4B" }}>
            Greenfield teams and existing enterprise license holders alike can import their models into the UCP for unified governance and cost control.
          </p>
        </div>
        <Link to="/contact" className="button-primary">Request a Demo</Link>
      </div>
    </section>
  );
}

export default ReadyToChange;

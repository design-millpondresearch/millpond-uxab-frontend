import { Link } from 'react-router-dom';

function ReadyToChange() {
  return (
    <section className="regular-banner-white px-6 flex flex-col items-center relative overflow-hidden">
      {/* #567C8D colored blob centered at bottom */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 100% 100% at center 120%, rgba(86, 124, 141, 0.3) 0%, rgba(86, 124, 141, 0.2) 50%, transparent 80%)',
          zIndex: 0,
        }}
      />
      
      <div className="text-center relative z-10">
        <h2 className="section-header mb-4 text-3xl md:text-4xl lg:text-5xl" style={{ color: "#1F4E79" }}>
            Ready to Take Control of Your AI Future?
        </h2>
        <h3 className="subheader mx-4" style={{ color: "#4B4B4B" }}>
        Contact us today to discover how Mill Pond Research can revolutionize your organization's approach to AI security and orchestration.
        </h3>
        <Link to="/contactus" className="button-primary mt-12">Learn More</Link>
      </div>
    </section>
  );
}

export default ReadyToChange;
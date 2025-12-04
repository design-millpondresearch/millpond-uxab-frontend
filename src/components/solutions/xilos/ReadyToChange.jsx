import { Link } from 'react-router-dom';

function ReadyToChange() {
  return (
    <section className="regular-banner-white px-6 py-4 md:py-6 flex flex-col items-center">
      <div className="text-center">
        <h2 className="section-header mb-4 text-3xl md:text-4xl lg:text-5xl" style={{ color: "#1F4E79" }}>
            Ready to Take Control of Your AI Future?
        </h2>
        <h3 className="subheader mx-4" style={{ color: "#4B4B4B" }}>
        Contact us today to discover how Mill Pond Research can revolutionize your organization's approach to AI security and orchestration.
        </h3>
        <Link to="/contactus" className="button-primary my-12">Learn</Link>
      </div>
    </section>
  );
}

export default ReadyToChange;
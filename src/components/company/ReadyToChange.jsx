import { Link } from 'react-router-dom';

function ReadyToChange() {
  return (
    <section className="regular-banner-white px-6 flex flex-col items-center">
      <div className="text-center">
        <h2 className="section-header mb-4 text-3xl md:text-4xl lg:text-5xl" style={{ color: "#1F4E79" }}>
            Ready to Transform Your AI Strategy?
        </h2>
        <h3 className="subheader mx-4" style={{ color: "#4B4B4B" }}>
            Join the organizations already building secure, controlled AI systems with Xilos.
        </h3>
        <Link to="/contactus" className="button-primary my-12">Start Your Journey</Link>
      </div>
    </section>
  );
}

export default ReadyToChange;
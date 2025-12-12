import { useHubspotForm } from "../../hooks/useHubspotForm";

function ContactSection() {
  useHubspotForm({
    portalId: "48049833",
    formId: "541e8dc3-144b-4cbe-9a09-ccd0807f3095",
    targetId: "hubspot-form-main",
  });

  return (
    <section id="contact-section" className="regular-banner-white px-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8">
        <div className="text-center">
          <h2
            className="section-header text-3xl md:text-4xl lg:text-5xl"
            style={{ color: "#1F4E79" }}
          >
            Ready to Take Control of Your AI Future?
          </h2>
          <p className="subheader mx-2">
            Contact us to discover how Mill Pond Research can evolve your
            organization’s approach to AI security and orchestration.
          </p>
        </div>

        <div className="w-full max-w-4xl rounded-2xl bg-[#E2ECF4] p-8 text-left shadow-sm">
          <div id="hubspot-form-main" data-hs-forms-root="true" />

          <button
            id="fallback-button"
            className="button-primary mt-6"
            style={{ display: "none" }}
            type="button"
          >
            Email us directly
          </button>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;

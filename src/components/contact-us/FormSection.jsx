import { useHubspotForm } from "../../hooks/useHubspotForm";

function FormSection() {
  useHubspotForm({
    portalId: "48049833",
    formId: "541e8dc3-144b-4cbe-9a09-ccd0807f3095",
    targetId: "hubspot-form-hero",
  });

  return (
    <section className="regular-banner-sand pb-32">
      <div className="mx-auto max-w-4xl rounded-2xl bg-[#E2ECF4] p-10 shadow-sm">
        <div id="hubspot-form-hero" data-hs-forms-root="true" />

        <button
          id="fallback-button"
          className="button-primary mt-6"
          style={{ display: "none" }}
          type="button"
        >
          Email us directly
        </button>
      </div>
    </section>
  );
}

export default FormSection;

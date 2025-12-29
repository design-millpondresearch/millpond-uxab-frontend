import { useHubspotForm } from "../../hooks/useHubspotForm";

/**
 * ContactSection
 *
 * This component wraps the HubSpot form in a styled card so that the fallback
 * experience (shown when the HubSpot script fails to load) matches the same
 * container size and colour as the form.  The card uses a blue background and
 * centers its contents to mirror the design of the embedded form.  When the
 * hubspot script fails, the button with id `fallback-button` is displayed by
 * the `useHubspotForm` hook.  This layout ensures the fallback remains
 * visually consistent across devices and browsers.
 */
function ContactSection() {
  // Initialise HubSpot form loading.  This hook will display the fallback
  // button if the form fails to render.
  useHubspotForm({
    portalId: "48049833",
    formId: "541e8dc3-144b-4cbe-9a09-ccd0807f3095",
    targetId: "hubspot-form-main",
  });

  return (
    <section id="contact-section" className="regular-banner-white px-6 py-16">
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

        {/* HubSpot form wrapper.  We center all content and use a blue background so
            the fallback matches the form container. */}
        <div className="w-full max-w-4xl rounded-2xl bg-[#E2ECF4] p-8 text-center shadow-sm">
          <div id="hubspot-form-main" data-hs-forms-root="true" />

          {/* Fallback email button.  Hidden by default; shown via useHubspotForm. */}
          <button
            id="fallback-button"
            className="button-primary mt-6 mx-auto"
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
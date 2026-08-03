import { useState } from 'react';
import { useHubspotForm } from "../../hooks/useHubspotForm";

/**
 * ContactSection
 *
 * Two-path design: primary CTA is "Get Started at xilos.ai" (self-serve),
 * secondary is the HubSpot form (for enterprise buyers who want to talk to sales).
 */
function ContactSection() {
  const [showForm, setShowForm] = useState(false);

  useHubspotForm({
    portalId: "48049833",
    formId: "541e8dc3-144b-4cbe-9a09-ccd0807f3095",
    targetId: "hubspot-form-main",
  });

  return (
    <section id="contact-section" className="regular-banner-white px-4 md:px-6 py-12 md:py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8">
        <div className="text-center">
          <h2
            className="section-header text-3xl md:text-4xl lg:text-5xl"
            style={{ color: "#1F4E79" }}
          >
            Get Started Today
          </h2>
          <p className="subheader mx-2">
            Deploy, secure, and orchestrate agentic AI through a single platform. Start free — no credit card required.
          </p>
        </div>

        {/* Primary CTA — self-serve path */}
        <div className="flex flex-col items-center gap-4">
          <a
            href="https://xilos.ai/login"
            className="button-primary"
            style={{ fontSize: '1.125rem', padding: '0.75rem 2.5rem' }}
          >
            Get Started at xilos.ai
          </a>
          <button
            onClick={() => setShowForm(!showForm)}
            className="text-sm font-medium"
            style={{ color: "#567C8D", fontFamily: "var(--font-geist)", background: "none", border: "none", cursor: "pointer" }}
          >
            {showForm ? "Hide form" : "— or contact our team —"}
          </button>
        </div>

        {/* Secondary path — HubSpot form (collapsible) */}
        {showForm && (
          <div className="w-full max-w-4xl rounded-2xl bg-[#E2ECF4] p-6 md:p-8 text-center shadow-sm">
            <div id="hubspot-form-main" data-hs-forms-root="true" />
            <button
              id="fallback-button"
              className="button-primary mt-6 mx-auto"
              style={{ display: "none" }}
              type="button"
            >
              Email us directly
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default ContactSection;

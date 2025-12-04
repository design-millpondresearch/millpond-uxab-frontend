import { useEffect } from "react";

function ContactSection() {
  useEffect(() => {
    const scriptId = "hs-form-script";

    function showFallback() {
      const btn = document.getElementById("fallback-button");
      if (btn) btn.style.display = "block";
    }

    function createForm() {
      if (window.hbspt && window.hbspt.forms) {
        try {
          window.hbspt.forms.create({
            region: "na1",
            portalId: "48049833",
            formId: "541e8dc3-144b-4cbe-9a09-ccd0807f3095",
            target: "#hubspot-form-main",
          });
        } catch (err) {
          console.error("Error creating HubSpot form", err);
          showFallback();
        }
      } else {
        console.warn("HubSpot script not ready.");
        showFallback();
      }
    }

    const existingScript = document.getElementById(scriptId);

    if (!existingScript) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "//js.hsforms.net/forms/embed/v2.js";
      script.type = "text/javascript";
      script.async = true;
      script.onload = () => {
        createForm();
      };
      document.body.appendChild(script);
    } else {
      createForm();
    }
  }, []);

  return (
    <section id="contact-section" className="regular-banner-white px-6 py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8">
        <div className="text-center">
          <h2 className="section-header text-3xl md:text-4xl lg:text-5xl" style={{ color: "#1F4E79" }}>
            Ready to Take Control of Your AI Future?
          </h2>
          <p className="subheader mx-2">
            Contact us to discover how Mill Pond Research can evolve your
            organization's approach to AI security and orchestration.
          </p>
        </div>

        <div className="w-full rounded-2xl bg-[#E2ECF4] p-8 text-left shadow-sm max-w-4xl">
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

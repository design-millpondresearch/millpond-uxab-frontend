import { useEffect } from "react";

function HeroSection() {
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
    <main className="relative regular-banner-sand flex flex-col items-center px-6 md:px-8 lg:px-12 py-16 overflow-hidden" style={{ paddingTop: '128px' }}>
      {/* Ellipse gradient blob in background */}
      <div
        className="absolute pointer-events-none inset-0"
        style={{
          background: 'radial-gradient(ellipse 600px 150px at center 17%, rgba(200, 217, 230, 0.5) 0%, rgba(200, 217, 230, 0.3) 30%, rgba(200, 217, 230, 0.2) 50%, rgba(200, 217, 230, 0.1) 70%, transparent 90%)',
          zIndex: 0,
        }}
      />
      
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 w-full mt-22 relative z-10">
        <div className="text-center mb-22">
          <h1 className="hero-title mb-4 text-3xl md:text-4xl lg:text-5xl" style={{ color: "#1F4E79" }}>Get Started</h1>
          <p className="subheader mx-4 w-full max-w-7xl text-base md:text-xl lg:text-2xl" style={{ color: "#4B4B4B" }}>
            Ready to take control of your AI future? Get in touch with our team to discover how Mill Pond Research can transform your organization's approach to AI security and orchestration.
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
        </main>
    );
}

export default HeroSection;

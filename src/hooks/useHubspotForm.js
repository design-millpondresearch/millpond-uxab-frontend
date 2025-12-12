import { useEffect } from "react";

export function useHubspotForm({
  portalId,
  formId,
  targetId,
}) {
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
            portalId,
            formId,
            target: `#${targetId}`,
          });
        } catch (err) {
          console.error("Error creating HubSpot form", err);
          showFallback();
        }
      } else {
        showFallback();
      }
    }

    const existingScript = document.getElementById(scriptId);

    if (!existingScript) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "//js.hsforms.net/forms/embed/v2.js";
      script.async = true;
      script.onload = createForm;
      document.body.appendChild(script);
    } else {
      createForm();
    }
  }, [portalId, formId, targetId]);
}

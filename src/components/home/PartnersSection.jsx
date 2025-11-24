const partners = [
  "Anthropic",
  "OpenAI",
  "Meta",
  "Google",
  "Groq",
  "AWS",
  "Azure",
  "NIST",
  "CCC",
  "C3.ai",
];

function PartnersSection() {
  return (
    <section className="regular-banner-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="section-header" style={{ color: "#1F4E79" }}>
            Our Partners.
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {partners.map((partner) => (
            <div
              key={partner}
              className="flex items-center justify-center rounded-xl bg-white px-3 py-4 text-sm font-semibold text-[#1F4E79] shadow-sm ring-1 ring-[#E5E7EB]"
            >
              {partner}
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-2 rounded-2xl bg-[#F5EFE7] p-6 text-center shadow-sm">
          <p
            className="text-xs font-semibold uppercase tracking-[0.18em]"
            style={{ color: "#567C8D" }}
          >
            Partnership
          </p>
          <p className="text-base font-semibold" style={{ color: "#1F4E79" }}>
            AWS genAI partnership announced
          </p>
          <p className="text-xs" style={{ color: "#4B4B4B" }}>
            Nov 1 2024
          </p>
        </div>
      </div>
    </section>
  );
}

export default PartnersSection;

const credentials = [
  {
    label: "Patented Technology",
    detail: "9-step orchestration pipeline",
  },
  {
    label: "IBM Silver Business Partner",
    detail: "Enterprise go-to-market",
  },
  {
    label: "TechCrunch Battlefield 200",
    detail: "Class of 2025",
  },
];

function CredibilityBar() {
  return (
    <section className="regular-banner-white px-4 md:px-6 py-8 md:py-10 border-y border-[#E5E7EB]">
      <div className="mx-auto max-w-6xl">
        <p
          className="text-center text-sm font-semibold uppercase tracking-widest mb-6 md:mb-8"
          style={{ color: "#567C8D" }}
        >
          Trusted &amp; Recognized
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {credentials.map((cred) => (
            <div
              key={cred.label}
              className="flex flex-col items-center text-center"
            >
              <p
                className="subheader text-lg md:text-xl"
                style={{ color: "#1F4E79" }}
              >
                {cred.label}
              </p>
              <p
                className="small-font text-sm mt-1"
                style={{ color: "#4B4B4B" }}
              >
                {cred.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CredibilityBar;

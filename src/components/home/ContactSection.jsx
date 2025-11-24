function ContactSection() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="regular-banner-white px-6 py-20">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8">
        <div className="text-center">
          <h2 className="section-header" style={{ color: "#1F4E79" }}>
            Ready to Take Control of Your AI Future?
          </h2>
          <p className="mt-2 text-base leading-relaxed" style={{ color: "#4B4B4B" }}>
            Contact us to discover how Mill Pond Research can evolve your organization's approach to AI security and
            orchestration.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full rounded-2xl bg-[#E2ECF4] p-8 text-left shadow-sm"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-[#1F4E79]" htmlFor="fullName">
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                className="mt-1 w-full rounded-md border border-[#C7D7E5] px-3 py-2 text-sm"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-semibold text-[#1F4E79]" htmlFor="businessEmail">
                Business Email
              </label>
              <input
                id="businessEmail"
                name="businessEmail"
                type="email"
                className="mt-1 w-full rounded-md border border-[#C7D7E5] px-3 py-2 text-sm"
                placeholder="Enter your business email"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-semibold text-[#1F4E79]" htmlFor="companyName">
                Company Name
              </label>
              <input
                id="companyName"
                name="companyName"
                className="mt-1 w-full rounded-md border border-[#C7D7E5] px-3 py-2 text-sm"
                placeholder="Enter your company name"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-semibold text-[#1F4E79]" htmlFor="phoneNumber">
                Phone Number
              </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                className="mt-1 w-full rounded-md border border-[#C7D7E5] px-3 py-2 text-sm"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-semibold text-[#1F4E79]" htmlFor="role">
                Role
              </label>
              <select
                id="role"
                name="role"
                className="mt-1 w-full rounded-md border border-[#C7D7E5] bg-white px-3 py-2 text-sm"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select your role
                </option>
                <option value="ciso">CISO / Security Leader</option>
                <option value="it">IT / GovOps</option>
                <option value="policy">Policy / Risk</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-semibold text-[#1F4E79]" htmlFor="vertical">
                Business Vertical
              </label>
              <select
                id="vertical"
                name="vertical"
                className="mt-1 w-full rounded-md border border-[#C7D7E5] bg-white px-3 py-2 text-sm"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select a vertical
                </option>
                <option value="finance">Financial Services</option>
                <option value="healthcare">Healthcare</option>
                <option value="technology">Technology</option>
                <option value="public-sector">Public Sector</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-semibold text-[#1F4E79]" htmlFor="adoption">
                AI Adoption
              </label>
              <select
                id="adoption"
                name="adoption"
                className="mt-1 w-full rounded-md border border-[#C7D7E5] bg-white px-3 py-2 text-sm"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Current AI adoption
                </option>
                <option value="exploring">Exploring</option>
                <option value="piloting">Piloting</option>
                <option value="scaling">Scaling</option>
                <option value="mature">Mature</option>
              </select>
            </div>
          </div>

          <div className="mt-4 flex flex-col">
            <label className="text-sm font-semibold text-[#1F4E79]" htmlFor="needs">
              Share a brief summary of your needs
            </label>
            <textarea
              id="needs"
              name="needs"
              rows={4}
              className="mt-1 w-full rounded-md border border-[#C7D7E5] px-3 py-2 text-sm"
              placeholder="Tell us about your use cases and AI security needs"
            />
          </div>

          <div className="mt-4 flex items-start gap-2 text-sm" style={{ color: "#4B4B4B" }}>
            <input id="consent" name="consent" type="checkbox" className="mt-1" required />
            <label htmlFor="consent">
              I consent to receive emails, phone calls, and SMS regarding Mill Pond Research solutions and agree to the
              privacy policy.
            </label>
          </div>

          <div className="mt-6">
            <button type="submit" className="button-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;

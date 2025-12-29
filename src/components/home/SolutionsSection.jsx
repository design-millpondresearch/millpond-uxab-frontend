import { Link } from "react-router-dom";
import workbenchPic from "../../assets/WorkBenchPhoto.svg";
import xilosPic from "../../assets/XilosPhoto.svg";
import link from "../../assets/logos-general/link.svg";
import users from "../../assets/logos-general/users.svg";
import rocket from "../../assets/logos-general/rocket.svg";

// A small utility to build the glass effect.  Many browsers (Safari and some
// older Android browsers) do not fully support the backdrop-filter CSS
// property used by Tailwind's `backdrop-blur` classes.  Instead of relying on
// Tailwind for this effect, we explicitly set both the standard
// `backdropFilter` and the vendor-prefixed `WebkitBackdropFilter` on the
// component.  If the browser doesn’t support backdrop filters, the opaque
// background color still provides good contrast on top of the page’s
// gradient backgrounds.  See the README for details on cross‑browser
// compatibility.

const workbenchFeatures = [
  {
    icon: link,
    title: "Intuitive AI Builder.",
    body:
      "Build sophisticated AI solutions without specialized expertise using our visual, drag-and-drop interface.",
  },
  {
    icon: users,
    title: "No-Code Development.",
    body:
      "Deploy AI solutions rapidly with our no-code platform that empowers business users to innovate independently.",
  },
  {
    icon: rocket,
    title: "Rapid Deployment.",
    body:
      "Go from concept to deployment in days, not months, with automated testing and deployment pipelines.",
  },
];

const xilosFeatures = [
  {
    icon: link,
    title: "Real-Time Security.",
    body:
      "Monitor and protect every AI interaction across your organization with intelligent threat detection and automated response.",
  },
  {
    icon: users,
    title: "AI Orchestration.",
    body:
      "Enable controlled collaboration between AI systems, creating a unified knowledge network that grows smarter with every interaction.",
  },
  {
    icon: rocket,
    title: "Complete Visibility.",
    body:
      "Gain comprehensive oversight of your AI ecosystem with intuitive dashboards and detailed analytics on usage, performance, and security.",
  },
];

function SolutionsSection() {
  // Common inline style for glass cards.  These styles ensure the cards are
  // visually translucent on modern browsers while falling back to a solid
  // background when backdrop filters aren’t supported.  Do not modify
  // `backdropFilter` or `WebkitBackdropFilter` outside of this helper to
  // guarantee consistent cross‑browser behaviour.
  const glassCardStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
  };

  return (
    <section id="solutions-section" className="regular-banner-white px-6 py-16 relative overflow-hidden">
      {/* Top right ellipse gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 1500px 150% at right top, rgba(86, 124, 141, 0.15) 0%, transparent 70%)',
          right: 0,
          top: 0,
        }}
      />

      {/* Bottom left ellipse gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 1500px 150% at left bottom, rgba(86, 124, 141, 0.15) 0%, transparent 70%)',
          left: 0,
          bottom: 0,
        }}
      />

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 relative z-10">
        {/* Section header */}
        <div className="text-center">
          <h2
            className="section-header text-3xl md:text-4xl lg:text-5xl"
            style={{ color: "var(--color-primary)" }}
          >
            Our Solutions
          </h2>
          <h3 className="subheader" style={{ color: "var(--color-slate)" }}>
            Your complete AI governance ecosystem. From creation to security.
          </h3>
        </div>

        <div className="mb-12 flex flex-col gap-24">
          {/* WorkBench block */}
          <div className="px-2 md:px-4">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2">
              {/* Left column */}
              <div
                className="rounded-2xl px-4 py-6 text-left"
                style={glassCardStyle}
              >
                <p className="subheader" style={{ color: "var(--color-slate)" }}>
                  Build AI Solutions.
                </p>

                <h2
                  className="section-header text-3xl md:text-4xl lg:text-5xl"
                  style={{ color: "var(--color-primary)" }}
                >
                  WorkBench: AI That Understands Your Business
                </h2>

                <p
                  className="mt-3 text-sm leading-relaxed"
                  style={{ color: "var(--color-slate)" }}
                >
                  Your teams need AI that speaks your industry's language and
                  understands your unique processes. WorkBench puts that power
                  directly in your hands with an intuitive environment to build
                  AI solutions that deliver immediate value.
                </p>

                <div className="mt-4 space-y-3">
                  {workbenchFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <img
                        src={feature.icon}
                        alt={feature.title}
                        className="h-6 w-6 flex-shrink-0"
                      />
                      <div className="flex-1">
                        <span
                          className="small-font-bold"
                          style={{ color: "var(--color-primary-alt)" }}
                        >
                          {feature.title}{" "}
                        </span>
                        <span
                          className="small-font"
                          style={{ color: "var(--color-slate)" }}
                        >
                          {feature.body}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  to="/solutions/workbench#top"
                  onClick={() => {
                    setTimeout(() => {
                      window.scrollTo({ top: 0, behavior: "auto" });
                    }, 0);
                  }}
                  className="mt-5 inline-block button-primary"
                >
                  Explore WorkBench
                </Link>
              </div>

              {/* Right column */}
              <div className="flex items-center justify-center rounded-2xl p-4">
                <img
                  src={workbenchPic}
                  alt="WorkBench Product Shot"
                  className="h-auto max-w-full rounded-2xl shadow-sm"
                />
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t" style={{ borderColor: "rgba(0,0,0,0.06)" }} />

          {/* Xilos block */}
          <div className="px-2 md:px-4">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2">
              {/* Left column (image) */}
              <div className="flex items-center justify-center rounded-2xl p-4">
                <img
                  src={xilosPic}
                  alt="Xilos Product Shot"
                  className="h-auto max-w-full rounded-2xl shadow-sm"
                />
              </div>

              {/* Right column */}
              <div
                className="rounded-2xl px-4 py-6 text-left md:text-right"
                style={glassCardStyle}
              >
                <p className="subheader" style={{ color: "var(--color-slate)" }}>
                  AI Security &amp; Orchestration
                </p>

                <h2
                  className="section-header text-3xl md:text-4xl lg:text-5xl"
                  style={{ color: "var(--color-primary)" }}
                >
                  Xilos: Your AI Command Center
                </h2>

                <p
                  className="mt-3 text-sm leading-relaxed"
                  style={{ color: "var(--color-slate)" }}
                >
                  Benefit from AI without compromising security. Xilos acts as
                  your intelligent guardian and conductor, working with all your
                  AI systems to enhance security while breaking down information
                  barriers.
                </p>

                <div className="mt-4 space-y-3">
                  {xilosFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 md:flex-row-reverse"
                    >
                      <img
                        src={feature.icon}
                        alt={feature.title}
                        className="h-6 w-6 flex-shrink-0"
                      />
                      <div className="flex-1">
                        <span
                          className="small-font-bold"
                          style={{ color: "var(--color-primary-alt)" }}
                        >
                          {feature.title}{" "}
                        </span>
                        <span
                          className="small-font"
                          style={{ color: "var(--color-slate)" }}
                        >
                          {feature.body}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap justify-end gap-3">
                  <Link
                    to="/solutions/xilos#top"
                    onClick={() => {
                      setTimeout(() => {
                        window.scrollTo({ top: 0, behavior: "auto" });
                      }, 0);
                    }}
                    className="button-primary"
                  >
                    Explore Xilos
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SolutionsSection;
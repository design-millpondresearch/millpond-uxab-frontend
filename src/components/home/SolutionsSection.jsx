import { Link } from "react-router-dom";
import workbenchPic from "../../assets/workbench-screenshot-v1-2026.PNG";
import xilosPic from "../../assets/xilos-dashboard.PNG";
import create from "../../assets/icons/create.svg";
import test from "../../assets/icons/test.svg";
import deploy from "../../assets/icons/deploy.svg";
import eye from "../../assets/icons/eye.svg";
import secure from "../../assets/icons/enhanced_security.svg";
import orchestrate from "../../assets/icons/orchestrate1.svg";

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
    icon: create,
    title: "Create.",
    body:
      "Enables teams to rapidly develop and customize agents in days instead of weeks.",
  },
  {
    icon: test,
    title: "Test.",
    body:
      "Validates agent performance across all available internal and public models.",
  },
  {
    icon: deploy,
    title: "Deploy.",
    body:
      "Delivers seamless deployment across all platform models and native integrations.",
  },
];

const xilosFeatures = [
  {
    icon: eye,
    title: "Observe.",
    body:
      "Detects agentic AI activity across the network to monitor, assess, and manage usage.",
  },
  {
    icon: secure,
    title: "Secure.",
    body:
      "Invokes rules and policies to ensure safe AI usage and protect sensitive data.",
  },
  {
    icon: orchestrate,
    title: "Orchestrate.",
    body:
      "Breaks down AI silos to deliver the most contextually relevant results.",
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
    <section id="solutions-section" className="regular-banner-white px-4 md:px-6 py-12 md:py-16 relative overflow-hidden">
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

        <div className="mb-12 flex flex-col gap-16 md:gap-24">
          {/* WorkBench block */}
          <div className="px-2 md:px-4">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2">
              {/* Left column */}
              <div
                className="rounded-2xl px-4 py-6 md:px-6 md:py-8 text-left"
                style={glassCardStyle}
              >
                <p className="subheader" style={{ color: "var(--color-slate)" }}>
                  WorkBench
                </p>

                <h2
                  className="section-header text-3xl md:text-4xl lg:text-5xl"
                  style={{ color: "var(--color-primary)" }}
                >
                  From AI Chaos to Competitive Advantage in Days, Not Weeks
                </h2>

                <p
                  className="mt-3 text-sm leading-relaxed"
                  style={{ color: "var(--color-slate)" }}
                >
                 WorkBench enables teams to rapidly prototype, test, and deploy agents in days. A knowledge-sharing ecosystem transforms company data and prompts into institutional assets across all models.
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
              <div className="flex items-center justify-center rounded-2xl p-4 md:p-6">
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
              <div className="flex items-center justify-center rounded-2xl p-4 md:p-6">
                <img
                  src={xilosPic}
                  alt="Xilos Product Shot"
                  className="h-auto max-w-full rounded-2xl shadow-sm"
                />
              </div>

              {/* Right column */}
              <div
                className="rounded-2xl px-4 py-6 md:px-6 md:py-8 text-left"
                style={glassCardStyle}
              >
                <p className="subheader" style={{ color: "var(--color-slate)" }}>
                  Xilos
                </p>

                <h2
                  className="section-header text-3xl md:text-4xl lg:text-5xl"
                  style={{ color: "var(--color-primary)" }}
                >
                  Your AI Security and Orchestration Command Center
                </h2>

                <p
                  className="mt-3 text-sm leading-relaxed"
                  style={{ color: "var(--color-slate)" }}
                >
                  Benefit from AI without compromising security. Xilos works with all your AI systems to enhance security while making your organization smarter, faster, and more efficient with every interaction.
                </p>

                <div className="mt-4 space-y-3">
                  {xilosFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 md:flex-row"
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
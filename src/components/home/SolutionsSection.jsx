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
    title: "Prototype.",
    body:
      "Enable everyone on the team to rapidly develop and customize agents in minutes instead of weeks.",
  },
  {
    icon: test,
    title: "Test.",
    body:
      "Validate agent performance across internal and public models to ensure optimal cost and quality.",
  },
  {
    icon: deploy,
    title: "Deploy.",
    body:
      "Deliver seamless deployment with universal compatibility across models and native integrations with your existing systems.",
  },
];

const xilosFeatures = [
  {
    icon: eye,
    title: "Observe.",
    body:
      "Gain at-a-glance visibility into token and model usage by user, department, and routing rule.",
  },
  {
    icon: secure,
    title: "Secure.",
    body:
      "Enforce policy in real time by allowing, blocking, or dynamically modifying prompts based on intent and content.",
  },
  {
    icon: orchestrate,
    title: "Orchestrate.",
    body:
      "Break down AI silos so agents learn from each other and deliver contextually relevant results across every model.",
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
            The MPR Unified Control Plane
          </h2>
          <h3 className="subheader" style={{ color: "var(--color-slate)" }}>
            A comprehensive agentic AI workspace to create and deploy—observe and secure—then orchestrate and control performance, cost, and compliance at scale.
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
                  Prototype, Test, and Deploy Agents Faster with WorkBench
                </h2>

                <p
                  className="mt-3 text-sm leading-relaxed"
                  style={{ color: "var(--color-slate)" }}
                >
                WorkBench unifies state-of-the-art AI models, specialized agents, and customizable tools in one platform, eliminating vendor lock-in and complexity. Professional-grade authoring tools enable teams to easily prototype, test, and deploy agents. A knowledge-sharing ecosystem transforms company data and prompts into institutional assets, consolidating multiple subscriptions into one solution delivering lasting competitive advantage.
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
                  Observe, Secure, and Orchestrate with Xilos
                </h2>

                <p
                  className="mt-3 text-sm leading-relaxed"
                  style={{ color: "var(--color-slate)" }}
                >
                  Xilos is the agentic AI control plane that observes, secures, and orchestrates autonomous systems. It delivers granular, real-time visibility into token and model usage, governs every interaction with behavior-based intent analysis, and prevents repeat token waste through a private knowledge base. Dynamic routing selects the right model for each job to control costs without sacrificing quality or compliance.
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
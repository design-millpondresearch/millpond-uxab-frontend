import { Link } from 'react-router-dom';
import workbenchPic from "../../assets/WorkBenchPhoto.svg";
import xilosPic from "../../assets/XilosPhoto.svg";
import link from "../../assets/link.svg";
import users from "../../assets/users.svg";
import rocket from "../../assets/rocket.svg";

const workbenchFeatures = [
  {
    icon: link,
    title: "Intuitive AI Builder.",
    body: "Build sophisticated AI solutions without specialized expertise using our visual, drag-and-drop interface."
  },
  {
    icon: users,
    title: "No-Code Development.",
    body: "Deploy AI solutions rapidly with our no-code platform that empowers business users to innovate independently."
  },
  {
    icon: rocket,
    title: "Rapid Deployment.",
    body: "Go from concept to deployment in days, not months, with automated testing and deployment pipelines."
  }
]

const xilosFeatures = [
  {
    icon: link,
    title: "Real-Time Security.",
    body: "Monitor and protect every AI interaction across your organization with intelligent threat detection and automated response."
  },
  {
    icon: users,
    title: "AI Orchestration.",
    body: "Enable controlled collaboration between AI systems, creating a unified knowledge network that grows smarter with every interaction."
  },
  {
    icon: rocket,
    title: "Complete Visibility.",
    body: "Gain comprehensive oversight of your AI ecosystem with intuitive dashboards and detailed analytics on usage, performance, and security."
  }
]

function SolutionsSection() {
  return (
    <section className="regular-banner-white px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 items-center">
        <div className="text-center">
          <h2 className="section-header text-3xl md:text-4xl lg:text-5xl" style={{ color: "#1F4E79" }}>
            Our Solutions
          </h2>
          <h3 className="subheader" style={{ color: "#4B4B4B" }}>
            Your complete AI governance ecosystem. From creation to security.
          </h3>
        </div>
        
        <div className="flex flex-col gap-24 mb-12">

          {/* WorkBench Grid */}
          <div className="px-2 md:px-4 my-2">
            <div className="max-w-9xl mx-auto grid gap-12 grid-cols-1 md:grid-cols-2">
              
              {/* Left Column */}
              <div className="rounded-2xl bg-white px-4 text-left border-0">
                <p className="subheader" style={{ color: "#4B4B4B" }}>
                  Built AI Solutions.
                </p>

                <h2 className="section-header text-3xl md:text-4xl lg:text-5xl" style={{ color: "#1F4E79" }}>
                  WorkBench: AI That Understands Your Business
                </h2>

                <p className="mt-3 text-sm leading-relaxed" style={{ color: "#4B4B4B" }}>
                  Your teams need AI that speaks your industry's language and understands your unique processes. 
                  WorkBench puts that power directly in your hands with an intuitive environment to build AI solutions that deliver immediate value.
                </p>

                <div className="mt-4 space-y-3">
                  {workbenchFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <img src={feature.icon} alt={feature.title} className="h-6 w-6 flex-shrink-0" />
                      <div className="flex-1">
                        <span className="small-font-bold" style={{ color: "#567C8D" }}>{feature.title} </span>
                        <span className="small-font" style={{ color: "#4B4B4B" }}>{feature.body}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <Link to="/solutions/workbench" className="mt-5 button-primary inline-block">Explore WorkBench</Link>
              </div>

              {/* Right Column */}
              <div className="rounded-lg p-4 border-0 flex items-center justify-center">
                <img
                  src={workbenchPic}
                  alt="WorkBench Product Shot"
                  className="rounded-lg shadow-sm max-w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200" style={{ borderColor: 'rgba(0, 0, 0, 0.1)' }}></div>

          {/* Xilos Grid */}
          <div className="px-2 md:px-4 my-2">
            <div className="max-w-9xl mx-auto grid gap-12 grid-cols-1 md:grid-cols-2">
                  
              {/* Left Column */}
              <div className="rounded-lg p-4 flex items-center justify-center">
                <img
                  src={xilosPic}
                  alt="Xilos Product Shot"
                  className="rounded-lg shadow-sm max-w-full h-auto"
                />
              </div>

              {/* Right Column */}
              <div className="rounded-2xl bg-white px-4 text-left md:text-right">
                <p className="subheader" style={{ color: "#4B4B4B" }}>
                  AI Security & Orchestration
                </p>

                <h2 className="section-header text-3xl md:text-4xl lg:text-5xl" style={{ color: "#1F4E79" }}>
                  Xilos: Your AI Command Center
                </h2>

                <p className="text-sm leading-relaxed" style={{ color: "#4B4B4B" }}>
                  Benefit from AI without compromising security. Xilos acts as your intelligent guardian and conductor, 
                  working with all your AI systems to enhance security while breaking down information barriers.
                </p>

                <div className="mt-4 space-y-3">
                  {xilosFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <img src={feature.icon} alt={feature.title} className="h-6 w-6 flex-shrink-0" />
                      <div className="flex-1">
                        <span className="small-font-bold" style={{ color: "#567C8D" }}>{feature.title} </span>
                        <span className="small-font" style={{ color: "#4B4B4B" }}>{feature.body}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 justify-end mt-5">
                  <Link to="/solutions/xilos" className="button-primary">Explore Xilos</Link>
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

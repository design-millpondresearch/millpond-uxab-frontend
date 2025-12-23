import visibility from "../../assets/logos-general/eye.svg";
import protection from "../../assets/logos-general/shield.svg";
import unify from "../../assets/logos-general/share.svg";
import compliance from "../../assets/logos-general/lock.svg"; 
import ecosystem from "../../assets/logos-general/users.svg";
import optimize from "../../assets/logos-general/coin-stack.svg";



const advantages = [
  {
    title: "Visibility",
    body: "Full oversight of assistant activity and data movement across your environment.",
    icon: visibility,
  },
  {
    title: "Protection",
    body: "Enforce data masking, prompt guardrails, and policy compliance in real time.",
    icon: protection,
  },
  {
    title: "Unify",
    body: "Connect AI governance with your existing enterprise security stack and workflows.",
    icon: unify,
  },
  {
    title: "Compliance",
    body: "Continuous controls to meet industry and regulatory requirements with confidence.",
    icon: compliance,
  },
  {
    title: "Ecosystem",
    body: "Works across assistants, agents, and data sources to keep teams aligned.",
    icon: ecosystem,
  },
  {
    title: "Optimize",
    body: "Insights to reduce AI cost while improving usage quality and safety.",
    icon: optimize,
  },
];

function AdvantagesSection() {
  return (
    <section className="regular-banner-sand px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="section-header text-3xl md:text-4xl lg:text-5xl" style={{ color: "#1F4E79" }}>
            Essential AI Governance Advantages.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center gap-3 rounded-2xl p-6 text-center"
            >
              <div className="h-10 w-10 rounded-full mt-2">
                <img src={item.icon} alt={item.title} className="h-10 w-10" />
              </div>
              <h4 className="subheader" style={{ color: "#1F4E79"}}>
                {item.title}
              </h4>
              <p className="small-font mx-4 mb-2" style={{ color: "#4B4B4B" }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AdvantagesSection;

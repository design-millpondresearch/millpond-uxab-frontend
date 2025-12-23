import { Link } from "react-router-dom";
import shield from "../../assets/logos-general/shield.svg";
import monitor from "../../assets/logos-general/monitor.svg";
import home from "../../assets/logos-general/home.svg";


const roles = [
  {
    title: "For Security Leaders",
    description:
      "Protect every AI interaction.",
      logo: shield,
  },
  {
    title: "For Technology Teams",
    description:
      "Streamline and control your AI stack.",
    logo: monitor,
  },
  {
    title: "For Department Heads",
    description:
      "Empower teams to use AI safely and efficiently. ",
    logo: home,
  },
];

function RoleCardsSection() {
  return (
    <section className="regular-banner-white px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="section-header text-3xl md:text-4xl lg:text-5xl" style={{ color: "#1F4E79" }}>
            Every Role Faces a Different Challenge.
          </h2>
          <h3 className="subheader" style={{ color: "#4B4B4B" }}>
            See how Mill Pond Research empowers your team.
          </h3>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {roles.map((role) => (
            <div
              key={role.title}
              className="rounded-2xl bg-[#F5EFE7] hover:bg-[#C8D9E6] p-6 text-center shadow-sm ring-1 ring-[#E5E7EB] drop-shadow hover:drop-shadow-lg transition-all duration-300 flex flex-col items-center"
            >
              <div className="mb-4 flex items-center justify-center">
                <img src={role.logo} alt={role.title} className="h-12 w-12" />
              </div>
              <h4 className="large-font-bold mb-2 text-xl font-semibold" style={{ color: "#1F4E79", fontSize: "24px" }}>
                {role.title}
              </h4>
              <p className="small-font text-sm leading-relaxed mb-4" style={{ color: "#4B4B4B", fontSize: "14px" }}>
                {role.description}
              </p>
              <Link 
                to="/solutions/xilos#top" 
                onClick={() => {
                  setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: 'auto' });
                  }, 0);
                }}
                className="inline-flex items-center gap-2 text-sm font-medium text-[#1F4E79] hover:text-[#1F4E79] transition-all duration-300 hover:translate-x-1"
                style={{ textDecoration: 'none' }}
              >
                See tailored path →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RoleCardsSection;

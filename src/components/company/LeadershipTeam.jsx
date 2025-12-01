import andrew from "../../assets/Andrew.svg";
import pete from "../../assets/Pete.svg";

const team = [
  {
    name: "Andrew Shimshock", 
    title: "Co-founder, CTO",
    body: "Leading Mill Pond Research's technical vision and product development, Andrew brings deep expertise in AI systems architecture and security.",
    icon: andrew, 
  },
  {
    name: "Pete Shimshock", 
    title: "Co-founder, CAIO",
    body: "As Chief AI Officer, Pete drives Mill Pond Research's AI strategy and innovation, focusing on practical implementations that solve real business challenges.",
    icon: pete,
  },
];

function LeadershipTeam() {
  return (
    <section className="regular-banner-blue flex flex-col items-center">
      {/* Heading */}
      <div className="max-w-4xl text-center">
        <h2 className="section-header mb-4" style={{ color: "#1F4E79" }}>
          Meet Our Leadership Team.
        </h2>
        <h3 className="subheader" style={{ color: "#4B4B4B" }}>
          Our passionate team is dedicated to empowering organizations with secure AI governance solutions that turn shadow AI into competitive advantage.
        </h3>
      </div>

      {/* grid */}
      <div className="mt-12 w-full">
        <div className="grid grid-cols-2 justify-items-center gap-6">
          {team.map((team) => (
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-[#1F4E79]">
                <img src={team.icon} alt={team.name} className="h-10 w-10" />
              </div>

                <h3>
                   {team.name} 
                </h3>

              <h4
                className="mb-2 text-xl"
                style={{ color: "#567C8D" }}
              >
                {team.title}
              </h4>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#4B4B4B" }}
              >
                {team.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LeadershipTeam;

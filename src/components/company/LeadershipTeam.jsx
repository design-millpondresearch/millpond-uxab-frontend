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
      <div className="flex flex-row gap-48 justify-center items-start w-full mt-12 max-w-6xl" style={{ gap: '5rem' }}>
        {team.map((member) => (
          <div key={member.name} className="flex flex-col items-center text-center px-4 w-56 max-w-xs">

            {/* image */}
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-[#1F4E79]">
              <img src={member.icon} alt={member.name} className="h-10 w-10" />
            </div>

            {/* name */}
            <p className="subheader">{member.name}</p>

            {/* title */}
            <h4 className="large-font mb-4" style={{ color: "#567C8D" }}> {member.title} </h4>
            
            {/* description */}
            <p className="small-font mx-4" style={{ color: "#4B4B4B" }}> {member.body} </p>
          
          </div>
        ))}
      </div>

    </section>
  );
}

export default LeadershipTeam;

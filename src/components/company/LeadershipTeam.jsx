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
    <section className="regular-banner-blue px-6 py-4 md:py-6 flex flex-col items-center">
      {/* Heading */}
      <div className="text-center">
        <h2 className="section-header mb-4 text-3xl md:text-4xl lg:text-5xl" style={{ color: "#1F4E79" }}>
          Meet Our Leadership Team.
        </h2>
        <h3 className="subheader mx-4" style={{ color: "#4B4B4B" }}>
          Our passionate team is dedicated to empowering organizations with secure AI governance solutions that turn shadow AI into competitive advantage.
        </h3>
      </div>

      {/* grid */}
      <div className="flex flex-wrap justify-center gap-24 items-start w-full mt-6 md:mt-8 max-w-6xl">
        {team.map((member) => (
          <div key={member.name} className="flex flex-col items-center text-center px-4 w-full md:w-80 lg:max-w-sm">

            {/* image */}
            <div className="mb-4 flex h-48 w-48 items-center justify-center rounded-full border-2 border-[#1F4E79] overflow-hidden">
              <img src={member.icon} alt={member.name} className="h-full w-full object-cover" />
            </div>

            {/* name */}
            <p className="subheader">{member.name}</p>

            {/* title */}
            <h4 className="large-font mb-4" style={{ color: "#567C8D" }}> {member.title} </h4>
            
            {/* description */}
            <p className="small-font" style={{ color: "#4B4B4B" }}> {member.body} </p>
          
          </div>
        ))}
      </div>

    </section>
  );
}

export default LeadershipTeam;

import andrewshimshock from "../../assets/logos-headshots/andrew-shimshock.webp";
import peteshimshock from "../../assets/logos-headshots/pete-shimshock.webp";
import christophercaen from "../../assets/logos-headshots/christopher-caen.webp";
import zacharygolden from "../../assets/logos-headshots/zach-golden.webp";
import bradgarsten from "../../assets/logos-headshots/brad-garsten.webp";
import jeffaboud from "../../assets/logos-headshots/jeff-aboud.webp";
import trevorcurwin from "../../assets/logos-headshots/trevor-curwin.webp";
import linkedin from "../../assets/logos-footer/Linkedin.svg";

const team = [
  {
    name: "Andrew Shimshock", 
    title: "Co-founder, CTO",
    body: "Leading Mill Pond Research's technical vision and product development, Andrew brings deep expertise in AI systems architecture and security.",
    icon: andrewshimshock,
    linkedinUrl: "https://www.linkedin.com/in/andrewshimshock/",
  },
  {
    name: "Pete Shimshock", 
    title: "Co-founder, CAIO",
    body: "As Chief AI Officer, Pete drives Mill Pond Research's AI strategy and innovation, focusing on practical implementations that solve real business challenges.",
    icon: peteshimshock,
    linkedinUrl: "https://www.linkedin.com/in/pete-shimshock/",
  },
];

const team2 = [
  {
    name: "Christopher Caen", 
    title: "CEO",
    body: "--Add Description--",
    icon: christophercaen,
    linkedinUrl: "https://www.linkedin.com/in/christophercaen/",
  },
  {
    name: "Zachary Golden", 
    title: "Director of Government Relations & Federal Strategy",
    body: "--Add Description--",
    icon: zacharygolden,
    linkedinUrl: "https://www.linkedin.com/in/zachgoldenbd/",
  },
  {
    name: "Brad Garsten", 
    title: "Strategic Partnership Advisor",
    body: "--Add Description--",
    icon: bradgarsten,
    linkedinUrl: "https://www.linkedin.com/in/bradgarsten/",
  },
  {
    name: "Jeff Aboud", 
    title: "Marketing Advisor, CMO",
    body: "--Add Description--",
    icon: jeffaboud,
    linkedinUrl: "https://www.linkedin.com/in/jaboud/",
  },
  {
    name: "Trevor Curwin", 
    title: "Advisor, Financial Services, Energy and Mobility",
    body: "--Add Description--",
    icon: trevorcurwin,
    linkedinUrl: "https://www.linkedin.com/in/trevor-curwin-8267a01/",
  },
];

function LeadershipTeam() {
  return (
    <section className="regular-banner-blue px-6 py-16 flex flex-col items-center">
      {/* Heading */}
      <div className="text-center">
        <h2 className="section-header mb-4 text-3xl md:text-4xl lg:text-5xl" style={{ color: "#1F4E79" }}>
          Meet Our Leadership Team.
        </h2>
        <h3 className="subheader mx-4 max-w-7xl" style={{ color: "#4B4B4B" }}>
          Our passionate team is dedicated to empowering organizations with secure AI governance solutions that turn shadow AI into competitive advantage.
        </h3>
      </div>

      {/* First grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-18 items-start w-full mt-6 md:mt-8 max-w-7xl mx-auto justify-items-center">
        {team.map((member) => (
          <div key={member.name} className="flex flex-col items-center text-center px-4 w-full md:w-96 lg:w-[500px]">

            {/* image */}
            <div className="mb-4 flex h-48 w-48 items-start justify-center rounded-full border-2 border-[#1F4E79] overflow-hidden">
              <img src={member.icon} alt={member.name} className="h-full w-full object-cover object-top" />
            </div>

            {/* name */}
            <div className="subheader flex items-center justify-center gap-1.5">
              <span>
                {member.name.split(' ').slice(0, -1).join(' ')} {member.name.split(' ').slice(-1)[0]}
              </span>
              <a 
                href={member.linkedinUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-shrink-0 hover:opacity-70 transition-opacity"
              >
                <img 
                  src={linkedin} 
                  alt={`${member.name} LinkedIn`} 
                  className="h-5 w-5"
                />
              </a>
            </div>

            {/* title */}
            <h4 className="large-font mb-4" style={{ color: "#567C8D" }}> {member.title} </h4>
            
            {/* description */}
            <p className="small-font" style={{ color: "#4B4B4B" }}> {member.body} </p>
          
          </div>
        ))}
      </div>

      {/* Second grid - 5 smaller elements */}
      <div className="flex flex-wrap justify-center gap-8 md:gap-12 items-start w-full mt-12 md:mt-16 max-w-6xl">
        {team2.map((member, index) => (
          <div key={`${member.name}-${index}`} className="flex flex-col items-center text-center px-2 w-full sm:w-auto flex-1 min-w-[160px] max-w-[200px]">

            {/* image */}
            <div className="mb-3 flex h-32 w-32 items-start justify-center rounded-full border-2 border-[#1F4E79] overflow-hidden">
              <img src={member.icon} alt={member.name} className="h-full w-full object-cover object-top" />
            </div>

            {/* name */}
            <div className="subheader text-sm md:text-base">
              <div>
                {member.name.split(' ').slice(0, -1).join(' ')}
              </div>
              <div className="flex items-center justify-center gap-1.5">
                {member.name.split(' ').slice(-1)[0]}
                <a 
                  href={member.linkedinUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-shrink-0 hover:opacity-70 transition-opacity"
                >
                  <img 
                    src={linkedin} 
                    alt={`${member.name} LinkedIn`} 
                    className="h-4 w-4 md:h-5 md:w-5"
                  />
                </a>
              </div>
            </div>

            {/* title */}
            <h4 className="large-font mb-2 text-sm md:text-base" style={{ color: "#567C8D" }}> {member.title} </h4>
            
            {/* description */}
            <p className="small-font text-xs md:text-sm" style={{ color: "#4B4B4B" }}> {member.body} </p>
          
          </div>
        ))}
      </div>

    </section>
  );
}

export default LeadershipTeam;

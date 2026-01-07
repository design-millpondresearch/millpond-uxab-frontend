import andrewshimshock from "../../assets/logos-headshots/andrew-shimshock.webp";
import peteshimshock from "../../assets/logos-headshots/pete-shimshock.webp";
import christophercaen from "../../assets/logos-headshots/christopher-caen.webp";
import zacharygolden from "../../assets/logos-headshots/zach-golden.webp";
import bradgarsten from "../../assets/logos-headshots/brad-garsten.webp";
import jeffaboud from "../../assets/logos-headshots/jeff-aboud.webp";
import trevorcurwin from "../../assets/logos-headshots/trevor-curwin.webp";
import linkedin from "../../assets/logos-headshots/reverse-linkedin-logo.svg";

const team1 = [
    {
    name: "Christopher Caen",
    title: "CEO",
    body: "Christopher Caen, CEO, brings to MPR decades of experience delivering innovative B2B technology solutions with both startups and large companies.",
    icon: christophercaen,
    linkedinUrl: "https://www.linkedin.com/in/christophercaen/",
  },
  {
    name: "Andrew Shimshock",
    title: "Co-founder, CTO",
    body:
      "Andrew Shimshock, CTO and Co-Founder, leads our engineering teams and drives our technology vision and strategy for our cybersecurity and governance solutions.",
    icon: andrewshimshock,
    linkedinUrl: "https://www.linkedin.com/in/andrewshimshock/",
  },
  {
    name: "Pete Shimshock",
    title: "Co-founder, CAIO",
    body:
      "Pete Shimshock, Chief AI Officer and Co-Founder, leads our AI and policies practice, covering our model deployment, compliance and regulation frameworks, and our professional services group.",
    icon: peteshimshock,
    linkedinUrl: "https://www.linkedin.com/in/pete-shimshock/",
  },
];

const team2 = [
  {
    name: "Jeff Aboud",
    title: "CMO",
    body: "Jeff Aboud develops and manages our marketing strategy to drive brand awareness and customer acquisition, as well as to highlight the impact we deliver by deploying effective and secure enterprise AI.",
    icon: jeffaboud,
    linkedinUrl: "https://www.linkedin.com/in/jaboud/",
  },
  {
    name: "Brad Garsten",
    title: "Managing SVP, Partnerships",
    body: "Brad Garsten manages our technology partner relationships and programs to ensure that our customers benefit from our security and governance ecosystem, across our market verticals",
    icon: bradgarsten,
    linkedinUrl: "https://www.linkedin.com/in/bradgarsten/",
  },
  {
    name: "Trevor Curwin",
    title: "Director of Industry Partnerships",
    body: "Trevor Curwin is responsible for our strategic partnerships in the financial services, mobility, and energy sectors.",
    icon: trevorcurwin,
    linkedinUrl: "https://www.linkedin.com/in/trevor-curwin-8267a01/",
  },
  {
    name: "Zachary Golden",
    title: "Director of Government Relations",
    body: "Zach Golden runs our federal programs and manages relationships with U.S. government entities.",
    icon: zacharygolden,
    linkedinUrl: "https://www.linkedin.com/in/zachgoldenbd/",
  },
];

function LeadershipTeam() {
  return (
    <section className="regular-banner-blue px-4 md:px-6 py-12 md:py-16 flex flex-col items-center relative">
      {/* Gradient coming down from top */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-96"
        style={{
          background:
            'linear-gradient(to bottom, rgba(200, 217, 230, 0.8) 0%, rgba(200, 217, 230, 0.6) 50%, rgba(200, 217, 230, 0.3) 80%, transparent 100%)',
          zIndex: 0,
        }}
      />
      {/* Heading */}
      <div className="text-center relative z-10">
        <h2 className="section-header mb-4 text-3xl md:text-4xl lg:text-5xl" style={{ color: "#1F4E79" }}>
          Meet Our Leadership Team.
        </h2>
        <h3 className="subheader mx-4 max-w-7xl" style={{ color: "#4B4B4B" }}>
          Our passionate team is dedicated to empowering organizations with secure AI governance solutions that turn shadow AI into competitive advantage.
        </h3>
      </div>

      {/* First grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 items-start w-full mt-4 md:mt-8 max-w-6xl mx-auto px-4 md:px-6 justify-items-center relative z-10">
        {team1.map((member) => (
          <div key={member.name} className="flex flex-col items-center text-center px-2 md:px-4 w-full max-w-full md:max-w-[280px] lg:max-w-[320px]">

            {/* image */}
            <div className="mb-4 flex h-48 w-48 items-start justify-center rounded-full border-2 border-[#1F4E79] overflow-hidden">
              <img src={member.icon} alt={member.name} className="h-full w-full object-cover object-top" />
            </div>

            {/* name */}
            <div className="subheader">
              <span>
                {member.name.split(' ').slice(0, -1).join(' ')} {member.name.split(' ').slice(-1)[0]}
              </span>
            </div>

            {/* title */}
            <h4 className="large-font mb-4 text-center" style={{ color: "#567C8D" }}>
              {member.title}
              <a 
                href={member.linkedinUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block ml-1.5 hover:opacity-70 transition-opacity"
                style={{ verticalAlign: 'text-bottom', marginTop: '-2px' }}
              >
                <img 
                  src={linkedin} 
                  alt={`${member.name} LinkedIn`} 
                  className="h-5 w-5 inline-block"
                  style={{ 
                    filter: 'brightness(0) saturate(100%) invert(47%) sepia(12%) saturate(1200%) hue-rotate(170deg) brightness(0.95) contrast(1)',
                    objectFit: 'contain',
                    verticalAlign: 'text-bottom',
                    marginTop: '2px'
                  }}
                />
              </a>
            </h4>
            
            {/* description */}
            <p className="small-font" style={{ color: "#4B4B4B" }}> {member.body} </p>
          
          </div>
        ))}
      </div>

      {/* Second grid - 4 smaller elements */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12 items-start w-full mt-8 md:mt-16 max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {team2.map((member, index) => (
          <div key={`${member.name}-${index}`} className="flex flex-col items-center text-center px-2 w-full max-w-full sm:max-w-[240px] md:max-w-[280px]">

            {/* image */}
            <div className="mb-3 flex h-32 w-32 items-start justify-center rounded-full border-2 border-[#1F4E79] overflow-hidden">
              <img src={member.icon} alt={member.name} className="h-full w-full object-cover object-top" />
            </div>

            {/* name */}
            <div className="subheader text-sm md:text-base">
              <div>
                {member.name.split(' ').slice(0, -1).join(' ')}
              </div>
              <div>
                {member.name.split(' ').slice(-1)[0]}
              </div>
            </div>

            {/* title */}
            <h4 className="large-font mb-2 text-sm md:text-base text-center" style={{ color: "#567C8D" }}>
              {member.title}
              <a 
                href={member.linkedinUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block ml-1.5 hover:opacity-70 transition-opacity"
                style={{ verticalAlign: 'text-bottom', marginTop: '-2px' }}
              >
                <img 
                  src={linkedin} 
                  alt={`${member.name} LinkedIn`} 
                  className="h-4 w-4 md:h-5 md:w-5 inline-block"
                  style={{ 
                    filter: 'brightness(0) saturate(100%) invert(47%) sepia(12%) saturate(1200%) hue-rotate(170deg) brightness(0.95) contrast(1)',
                    objectFit: 'contain',
                    verticalAlign: 'text-bottom',
                    marginTop: '2px'
                  }}
                />
              </a>
            </h4>
            
            {/* description */}
            <p className="small-font text-xs md:text-sm" style={{ color: "#4B4B4B" }}> {member.body} </p>
          
          </div>
        ))}
      </div>
    </section>
  );
}

export default LeadershipTeam;
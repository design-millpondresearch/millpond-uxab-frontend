import anthropic from "../../assets/anthropic-logo.svg";
import openai from "../../assets/openai_logo.svg";
import meta from "../../assets/meta-logo.svg";
import google from "../../assets/Google_logo.svg";
import groq from "../../assets/Groq_logo.svg";
import aws from "../../assets/aws_logo.svg";
import azure from "../../assets/Microsoft_Azure_Logo.svg";
import nist from "../../assets/nist_logo_black.svg";
import ccc from "../../assets/ccc.svg";
import invokeai from "../../assets/invokeai.svg";


const partners = [
  {
    name: "Anthropic",
    logo: anthropic,
  },
  {
    name: "OpenAI",
    logo: openai,
  },
  {
    name: "Meta",
    logo: meta,
  },
  {
    name: "Google",
    logo: google,
  },
  {
    name: "Groq",
    logo: groq,
  },
  {
    name: "AWS",
    logo: aws,
  },
  {
    name: "Azure",
    logo: azure,
  },
  {
    name: "NIST",
    logo: nist,
  },
  {
    name: "CCC",
    logo: ccc,
  },
  {
    name: "InvokeAI",
    logo: invokeai,
  },
];

function PartnersSection() {
  return (
    <section className="regular-banner-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="section-header text-3xl md:text-4xl lg:text-5xl" style={{ color: "#1F4E79" }}>
            Our Partners.
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center rounded-xl bg-white px-3 py-4 text-sm font-semibold text-[#1F4E79] shadow-sm ring-1 ring-[#E5E7EB] drop-shadow hover:drop-shadow-lg transition-all duration-300"
            >
              <img src={partner.logo} alt={partner.name} className="max-h-12 max-w-full object-contain" />
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-2 rounded-2xl bg-[#F5EFE7] p-6 text-center shadow-sm mx-4 md:mx-12 lg:mx-24 xl:mx-48 drop-shadow hover:drop-shadow-lg transition-all duration-300">
          <img src={aws} alt="AWS Logo" className="h-12 w-12" />
          <p className="subheader" style={{ color: "#1F4E79" }}>
            AWS genAI partnership announced
          </p>
          <p className="small-font" style={{ color: "#4B4B4B" }}>
            Malesuada facilisi libero, nam eu. Quis pellentesque tortor a elementum ut blandit sed pellentesque arcu. 
            Malesuada in faucibus risus velit diam. Non, massa ut a arcu, fermentum, vel interdum.
          </p>
        </div>
      </div>
    </section>
  );
}

export default PartnersSection;

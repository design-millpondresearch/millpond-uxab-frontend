import { useState } from "react";
//partner logos
import anthropic from "../../assets/partners/anthropic_logo.svg";
import openai from "../../assets/partners/openai_logo.svg";
import meta from "../../assets/partners/meta-logo.svg";
import google from "../../assets/partners/Google_logo.svg";
import groq from "../../assets/partners/Groq_logo.svg";
import aws from "../../assets/partners/aws_logo.svg";
import azure from "../../assets/partners/Microsoft_Azure_Logo.svg";
import nist from "../../assets/partners/nist_logo_black.svg";
import ccc from "../../assets/partners/ccc.svg";
import invokeai from "../../assets/partners/invokeai.svg";

//testimonial logos
import jlinc from "../../assets/testimonials/JLINC Logo H White.svg";
import zealstrat from "../../assets/testimonials/ZealStrat.svg";


//arrows
import arrowLeft from "../../assets/icons/arrow-left.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";


const partners = [
  { name: "Anthropic", logo: anthropic },
  { name: "OpenAI", logo: openai },
  { name: "Meta", logo: meta },
  { name: "Google", logo: google },
  { name: "Groq", logo: groq },
  { name: "AWS", logo: aws },
  { name: "Azure", logo: azure },
  { name: "NIST", logo: nist },
  { name: "CCC", logo: ccc },
  { name: "InvokeAI", logo: invokeai },
];

// duplicate list so the marquee can scroll 
const marqueePartners = [...partners, ...partners];

const testimonials = [
  {
    company: "JLINC",
    logo: jlinc,
    title: "Security insight beyond anything we have seen",
    body:
      "While building protocols to audit AI data, we have seen under the hood of many orchestration technologies. Mill Pond Research's insight into the security implications of AI are well beyond anything we have seen so far.",
    speaker: "Jim Fournier, CEO, JLINC",
  },
  {
    company: "ZealStrat",
    logo: zealstrat,
    title: "Speed with control, innovation with accountability",
    body:
      "Security and compliance are like the heart and lungs of responsible AI, each essential, each reinforcing the other. That is why I am excited about our partnership with Mill Pond Research. With XILOS orchestrating safe, scalable AI workflows and RESA ensuring that every output faithfully follows client policies, we give organizations the balance they need.",
    speaker: "Ganesan Keerthivasan, CEO, ZealStrat",
  },
];

function PartnersSection() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const currentTestimonial = testimonials[testimonialIndex];

  const goNext = () =>
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);

  const goPrev = () =>
    setTestimonialIndex((prev) =>
      (prev - 1 + testimonials.length) % testimonials.length
    );

  return (
    <section className="regular-banner-white px-6 py-16">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center">
          <h2
            className="section-header text-3xl md:text-4xl lg:text-5xl"
            style={{ color: "#1F4E79" }}
          >
            Our Partners.
          </h2>
        </div>

        {/* PARTNER LOGO MARQUEE – continuous, no arrows */}
        <div className="mt-12 overflow-hidden px-2 md:px-12">
          <div className="partners-marquee-track flex gap-12 md:gap-20">
            {marqueePartners.map((partner, idx) => (
              <div
                key={`${partner.name}-${idx}`}
                className="flex h-16 flex-none items-center justify-center"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-12 md:max-h-14 max-w-[150px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* TESTIMONIAL CARD */}
        <div className="mt-16 mx-2 md:mx-12 lg:mx-24 xl:mx-32">
          <div className="flex items-center gap-4">
            {/* Left arrow */}
            <button
              type="button"
              onClick={goPrev}
              className="
                h-10 w-10 flex items-center justify-center rounded-full
                transition-transform duration-200 hover:-translate-x-1
              "
              aria-label="Previous testimonial"
            >
              <img src={arrowLeft} className="h-6 w-6" />
            </button>

            {/* Card */}
            <div
              className="
                flex-1 flex flex-col items-center justify-center gap-3
                rounded-2xl bg-[#F5EFE7]
                px-6 py-8 md:px-10 md:py-10
                text-center shadow-sm
                transition-all duration-500
                min-h-[260px] md:min-h-[300px]
              "
            >
              {currentTestimonial.logo ? (
                <img
                  src={currentTestimonial.logo}
                  alt={currentTestimonial.company}
                  className="mb-1 h-10 w-auto"
                />
              ) : (
                <div className="mb-1 h-10 px-4 flex items-center justify-center rounded-full bg-white text-xs md:text-sm font-semibold text-[#1F4E79]">
                  {currentTestimonial.company}
                </div>
              )}

              <p
                className="subheader text-xl md:text-2xl"
                style={{ color: "#1F4E79" }}
              >
                {currentTestimonial.title}
              </p>

              <p className="small-font max-w-3xl" style={{ color: "#4B4B4B" }}>
                {currentTestimonial.body}
              </p>

              {currentTestimonial.speaker && (
                <p className="small-font font-semibold mt-2 text-[#567C8D]">
                  {currentTestimonial.speaker}
                </p>
              )}
            </div>


            {/* Right arrow */}
            <button
              type="button"
              onClick={goNext}
              className="
                h-10 w-10 flex items-center justify-center rounded-full
                transition-transform duration-200 hover:translate-x-1
              "
              aria-label="Next testimonial"
            >
              <img src={arrowRight} className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PartnersSection;

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
import jlinc from "../../assets/testimonials/JLINC Logo H Black.svg";
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

// split into 2 rows for a 2-row marquee
const ROW_SIZE = Math.ceil(partners.length / 2);
const row1 = partners.slice(0, ROW_SIZE);
const row2 = partners.slice(ROW_SIZE);

// duplicate per-row so each row loops seamlessly
const marqueeRow1 = [...row1, ...row1];
const marqueeRow2 = [...row2, ...row2];

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
    setTestimonialIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  return (
    <section className="regular-banner-white px-4 md:px-6 py-12 md:py-16 relative overflow-hidden">
      {/* Top right ellipse gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 1500px 150% at right top, rgba(86, 124, 141, 0.15) 0%, transparent 70%)',
          right: 0,
          top: 0,
        }}
      />
      
      {/* Bottom left ellipse gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 1500px 150% at left bottom, rgba(86, 124, 141, 0.15) 0%, transparent 70%)',
          left: 0,
          bottom: 0,
        }}
      />
      
      <div className="mx-auto max-w-6xl relative z-10">
        {/* Heading */}
        <div className="text-center">
          <h2
            className="section-header text-3xl md:text-4xl lg:text-5xl"
            style={{ color: "#1F4E79" }}
          >
            Our Partners.
          </h2>
        </div>

        {/* PARTNER LOGO MARQUEE – continuous, 2 rows, no arrows */}
        <div className="mt-8 md:mt-12 overflow-hidden px-2 md:px-8">
          <div className="flex flex-col gap-6">
            {/* Row 1 */}
            <div className="overflow-hidden">
              <div className="partners-marquee-track flex gap-12 md:gap-20">
                {marqueeRow1.map((partner, idx) => (
                  <div
                    key={`row1-${partner.name}-${idx}`}
                    className="flex h-16 w-[160px] flex-none items-center justify-center"
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-12 md:max-h-14 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Row 2 */}
            <div className="overflow-hidden">
              <div className="partners-marquee-track flex gap-12 md:gap-20">
                {marqueeRow2.map((partner, idx) => (
                  <div
                    key={`row2-${partner.name}-${idx}`}
                    className="flex h-16 w-[160px] flex-none items-center justify-center"
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-12 md:max-h-14 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* TESTIMONIAL CARD */}
        <div className="mt-12 md:mt-16 mx-2 md:mx-8 lg:mx-16 xl:mx-24">
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
                flex-1 flex flex-col items-center justify-center gap-2
                rounded-2xl bg-[#F5EFE7]
                px-4 py-4 md:px-6 md:py-6
                text-center shadow-sm
                transition-all duration-500
                h-[320px] md:h-[340px]
              "
            >
              <div className="flex h-full flex-col items-center justify-center gap-2">
                {currentTestimonial.logo ? (
                  <img
                    src={currentTestimonial.logo}
                    alt={currentTestimonial.company}
                    className="mb-1 h-8 w-auto"
                  />
                ) : (
                  <div className="mb-1 h-8 px-4 flex items-center justify-center rounded-full bg-white text-xs md:text-sm font-semibold text-[#1F4E79]">
                    {currentTestimonial.company}
                  </div>
                )}
                
                <p
                  className="subheader text-lg md:text-xl"
                  style={{ color: "#1F4E79" }}
                >
                  {currentTestimonial.title}
                </p>
                
                <p className="small-font max-w-3xl text-sm" style={{ color: "#4B4B4B" }}>
                  {currentTestimonial.body}
                </p>
                
                {currentTestimonial.speaker && (
                  <p className="small-font font-semibold text-sm text-[#567C8D]">
                    {currentTestimonial.speaker}
                  </p>
                )}
              </div>
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
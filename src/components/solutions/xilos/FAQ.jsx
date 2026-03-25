import { useState } from 'react';
import { faqData } from './FAQData';

function FAQ() {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (id) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const expandAll = () => {
    setOpenItems(new Set(faqData.map(item => item.id)));
  };

  const collapseAll = () => {
    setOpenItems(new Set());
  };

  return (
    <section className="relative regular-banner-sand px-4 md:px-6 py-12 md:py-16 flex flex-col items-center overflow-hidden">
      {/* Large centered gradient blob */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 800px 500px at center, rgba(86, 124, 141, 0.1) 0%, rgba(86, 124, 141, 0.07) 40%, rgba(86, 124, 141, 0.04) 60%, transparent 80%)',
          zIndex: 0,
        }}
      />

      <div className="w-full max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2
            className="section-header mb-4 text-3xl md:text-4xl lg:text-5xl"
            style={{ color: "#1F4E79" }}
          >
            Frequently Asked Questions
          </h2>
          
          {/* Expand/Collapse Controls */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={expandAll}
              className="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:shadow-md"
              style={{ 
                backgroundColor: "#1F4E79", 
                color: "#FFFFFF" 
              }}
            >
              Expand All
            </button>
            <button
              onClick={collapseAll}
              className="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:shadow-md"
              style={{ 
                backgroundColor: "#FFFFFF", 
                color: "#1F4E79",
                border: "1px solid #1F4E79"
              }}
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item) => {
            const isOpen = openItems.has(item.id);
            
            return (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-sm overflow-hidden transition-shadow duration-300 hover:shadow-md"
              >
                {/* Question Header */}
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <h3
                    className="large-font-bold pr-4"
                    style={{ color: "#1F4E79" }}
                  >
                    {item.question}
                  </h3>
                  <span
                    className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: isOpen ? "#1F4E79" : "#F5F5F0",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)"
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.3s ease"
                      }}
                    >
                      <path
                        d="M4 6L8 10L12 6"
                        stroke={isOpen ? "#FFFFFF" : "#1F4E79"}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>

                {/* Answer Content */}
                <div
                  id={`faq-answer-${item.id}`}
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: isOpen ? "1000px" : "0",
                    opacity: isOpen ? 1 : 0
                  }}
                >
                  <div className="px-6 pb-5">
                    <div
                      className="small-font whitespace-pre-line"
                      style={{ color: "#4B4B4B", lineHeight: "1.7" }}
                    >
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;

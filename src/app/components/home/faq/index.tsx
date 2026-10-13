"use client";
import React, { useState } from "react";
import { faqs } from "@data/faq";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-6 md:py-10">
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-7">
          {/* Header */}
          <div className="flex flex-col gap-2 mb-8">
            <p className="font-jost uppercase tracking-[3px] text-xs sm:text-sm font-semibold text-secondary/60">
              Frequently Asked Questions
            </p>
            <h2 className="font-instrument text-2xl sm:text-3xl md:text-4xl text-primary font-normal leading-tight">
              Questions &amp; <span className="font-serif italic text-primary">Answers</span>
            </h2>
            <p className="font-inter text-sm sm:text-base text-secondary leading-relaxed mt-1">
              Clear, transparent answers about timelines, scope, revisions, and working together.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-card rounded-2xl border border-primary/5 overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    aria-expanded={isOpen}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/20"
                  >
                    <span className="font-jost text-sm sm:text-base font-semibold text-primary">
                      {faq.question}
                    </span>
                    <span
                      className={`p-1.5 rounded-full bg-primary/5 text-primary flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDown size={16} />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 animate-in fade-in duration-200">
                      <p className="font-inter text-xs sm:text-sm text-secondary leading-relaxed border-t border-primary/5 pt-3">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

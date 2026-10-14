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
        <div className="max-w-[860px] mx-auto">
          {/* Header */}
          <div className="flex flex-col gap-2 mb-8">
            <div className="flex items-center gap-2 font-sans uppercase tracking-[2.5px] text-xs font-semibold text-secondary/70">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span>Got Questions?</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-primary font-normal leading-tight">
              Questions &amp; <span className="italic text-primary">Answers</span>
            </h2>
            <span className="block w-10 h-[2px] bg-primary/20 rounded-full mt-2" />
            <p className="font-sans text-sm sm:text-base text-secondary leading-relaxed mt-1">
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
                  className="bg-card rounded-2xl border border-primary/5 shadow-[0_2px_12px_-2px_rgba(0,0,0,0.02)] overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    aria-expanded={isOpen}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none min-h-[44px]"
                  >
                    <span className="font-sans text-sm sm:text-base font-semibold text-primary">
                      {faq.question}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full bg-primary/5 text-primary flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDown size={15} />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 animate-in fade-in duration-200">
                      <p className="font-sans text-xs sm:text-sm text-secondary leading-relaxed border-t border-primary/5 pt-3">
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

"use client";
import React from "react";
import { testimonials } from "@data/testimonials";
import { SITE_CONFIG } from "@data/config";
import { MessageCircle, Quote } from "lucide-react";

const Testimonials = () => {
  const hasReviews = testimonials && testimonials.length > 0;

  return (
    <section id="testimonials" className="py-6 md:py-10">
      <div className="container relative z-10">
        <div className="max-w-[860px] mx-auto">
          {/* Header */}
          <div className="flex flex-col gap-2 mb-8">
            <div className="flex items-center gap-2 font-sans uppercase tracking-[2.5px] text-xs font-semibold text-secondary/70">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span>Client Words &amp; Trust</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-primary font-normal leading-tight">
              Client <span className="italic text-primary">Feedback</span>
            </h2>
            <span className="block w-10 h-[2px] bg-primary/20 rounded-full mt-2" />
          </div>

          {!hasReviews ? (
            /* Honest empty state card */
            <div className="bg-card rounded-3xl p-7 sm:p-10 border border-primary/5 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_-4px_rgba(0,0,0,0.2)] text-center flex flex-col items-center max-w-xl mx-auto">
              <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary mb-4">
                <Quote size={22} className="opacity-70" />
              </div>
              <p className="font-sans text-base sm:text-lg text-primary font-medium mb-2 leading-relaxed">
                My first client reviews are on the way.
              </p>
              <p className="font-sans text-sm text-secondary mb-6 leading-relaxed max-w-sm">
                Want to be next? Let&apos;s build your project together.
              </p>
              <a
                href={SITE_CONFIG.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-sans text-xs font-semibold uppercase tracking-[1.5px] bg-primary text-primary-foreground px-6 py-3.5 rounded-full hover:bg-primary/85 transition-all duration-200 shadow-sm min-h-[44px]"
              >
                <MessageCircle size={15} className="text-emerald-400" />
                <span>Let&apos;s Talk on WhatsApp</span>
              </a>
            </div>
          ) : (
            /* Review Grid when reviews are added */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="bg-card rounded-3xl p-6 sm:p-7 border border-primary/5 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_-4px_rgba(0,0,0,0.2)] flex flex-col justify-between hover:border-primary/20 transition-all duration-300"
                >
                  <p className="font-sans text-sm text-secondary italic mb-4 leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div>
                    <h4 className="font-sans text-sm font-semibold text-primary">{t.name}</h4>
                    <p className="font-sans text-xs text-secondary/70">
                      {t.role}{t.company ? ` at ${t.company}` : ""}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

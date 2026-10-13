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
        <div className="max-w-5xl mx-auto px-4 sm:px-7">
          {/* Header */}
          <div className="flex flex-col gap-2 mb-8">
            <p className="font-jost uppercase tracking-[3px] text-xs sm:text-sm font-semibold text-secondary/60">
              Testimonials
            </p>
            <h2 className="font-instrument text-2xl sm:text-3xl md:text-4xl text-primary font-normal leading-tight">
              Client <span className="font-serif italic text-primary">Feedback</span>
            </h2>
          </div>

          {!hasReviews ? (
            /* Honest empty state card */
            <div className="bg-card rounded-2xl p-7 sm:p-9 border border-primary/5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] text-center flex flex-col items-center max-w-xl mx-auto">
              <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary mb-4">
                <Quote size={22} className="opacity-70" />
              </div>
              <p className="font-inter text-base sm:text-lg text-primary font-medium mb-2 leading-relaxed">
                My first client reviews are on the way.
              </p>
              <p className="font-inter text-sm text-secondary mb-6 leading-relaxed max-w-sm">
                Want to be next? Let&apos;s build your project together.
              </p>
              <a
                href={SITE_CONFIG.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-jost text-xs font-semibold uppercase tracking-[1.5px] bg-primary text-primary-foreground px-6 py-3 rounded-full hover:bg-primary/85 transition-all duration-200 shadow-sm"
              >
                <MessageCircle size={15} className="text-emerald-400" />
                Let&apos;s Talk on WhatsApp
              </a>
            </div>
          ) : (
            /* Review Grid when reviews are added */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="bg-card rounded-2xl p-6 border border-primary/5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] flex flex-col justify-between"
                >
                  <p className="font-inter text-sm text-secondary italic mb-4 leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div>
                    <h4 className="font-jost text-sm font-semibold text-primary">{t.name}</h4>
                    <p className="font-inter text-xs text-secondary/70">
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

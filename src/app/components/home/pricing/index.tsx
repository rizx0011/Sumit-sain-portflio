"use client";
import React from "react";
import { SHOW_PRICING } from "@data/config";
import { pricingPlans } from "@data/pricing";
import { Check, Sparkles } from "lucide-react";

const Pricing = () => {
  if (!SHOW_PRICING) {
    return null;
  }

  const handleScrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-6 md:py-10">
      <div className="container relative z-10">
        <div className="max-w-[860px] mx-auto">
          {/* Header */}
          <div className="flex flex-col gap-2 mb-8">
            <div className="flex items-center gap-2 font-sans uppercase tracking-[2.5px] text-xs font-semibold text-secondary/70">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span>Investment &amp; Packages</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-primary font-normal leading-tight">
              Transparent <span className="italic text-primary">Plans</span>
            </h2>
            <span className="block w-10 h-[2px] bg-primary/20 rounded-full" />
            <p className="font-sans text-sm sm:text-base text-secondary leading-relaxed mt-1">
              Choose a package that fits your stage, or get a custom quote tailored to your scope.
            </p>
          </div>

          {/* 3 Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {pricingPlans.map((plan) => {
              const isPopular = plan.popular;
              return (
                <div
                  key={plan.id}
                  className={`bg-card rounded-3xl p-6 sm:p-7 border flex flex-col justify-between transition-all duration-300 relative ${
                    isPopular
                      ? "border-primary/30 shadow-[0_8px_32px_-4px_rgba(0,0,0,0.08)] ring-1 ring-primary/20"
                      : "border-primary/5 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_24px_-4px_rgba(0,0,0,0.2)] hover:border-primary/20 hover:-translate-y-1"
                  }`}
                >
                  {isPopular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1 bg-primary text-primary-foreground font-sans uppercase tracking-wider text-[10px] font-bold px-3 py-1 rounded-full shadow-sm">
                        <Sparkles size={11} />
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div>
                    <h3 className="font-sans text-xl font-bold text-primary mb-1">
                      {plan.name}
                    </h3>
                    <p className="font-sans text-xs text-secondary leading-relaxed mb-4">
                      {plan.tagline}
                    </p>

                    <div className="py-2.5 px-3 rounded-xl bg-primary/5 border border-primary/5 mb-5">
                      <span className="font-sans text-[11px] font-semibold text-primary/80 uppercase tracking-wide">
                        Best for: {plan.for}
                      </span>
                    </div>

                    <ul className="space-y-2.5 mb-6">
                      {plan.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-xs font-sans text-primary/80">
                          <Check size={14} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    type="button"
                    onClick={handleScrollToContact}
                    className={`w-full min-h-[44px] py-3 px-4 rounded-full font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center justify-center ${
                      isPopular
                        ? "bg-primary text-primary-foreground hover:bg-primary/85 shadow-sm"
                        : "bg-primary/5 hover:bg-primary/10 text-primary border border-primary/10"
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

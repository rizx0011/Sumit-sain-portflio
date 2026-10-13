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
        <div className="max-w-5xl mx-auto px-4 sm:px-7">
          {/* Header */}
          <div className="flex flex-col gap-2 mb-8">
            <p className="font-jost uppercase tracking-[3px] text-xs sm:text-sm font-semibold text-secondary/60">
              Pricing &amp; Packages
            </p>
            <h2 className="font-instrument text-2xl sm:text-3xl md:text-4xl text-primary font-normal leading-tight">
              Transparent <span className="font-serif italic text-primary">Plans</span>
            </h2>
            <p className="font-inter text-sm sm:text-base text-secondary leading-relaxed mt-1">
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
                  className={`bg-card rounded-2xl p-6 border flex flex-col justify-between transition-all duration-300 relative ${
                    isPopular
                      ? "border-primary/30 shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] ring-1 ring-primary/20"
                      : "border-primary/5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:border-primary/20"
                  }`}
                >
                  {isPopular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1 bg-primary text-primary-foreground font-jost uppercase tracking-wider text-[10px] font-bold px-3 py-1 rounded-full shadow-sm">
                        <Sparkles size={11} />
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div>
                    <h3 className="font-jost text-xl font-bold text-primary mb-1">
                      {plan.name}
                    </h3>
                    <p className="font-inter text-xs text-secondary leading-relaxed mb-4">
                      {plan.tagline}
                    </p>

                    <div className="py-2.5 px-3 rounded-lg bg-primary/5 border border-primary/5 mb-5">
                      <span className="font-jost text-[11px] font-semibold text-primary/80 uppercase tracking-wide">
                        Best for: {plan.for}
                      </span>
                    </div>

                    <ul className="space-y-2.5 mb-6">
                      {plan.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-xs text-primary/80">
                          <Check size={14} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    type="button"
                    onClick={handleScrollToContact}
                    className={`w-full py-2.5 px-4 rounded-full font-jost text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
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

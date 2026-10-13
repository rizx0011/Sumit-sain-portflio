"use client";
import React from "react";
import { services } from "@data/services";
import { Globe, Layers, ShoppingCart, Paintbrush, Zap, Check, Clock, ArrowRight } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Layers,
  ShoppingCart,
  Paintbrush,
  Zap,
};

const Services = () => {
  const handleScrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-6 md:py-10">
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-7">
          {/* Header */}
          <div className="flex flex-col gap-2 mb-8">
            <p className="font-jost uppercase tracking-[3px] text-xs sm:text-sm font-semibold text-secondary/60">
              Services
            </p>
            <h2 className="font-instrument text-2xl sm:text-3xl md:text-4xl text-primary font-normal leading-tight">
              What I Can <span className="font-serif italic text-primary">Build For You</span>
            </h2>
            <p className="font-inter text-sm sm:text-base text-secondary leading-relaxed mt-1">
              End-to-end web solutions tailored for business owners, creators, and startups.
            </p>
          </div>

          {/* 5 Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map((service, idx) => {
              const Icon = iconMap[service.icon] || Globe;
              const isFullSpan = idx === services.length - 1; // 5th card spans full width or balanced

              return (
                <div
                  key={service.id}
                  className={`bg-card rounded-2xl p-6 sm:p-7 border border-primary/5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] flex flex-col justify-between hover:border-primary/20 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] transition-all duration-300 ${
                    isFullSpan ? "md:col-span-2" : ""
                  }`}
                >
                  <div>
                    {/* Icon & Title */}
                    <div className="flex items-center gap-3.5 mb-3">
                      <div className="p-3 bg-primary/5 rounded-xl text-primary flex-shrink-0">
                        <Icon size={22} />
                      </div>
                      <h3 className="font-jost text-lg sm:text-xl font-semibold text-primary">
                        {service.title}
                      </h3>
                    </div>

                    {/* One-line Benefit */}
                    <p className="font-inter text-sm text-secondary leading-relaxed mb-5">
                      {service.benefit}
                    </p>

                    {/* 3 Bullets */}
                    <ul className="space-y-2 mb-6">
                      {service.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-primary/80">
                          <Check size={15} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Delivery time + Get a quote CTA */}
                  <div className="pt-4 border-t border-primary/5 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-1.5 text-xs text-secondary/70 font-jost">
                      <Clock size={13} className="text-secondary/50" />
                      <span>Delivery: <strong className="text-primary font-semibold">{service.delivery}</strong></span>
                    </div>

                    <button
                      type="button"
                      onClick={handleScrollToContact}
                      className="inline-flex items-center gap-1.5 font-jost text-xs font-semibold uppercase tracking-wider text-primary hover:text-primary/70 transition-colors cursor-pointer"
                    >
                      <span>Get a quote</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

"use client";
import React from "react";

const stats = [
  { value: "2", label: "Projects Delivered" },
  { value: "2", label: "Years Coding" },
  { value: "10+", label: "Technologies" },
  { value: "1 Week", label: "Avg. Delivery" },
];

const StatsStrip = () => {
  return (
    <section className="py-4 sm:py-8">
      <div className="container relative z-10 px-2 sm:px-6">
        <div className="max-w-[860px] mx-auto">
          <div className="grid grid-cols-4 gap-1 sm:gap-4 p-2.5 sm:p-6 rounded-2xl sm:rounded-3xl bg-card border border-primary/5 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_24px_-4px_rgba(0,0,0,0.2)]">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center text-center px-0.5 sm:px-3 py-1 sm:py-2 rounded-xl sm:rounded-2xl transition-all duration-300 hover:bg-primary/[0.03] group min-w-0"
              >
                <span className="font-serif italic text-lg sm:text-3xl md:text-4xl font-normal text-primary tracking-tight transition-transform duration-300 group-hover:scale-105 leading-none whitespace-nowrap">
                  {stat.value}
                </span>
                <span className="font-sans uppercase tracking-[0.5px] sm:tracking-[1.5px] text-[7.5px] sm:text-[11px] font-semibold text-secondary/70 mt-1 sm:mt-1.5 leading-tight text-center max-w-full">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsStrip;


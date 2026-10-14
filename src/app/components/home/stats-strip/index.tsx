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
    <section className="py-6 md:py-10">
      <div className="container relative z-10">
        <div className="max-w-[860px] mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 p-5 sm:p-7 rounded-3xl bg-card border border-primary/5 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_24px_-4px_rgba(0,0,0,0.2)]">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-3 rounded-2xl transition-all duration-300 hover:bg-primary/[0.03] group"
              >
                <span className="font-serif italic text-3xl sm:text-4xl font-normal text-primary tracking-tight transition-transform duration-300 group-hover:scale-105">
                  {stat.value}
                </span>
                <span className="font-sans uppercase tracking-[1.5px] text-[10px] sm:text-[11px] font-semibold text-secondary/70 mt-1.5">
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

"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { experiences, ExperienceEntry } from "@data/experience";

interface CardProps {
  item: ExperienceEntry;
  defaultExpanded?: boolean;
}

const ExperienceCard: React.FC<CardProps> = ({ item, defaultExpanded = false }) => {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const [imgError, setImgError] = useState(false);

  return (
    <div className="bg-card rounded-2xl sm:rounded-3xl border border-primary/5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] p-4 sm:p-5 transition-all duration-300 hover:border-primary/15">
      {/* Main Row */}
      <div className="flex items-center justify-between gap-3 sm:gap-4">
        {/* Left: Clean Circular Logo */}
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center bg-primary/5">
          {!imgError ? (
            <Image
              src={item.logo}
              alt={item.logoAlt || item.title}
              width={64}
              height={64}
              className="w-full h-full object-cover rounded-full"
              onError={() => setImgError(true)}
            />
          ) : (
            <span className="font-bold text-lg text-primary/70 select-none">
              {item.title.charAt(0)}
            </span>
          )}
        </div>

        {/* Center: Title, Role Line, One-line Truncated Description */}
        <div className="flex-1 min-w-0 pr-2">
          <h3 className="font-jost text-base sm:text-lg font-semibold text-primary tracking-tight truncate">
            {item.title}
          </h3>
          <p className="font-jost text-xs sm:text-sm text-secondary/90 font-normal truncate">
            {item.role}
          </p>
          {!expanded && (
            <p className="font-inter text-xs sm:text-sm text-secondary/60 font-normal truncate mt-0.5">
              {item.description}
            </p>
          )}
        </div>

        {/* Right: Date and Round Chevron Button */}
        <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
          <span className="font-jost text-xs sm:text-sm text-secondary/70 whitespace-nowrap hidden sm:inline-block">
            {item.date}
          </span>

          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            aria-expanded={expanded}
            aria-label={expanded ? `Collapse ${item.title}` : `Expand ${item.title}`}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-primary/10 flex items-center justify-center text-secondary hover:text-primary hover:bg-primary/5 transition-all duration-300 cursor-pointer"
          >
            <ChevronDown
              size={16}
              className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Expanded View */}
      {expanded && (
        <div className="mt-4 pt-4 border-t border-primary/5 animate-in fade-in slide-in-from-top-1 duration-300">
          {/* Mobile Date */}
          <div className="sm:hidden mb-2 text-xs font-jost text-secondary/70">
            {item.date}
          </div>

          <p className="font-inter text-xs sm:text-sm text-secondary leading-relaxed mb-3">
            {item.description}
          </p>

          {item.bullets && item.bullets.length > 0 && (
            <ul className="space-y-1.5 pl-0.5">
              {item.bullets.map((bullet, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-secondary/85 leading-relaxed"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-1.5 flex-shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-6 md:py-10">
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-7">
          {/* Header */}
          <div className="flex flex-col gap-1.5 mb-6">
            <p className="font-jost uppercase tracking-[2.5px] text-xs font-semibold text-secondary/60">
              Experience &amp; Roles • Career Path
            </p>
            <h2 className="font-instrument text-2xl sm:text-3xl text-primary font-normal tracking-tight">
              Work &amp; <span className="font-serif italic text-primary">Education</span>
            </h2>
          </div>

          {/* List of Experience Cards */}
          <div className="flex flex-col gap-3">
            {experiences.map((item) => (
              <ExperienceCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
"use client";
import React, { useRef, useEffect, useState } from "react";
import { MessageSquare, Palette, Code2, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discuss",
    icon: MessageSquare,
    desc: "We discuss your business goals, target audience, content needs, and project scope.",
  },
  {
    number: "02",
    title: "Design",
    icon: Palette,
    desc: "I craft a clean, mobile-first design layout tailored to your brand identity.",
  },
  {
    number: "03",
    title: "Develop",
    icon: Code2,
    desc: "I build the site with fast, modern code, responsive layouts, and SEO best practices.",
  },
  {
    number: "04",
    title: "Launch & Support",
    icon: Rocket,
    desc: "We deploy to your live domain with testing, handover, and free post-launch support.",
  },
];

const HowIWork = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 2);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 2);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  // Mouse drag-to-scroll for desktop
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    setIsDragging(true);
    setStartX(e.pageX - el.offsetLeft);
    setScrollLeftPos(el.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const el = scrollRef.current;
    if (!el) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX) * 1.4;
    el.scrollLeft = scrollLeftPos - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector(".process-card")?.clientWidth || 300;
    const scrollAmount = cardWidth + 20;
    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section id="process" className="py-6 md:py-10">
      <div className="container relative z-10">
        <div className="max-w-[860px] mx-auto">
          {/* Header Row */}
          <div className="flex items-end justify-between mb-8">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 font-sans uppercase tracking-[2.5px] text-xs font-semibold text-secondary/70">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span>Step-by-Step Workflow</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-primary font-normal leading-tight">
                How I <span className="italic text-primary">Work</span>
              </h2>
              <span className="block w-10 h-[2px] bg-primary/20 rounded-full" />
              <p className="font-sans text-sm sm:text-base text-secondary leading-relaxed mt-1">
                A straightforward, transparent 4-step workflow from idea to live deployment.
              </p>
            </div>

            {/* Scroll Arrows */}
            <div className="hidden sm:flex items-center gap-2 flex-shrink-0 ml-4">
              <button
                type="button"
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                aria-label="Scroll left"
                className={`w-11 h-11 min-w-[44px] min-h-[44px] rounded-full border flex items-center justify-center transition-all duration-200 cursor-pointer ${
                  canScrollLeft
                    ? "border-primary/20 text-primary hover:bg-primary/5 active:scale-95"
                    : "border-primary/5 text-secondary/30 cursor-not-allowed"
                }`}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                aria-label="Scroll right"
                className={`w-11 h-11 min-w-[44px] min-h-[44px] rounded-full border flex items-center justify-center transition-all duration-200 cursor-pointer ${
                  canScrollRight
                    ? "border-primary/20 text-primary hover:bg-primary/5 active:scale-95"
                    : "border-primary/5 text-secondary/30 cursor-not-allowed"
                }`}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Horizontal Scroll Container */}
          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            className={`flex gap-5 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory ${
              isDragging ? "cursor-grabbing select-none" : "cursor-grab"
            }`}
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
              willChange: "scroll-position, transform",
            }}
          >
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="process-card bg-card rounded-3xl p-6 sm:p-7 border border-primary/5 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_24px_-4px_rgba(0,0,0,0.2)] hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 relative group snap-start flex-shrink-0"
                  style={{ width: "min(280px, 80vw)" }}
                >
                  {/* Step connector line (except last) */}
                  {idx < steps.length - 1 && (
                    <div className="hidden sm:block absolute top-1/2 -right-[14px] w-[28px] h-[2px] bg-primary/10 z-0" />
                  )}

                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 bg-primary/5 rounded-2xl text-primary group-hover:scale-110 transition-transform duration-300">
                      <Icon size={22} />
                    </div>
                    <span className="font-serif italic text-3xl text-secondary/30 font-light select-none">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-sans text-base sm:text-lg font-semibold text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-secondary leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Hide scrollbar */}
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default HowIWork;

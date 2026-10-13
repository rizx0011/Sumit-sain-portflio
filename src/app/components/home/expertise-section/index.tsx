"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { 
  Sparkles, 
  Layers, 
  Zap, 
  ShieldCheck, 
  Cpu, 
  ChevronLeft, 
  ChevronRight,
  Code2,
  CheckCircle2,
  TrendingUp
} from "lucide-react";

interface TechItem {
  id: string;
  name: string;
  category: "frontend" | "backend" | "database" | "tools";
  level: "Core Stack" | "Production Ready" | "Proficient" | "Specialized";
  tagline: string;
  logo: string;
  experience: string;
}

const techItems: TechItem[] = [
  {
    id: "nextjs",
    name: "Next.js 15",
    category: "frontend",
    level: "Core Stack",
    tagline: "App Router, SSR, SSG & Turbopack",
    logo: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
    experience: "Primary Framework"
  },
  {
    id: "react",
    name: "React.js",
    category: "frontend",
    level: "Core Stack",
    tagline: "Hooks, State Architecture & High-Performance UI",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    experience: "2+ Years Hands-on"
  },
  {
    id: "typescript",
    name: "JavaScript / ES6+",
    category: "frontend",
    level: "Production Ready",
    tagline: "Modern Asynchronous & Type-Safe Coding",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    experience: "Daily Driver"
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "frontend",
    level: "Core Stack",
    tagline: "Custom Design Tokens, Responsive & Fluid Grids",
    logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    experience: "Design Systems"
  },
  {
    id: "wordpress",
    name: "WordPress / PHP",
    category: "tools",
    level: "Specialized",
    tagline: "Custom Themes, ACF Pro, WooCommerce & Speed Tuning",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/wordpress/wordpress-plain.svg",
    experience: "Agency Production"
  },
  {
    id: "nodejs",
    name: "Node.js & Express",
    category: "backend",
    level: "Production Ready",
    tagline: "RESTful Endpoints, Auth Pipelines & Middleware",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
    experience: "Backend Services"
  },
  {
    id: "database",
    name: "MySQL & MongoDB",
    category: "database",
    level: "Production Ready",
    tagline: "Schema Design, Relational & NoSQL Storage",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
    experience: "Data Architecture"
  },
  {
    id: "git",
    name: "Git & GitHub",
    category: "tools",
    level: "Production Ready",
    tagline: "Branching Strategy, Versioning & CI/CD Deploys",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
    experience: "Version Control"
  },
  {
    id: "ai-flow",
    name: "Antigravity & AI",
    category: "tools",
    level: "Specialized",
    tagline: "Agentic AI Coding, Rapid Prototyping & Automation",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/google/google-original.svg",
    experience: "Next-Gen Tooling"
  }
];

const categoryLabels: Record<string, string> = {
  all: "All Tech",
  frontend: "Frontend & UI",
  backend: "Backend & APIs",
  database: "Databases",
  tools: "WordPress & Tools"
};

const badgeColors: Record<string, string> = {
  "Core Stack": "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  "Production Ready": "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  "Specialized": "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
  "Proficient": "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20"
};

const ExpertiseSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // 120fps Mouse Drag-to-Scroll state
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const filteredItems = activeCategory === "all" 
    ? techItems 
    : techItems.filter(item => item.category === activeCategory);

  const updateScrollBounds = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    updateScrollBounds();
    el.addEventListener("scroll", updateScrollBounds, { passive: true });
    window.addEventListener("resize", updateScrollBounds);
    return () => {
      el.removeEventListener("scroll", updateScrollBounds);
      window.removeEventListener("resize", updateScrollBounds);
    };
  }, [filteredItems]);

  const handleMouseDown = (e: React.MouseEvent) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    setIsDragging(true);
    setStartX(e.pageX - el.offsetLeft);
    setScrollLeftPos(el.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const el = scrollContainerRef.current;
    if (!el) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX) * 1.5;
    el.scrollLeft = scrollLeftPos - walk;
  };

  const stopDragging = () => setIsDragging(false);

  const handleScroll = (dir: "left" | "right") => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const card = el.querySelector(".tech-card") as HTMLElement | null;
    const scrollAmount = card ? card.offsetWidth + 20 : 320;
    el.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth"
    });
  };

  return (
    <section id="expertise" className="py-8 md:py-14">
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-7">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div className="flex flex-col gap-2">
              <div className="inline-flex items-center gap-2 font-jost uppercase tracking-[3px] text-xs sm:text-sm font-semibold text-secondary/60">
                <Code2 size={14} className="text-primary/70" />
                <span>Technologies &amp; Capabilities</span>
              </div>
              <h2 className="font-instrument text-2xl sm:text-3xl md:text-4xl text-primary font-normal leading-tight">
                Technical <span className="font-serif italic text-primary">Mastery</span> &amp; Stack
              </h2>
              <p className="font-inter text-sm sm:text-base text-secondary leading-relaxed max-w-xl">
                A modern full-stack toolkit engineered for lightning speed, clean aesthetics, and conversion-ready web products.
              </p>
            </div>

            {/* Navigation & Controls */}
            <div className="flex items-center gap-2 self-start md:self-end">
              <button
                type="button"
                onClick={() => handleScroll("left")}
                disabled={!canScrollLeft}
                aria-label="Previous technologies"
                className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-200 cursor-pointer ${
                  canScrollLeft
                    ? "border-primary/20 text-primary hover:bg-primary/5 active:scale-95"
                    : "border-primary/5 text-secondary/30 cursor-not-allowed"
                }`}
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                onClick={() => handleScroll("right")}
                disabled={!canScrollRight}
                aria-label="Next technologies"
                className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-200 cursor-pointer ${
                  canScrollRight
                    ? "border-primary/20 text-primary hover:bg-primary/5 active:scale-95"
                    : "border-primary/5 text-secondary/30 cursor-not-allowed"
                }`}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar">
            {Object.entries(categoryLabels).map(([key, label]) => {
              const isActive = activeCategory === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-jost font-semibold uppercase tracking-wider transition-all duration-200 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-sm scale-[1.02]"
                      : "bg-card border border-primary/10 text-secondary hover:text-primary hover:border-primary/25"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* ── 120FPS Smooth Horizontal Glide Carousel ── */}
          <div
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={stopDragging}
            onMouseLeave={stopDragging}
            className={`flex gap-5 overflow-x-auto pb-6 scroll-smooth snap-x snap-mandatory ${
              isDragging ? "cursor-grabbing select-none" : "cursor-grab"
            }`}
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
              willChange: "scroll-position, transform"
            }}
          >
            {filteredItems.map((tech) => (
              <div
                key={tech.id}
                className="tech-card group flex-shrink-0 snap-start bg-card rounded-2xl p-6 border border-primary/5 hover:border-primary/20 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                style={{ width: "min(310px, 82vw)" }}
              >
                <div>
                  {/* Card Header: Icon & Level */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-13 h-13 rounded-xl bg-primary/5 border border-primary/5 flex items-center justify-center p-2.5 transition-transform duration-300 group-hover:scale-110">
                      <Image
                        src={tech.logo}
                        alt={tech.name}
                        width={36}
                        height={36}
                        className="w-full h-full object-contain filter drop-shadow-sm"
                      />
                    </div>
                    
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-jost font-bold uppercase tracking-wider border ${badgeColors[tech.level]}`}>
                      {tech.level}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-instrument text-xl font-normal text-primary mb-1.5 group-hover:text-blue-500 transition-colors">
                    {tech.name}
                  </h3>
                  <p className="font-inter text-xs sm:text-sm text-secondary leading-relaxed mb-4">
                    {tech.tagline}
                  </p>
                </div>

                {/* Footer Tag */}
                <div className="pt-3 border-t border-primary/5 flex items-center justify-between text-[11px] font-jost text-secondary/70">
                  <span className="flex items-center gap-1 text-primary/80 font-semibold">
                    <CheckCircle2 size={12} className="text-emerald-500" />
                    {tech.experience}
                  </span>
                  <span className="uppercase tracking-wider opacity-60">Verified Skill</span>
                </div>
              </div>
            ))}
          </div>

          {/* ── Aesthetic Architecture Bento Highlights (2 Cards) ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
            
            {/* Card 1: Architectural Standards */}
            <div className="rounded-2xl p-6 sm:p-7 bg-card border border-primary/5 shadow-sm hover:border-primary/15 transition-all">
              <div className="flex items-center gap-2.5 text-xs font-jost uppercase tracking-[2px] font-semibold text-secondary/70 mb-3">
                <Zap size={14} className="text-amber-500" />
                <span>Performance Architecture</span>
              </div>
              <h4 className="font-instrument text-xl sm:text-2xl text-primary font-normal mb-2">
                Built for 95+ PageSpeed &amp; SEO
              </h4>
              <p className="font-inter text-xs sm:text-sm text-secondary leading-relaxed mb-5">
                Every website is crafted with zero layout shifts, optimized media pipelines, structured JSON-LD schemas, and sub-second load times.
              </p>
              
              <div className="grid grid-cols-3 gap-3 pt-3 border-t border-primary/5 text-center">
                <div className="p-2.5 rounded-xl bg-primary/3">
                  <div className="font-instrument text-lg text-primary">&lt;0.8s</div>
                  <div className="font-jost text-[10px] uppercase text-secondary/70 tracking-wider">LCP Render</div>
                </div>
                <div className="p-2.5 rounded-xl bg-primary/3">
                  <div className="font-instrument text-lg text-primary">100%</div>
                  <div className="font-jost text-[10px] uppercase text-secondary/70 tracking-wider">Mobile First</div>
                </div>
                <div className="p-2.5 rounded-xl bg-primary/3">
                  <div className="font-instrument text-lg text-primary">100/100</div>
                  <div className="font-jost text-[10px] uppercase text-secondary/70 tracking-wider">SEO Score</div>
                </div>
              </div>
            </div>

            {/* Card 2: Agency & Production Workflow */}
            <div className="rounded-2xl p-6 sm:p-7 bg-card border border-primary/5 shadow-sm hover:border-primary/15 transition-all">
              <div className="flex items-center gap-2.5 text-xs font-jost uppercase tracking-[2px] font-semibold text-secondary/70 mb-3">
                <TrendingUp size={14} className="text-blue-500" />
                <span>Client &amp; Agency Standards</span>
              </div>
              <h4 className="font-instrument text-xl sm:text-2xl text-primary font-normal mb-2">
                Proven ZENVIQ Agency Experience
              </h4>
              <p className="font-inter text-xs sm:text-sm text-secondary leading-relaxed mb-5">
                Combining custom WordPress themes with Next.js high-speed apps, delivering solutions for restaurants, salons, and digital brands.
              </p>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-primary/5">
                <span className="font-jost text-xs px-3 py-1 rounded-full bg-primary/5 text-primary/80 font-medium">
                  Custom WordPress Themes
                </span>
                <span className="font-jost text-xs px-3 py-1 rounded-full bg-primary/5 text-primary/80 font-medium">
                  Headless Next.js
                </span>
                <span className="font-jost text-xs px-3 py-1 rounded-full bg-primary/5 text-primary/80 font-medium">
                  RESTful APIs
                </span>
                <span className="font-jost text-xs px-3 py-1 rounded-full bg-primary/5 text-primary/80 font-medium">
                  Agentic AI Workflows
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;

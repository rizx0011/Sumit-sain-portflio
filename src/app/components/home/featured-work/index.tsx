"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useMemo } from "react";
import { FeaturedWorkItem } from "@/types";

const techBadgeInfo: Record<string, { bg: string; label: string; icon?: React.ReactNode }> = {
    "Next.js": {
        bg: "#000000",
        label: "Next.js",
        icon: (
            <svg width="12" height="12" viewBox="0 0 180 180" fill="none">
                <mask id="next-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
                    <circle cx="90" cy="90" r="90" fill="black" />
                </mask>
                <g mask="url(#next-mask)">
                    <circle cx="90" cy="90" r="90" fill="black" />
                    <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="white" />
                    <rect x="115" y="54" width="12" height="72" fill="white" />
                </g>
            </svg>
        )
    },
    "TypeScript": {
        bg: "#3178C6",
        label: "TypeScript",
        icon: (
            <span className="font-bold text-[8.5px] tracking-tighter text-white font-mono leading-none">TS</span>
        )
    },
    "Tailwind CSS": {
        bg: "#0ea5e9",
        label: "Tailwind CSS",
        icon: (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
            </svg>
        )
    },
    "Framer Motion": {
        bg: "#ff0055",
        label: "Framer Motion",
        icon: (
            <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
            </svg>
        )
    },
    "Python": {
        bg: "#1e415f",
        label: "Python",
        icon: (
            <span className="font-bold text-[8.5px] tracking-tighter text-[#ffd43b] font-mono leading-none">Py</span>
        )
    },
    "Django": {
        bg: "#092e20",
        label: "Django",
        icon: (
            <span className="font-bold text-[8.5px] tracking-tighter text-[#44b78b] font-mono leading-none">Dj</span>
        )
    },
    "Gemini AI": {
        bg: "#7c3aed",
        label: "Gemini AI",
        icon: (
            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                <path d="M12 0C12 6.627 6.627 12 0 12c6.627 0 12 5.627 12 12 0-6.627 5.627-12 12-12-6.627 0-12-5.627-12-12z" />
            </svg>
        )
    },
    "AI Integration": {
        bg: "#f59e0b",
        label: "AI",
        icon: (
            <span className="font-bold text-[8.5px] tracking-tighter text-white font-mono leading-none">AI</span>
        )
    }
};

interface FeaturedWorkProps {
    showBackButton?: boolean;
    initialLimit?: number;
}

const FeaturedWork = ({ showBackButton = false, initialLimit }: FeaturedWorkProps) => {
    const [featureWork, setFeatureWork] = useState<FeaturedWorkItem[] | null>(null);
    const [activeCategory, setActiveCategory] = useState<string>("All");
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/featured-work');
                if (!res.ok) throw new Error('Failed to fetch');
                const data = await res.json();
                setFeatureWork(data?.featureWork || []);
            } catch (error) {
                console.error('Error fetching featured work:', error);
            }
        };
        fetchData();
    }, []);

    // Extract unique categories
    const categories = useMemo<string[]>(() => {
        if (!featureWork) return ["All"];
        const cats = Array.from(new Set(featureWork.map(p => p.category).filter((c): c is string => Boolean(c))));
        return ["All", ...cats];
    }, [featureWork]);

    // Filter projects by category
    const filteredProjects = useMemo(() => {
        if (!featureWork) return [];
        if (activeCategory === "All") return featureWork;
        return featureWork.filter(p => p.category === activeCategory);
    }, [featureWork, activeCategory]);

    // Apply 4-project limit on homepage unless expanded or specific category selected
    const shouldLimit = initialLimit && !isExpanded && activeCategory === "All" && filteredProjects.length > initialLimit;
    const displayedProjects = shouldLimit ? filteredProjects.slice(0, initialLimit) : filteredProjects;
    const remainingCount = featureWork ? Math.max(0, featureWork.length - (initialLimit || 4)) : 2;

    return (
        <section id="work" className="featured-work-section">
            {/* Anchor tag for #projects navigation */}
            <div id="projects" className="projects-anchor" />

            <div className="container">
                <div className="featured-work-inner">
                    {/* Optional Back to Home link (used on /work page) */}
                    {showBackButton && (
                        <div className="back-link-wrapper">
                            <Link href="/" className="back-to-home-link">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m15 18-6-6 6-6"/>
                                </svg>
                                <span>Back to Home</span>
                            </Link>
                        </div>
                    )}

                    {/* Section Header */}
                    <div className="featured-work-header">
                        <div className="featured-work-label">
                            <span className="label-dot"></span>
                            <span className="label-text">PORTFOLIO ARCHIVE</span>
                        </div>
                        
                        <div className="featured-work-title-row">
                            <h2 className="featured-work-heading">
                                <em className="heading-italic">All</em>{" "}
                                <span className="heading-regular">Projects</span>
                            </h2>
                            <div className="total-works">
                                <span className="total-works-label">TOTAL WORKS</span>
                                <span className="total-works-number">
                                    {featureWork ? String(featureWork.length).padStart(2, '0') : '06'}
                                </span>
                            </div>
                        </div>

                        <p className="featured-work-desc">
                            A curated collection of shipping web applications, experiments, and digital craftsmanship.
                        </p>

                        {/* Category Filter Pills */}
                        <div className="category-filters" role="tablist" aria-label="Filter projects by category">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    type="button"
                                    role="tab"
                                    aria-selected={activeCategory === cat}
                                    onClick={() => {
                                        setActiveCategory(cat);
                                        // Auto-expand when a specific filter is clicked
                                        if (cat !== "All") setIsExpanded(true);
                                    }}
                                    className={`category-pill ${activeCategory === cat ? 'active' : ''}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Project Cards Grid (Compact & Sleek) */}
                    <div className="project-cards-grid">
                        {displayedProjects.map((project: FeaturedWorkItem, index: number) => {
                            const displayUrl = project.url ? project.url.replace(/^https?:\/\//, '').replace(/\/$/, '') : 'project.vercel.app';

                            return (
                                <div key={project.title || index} className="project-card">
                                    {/* Browser Mockup Image Frame */}
                                    <a
                                        href={project.url || "#"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-card-image-wrapper"
                                        aria-label={`Visit live site of ${project.title}`}
                                    >
                                        <div className="browser-mockup">
                                            {/* Browser Topbar */}
                                            <div className="browser-topbar">
                                                <div className="browser-dots">
                                                    <span className="dot dot-red"></span>
                                                    <span className="dot dot-yellow"></span>
                                                    <span className="dot dot-green"></span>
                                                </div>
                                                <div className="browser-url-bar">
                                                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="lock-icon">
                                                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                                                        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                                                    </svg>
                                                    <span className="url-text">{displayUrl}</span>
                                                </div>
                                            </div>

                                            {/* Browser Screen Preview */}
                                            <div className="browser-screen">
                                                <Image
                                                    src={project.image}
                                                    alt={project.title ? `${project.title} preview` : "Project preview"}
                                                    width={720}
                                                    height={450}
                                                    className="project-card-image"
                                                    priority={index < 2}
                                                />
                                            </div>
                                        </div>
                                    </a>

                                    {/* Project Meta Info */}
                                    <div className="project-card-info">
                                        <div className="project-card-meta">
                                            <div className="project-card-titles">
                                                <a
                                                    href={project.url || "#"}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="project-card-title-link"
                                                >
                                                    <h3 className="project-card-title">{project.title}</h3>
                                                </a>
                                                {project.category && (
                                                    <p className="project-card-category">{project.category}</p>
                                                )}
                                            </div>

                                            {project.url && (
                                                <a
                                                    href={project.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="project-globe-btn"
                                                    aria-label={`Open ${project.title} live link`}
                                                >
                                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                                        <circle cx="12" cy="12" r="10" />
                                                        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                                    </svg>
                                                </a>
                                            )}
                                        </div>

                                        <p className="project-card-description">{project.description}</p>

                                        {/* Tech Stack Badges */}
                                        {project.techStack && project.techStack.length > 0 && (
                                            <div className="project-tech-stack" aria-label="Technologies used">
                                                {project.techStack.map((tech, tIdx) => {
                                                    const badge = techBadgeInfo[tech];
                                                    return (
                                                        <span
                                                            key={tIdx}
                                                            className="tech-badge"
                                                            style={{ backgroundColor: badge?.bg || '#262626' }}
                                                            title={tech}
                                                        >
                                                            {badge?.icon ? badge.icon : (
                                                                <span className="font-mono text-[8px] font-bold text-white">
                                                                    {tech.slice(0, 2)}
                                                                </span>
                                                            )}
                                                        </span>
                                                    );
                                                })}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* See More Projects / View All Action */}
                    {initialLimit && (
                        <div className="see-more-container">
                            {shouldLimit ? (
                                <button
                                    type="button"
                                    onClick={() => setIsExpanded(true)}
                                    className="see-more-btn"
                                >
                                    <span>See More Projects</span>
                                    <span className="count-pill">+{remainingCount}</span>
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="chevron-icon">
                                        <path d="m6 9 6 6 6-6"/>
                                    </svg>
                                </button>
                            ) : isExpanded && (
                                <div className="expanded-actions">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setIsExpanded(false);
                                            const el = document.getElementById('work');
                                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                        className="show-less-btn"
                                    >
                                        <span>Show Less</span>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="m18 15-6-6-6 6"/>
                                        </svg>
                                    </button>
                                    <Link href="/work" className="full-archive-link">
                                        <span>Full Archive</span>
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14M12 5l7 7-7 7"/>
                                        </svg>
                                    </Link>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            <style jsx>{`
                /* Natural section styling adapting to theme */
                .featured-work-section {
                    background: transparent;
                    padding: 30px 0 50px;
                    position: relative;
                }
                .projects-anchor {
                    position: absolute;
                    top: -75px;
                    left: 0;
                    width: 1px;
                    height: 1px;
                    pointer-events: none;
                }
                .featured-work-inner {
                    max-width: 960px;
                    margin: 0 auto;
                    padding: 0 20px;
                    position: relative;
                }
                .back-link-wrapper {
                    margin-bottom: 24px;
                }
                .back-to-home-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 13px;
                    color: var(--secondary, #71717a);
                    text-decoration: none;
                    padding: 5px 12px;
                    border-radius: 9999px;
                    background: rgba(0,0,0,0.03);
                    border: 1px solid rgba(0,0,0,0.08);
                    transition: all 0.2s ease;
                }
                :global(.dark) .back-to-home-link {
                    background: rgba(255,255,255,0.04);
                    border-color: rgba(255,255,255,0.08);
                    color: #9ca3af;
                }
                .back-to-home-link:hover {
                    color: var(--primary, #09090b);
                    border-color: rgba(0,0,0,0.2);
                    transform: translateX(-2px);
                }
                :global(.dark) .back-to-home-link:hover {
                    color: #ffffff;
                    border-color: rgba(255,255,255,0.25);
                }
                .featured-work-header {
                    margin-bottom: 36px;
                }
                .featured-work-label {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    margin-bottom: 12px;
                }
                .label-dot {
                    width: 7px; height: 7px;
                    border-radius: 50%;
                    background: #3b82f6;
                    display: inline-block;
                    box-shadow: 0 0 8px rgba(59,130,246,0.6);
                }
                .label-text {
                    font-size: 11px;
                    letter-spacing: 2.5px;
                    color: var(--secondary, #71717a);
                    font-weight: 600;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                }
                .featured-work-title-row {
                    display: flex;
                    align-items: flex-end;
                    justify-content: space-between;
                    margin-bottom: 12px;
                }
                .featured-work-heading {
                    font-size: clamp(36px, 5vw, 62px);
                    font-weight: 700;
                    line-height: 1.05;
                    color: var(--primary, #09090b);
                    margin: 0;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                    letter-spacing: -0.03em;
                }
                :global(.dark) .featured-work-heading {
                    color: #ffffff;
                }
                .heading-italic {
                    font-style: italic;
                    font-weight: 400;
                    color: var(--primary, #09090b);
                    font-family: Georgia, Cambria, 'Times New Roman', Times, serif;
                }
                :global(.dark) .heading-italic {
                    color: #e5e7eb;
                }
                .heading-regular {
                    color: #888888;
                    font-weight: 600;
                }
                .total-works {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    padding-bottom: 4px;
                }
                .total-works-label {
                    font-size: 9.5px;
                    letter-spacing: 1.5px;
                    color: #999999;
                    font-weight: 600;
                }
                .total-works-number {
                    font-size: clamp(28px, 4vw, 46px);
                    font-weight: 800;
                    color: #d1d5db;
                    line-height: 1;
                    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
                }
                :global(.dark) .total-works-number {
                    color: #27272a;
                }
                .featured-work-desc {
                    font-size: 14px;
                    color: var(--secondary, #71717a);
                    max-width: 520px;
                    line-height: 1.65;
                    margin: 0 0 20px;
                }
                .category-filters {
                    display: flex;
                    gap: 6px;
                    flex-wrap: wrap;
                    margin-top: 16px;
                }
                .category-pill {
                    padding: 6px 14px;
                    font-size: 12px;
                    font-weight: 500;
                    border-radius: 9999px;
                    border: 1px solid rgba(0,0,0,0.08);
                    background: rgba(0,0,0,0.02);
                    color: var(--secondary, #71717a);
                    cursor: pointer;
                    transition: all 0.2s ease;
                }
                :global(.dark) .category-pill {
                    border-color: rgba(255,255,255,0.09);
                    background: rgba(255,255,255,0.03);
                    color: #9ca3af;
                }
                .category-pill:hover {
                    color: var(--primary, #09090b);
                    background: rgba(0,0,0,0.05);
                    border-color: rgba(0,0,0,0.15);
                }
                :global(.dark) .category-pill:hover {
                    color: #ffffff;
                    background: rgba(255,255,255,0.08);
                    border-color: rgba(255,255,255,0.2);
                }
                .category-pill.active {
                    background: var(--primary, #09090b);
                    color: var(--primary-foreground, #ffffff);
                    border-color: var(--primary, #09090b);
                    font-weight: 600;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.12);
                }
                :global(.dark) .category-pill.active {
                    background: #ffffff;
                    color: #000000;
                    border-color: #ffffff;
                    box-shadow: 0 2px 10px rgba(255,255,255,0.15);
                }

                /* Grid with slightly reduced size */
                .project-cards-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 32px 24px;
                }
                @media (max-width: 768px) {
                    .project-cards-grid { grid-template-columns: 1fr; gap: 28px; }
                    .featured-work-title-row { flex-direction: column; align-items: flex-start; gap: 6px; }
                    .total-works { align-items: flex-start; }
                }
                .project-card {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }
                .project-card-image-wrapper {
                    display: block;
                    border-radius: 16px;
                    overflow: hidden;
                    background: #ffffff;
                    padding: 10px;
                    border: 1px solid rgba(0,0,0,0.08);
                    transition: transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1),
                                border-color 0.35s ease,
                                box-shadow 0.35s ease;
                    box-shadow: 0 2px 14px rgba(0,0,0,0.04);
                    text-decoration: none;
                }
                :global(.dark) .project-card-image-wrapper {
                    background: #111113;
                    border-color: rgba(255,255,255,0.08);
                    box-shadow: 0 4px 20px rgba(0,0,0,0.4);
                }
                .project-card-image-wrapper:hover {
                    transform: translateY(-3px);
                    border-color: rgba(0,0,0,0.18);
                    box-shadow: 0 12px 30px rgba(0,0,0,0.08);
                }
                :global(.dark) .project-card-image-wrapper:hover {
                    border-color: rgba(255,255,255,0.2);
                    box-shadow: 0 16px 40px rgba(0,0,0,0.6);
                }
                .browser-mockup {
                    background: #f4f4f6;
                    border-radius: 10px;
                    overflow: hidden;
                    border: 1px solid rgba(0,0,0,0.06);
                }
                :global(.dark) .browser-mockup {
                    background: #18181b;
                    border-color: rgba(255,255,255,0.08);
                }
                .browser-topbar {
                    background: #ebebee;
                    padding: 7px 10px;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    border-bottom: 1px solid rgba(0,0,0,0.05);
                }
                :global(.dark) .browser-topbar {
                    background: #141416;
                    border-bottom-color: rgba(255,255,255,0.06);
                }
                .browser-dots {
                    display: flex;
                    gap: 4.5px;
                    flex-shrink: 0;
                }
                .dot {
                    width: 8px; height: 8px;
                    border-radius: 50%;
                }
                .dot-red { background: #ef4444; opacity: 0.85; }
                .dot-yellow { background: #f59e0b; opacity: 0.85; }
                .dot-green { background: #10b981; opacity: 0.85; }
                .browser-url-bar {
                    flex: 1;
                    background: #ffffff;
                    border: 1px solid rgba(0,0,0,0.06);
                    border-radius: 5px;
                    padding: 2.5px 7px;
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    min-width: 0;
                }
                :global(.dark) .browser-url-bar {
                    background: rgba(255,255,255,0.04);
                    border-color: rgba(255,255,255,0.06);
                }
                .lock-icon {
                    color: #9ca3af;
                    flex-shrink: 0;
                }
                .url-text {
                    font-size: 10.5px;
                    color: #71717a;
                    font-family: 'SF Mono', Menlo, Monaco, Consolas, monospace;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                :global(.dark) .url-text {
                    color: #9ca3af;
                }
                .browser-screen {
                    overflow: hidden;
                    aspect-ratio: 16/9.6;
                    background: #f9f9fb;
                    position: relative;
                }
                :global(.dark) .browser-screen {
                    background: #09090b;
                }
                .project-card-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: top center;
                    transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
                    display: block;
                }
                .project-card-image-wrapper:hover .project-card-image {
                    transform: scale(1.03);
                }
                .project-card-info {
                    padding: 2px 2px;
                    display: flex;
                    flex-direction: column;
                    gap: 6px;
                }
                .project-card-meta {
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                    gap: 10px;
                }
                .project-card-titles {
                    flex: 1;
                    min-width: 0;
                }
                .project-card-title-link {
                    text-decoration: none;
                    display: inline-block;
                }
                .project-card-title {
                    font-size: 18.5px;
                    font-weight: 500;
                    font-style: italic;
                    color: var(--primary, #09090b);
                    margin: 0 0 2px;
                    font-family: Georgia, Cambria, 'Times New Roman', Times, serif;
                    line-height: 1.25;
                    transition: color 0.2s ease;
                }
                :global(.dark) .project-card-title {
                    color: #ffffff;
                }
                .project-card-title-link:hover .project-card-title {
                    color: #3b82f6;
                }
                .project-card-category {
                    font-size: 12px;
                    color: var(--secondary, #71717a);
                    margin: 0;
                    font-weight: 400;
                }
                .project-globe-btn {
                    width: 29px; height: 29px;
                    border-radius: 50%;
                    border: 1px solid rgba(0,0,0,0.1);
                    background: rgba(0,0,0,0.02);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--secondary, #71717a);
                    flex-shrink: 0;
                    transition: all 0.2s ease;
                    text-decoration: none;
                }
                :global(.dark) .project-globe-btn {
                    border-color: rgba(255,255,255,0.1);
                    background: rgba(255,255,255,0.04);
                    color: #9ca3af;
                }
                .project-globe-btn:hover {
                    border-color: rgba(0,0,0,0.25);
                    background: rgba(0,0,0,0.06);
                    color: var(--primary, #09090b);
                    transform: scale(1.08);
                }
                :global(.dark) .project-globe-btn:hover {
                    border-color: rgba(255,255,255,0.3);
                    background: rgba(255,255,255,0.1);
                    color: #ffffff;
                }
                .project-card-description {
                    font-size: 13px;
                    color: var(--secondary, #71717a);
                    line-height: 1.55;
                    margin: 0;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                .project-tech-stack {
                    display: flex;
                    gap: 5px;
                    flex-wrap: wrap;
                    align-items: center;
                    margin-top: 2px;
                }
                .tech-badge {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 23px; height: 23px;
                    border-radius: 50%;
                    border: 1px solid rgba(0,0,0,0.1);
                    box-shadow: 0 1px 2px rgba(0,0,0,0.06);
                    transition: transform 0.2s ease, border-color 0.2s ease;
                    cursor: default;
                }
                :global(.dark) .tech-badge {
                    border-color: rgba(255,255,255,0.14);
                    box-shadow: 0 1px 3px rgba(0,0,0,0.3);
                }
                .tech-badge:hover {
                    transform: scale(1.15);
                }

                /* See more button styling */
                .see-more-container {
                    margin-top: 40px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .see-more-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 10px 22px;
                    border-radius: 9999px;
                    background: #ffffff;
                    color: var(--primary, #09090b);
                    border: 1px solid rgba(0,0,0,0.1);
                    font-size: 13px;
                    font-weight: 500;
                    cursor: pointer;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.04);
                    transition: all 0.25s ease;
                }
                :global(.dark) .see-more-btn {
                    background: #18181b;
                    color: #ffffff;
                    border-color: rgba(255,255,255,0.12);
                    box-shadow: 0 2px 10px rgba(0,0,0,0.3);
                }
                .see-more-btn:hover {
                    transform: translateY(-1.5px);
                    box-shadow: 0 6px 18px rgba(0,0,0,0.08);
                    border-color: rgba(0,0,0,0.2);
                }
                :global(.dark) .see-more-btn:hover {
                    border-color: rgba(255,255,255,0.25);
                    box-shadow: 0 6px 18px rgba(0,0,0,0.5);
                }
                .count-pill {
                    background: rgba(59,130,246,0.1);
                    color: #2563eb;
                    font-size: 11px;
                    font-weight: 600;
                    padding: 1px 7px;
                    border-radius: 9999px;
                }
                :global(.dark) .count-pill {
                    background: rgba(59,130,246,0.2);
                    color: #60a5fa;
                }
                .chevron-icon {
                    transition: transform 0.2s ease;
                }
                .see-more-btn:hover .chevron-icon {
                    transform: translateY(1.5px);
                }
                .expanded-actions {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }
                .show-less-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    padding: 8px 18px;
                    border-radius: 9999px;
                    background: rgba(0,0,0,0.03);
                    color: var(--secondary, #71717a);
                    border: 1px solid rgba(0,0,0,0.08);
                    font-size: 12.5px;
                    font-weight: 500;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }
                :global(.dark) .show-less-btn {
                    background: rgba(255,255,255,0.04);
                    color: #9ca3af;
                    border-color: rgba(255,255,255,0.08);
                }
                .show-less-btn:hover {
                    color: var(--primary, #09090b);
                    border-color: rgba(0,0,0,0.18);
                }
                :global(.dark) .show-less-btn:hover {
                    color: #ffffff;
                    border-color: rgba(255,255,255,0.2);
                }
                .full-archive-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    padding: 8px 18px;
                    border-radius: 9999px;
                    background: var(--primary, #09090b);
                    color: var(--primary-foreground, #ffffff);
                    font-size: 12.5px;
                    font-weight: 500;
                    text-decoration: none;
                    transition: all 0.2s ease;
                }
                :global(.dark) .full-archive-link {
                    background: #ffffff;
                    color: #000000;
                }
                .full-archive-link:hover {
                    opacity: 0.9;
                    transform: translateX(2px);
                }
            `}</style>
        </section>
    );
};

export default FeaturedWork;
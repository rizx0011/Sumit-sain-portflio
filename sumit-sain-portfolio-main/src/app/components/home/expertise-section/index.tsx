"use client";
import React, { useState, useEffect } from "react";
import { Layout, Server, Database, Globe, ChevronLeft, ChevronRight } from "lucide-react";

const expertiseData = [
    {
        title: "Frontend Development",
        level: 90,
        icon: Layout,
        technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"]
    },
    {
        title: "Backend Development",
        level: 60,
        icon: Server,
        technologies: ["Node.js", "Express", "MongoDB", "Rest API"]
    },
    {
        title: "WordPress Expert",
        level: 80,
        icon: Globe,
        technologies: ["PHP", "Theme Customization", "Elementor", "Plugins"]
    },
    {
        title: "Database Management",
        level: 70,
        icon: Database,
        technologies: ["PostgreSQL", "MySQL", "Redis", "Prisma"]
    }
];

const ExpertiseSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const nextCard = () => {
        setCurrentIndex((prev) => (prev + 1) % expertiseData.length);
    };

    const prevCard = () => {
        setCurrentIndex((prev) => (prev - 1 + expertiseData.length) % expertiseData.length);
    };

    const handleInteraction = () => {
        setIsPaused(true);
    };

    useEffect(() => {
        if (isPaused) {
            const timeout = setTimeout(() => setIsPaused(false), 5000);
            return () => clearTimeout(timeout);
        }

        const interval = setInterval(nextCard, 2000);
        return () => clearInterval(interval);
    }, [isPaused]);

    const item = expertiseData[currentIndex];
    const IconComponent = item.icon;

    return (
        <section>
            <div className="container relative z-10">
                <div className="max-w-2xl mx-auto">
                    {/* Header */}
                    <div className="flex flex-col gap-2 mb-10 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <p className="text-sm tracking-[2px] text-primary uppercase font-bold">Core Expertises</p>
                    </div>

                    {/* Carousel Container */}
                    <div className="relative group px-4 sm:px-12">
                        {/* Navigation Buttons */}
                        <button
                            onClick={() => { prevCard(); handleInteraction(); }}
                            className="absolute left-[-10px] top-1/2 -translate-y-1/2 p-2 bg-card shadow-lg rounded-full z-20 hover:bg-primary hover:text-primary-foreground transition-all duration-300 opacity-0 group-hover:opacity-100 sm:opacity-100"
                        >
                            <ChevronLeft size={24} />
                        </button>

                        <button
                            onClick={() => { nextCard(); handleInteraction(); }}
                            className="absolute right-[-10px] top-1/2 -translate-y-1/2 p-2 bg-card shadow-lg rounded-full z-20 hover:bg-primary hover:text-primary-foreground transition-all duration-300 opacity-0 group-hover:opacity-100 sm:opacity-100"
                        >
                            <ChevronRight size={24} />
                        </button>

                        {/* Card */}
                        <div
                            className="bg-card rounded-2xl p-6 sm:p-8 border border-primary/5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] transition-all duration-500 hover:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.08)] cursor-pointer active:scale-[0.99] animate-in fade-in zoom-in-95"
                            key={currentIndex}
                            onClick={handleInteraction}
                            onMouseDown={handleInteraction}
                            onTouchStart={handleInteraction}
                        >
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
                                <div className="p-4 bg-primary/5 rounded-xl text-primary">
                                    <IconComponent size={28} />
                                </div>
                                <div className="text-center sm:text-left flex-1">
                                    <div className="flex flex-wrap items-center justify-center sm:justify-between gap-4 mb-2">
                                        <h3 className="text-lg sm:text-2xl font-bold text-primary">{item.title}</h3>
                                        <span className="text-2xl font-bold text-primary">{item.level}%</span>
                                    </div>
                                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mt-3">
                                        {item.technologies.map((tech, tIndex) => (
                                            <span key={tIndex} className="text-xs font-semibold text-secondary bg-primary/5 px-3 py-1 rounded-full border border-primary/5">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Progress Bar Container */}
                            <div className="w-full bg-primary/5 h-3 rounded-full overflow-hidden p-0.5 shadow-inner">
                                <div
                                    className="h-full bg-primary rounded-full transition-all duration-1000 ease-out shadow-[0_0_12px_rgba(0,0,0,0.1)]"
                                    style={{ width: `${item.level}%` }}
                                />
                            </div>

                            {/* Slide Indicators */}
                            <div className="flex justify-center gap-2 mt-10">
                                {expertiseData.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={(e) => { e.stopPropagation(); setCurrentIndex(i); handleInteraction(); }}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-primary w-6' : 'bg-primary/20'}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExpertiseSection;

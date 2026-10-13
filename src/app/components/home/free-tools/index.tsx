"use client";
import Link from "next/link";
import { ArrowRight, Sparkles, LayoutGrid, Palette, Code, Cpu } from "lucide-react";

const FreeTools = () => {
    return (
        <section id="tools">
            <div className="container relative z-10">
                <div className="max-w-5xl mx-auto px-4 sm:px-7">
                    <div className="relative overflow-hidden rounded-[2rem] bg-card border border-primary/5 shadow-lg sm:p-14 p-8">
                        {/* Background glows (optimized) */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.08) 0%, transparent 70%)' }} />
                        
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 sm:gap-12 relative z-10">
                            <div className="flex-1 text-center lg:text-left">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-6 border border-blue-500/20">
                                    <Sparkles size={14} />
                                    <span>Curated Collection</span>
                                </div>
                                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-primary tracking-tight font-instrument mb-6" style={{ fontFamily: "Georgia, serif" }}>
                                    Free AI Tools
                                </h2>
                                <p className="text-secondary leading-relaxed font-medium text-[15px] sm:text-lg max-w-xl mx-auto lg:mx-0">
                                    Discover my hand-picked collection of the best free AI tools for productivity, design, coding, and web building. Carefully categorized for your workflow.
                                </p>
                                <div className="pt-8">
                                    <Link href="/tools" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-full hover:scale-105 transition-transform shadow-lg shadow-primary/20">
                                        Explore all tools <ArrowRight size={20} />
                                    </Link>
                                </div>
                            </div>

                            {/* Floating elements / Icons on the right */}
                            <div className="flex-1 relative w-full h-[260px] sm:h-[300px] flex items-center justify-center mt-4 lg:mt-0">
                                <div className="relative w-[260px] h-[260px] sm:w-[300px] sm:h-[300px]">
                                    {/* Central Hub */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 bg-card rounded-2xl border border-primary/10 shadow-2xl flex items-center justify-center z-20">
                                        <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500" />
                                    </div>
                                    {/* Orbiting Icons */}
                                    <div className="absolute top-[8%] left-[8%] sm:top-[10%] sm:left-[10%] w-12 h-12 sm:w-14 sm:h-14 bg-card rounded-xl border border-primary/10 shadow-xl flex items-center justify-center animate-bounce" style={{ animationDuration: '3s' }}>
                                        <LayoutGrid className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />
                                    </div>
                                    <div className="absolute bottom-[8%] right-[8%] sm:bottom-[10%] sm:right-[10%] w-12 h-12 sm:w-14 sm:h-14 bg-card rounded-xl border border-primary/10 shadow-xl flex items-center justify-center animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                                        <Palette className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500" />
                                    </div>
                                    <div className="absolute top-[12%] right-[8%] sm:top-[15%] sm:right-[10%] w-12 h-12 sm:w-14 sm:h-14 bg-card rounded-xl border border-primary/10 shadow-xl flex items-center justify-center animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>
                                        <Code className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500" />
                                    </div>
                                    <div className="absolute bottom-[16%] left-[4%] sm:bottom-[20%] sm:left-[5%] w-12 h-12 sm:w-14 sm:h-14 bg-card rounded-xl border border-primary/10 shadow-xl flex items-center justify-center animate-bounce" style={{ animationDuration: '4.5s', animationDelay: '1.5s' }}>
                                        <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500" />
                                    </div>
                                    {/* Connection lines (decorative) */}
                                    <div className="absolute inset-0 rounded-full border border-primary/5 scale-75" />
                                    <div className="absolute inset-0 rounded-full border border-primary/5 border-dashed scale-100 animate-spin" style={{ animationDuration: '20s' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FreeTools;

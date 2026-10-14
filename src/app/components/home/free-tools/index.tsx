"use client";
import Link from "next/link";
import { ArrowRight, Sparkles, LayoutGrid, Palette, Code, Cpu } from "lucide-react";

const FreeTools = () => {
    return (
        <section id="tools" className="py-6 md:py-10">
            <div className="container relative z-10">
                <div className="max-w-[860px] mx-auto">
                    <div className="relative overflow-hidden rounded-3xl bg-card border border-primary/5 shadow-[0_8px_32px_-4px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_32px_-4px_rgba(0,0,0,0.3)] sm:p-12 p-6">
                        {/* Background glows (optimized) */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.08) 0%, transparent 70%)' }} />
                        
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 sm:gap-12 relative z-10">
                            <div className="flex-1 text-center lg:text-left">
                                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-sans font-semibold mb-5 border border-blue-500/20">
                                    <Sparkles size={14} />
                                    <span>Curated Collection</span>
                                </div>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-primary tracking-tight font-normal mb-3">
                                    Free AI Tools
                                </h2>
                                <span className="block w-10 h-[2px] bg-primary/20 rounded-full mb-4 mx-auto lg:mx-0" />
                                <p className="font-sans text-secondary leading-relaxed font-normal text-sm sm:text-base max-w-xl mx-auto lg:mx-0">
                                    Discover my hand-picked collection of the best free AI tools for productivity, design, coding, and web building. Carefully categorized for your workflow.
                                </p>
                                <div className="pt-6">
                                    <Link href="/tools" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-sans text-xs sm:text-sm font-semibold uppercase tracking-wider px-7 py-3.5 rounded-full hover:opacity-90 hover:scale-[1.02] transition-all shadow-sm hover:shadow-md min-h-[44px]">
                                        <span>Explore all tools</span>
                                        <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>

                            {/* Floating elements / Icons on the right */}
                            <div className="flex-1 relative w-full h-[240px] sm:h-[280px] flex items-center justify-center mt-2 lg:mt-0">
                                <div className="relative w-[240px] h-[240px] sm:w-[280px] sm:h-[280px]">
                                    {/* Central Hub */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-22 sm:h-22 bg-card rounded-2xl border border-primary/10 shadow-2xl flex items-center justify-center z-20">
                                        <Sparkles className="w-8 h-8 sm:w-9 sm:h-9 text-blue-500" />
                                    </div>
                                    {/* Orbiting Icons */}
                                    <div className="absolute top-[8%] left-[8%] sm:top-[10%] sm:left-[10%] w-12 h-12 sm:w-13 sm:h-13 bg-card rounded-xl border border-primary/10 shadow-lg flex items-center justify-center animate-bounce" style={{ animationDuration: '3s' }}>
                                        <LayoutGrid className="w-5 h-5 text-yellow-500" />
                                    </div>
                                    <div className="absolute bottom-[8%] right-[8%] sm:bottom-[10%] sm:right-[10%] w-12 h-12 sm:w-13 sm:h-13 bg-card rounded-xl border border-primary/10 shadow-lg flex items-center justify-center animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                                        <Palette className="w-5 h-5 text-pink-500" />
                                    </div>
                                    <div className="absolute top-[12%] right-[8%] sm:top-[15%] sm:right-[10%] w-12 h-12 sm:w-13 sm:h-13 bg-card rounded-xl border border-primary/10 shadow-lg flex items-center justify-center animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>
                                        <Code className="w-5 h-5 text-purple-500" />
                                    </div>
                                    <div className="absolute bottom-[16%] left-[4%] sm:bottom-[20%] sm:left-[5%] w-12 h-12 sm:w-13 sm:h-13 bg-card rounded-xl border border-primary/10 shadow-lg flex items-center justify-center animate-bounce" style={{ animationDuration: '4.5s', animationDelay: '1.5s' }}>
                                        <Cpu className="w-5 h-5 text-emerald-500" />
                                    </div>
                                    {/* Connection lines */}
                                    <div className="absolute inset-0 rounded-full border border-primary/5 scale-75" />
                                    <div className="absolute inset-0 rounded-full border border-primary/5 border-dashed scale-100 animate-spin" style={{ animationDuration: '24s' }} />
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

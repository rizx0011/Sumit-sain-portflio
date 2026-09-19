"use client";
import Link from "next/link";
import { ArrowRight, Sparkles, LayoutGrid, Palette, Code, Cpu } from "lucide-react";

const FreeTools = () => {
    return (
        <section id="tools">
            <div className="container relative z-10">
                <div className="relative overflow-hidden rounded-[2rem] bg-card border border-primary/5 shadow-lg sm:p-14 p-8">
                    {/* Background glows (optimized) */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.08) 0%, transparent 70%)' }} />
                    
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
                        <div className="flex-1 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-6 border border-blue-500/20">
                                <Sparkles size={14} />
                                <span>Curated Collection</span>
                            </div>
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-primary tracking-tight font-instrument mb-6" style={{ fontFamily: "Georgia, serif" }}>
                                Free AI Tools
                            </h2>
                            <p className="text-secondary leading-relaxed font-medium text-[15px] sm:text-lg max-w-xl mx-auto lg:mx-0">
                                Discover our hand-picked collection of the best free AI tools for productivity, design, coding, and web building. Carefully categorized for your workflow.
                            </p>
                            <div className="pt-8">
                                <Link href="/tools" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-full hover:scale-105 transition-transform shadow-lg shadow-primary/20">
                                    Explore all tools <ArrowRight size={20} />
                                </Link>
                            </div>
                        </div>

                        {/* Floating elements / Icons on the right */}
                        <div className="flex-1 relative w-full h-[300px] hidden md:flex items-center justify-center">
                            <div className="relative w-[300px] h-[300px]">
                                {/* Central Hub */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-card rounded-2xl border border-primary/10 shadow-2xl flex items-center justify-center z-20">
                                    <Sparkles size={40} className="text-blue-500" />
                                </div>
                                {/* Orbiting Icons */}
                                <div className="absolute top-[10%] left-[10%] w-14 h-14 bg-card rounded-xl border border-primary/10 shadow-xl flex items-center justify-center animate-bounce" style={{ animationDuration: '3s' }}>
                                    <LayoutGrid className="text-yellow-500" />
                                </div>
                                <div className="absolute bottom-[10%] right-[10%] w-14 h-14 bg-card rounded-xl border border-primary/10 shadow-xl flex items-center justify-center animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                                    <Palette className="text-pink-500" />
                                </div>
                                <div className="absolute top-[15%] right-[10%] w-14 h-14 bg-card rounded-xl border border-primary/10 shadow-xl flex items-center justify-center animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>
                                    <Code className="text-purple-500" />
                                </div>
                                <div className="absolute bottom-[20%] left-[5%] w-14 h-14 bg-card rounded-xl border border-primary/10 shadow-xl flex items-center justify-center animate-bounce" style={{ animationDuration: '4.5s', animationDelay: '1.5s' }}>
                                    <Cpu className="text-emerald-500" />
                                </div>
                                {/* Connection lines (decorative) */}
                                <div className="absolute inset-0 rounded-full border border-primary/5 scale-75" />
                                <div className="absolute inset-0 rounded-full border border-primary/5 border-dashed scale-100 animate-spin" style={{ animationDuration: '20s' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FreeTools;

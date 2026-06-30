"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const FreeTools = () => {
    return (
        <section>
            <div className="container">
                <div className="flex flex-col max-w-3xl mx-auto items-center justify-center gap-5 px-4 sm:px-7 py-12 md:py-16 text-center">
                    <h2 className="text-xl sm:text-3xl font-bold text-primary tracking-wide">Free Tools</h2>
                    <p className="text-secondary leading-relaxed font-medium text-sm sm:text-lg max-w-2xl">
                        10 free tools built by our team. Used by 50,000+ people every month. If you like what we build for free, imagine what we build for clients.
                    </p>
                    <div className="pt-4">
                        <Link href="/tools" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity shadow-sm">
                            Browse all tools <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FreeTools;

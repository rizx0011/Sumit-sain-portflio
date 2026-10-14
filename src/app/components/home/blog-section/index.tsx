"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Clock, Calendar, Sparkles } from "lucide-react";
import { blogPosts } from "@/app/blog/data";

const BlogSection = () => {
  return (
    <section id="blog" className="py-6 md:py-10">
      <div className="container relative z-10">
        <div className="max-w-[860px] mx-auto">
          
          <div className="rounded-3xl p-7 sm:p-10 bg-card border border-primary/10 shadow-[0_8px_32px_-4px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_32px_-4px_rgba(0,0,0,0.25)] relative overflow-hidden">
            {/* Soft decorative background glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8">
              <div className="flex flex-col gap-3 max-w-xl">
                <div className="flex items-center gap-2 font-sans uppercase tracking-[2.5px] text-xs font-semibold text-secondary/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>Articles &amp; Journal</span>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-primary font-normal leading-tight">
                  Writings &amp; <span className="italic text-primary">Tech Insights</span>
                </h2>
                <span className="block w-10 h-[2px] bg-primary/20 rounded-full" />

                <p className="font-sans text-sm sm:text-base text-secondary leading-relaxed mt-1">
                  Read stories on modern web development, full-stack frameworks, university journey, and developer workflows on the dedicated blog page.
                </p>

                <div className="flex items-center gap-4 text-xs text-secondary/80 font-sans mt-2">
                  <span className="inline-flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-blue-500" />
                    <span>6 In-Depth Articles</span>
                  </span>
                  <span>•</span>
                  <span>Free to Read</span>
                </div>
              </div>

              {/* Action Button to Blog Page */}
              <div className="flex-shrink-0">
                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center gap-2.5 font-sans text-xs sm:text-sm font-semibold uppercase tracking-[1.5px] bg-primary text-primary-foreground px-7 py-3.5 rounded-full hover:bg-primary/85 transition-all duration-200 shadow-sm min-h-[44px] group"
                >
                  <span>Explore Blog</span>
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BlogSection;

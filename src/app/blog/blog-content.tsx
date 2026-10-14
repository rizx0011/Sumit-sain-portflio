"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts, blogCategories } from './data';
import { Calendar, Clock, ChevronRight, BookOpen } from 'lucide-react';

export default function BlogHub() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <main className="min-h-screen bg-background py-20 sm:py-28 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[380px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Reduced container width: 88% max 860px */}
      <div className="w-[88%] max-w-[860px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-xs font-medium text-primary mb-4 tracking-wider uppercase">
            <BookOpen className="w-3.5 h-3.5 text-blue-500" />
            <span>Articles & Insights</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-primary tracking-tight mb-4">
            Latest Blog Posts
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mb-5" />
          <p className="text-sm sm:text-base text-secondary max-w-xl font-sans leading-relaxed">
            Thoughts, deep dives, and stories on web development, modern tech stacks, university life, and learning experiences.
          </p>
        </div>

        {/* Category Filter Pills with min-height 44px */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {blogCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`min-h-[44px] px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center justify-center ${
                activeCategory === category
                  ? "bg-primary text-background shadow-md scale-105"
                  : "bg-card/70 text-secondary hover:bg-primary/5 hover:text-primary border border-primary/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Cards Grid: 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredPosts.map((post, index) => (
            <Link 
              href={`/blog/${post.slug}`} 
              key={post.id}
              className="group flex flex-col bg-card/40 backdrop-blur-sm border border-primary/10 rounded-2xl overflow-hidden hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_10px_30px_rgba(255,255,255,0.04)] hover:-translate-y-1 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 80}ms`, animationFillMode: "both" }}
            >
              {/* Cover Image */}
              <div className="relative h-48 w-full overflow-hidden bg-primary/5">
                <Image 
                  src={post.thumbnail} 
                  alt={post.title} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-3.5 left-3.5 bg-background/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-primary border border-primary/10">
                  {post.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow">
                {/* Date & Read Time */}
                <div className="flex items-center gap-3.5 text-xs text-secondary mb-3 font-sans">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-secondary" />
                    <span>{post.date}</span>
                  </div>
                  <span className="text-primary/20">•</span>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-secondary" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-lg sm:text-xl font-serif text-primary mb-2.5 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
                
                {/* 2-line description as per PRD */}
                <p className="text-xs sm:text-sm text-secondary mb-5 line-clamp-2 leading-relaxed flex-grow font-sans">
                  {post.excerpt}
                </p>

                {/* Read More link with tap target */}
                <div className="mt-auto pt-3 border-t border-primary/5 flex items-center justify-between text-xs sm:text-sm font-semibold text-primary group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors min-h-[36px]">
                  <span>Read article</span> 
                  <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-20 text-secondary font-sans">
            No posts found in this category yet. Check back later!
          </div>
        )}
      </div>
    </main>
  );
}

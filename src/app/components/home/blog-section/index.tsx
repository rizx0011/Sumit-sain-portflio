"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Clock, Calendar, Sparkles } from "lucide-react";
import { blogPosts } from "@/app/blog/data";

const BlogSection = () => {
  // Show top 3 featured articles on the home page
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="py-8 md:py-14">
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-7">
          
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div className="flex flex-col gap-2">
              <div className="inline-flex items-center gap-2 font-jost uppercase tracking-[3px] text-xs sm:text-sm font-semibold text-secondary/60">
                <BookOpen size={14} className="text-primary/70" />
                <span>Articles &amp; Insights</span>
              </div>
              <h2 className="font-instrument text-2xl sm:text-3xl md:text-4xl text-primary font-normal leading-tight">
                Latest from the <span className="font-serif italic text-primary">Journal</span>
              </h2>
              <p className="font-inter text-sm sm:text-base text-secondary leading-relaxed max-w-xl">
                Thoughts, technical deep dives, and stories from my journey across BCA and full stack web engineering.
              </p>
            </div>

            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 font-jost text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary hover:text-primary/80 transition-colors py-2 px-4 rounded-full border border-primary/10 hover:border-primary/20 bg-card hover:bg-primary/5 self-start sm:self-end"
            >
              <span>View all posts</span>
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Grid of Articles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl bg-card border border-primary/5 hover:border-primary/20 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Thumbnail */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                  <Image
                    src={post.thumbnail}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="font-jost text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-background/90 text-primary backdrop-blur-md border border-primary/10 shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5 sm:p-6 justify-between gap-4">
                  <div className="flex flex-col gap-2.5">
                    {/* Meta Info */}
                    <div className="flex items-center gap-3 text-xs font-jost text-secondary/70">
                      <span className="inline-flex items-center gap-1">
                        <Calendar size={12} className="opacity-70" />
                        {post.date}
                      </span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1">
                        <Clock size={12} className="opacity-70" />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-instrument text-lg sm:text-xl font-normal text-primary group-hover:text-blue-500 transition-colors leading-snug line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="font-inter text-xs sm:text-sm text-secondary/80 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Read More Link */}
                  <div className="pt-2 border-t border-primary/5 flex items-center justify-between text-xs font-jost font-semibold text-primary/80 group-hover:text-primary">
                    <span className="tracking-wide">Read Article</span>
                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom Banner */}
          <div className="mt-8 rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-primary/5 via-primary/3 to-transparent border border-primary/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                <Sparkles size={20} />
              </div>
              <div>
                <p className="font-jost text-sm font-semibold text-primary">
                  Want to explore more technical writings &amp; guides?
                </p>
                <p className="font-inter text-xs text-secondary/70">
                  Read full articles on web development, BCA curriculum, and modern tools.
                </p>
              </div>
            </div>
            <Link
              href="/blog"
              className="flex-shrink-0 font-jost text-xs font-semibold uppercase tracking-wider bg-primary text-primary-foreground px-5 py-2.5 rounded-full hover:bg-primary/90 transition-all shadow-sm hover:shadow"
            >
              Browse All Articles
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BlogSection;

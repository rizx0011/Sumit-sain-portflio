import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogPosts } from "../data";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  const BASE_URL = "https://sumitsain.vercel.app";
  const canonical = `${BASE_URL}/blog/${post.slug}`;
  const description = post.excerpt.slice(0, 160);

  return {
    title: post.title,
    description,
    alternates: { canonical },
    openGraph: {
      title: post.title,
      description,
      url: canonical,
      siteName: "Sumit Sain",
      images: [{ url: post.thumbnail, width: 800, height: 450, alt: post.title }],
      type: "article",
      publishedTime: new Date(post.date).toISOString(),
      authors: ["Sumit Sain"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: [post.thumbnail],
      creator: "@sumitsxin01",
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const BASE_URL = "https://sumitsain.vercel.app";

  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.thumbnail,
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    author: {
      "@type": "Person",
      name: "Sumit Sain",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Person",
      name: "Sumit Sain",
      url: BASE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${post.slug}`,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${BASE_URL}/blog/${post.slug}` },
    ],
  };

  return (
    <main className="min-h-screen bg-background py-20 sm:py-28 relative overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-full max-w-2xl h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Clean reading container */}
      <div className="w-[90%] max-w-[720px] mx-auto px-4 relative z-10">
        {/* Back Button */}
        <div className="mb-8">
          <Button asChild variant="ghost" className="min-h-[44px] px-4 rounded-full hover:bg-primary/5 text-secondary hover:text-primary transition-colors">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-sans">
              <ArrowLeft size={16} />
              <span>Back to all articles</span>
            </Link>
          </Button>
        </div>

        {/* Article Header */}
        <header className="mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-sans text-secondary mb-5">
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
              {post.category}
            </span>
            <span className="text-primary/20">•</span>
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

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-serif text-primary tracking-tight leading-[1.25] mb-6">
            {post.title}
          </h1>

          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mb-8" />

          <div className="relative w-full h-[240px] sm:h-[360px] md:h-[400px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-primary/10 bg-primary/5">
            <Image
              src={post.thumbnail}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 720px"
              priority
            />
          </div>
        </header>

        {/* Article Content */}
        <article className="font-sans text-secondary/90 leading-[1.8] sm:leading-[1.85] text-base sm:text-lg animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="[&>h2]:text-xl [&>h2]:sm:text-2xl [&>h2]:font-serif [&>h2]:text-primary [&>h2]:mt-10 [&>h2]:mb-4 [&>h2]:tracking-tight [&>p]:mb-6 [&>p]:leading-[1.8] [&>p>code]:bg-primary/10 [&>p>code]:text-primary [&>p>code]:px-1.5 [&>p>code]:py-0.5 [&>p>code]:rounded-md [&>p>code]:text-sm"
          />
        </article>

        {/* Article Footer */}
        <div className="mt-14 pt-8 border-t border-primary/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-lg font-serif font-bold shadow-md">
              S
            </div>
            <div>
              <p className="text-sm font-bold text-primary font-serif">Sumit Sain</p>
              <p className="text-xs text-secondary font-sans">Full Stack Developer & Writer</p>
            </div>
          </div>
          <Button asChild variant="outline" className="min-h-[44px] px-6 rounded-full font-sans">
            <Link href="/blog">Browse More Articles</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}

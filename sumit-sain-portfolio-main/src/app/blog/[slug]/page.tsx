import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { blogPosts } from '../data';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background py-24 sm:py-32 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-full max-w-2xl h-[400px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container relative z-10 px-4 sm:px-6 mx-auto max-w-4xl">
        {/* Back Button */}
        <Button asChild variant="ghost" className="mb-10 rounded-full hover:bg-primary/5 text-secondary hover:text-primary transition-colors">
          <Link href="/blog" className="inline-flex items-center gap-2">
            <ArrowLeft size={16} />
            <span>Back to Blog Hub</span>
          </Link>
        </Button>

        {/* Article Header */}
        <header className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="flex items-center gap-4 text-sm font-medium text-secondary mb-6">
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">
              {post.category}
            </span>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {post.date}
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-primary tracking-tight leading-tight mb-8" style={{ fontFamily: "Georgia, serif" }}>
            {post.title}
          </h1>

          <div className="relative w-full h-[300px] sm:h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-primary/10">
            <Image
              src={post.thumbnail}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg dark:prose-invert max-w-none text-secondary animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
          <div 
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="[&>h2]:text-2xl [&>h2]:sm:text-3xl [&>h2]:font-bold [&>h2]:text-primary [&>h2]:mt-12 [&>h2]:mb-6 [&>p]:text-base [&>p]:sm:text-lg [&>p]:leading-relaxed [&>p]:mb-6 [&>p>code]:bg-primary/10 [&>p>code]:text-primary [&>p>code]:px-1.5 [&>p>code]:py-0.5 [&>p>code]:rounded-md [&>p>code]:text-sm"
          />
        </article>

        {/* Article Footer */}
        <div className="mt-16 pt-8 border-t border-primary/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xl font-serif shadow-md">
              S
            </div>
            <div>
              <p className="text-sm font-bold text-primary">Sumit Kumar</p>
              <p className="text-xs text-secondary">Author</p>
            </div>
          </div>
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/blog">Read More Articles</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}

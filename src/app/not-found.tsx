import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 py-24">
      <p className="font-sans text-xs uppercase tracking-[3px] font-semibold text-secondary/60 mb-4">404 – Page Not Found</p>
      <h1 className="font-serif italic text-5xl sm:text-6xl md:text-7xl text-primary font-normal leading-tight mb-6">
        Oops.
      </h1>
      <p className="font-sans text-base sm:text-lg text-secondary max-w-md leading-relaxed mb-10">
        This page doesn&apos;t exist. It may have been moved, renamed, or never existed in the first place.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-sans text-sm font-semibold bg-primary text-background px-6 py-3 rounded-full hover:opacity-80 transition-opacity min-h-[44px]"
        >
          Go Home
        </Link>
        <Link
          href="/work"
          className="inline-flex items-center gap-2 font-sans text-sm font-semibold border border-primary/20 text-primary px-6 py-3 rounded-full hover:bg-primary/5 transition-colors min-h-[44px]"
        >
          View My Work
        </Link>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-sans text-sm font-semibold border border-primary/20 text-primary px-6 py-3 rounded-full hover:bg-primary/5 transition-colors min-h-[44px]"
        >
          Read Blog
        </Link>
      </div>
    </main>
  );
}


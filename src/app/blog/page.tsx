import { Metadata } from "next";
import BlogContent from "./blog-content";

const BASE_URL = "https://sumitsain.vercel.app";

export const metadata: Metadata = {
  title: "Blog – Web Dev, WordPress & Tech Articles",
  description:
    "Read articles on Next.js, WordPress, Full Stack Development, and tech by Sumit Sain — Full Stack Developer from Hanumangarh, Rajasthan, India.",
  alternates: { canonical: `${BASE_URL}/blog` },
  openGraph: {
    title: "Blog by Sumit Sain – Web Dev, WordPress & Tech Articles",
    description:
      "Read articles on Next.js, WordPress, Full Stack Development, and tech by Sumit Sain — Full Stack Developer from Hanumangarh, Rajasthan, India.",
    url: `${BASE_URL}/blog`,
    siteName: "Sumit Sain",
    images: [{ url: `${BASE_URL}/images/hero-sec/sumit-profile-full.jpg`, width: 900, height: 900 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog by Sumit Sain – Web Dev, WordPress & Tech Articles",
    description:
      "Read articles on Next.js, WordPress, Full Stack Development, and tech by Sumit Sain.",
    images: [`${BASE_URL}/images/hero-sec/sumit-profile-full.jpg`],
    creator: "@sumitsxin01",
  },
};

export default function BlogPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_URL}/blog` },
    ],
  };

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Sumit Sain's Blog",
    description: "Articles on web development, WordPress, Next.js, and tech by Sumit Sain.",
    url: `${BASE_URL}/blog`,
    author: { "@type": "Person", name: "Sumit Sain", url: BASE_URL },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }} />
      <BlogContent />
    </>
  );
}

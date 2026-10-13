import { Metadata } from "next";
import BlogContent from "./blog-content";

export const metadata: Metadata = {
  title: "Blog by Sumit Sain - Web Dev, WordPress & Tech Articles",
  description:
    "Read articles on Next.js, WordPress, Full Stack Development, and the latest web technologies by Sumit Sain — Full Stack Developer from Rajasthan, India.",
  openGraph: {
    title: "Blog by Sumit Sain - Web Dev, WordPress & Tech Articles",
    description:
      "Read articles on Next.js, WordPress, Full Stack Development, and the latest web technologies by Sumit Sain.",
    url: "https://sumitsain.vercel.app/blog",
    siteName: "Sumit Sain",
    images: [
      {
        url: "https://sumitsain.vercel.app/images/hero-sec/user-img.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog by Sumit Sain - Web Dev, WordPress & Tech Articles",
    description:
      "Read articles on Next.js, WordPress, Full Stack Development, and the latest web technologies by Sumit Sain.",
    images: ["https://sumitsain.vercel.app/images/hero-sec/user-img.jpg"],
  },
};

export default function BlogPage() {
  return <BlogContent />;
}

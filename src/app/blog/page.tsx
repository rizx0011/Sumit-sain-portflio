import { Metadata } from "next";
import BlogContent from "./blog-content";

export const metadata: Metadata = {
  title: "Blog by Sumit Sain - Web Dev, WordPress & Tech Articles",
  description:
    "Read articles on Next.js, WordPress, Full Stack Development, and the latest web technologies by Sumit Sain — Full Stack Developer from Rajasthan, India.",
};

export default function BlogPage() {
  return <BlogContent />;
}

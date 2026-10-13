import { Metadata } from "next";
import ToolsContent from "./tools-content";

export const metadata: Metadata = {
  title: "Free AI Tools by Sumit Sain",
  description:
    "Discover the best free AI tools for web building, design, coding, automation, and more — curated by Sumit Sain, Full Stack Developer.",
  openGraph: {
    title: "Free AI Tools by Sumit Sain",
    description:
      "Discover the best free AI tools for web building, design, coding, automation, and more — curated by Sumit Sain, Full Stack Developer.",
    url: "https://sumitsain.vercel.app/tools",
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
    title: "Free AI Tools by Sumit Sain",
    description:
      "Discover the best free AI tools for web building, design, coding, automation, and more — curated by Sumit Sain, Full Stack Developer.",
    images: ["https://sumitsain.vercel.app/images/hero-sec/user-img.jpg"],
  },
};

export default function ToolsPage() {
  return <ToolsContent />;
}

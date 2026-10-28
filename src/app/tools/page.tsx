import { Metadata } from "next";
import ToolsContent from "./tools-content";

const BASE_URL = "https://sumitsain.vercel.app";

export const metadata: Metadata = {
  title: "Free AI & Web Dev Tools",
  description:
    "Discover the best free AI tools for web building, design, coding, and automation — curated by Sumit Sain, Full Stack Developer from Rajasthan, India.",
  alternates: { canonical: `${BASE_URL}/tools` },
  openGraph: {
    title: "Free AI & Web Dev Tools – Curated by Sumit Sain",
    description:
      "Discover the best free AI tools for web building, design, coding, and automation — curated by Sumit Sain, Full Stack Developer from Rajasthan, India.",
    url: `${BASE_URL}/tools`,
    siteName: "Sumit Sain",
    images: [{ url: `${BASE_URL}/images/hero-sec/sumit-profile-full.jpg`, width: 900, height: 900 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI & Web Dev Tools – Curated by Sumit Sain",
    description:
      "Discover the best free AI tools for web building, design, coding, and automation — curated by Sumit Sain, Full Stack Developer.",
    images: [`${BASE_URL}/images/hero-sec/sumit-profile-full.jpg`],
    creator: "@sumitsxin01",
  },
};

export default function ToolsPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Tools", item: `${BASE_URL}/tools` },
    ],
  };

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Free AI & Web Dev Tools",
    description:
      "A curated collection of free AI tools for web building, design, coding, and automation, selected by Sumit Sain.",
    url: `${BASE_URL}/tools`,
    author: { "@type": "Person", name: "Sumit Sain", url: BASE_URL },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />
      <ToolsContent />
    </>
  );
}

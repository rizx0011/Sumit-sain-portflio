import { Metadata } from "next";
import FeaturedWork from "../components/home/featured-work";

const BASE_URL = "https://sumitsain.vercel.app";

export const metadata: Metadata = {
  title: "Portfolio & Projects",
  description:
    "Browse curated web development projects and client work by Sumit Sain — Full Stack Developer & WordPress Expert from Rajasthan, India.",
  alternates: { canonical: `${BASE_URL}/work` },
  openGraph: {
    title: "Portfolio & Web Development Projects – Sumit Sain",
    description:
      "Browse curated web development projects and client work by Sumit Sain — Full Stack Developer & WordPress Expert from Rajasthan, India.",
    url: `${BASE_URL}/work`,
    siteName: "Sumit Sain",
    images: [{ url: `${BASE_URL}/images/hero-sec/sumit-profile-full.jpg`, width: 900, height: 900 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio & Web Development Projects – Sumit Sain",
    description:
      "Browse curated web development projects and client work by Sumit Sain — Full Stack Developer from Rajasthan, India.",
    images: [`${BASE_URL}/images/hero-sec/sumit-profile-full.jpg`],
    creator: "@sumitsxin01",
  },
};

export default function WorkPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Portfolio", item: `${BASE_URL}/work` },
    ],
  };

  return (
    <main className="min-h-screen pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Visually hidden h1 for SEO — design heading comes from FeaturedWork component */}
      <h1 className="sr-only">Web Development Projects & Portfolio by Sumit Sain</h1>
      <FeaturedWork showBackButton={true} />
    </main>
  );
}

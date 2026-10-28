import type { Metadata, Viewport } from "next";
import { Playfair_Display, Poppins } from "next/font/google";

import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import BranchAnimation from "./components/branch-animation";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const BASE_URL = "https://sumitsain.vercel.app";
const OG_IMAGE = `${BASE_URL}/images/hero-sec/sumit-profile-full.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Sumit Sain – Full Stack Developer & WordPress Expert in Rajasthan, India",
    template: "%s | Sumit Sain",
  },
  description:
    "Sumit Sain is a Full Stack Developer & WordPress Expert from Hanumangarh, Rajasthan, India. I build fast, SEO-friendly websites and web apps that help businesses grow online.",
  keywords: [
    "Sumit Sain",
    "Full Stack Developer Rajasthan",
    "WordPress Expert India",
    "Next.js developer",
    "web developer Hanumangarh",
    "React developer India",
    "freelance web developer",
    "ZENVIQ Digital",
  ],
  authors: [{ name: "Sumit Sain", url: BASE_URL }],
  creator: "Sumit Sain",
  publisher: "Sumit Sain",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  verification: {
    google: "kGKw-i68QyW00twKGit7MnXUUMfr93RiAzQZSkvZ0Pc",
  },
  openGraph: {
    title: "Sumit Sain – Full Stack Developer & WordPress Expert",
    description:
      "Full Stack Developer & WordPress Expert from Hanumangarh, Rajasthan, India. I build fast, SEO-friendly websites and web apps for businesses.",
    url: BASE_URL,
    siteName: "Sumit Sain",
    images: [{ url: OG_IMAGE, width: 900, height: 900, alt: "Sumit Sain – Full Stack Developer" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sumit Sain – Full Stack Developer & WordPress Expert",
    description:
      "Full Stack Developer & WordPress Expert from Hanumangarh, Rajasthan, India. I build fast, SEO-friendly websites and web apps for businesses.",
    images: [OG_IMAGE],
    creator: "@sumitsxin01",
  },
};

// ── Structured Data (JSON-LD) ──────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      name: "Sumit Sain",
      jobTitle: "Full Stack Developer & WordPress Expert",
      url: BASE_URL,
      image: OG_IMAGE,
      description:
        "Full Stack Developer & WordPress Expert from Hanumangarh, Rajasthan, India. Building fast, SEO-friendly websites and web apps since 2024.",
      email: "sumitsain13698@gmail.com",
      telephone: "+919649732195",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hanumangarh",
        addressRegion: "Rajasthan",
        addressCountry: "IN",
      },
      worksFor: {
        "@type": "Organization",
        name: "ZENVIQ Digital Agency",
        url: "https://zenviqdigital.in",
      },
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "Maharaja Ganga Singh University",
        url: "https://www.mgsubikaner.ac.in",
      },
      knowsAbout: [
        "Next.js",
        "React",
        "WordPress",
        "Full Stack Web Development",
        "Tailwind CSS",
        "TypeScript",
        "JavaScript",
        "Node.js",
        "SEO",
      ],
      sameAs: [
        "https://instagram.com/sumitsxin01",
        "https://x.com/sumitsxin01",
        "https://linkedin.com/in/sumit-sain",
        "https://github.com/sumitsxin01",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      name: "Sumit Sain",
      url: BASE_URL,
      publisher: { "@id": `${BASE_URL}/#person` },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${BASE_URL}/#service`,
      name: "Sumit Sain – Web Development Services",
      url: BASE_URL,
      image: OG_IMAGE,
      description:
        "Custom web development services including Next.js websites, WordPress development, and full-stack web applications for businesses and founders.",
      provider: { "@id": `${BASE_URL}/#person` },
      areaServed: [
        { "@type": "Country", name: "India" },
        { "@type": "Country", name: "Worldwide (Remote)" },
      ],
      serviceType: [
        "Next.js Web Development",
        "WordPress Development",
        "Full Stack Web Development",
        "Frontend Development",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="color-scheme" content="light dark" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        suppressHydrationWarning
        className={`${playfair.variable} ${poppins.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div style={{ position: "relative", zIndex: 1, overflow: "hidden" }}>
          <BranchAnimation />
          <Header />
          <div className="pt-[54px] sm:pt-[60px]">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}

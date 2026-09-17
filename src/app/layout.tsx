import type { Metadata } from "next";
import { Inter, Jost, Instrument_Serif } from "next/font/google";

import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import BranchAnimation from "./components/branch-animation";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sumit Sain - Full Stack Developer & WordPress Expert",
  description:
    "Sumit Sain is a Full Stack Developer and WordPress Expert from Rajasthan, India, building fast, scalable web experiences that help businesses grow online.",
  verification: {
    google: "kGKw-i68QyW00twKGit7MnXUUMfr93RiAzQZSkvZ0Pc",
  },
  openGraph: {
    title: "Sumit Sain - Full Stack Developer & WordPress Expert",
    description:
      "Full Stack Developer & WordPress Expert building fast, beautiful, scalable web experiences.",
    url: "https://sumitsain.vercel.app",
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
    title: "Sumit Sain - Full Stack Developer & WordPress Expert",
    description:
      "Full Stack Developer & WordPress Expert building fast, beautiful, scalable web experiences.",
    images: ["https://sumitsain.vercel.app/images/hero-sec/user-img.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
      </head>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${jost.variable} ${instrumentSerif.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sumit Sain",
              url: "https://sumitsain.vercel.app",
              image: "https://sumitsain.vercel.app/images/hero-sec/user-img.jpg",
              jobTitle: "Full Stack Developer & WordPress Expert",
              description:
                "Sumit Sain is a Full Stack Developer and WordPress Expert from Rajasthan, India, building fast and scalable web experiences.",
              address: {
                "@type": "PostalAddress",
                addressRegion: "Rajasthan",
                addressCountry: "IN",
              },
              sameAs: [
                "https://instagram.com/sumitsxin01",
                "https://x.com/sumitsxin01",
                "https://linkedin.com/in/sumit-sain",
                "https://github.com/sumitsxin01",
              ],
              knowsAbout: [
                "React",
                "Next.js",
                "WordPress",
                "Full Stack Development",
                "Web Development",
              ],
            }),
          }}
        />
        <BranchAnimation />
        <div style={{ position: "relative", zIndex: 1 }}>
          <Header />
          <div className="pt-[64px] sm:pt-[72px]">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}

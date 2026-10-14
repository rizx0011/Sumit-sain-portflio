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

export const metadata: Metadata = {
  metadataBase: new URL("https://sumitsain.vercel.app"),
  alternates: {
    canonical: "https://sumitsain.vercel.app",
  },
  title: "Sumit Sain - Full Stack Developer & WordPress Expert",
  description:
    "Full Stack Developer & WordPress Expert from Rajasthan, India. I build fast, SEO-friendly websites and web apps for businesses.",
  verification: {
    google: "kGKw-i68QyW00twKGit7MnXUUMfr93RiAzQZSkvZ0Pc",
  },
  openGraph: {
    title: "Sumit Sain - Full Stack Developer & WordPress Expert",
    description:
      "Full Stack Developer & WordPress Expert from Rajasthan, India. I build fast, SEO-friendly websites and web apps for businesses.",
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
      "Full Stack Developer & WordPress Expert from Rajasthan, India. I build fast, SEO-friendly websites and web apps for businesses.",
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="color-scheme" content="light dark" />
      </head>
      <body
        suppressHydrationWarning
        className={`${playfair.variable} ${poppins.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  name: "Sumit Sain",
                  jobTitle: "Full Stack Developer & WordPress Expert",
                  url: "https://sumitsain.vercel.app",
                  image: "https://sumitsain.vercel.app/images/hero-sec/user-img.jpg",
                  description:
                    "Full Stack Developer & WordPress Expert from Rajasthan, India. I build fast, SEO-friendly websites and web apps for businesses.",
                  address: {
                    "@type": "PostalAddress",
                    addressRegion: "Rajasthan",
                    addressCountry: "India",
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
                    "Tailwind CSS",
                  ],
                },
                {
                  "@type": "WebSite",
                  name: "Sumit Sain",
                  url: "https://sumitsain.vercel.app",
                },
              ],
            }),
          }}
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

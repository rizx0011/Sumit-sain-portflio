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
  title: "Sumit Sain",
  description: "Sumit Sain - Personal Portfolio",
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

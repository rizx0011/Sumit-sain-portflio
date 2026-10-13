import HeroSection from "./components/home/hero-section";
import AboutMe from "./components/home/about-me";
import Experience from "./components/home/experience";

import StatsStrip from "./components/home/stats-strip";
import Services from "./components/home/services";
import FeaturedWork from "./components/home/featured-work";
import HowIWork from "./components/home/how-i-work";
import Pricing from "./components/home/pricing";
import Testimonials from "./components/home/testimonials";
import ExpertiseSection from "./components/home/expertise-section";
import TechStack from "./components/home/tech-stack";
import FAQ from "./components/home/faq";
import Contact from "./components/home/contact";
import CtaBanner from "./components/home/cta-banner";
import FreeTools from "./components/home/free-tools";
import BlogSection from "./components/home/blog-section";
import QuoteSection from "./components/home/quote-section";
import { Reveal } from "@/components/ui/reveal";

const Page = () => {
  return (
    <main>
      <HeroSection />
      <Reveal><AboutMe /></Reveal>
      <Reveal><Experience /></Reveal>

      <Reveal><StatsStrip /></Reveal>
      <Reveal><Services /></Reveal>
      <Reveal><FeaturedWork initialLimit={4} /></Reveal>
      <Reveal><HowIWork /></Reveal>
      <Reveal><Pricing /></Reveal>
      <Reveal><Testimonials /></Reveal>
      <Reveal><ExpertiseSection /></Reveal>
      <Reveal><TechStack /></Reveal>
      <Reveal><FAQ /></Reveal>
      <Reveal><FreeTools /></Reveal>
      <Reveal><BlogSection /></Reveal>
      <Reveal><Contact /></Reveal>
      <Reveal><CtaBanner /></Reveal>
      <Reveal><QuoteSection /></Reveal>
    </main>
  );
};

export default Page;
import AboutMe from "./components/home/about-me"
import Education from "./components/home/education"
import Experience from "./components/home/experience"
import HeroSection from "./components/home/hero-section"
import FeaturedWork from "./components/home/featured-work"
import FreeTools from "./components/home/free-tools"
import ExpertiseSection from "./components/home/expertise-section"
import TechStack from "./components/home/tech-stack"
import QuoteSection from "./components/home/quote-section"
import { Reveal } from "@/components/ui/reveal"

const page = () => {
  return (
    <main>
      <HeroSection />
      <Reveal><AboutMe /></Reveal>
      <Reveal><Experience /></Reveal>
      <Reveal><Education /></Reveal>
      <Reveal><ExpertiseSection /></Reveal>
      <Reveal><TechStack /></Reveal>
      <Reveal><FreeTools /></Reveal>
      <Reveal><FeaturedWork initialLimit={4} /></Reveal>
      <Reveal><QuoteSection /></Reveal>
    </main>
  )
}

export default page;
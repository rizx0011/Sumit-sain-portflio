import AboutMe from "./components/home/about-me"
import Education from "./components/home/education"
import Experience from "./components/home/experience"
import HeroSection from "./components/home/hero-section"
import ProjectOverview from "./components/home/project-overview"
import FreeTools from "./components/home/free-tools"
import ExpertiseSection from "./components/home/expertise-section"
import TechStack from "./components/home/tech-stack"
import QuoteSection from "./components/home/quote-section"

const page = () => {
  return (
    <main>
      <HeroSection />
      <AboutMe />
      <Experience />
      <Education />
      <ExpertiseSection />
      <TechStack />
      <FreeTools />
      <ProjectOverview />
      <QuoteSection />
    </main>
  )
}

export default page;
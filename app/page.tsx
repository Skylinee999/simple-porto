
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TechStack } from "@/components/tech-stack"
import { Projects } from "@/components/projects"
import { Roadmap } from "@/components/roadmap"
import { NowPlaying } from "@/components/now-playing"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="gradient-blur-top" />
      <div className="gradient-blur-bottom" />
      <div className="relative z-10">
        <Header className="font-oregano" />
        <main className="container mx-auto px-4 py-8 max-w-4xl">
          <HeroSection />
          <TechStack />
          <Projects />
          <Roadmap />
          <NowPlaying />
        </main>
        <Footer />
      </div>
    </div>
  )
}

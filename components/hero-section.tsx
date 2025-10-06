import { Card } from "@/components/ui/card"

export function HeroSection() {
  return (
    <section id="hero" className="py-12 md:py-20">
      <Card className="p-8 md:p-12 border-border/50 bg-card/50 backdrop-blur">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">Hello there 👋</p>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-foreground to-accent bg-clip-text text-transparent">
            I'm Iqbal
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            I am a vocational high school student from Central Java majoring in automotive and I enjoy coding.
          </p>
        </div>
      </Card>
    </section>
  )
}

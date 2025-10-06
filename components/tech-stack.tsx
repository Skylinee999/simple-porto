import { Badge } from "@/components/ui/badge"

const technologies = ["HTML", "CSS", "JavaScript", "Golang", "Python", "Bash", "TypeScript", "TailwindCSS", "PHP"]

export function TechStack() {
  return (
    <section id="tech-stack" className="py-12 md:py-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">— TECH STACK</h2>
      <div className="flex flex-wrap gap-3">
        {technologies.map((tech) => (
          <Badge
            key={tech}
            variant="secondary"
            className="px-4 py-2 text-sm bg-secondary/50 hover:bg-secondary/70 transition-colors">
            {tech}
          </Badge>
        ))}
      </div>
    </section>
  )
}

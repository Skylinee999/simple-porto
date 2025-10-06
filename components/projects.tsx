"use client"
import { useState, useEffect } from "react"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github } from "lucide-react"
import Image from "next/image"
import { Skeleton } from "@/components/ui/skeleton"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "WhatsApp Bot",
    description: "wa-bot multidevice using local database.",
    image: "https://raw.githubusercontent.com/balxz/akuuu-muaakk/refs/heads/main/New%20Project%201%20%5BD5F6756%5D.png",
    demo: "https://github.com/balxz/Shiina-WaBot#readme",
    repo: "https://github.com/balxz/Shiina-WaBot.git",
  },
  {
    id: 2,
    title: "Shiina Api's",
    description: "Shiina API is a data integration platform between other platforms that has been active since 2024.",
    image: "https://raw.githubusercontent.com/balxz/akuuu-muaakk/refs/heads/main/New%20Project%201%20%5BC203868%5D.png",
    demo: "/dashboard",
    repo: "https://github.com/balxz/swagger-nextjs.git",
  },
  {
    id: 3,
    title: "Portfolio Web ? Blog Web",
    description: "Simple Website about Iqbal.",
    image: "https://raw.githubusercontent.com/balxz/akuuu-muaakk/refs/heads/main/New%20Project%203%20%5B0C67D63%5D.png",
    demo: "/#",
    repo: "https://github.com/balxz/swagger-nextjs.git",
  },
]

export function Projects() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="projects" className="py-12 md:py-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">— PROJECTS</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="overflow-hidden border-border/50 bg-card/50 backdrop-blur hover:border-primary/50 transition-all group"
          >
            <div className="relative aspect-video overflow-hidden">
              <div className="absolute inset-0 transition-opacity duration-500" style={{ opacity: loading ? 1 : 0 }}>
                <Skeleton className="h-full w-full" />
              </div>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className={`object-cover transition-all duration-700 ease-in-out ${loading ? "opacity-0 scale-105" : "opacity-100 scale-100"}`}
              />
            </div>
            <CardHeader>
              <CardTitle className="text-xl">{project.title}</CardTitle>
              <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
            </CardHeader>
            <CardFooter className="flex gap-2">
              <Button size="sm" variant="outline" asChild>
                <a href={project.repo} target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Github className="mr-2 h-4 w-4" />
                  repo
                </a>
              </Button>
              <Button size="sm" variant="default" className="bg-[#151316] text-white" asChild>
                <Link href={project.demo} className="flex items-center">
                  demo
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
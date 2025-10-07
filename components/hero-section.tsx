"use client"
import { Card } from "@/components/ui/card"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [text, setText] = useState("")
  const [index, setIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  
  const texts = ["i'm iqbal", "full stack enthusiast", "open source lovers"]

  useEffect(() => {
    let currentText = texts[loopNum % texts.length]
    let timeout: NodeJS.Timeout

    if (!isDeleting) {
      if (index < currentText.length) {
        timeout = setTimeout(() => {
          setText(currentText.substring(0, index + 1))
          setIndex(index + 1)
        }, 60)
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 800)
      }
    } else {
      if (index > 0) {
        timeout = setTimeout(() => {
          setText(currentText.substring(0, index - 1))
          setIndex(index - 1)
        }, 30)
      } else {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    return () => clearTimeout(timeout)
  }, [index, isDeleting, loopNum])

  return (
    <section id="hero" className="py-12 md:py-20">
      <Card className="p-8 md:p-12 border-border/50 bg-card/50 backdrop-blur">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">Hello there 👋</p>
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="text-4xl bg-gradient-to-r from-primary via-foreground to-accent bg-clip-text text-transparent">
              {text}
            </span>
            <span className="ml-1 text-3xl animate-pulse">|</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            I am a vocational high school student from Central Java majoring in automotive and I enjoy coding.
          </p>
        </div>
      </Card>
    </section>
  )
}
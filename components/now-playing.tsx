"use client"  
import { useState, useEffect } from "react"  
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"  
import { Skeleton } from "@/components/ui/skeleton"  
import motivasi from "@/lib/data/motivasi.json"  
  
export function NowPlaying() {  
  const [loading, setLoading] = useState(true)  
  const [randomMotivation, setRandomMotivation] = useState<{text: string, author: string} | null>(null)  
  
  useEffect(() => {  
    setRandomMotivation(motivasi[Math.floor(Math.random() * motivasi.length)])
    
    const timer = setTimeout(() => setLoading(false), 500)   
    return () => clearTimeout(timer)  
  }, [])  
  
  return (  
    <section id="now-playing" className="py-12 md:py-16">  
      <h2 className="text-2xl md:text-3xl font-bold mb-8">— now playing</h2>  
      <Card className="border-border/50 bg-card/50 backdrop-blur">  
        <div className="flex ml-4 space-x-2">  
          <div className="w-3 h-3 rounded-full bg-[#FF6567]"></div>  
          <div className="w-3 h-3 rounded-full bg-[#F0B101]"></div>  
          <div className="w-3 h-3 rounded-full bg-[#00BD7D]"></div>  
        </div>  
        <CardHeader>  
          <CardTitle className="text-lg">POWERED SPOTIFY EMBED</CardTitle>  
        </CardHeader>  
        <CardContent>  
          <div className="w-full h-[152px]">  
            {loading ? (
              <Skeleton className="w-full h-full rounded-lg" />  
            ) : (  
              <iframe  
                style={{ borderRadius: "12px" }}  
                src="https://open.spotify.com/embed/playlist/7MxKet35UsGaM81c77wpRC?si=BmjAgFhJRMqR4d2dTM-NRw&pi=68uqTvoHQ6-oP"  
                width="100%"  
                height="100%"  
                frameBorder="0"  
                allowFullScreen  
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"  
                loading="lazy"  
                className="rounded-lg"  
              />  
            )}
          </div>  
          {randomMotivation && (
            <p className="text-sm text-muted-foreground mt-4 italic">  
              "{randomMotivation.text}"  
              <span className="block text-end text-sm">~ {randomMotivation.author}</span>  
            </p>  
          )}
        </CardContent>  
      </Card>  
    </section>  
  )  
}
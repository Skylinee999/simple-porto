import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function NowPlaying() {
  return (
    <section id="now-playing" className="py-12 md:py-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">— now playing</h2>
      <Card className="border-border/50 bg-card/50 backdrop-blur">
        <CardHeader>
          <CardTitle className="text-lg">POWERED SPOTIFY EMBED</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="w-full h-[152px]">
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
          </div>
          <p className="text-sm text-muted-foreground mt-4 italic">currently listening to my favorite tracks on spotify</p>
        </CardContent>
      </Card>
    </section>
  )
}

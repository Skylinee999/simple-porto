import { Card, CardContent } from "@/components/ui/card"

const roadmapItems = [
  {
    year: "2022 |",
    title: "menemukan hoby baru",
    description: "Terobsesi dengan teknologi",
  },
  {
    year: "2022 |",
    title: "sedikit mempelajari pemrograman",
    description: "Terkendala oleh device",
  },
  {
    year: "2023 |",
    title: "mencoba membuat bot WhatsApp",
    description: "Belajar dari youtube",
  },
  {
    year: "2023  |",
    title: "mendalami dunia programing",
    description: "Membuat WhatsApp bot dan projects web kecil",
  },
  {
    year: "2024  |",
    title: "menjalankan website api",
    description: "Mengisi kegabutan dan ingin meningkatkan skill",
  },
  {
    year: "2025  |",
    title: "mulai mendalami dunia programing",
    description: "Belajar Html, Css, Javascript, Nextjs, Reactjs, Astrojs, Pythonl Serta Hacking",
  },
]

export function Roadmap() {
  return (
    <section id="roadmap" className="py-12 md:py-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">— ROADMAP</h2>

      <Card className="border-border/50 bg-card/50 backdrop-blur">
        <CardContent className="p-6 md:p-8">
          <div className="relative space-y-6">
            <div className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-border" />

            {roadmapItems.map((item, index) => (
              <div key={index} className="relative flex gap-4">
                <div className="flex items-start pt-0.5 z-10">
                  <div className="w-3 h-3 rounded-full bg-blue-400 flex items-center justify-center ring-4 ring-card">
                    <div className="w-2 h-2 rounded-full bg-background" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-xs text-gray-300 font-semibold">{item.year}</span>
                    <h3 className="text-sm font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

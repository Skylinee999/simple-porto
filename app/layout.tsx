import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "bàlxzzy`– ხαlzz",
  description: "balzz (iqbal), juga dikenal sebagai balxzzy sh atau balxz. seorang pemula yang fokus pada pengembangan web, scraping, web api, ai, bot whatsapp, bot telegram, serta framework react, next, vite, dan astro. terus belajar dan berkembang di dunia teknologi sejak 2023",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${spaceGrotesk.variable} ${inter.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { ScrollLinked } from "@/components/scroller"

// Tambahkan interface untuk props
interface HeaderProps {
  className?: string;
}

// Ubah deklarasi komponen untuk menerima props
export function Header({ className }: HeaderProps) {
  const [open, setOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setOpen(false)
    }
  }

  const navItems = [
    { label: "home", id: "hero" },
    { label: "tech stack", id: "tech-stack" },
    { label: "projects", id: "projects" },
    { label: "roadmap", id: "roadmap" },
  ]

  const mobileMenuVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  }

  const menuItemContainerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const menuItemVariants = {
    initial: { x: -20, opacity: 0 },
    animate: { x: 0, opacity: 1 }
  }

  return (
    <>
      {/* Terapkan className ke elemen header */}
      <header className={`sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${className || ""}`}>
        <div className="container mx-auto flex h-16 items-center justify-between px-4 max-w-6xl">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setOpen(!open)}
            >
              <div className="flex flex-col gap-1.5 w-6">
                <motion.span
                  animate={{
                    rotate: open ? 45 : 0,
                    y: open ? 8 : 0
                  }}
                  className="block h-0.5 bg-foreground origin-center transition-colors"
                />
                <motion.span
                  animate={{ opacity: open ? 0 : 1 }}
                  className="block h-0.5 bg-foreground transition-colors"
                />
                <motion.span
                  animate={{
                    rotate: open ? -45 : 0,
                    y: open ? -8 : 0
                  }}
                  className="block h-0.5 bg-foreground origin-center transition-colors"
                />
              </div>
              <span className="sr-only">Toggle menu</span>
            </Button>

            <span className="text-xl font-bold tracking-widest">S H</span>
            <ScrollLinked />

            <nav className="hidden md:flex items-center gap-6 ml-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm hover:text-primary transition-colors relative px-4 py-2 rounded-lg border border-transparent hover:border-primary/50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>
          </div>

          <span className="text-sm text-muted-foreground">Personal Website</span>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={mobileMenuVariants}
            className="fixed top-16 left-0 right-0 z-40 md:hidden bg-background/95 backdrop-blur border-b border-border/40 shadow-lg"
          >
            <div className="container mx-auto px-4 py-6 max-w-6xl">
              <motion.div
                variants={menuItemContainerVariants}
                initial="initial"
                animate="animate"
                className="space-y-2"
              >
                {navItems.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={menuItemVariants}
                  >
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="block w-full text-left px-4 py-3 rounded-lg text-foreground hover:bg-accent hover:text-accent-foreground transition-all border border-transparent hover:border-primary/30"
                    >
                      {item.label}
                    </button>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-30 md:hidden"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}

"use client"
import { useState, useEffect } from 'react'

interface UseTypingEffectProps {
  texts: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseTime?: number
}

export function useTypingEffect({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 2000
}: UseTypingEffectProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)

  useEffect(() => {
    const currentText = texts[loopNum % texts.length]
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing effect
        if (currentIndex < currentText.length) {
          setDisplayedText(currentText.substring(0, currentIndex + 1))
          setCurrentIndex(currentIndex + 1)
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), pauseTime)
        }
      } else {
        // Deleting effect
        if (currentIndex > 0) {
          setDisplayedText(currentText.substring(0, currentIndex - 1))
          setCurrentIndex(currentIndex - 1)
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false)
          setLoopNum(loopNum + 1)
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timer)
  }, [currentIndex, isDeleting, loopNum, texts, typingSpeed, deletingSpeed, pauseTime])

  return displayedText
}
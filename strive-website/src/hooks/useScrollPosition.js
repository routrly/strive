import { useState, useEffect, useCallback } from 'react'

function computeState() {
  const scrollY = window.scrollY
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight
  const scrollProgress = maxScroll > 0 ? Math.min(1, Math.max(0, scrollY / maxScroll)) : 0
  return { scrollY, scrollProgress, isScrolled: scrollY > 20 }
}

export default function useScrollPosition() {
  const [state, setState] = useState(computeState)

  const handleScroll = useCallback(() => {
    setState(computeState())
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return state
}

import { useState, useEffect, useRef } from 'react'

export default function useCountUp(target, { duration = 1500, start = false } = {}) {
  const [value, setValue] = useState(0)
  const frameRef = useRef(null)

  useEffect(() => {
    if (!start) return undefined

    const startTime = performance.now()

    function tick(now) {
      const elapsed = now - startTime
      const progress = Math.min(1, elapsed / duration)
      setValue(Math.round(progress * target))
      if (progress < 1) {
        const delay = Math.min(16, duration - elapsed)
        frameRef.current = setTimeout(() => tick(performance.now()), delay)
      }
    }

    frameRef.current = setTimeout(() => tick(performance.now()), 16)
    return () => clearTimeout(frameRef.current)
  }, [start, target, duration])

  return value
}

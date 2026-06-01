import { useEffect, useRef, useState } from 'react'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

/** Parallax suave mientras el elemento cruza el viewport (estilo Figma scroll) */
export function useInViewParallax<T extends HTMLElement>(speed = 0.35) {
  const ref = useRef<T>(null)
  const [offset, setOffset] = useState(0)
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (reducedMotion) return

    let frame = 0

    const update = () => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      const center = rect.top + rect.height * 0.5
      const delta = (center - vh * 0.5) / vh
      setOffset(delta * 90 * speed)
    }

    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [reducedMotion, speed])

  return {
    ref,
    style: reducedMotion
      ? undefined
      : { transform: `translate3d(0, ${offset}px, 0)` },
  }
}

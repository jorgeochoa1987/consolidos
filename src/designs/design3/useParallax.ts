import { useEffect, useRef, useState } from 'react'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

/** Parallax ligado al scroll del hero — desactivado con prefers-reduced-motion */
export function useHeroParallax() {
  const heroRef = useRef<HTMLElement>(null)
  const [scrollY, setScrollY] = useState(0)
  const reducedMotion = usePrefersReducedMotion()
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)')
    setMobile(mq.matches)
    const onMq = () => setMobile(mq.matches)
    mq.addEventListener('change', onMq)
    return () => mq.removeEventListener('change', onMq)
  }, [])

  useEffect(() => {
    if (reducedMotion) return

    let frame = 0

    const update = () => {
      const hero = heroRef.current
      if (!hero) return
      const top = hero.getBoundingClientRect().top
      setScrollY(Math.max(0, -top))
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
  }, [reducedMotion])

  const factor = reducedMotion ? 0 : mobile ? 0.35 : 1

  return {
    heroRef,
    layers: {
      back: scrollY * 0.12 * factor,
      mid: scrollY * 0.28 * factor,
      front: scrollY * 0.45 * factor,
    },
    reducedMotion,
  }
}

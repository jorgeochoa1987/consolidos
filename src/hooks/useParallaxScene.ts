import { useEffect, useRef, useState } from 'react'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

type LayerConfig = {
  /** Velocidad vertical al hacer scroll (negativo = sube más lento que el scroll) */
  scroll: number
  /** Influencia del mouse (-1 a 1) */
  mouse: number
  /** Escala al final del hero */
  scaleFalloff?: number
}

export function useParallaxScene() {
  const sceneRef = useRef<HTMLElement>(null)
  const [progress, setProgress] = useState(0)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const reducedMotion = usePrefersReducedMotion()
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 900px)')
    setMobile(mq.matches)
    const onMq = () => setMobile(mq.matches)
    mq.addEventListener('change', onMq)
    return () => mq.removeEventListener('change', onMq)
  }, [])

  useEffect(() => {
    if (reducedMotion) return

    let frame = 0

    const update = () => {
      const scene = sceneRef.current
      if (!scene) return
      const rect = scene.getBoundingClientRect()
      const travel = scene.offsetHeight + window.innerHeight * 0.35
      const raw = (-rect.top + window.innerHeight * 0.12) / travel
      setProgress(Math.min(1, Math.max(0, raw)))
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

  useEffect(() => {
    if (reducedMotion || mobile) return

    const scene = sceneRef.current
    if (!scene) return

    const onMove = (e: MouseEvent) => {
      const rect = scene.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      setMouse({ x, y })
    }

    const onLeave = () => setMouse({ x: 0, y: 0 })

    scene.addEventListener('mousemove', onMove)
    scene.addEventListener('mouseleave', onLeave)
    return () => {
      scene.removeEventListener('mousemove', onMove)
      scene.removeEventListener('mouseleave', onLeave)
    }
  }, [reducedMotion, mobile])

  const intensity = reducedMotion ? 0 : mobile ? 0.4 : 1

  const layer = ({ scroll, mouse: mouseFactor, scaleFalloff = 0 }: LayerConfig) => {
    const scrollPx = progress * 220 * scroll * intensity
    const mouseX = mouse.x * 42 * mouseFactor * intensity
    const mouseY = mouse.y * 32 * mouseFactor * intensity
    const scale = 1 - progress * scaleFalloff * intensity

    return {
      transform: `translate3d(${mouseX}px, ${scrollPx + mouseY}px, 0) scale(${scale})`,
    }
  }

  return { sceneRef, progress, layer, reducedMotion }
}

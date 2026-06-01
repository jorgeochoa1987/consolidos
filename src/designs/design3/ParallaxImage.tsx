import type { ImgHTMLAttributes } from 'react'
import { useInViewParallax } from '../../hooks/useInViewParallax'

type ParallaxImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  speed?: number
  wrapperClassName?: string
}

export function ParallaxImage({
  speed = 0.35,
  wrapperClassName = '',
  className = '',
  alt = '',
  ...imgProps
}: ParallaxImageProps) {
  const { ref, style } = useInViewParallax<HTMLDivElement>(speed)

  return (
    <div ref={ref} className={`d3-parallax-wrap${wrapperClassName ? ` ${wrapperClassName}` : ''}`} style={style}>
      <img className={className} alt={alt} {...imgProps} />
    </div>
  )
}

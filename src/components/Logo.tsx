import logo from '../assets/cropped-image-modified-300x100.png'

type LogoProps = {
  className?: string
  width?: number
  height?: number
}

export function Logo({ className, width = 300, height = 100 }: LogoProps) {
  return (
    <img
      src={logo}
      alt="Consolidados S.A.S"
      width={width}
      height={height}
      className={className}
    />
  )
}

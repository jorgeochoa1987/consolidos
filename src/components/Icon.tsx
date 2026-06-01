type IconName =
  | 'bluesky-icon'
  | 'discord-icon'
  | 'documentation-icon'
  | 'github-icon'
  | 'social-icon'
  | 'x-icon'

type IconProps = {
  name: IconName
  className?: string
  size?: number
  label?: string
}

export function Icon({ name, className, size = 20, label }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      aria-hidden={label ? undefined : true}
      aria-label={label}
      role={label ? 'img' : undefined}
    >
      <use href={`/icons.svg#${name}`} />
    </svg>
  )
}

import { createElement, type CSSProperties, type ReactNode } from 'react'
import { useFadeInMount } from '../hooks/useFadeInMount'
import { useReveal } from '../hooks/useReveal'
import '../styles/fade-in.css'

type FadeInAs =
  | 'div'
  | 'section'
  | 'article'
  | 'figure'
  | 'ul'
  | 'li'
  | 'header'
  | 'footer'
  | 'main'
  | 'form'

type FadeInProps = {
  children: ReactNode
  className?: string
  as?: FadeInAs
  /** Retraso en ms (stagger) */
  delay?: number
  /** true = al montar; false = al entrar en viewport */
  onMount?: boolean
  id?: string
}

export function FadeIn({
  children,
  className = '',
  as: Tag = 'div',
  delay = 0,
  onMount = false,
  id,
}: FadeInProps) {
  const scroll = useReveal<HTMLElement>()
  const mount = useFadeInMount<HTMLElement>()
  const { ref, visible } = onMount ? mount : scroll

  const classes = ['fade-in', visible && 'fade-in--visible', className]
    .filter(Boolean)
    .join(' ')

  return createElement(
    Tag,
    {
      ref,
      id,
      className: classes,
      style: { '--fade-delay': `${delay}ms` } as CSSProperties,
    },
    children,
  )
}

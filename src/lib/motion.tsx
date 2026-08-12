'use client'
import { useEffect, useRef, useState, CSSProperties, ReactNode, ElementType } from 'react'

interface MotionStyle {
  opacity?: number
  x?: number | number[]
  y?: number | number[]
  scale?: number | number[]
  [key: string]: unknown
}

interface MotionProps {
  children?: ReactNode
  initial?: MotionStyle
  animate?: MotionStyle
  whileInView?: MotionStyle
  transition?: { duration?: number; delay?: number; ease?: string | number[]; repeat?: number; repeatType?: string }
  viewport?: { once?: boolean }
  style?: CSSProperties
  className?: string
  href?: string
  onMouseEnter?: (e: React.MouseEvent<HTMLElement>) => void
  onMouseLeave?: (e: React.MouseEvent<HTMLElement>) => void
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
  id?: string
  key?: string | number
  [key: string]: unknown
}

function toCss(props?: MotionStyle): CSSProperties {
  if (!props) return {}
  const { opacity, x, y, scale, ...rest } = props
  const transforms: string[] = []
  if (x !== undefined) transforms.push(`translateX(${Array.isArray(x) ? x[0] : x}px)`)
  if (y !== undefined) transforms.push(`translateY(${Array.isArray(y) ? y[0] : y}px)`)
  if (scale !== undefined) transforms.push(`scale(${Array.isArray(scale) ? scale[0] : scale})`)
  const out: CSSProperties = { ...(rest as CSSProperties) }
  if (opacity !== undefined) out.opacity = opacity
  if (transforms.length) out.transform = transforms.join(' ')
  return out
}

function createMotionComponent(Tag: ElementType) {
  function MotionComponent({
    children, initial, animate, whileInView, transition, viewport,
    style, className, href, onMouseEnter, onMouseLeave, onClick, id,
    ...rest
  }: MotionProps) {
    const ref = useRef<HTMLElement>(null)
    const [active, setActive] = useState(false)
    const target = whileInView ?? animate
    const dur = transition?.duration ?? 0.6
    const delay = transition?.delay ?? 0
    const ease = 'ease'

    useEffect(() => {
      if (animate && !whileInView) { setActive(true); return }
      if (!whileInView || !ref.current) return
      const el = ref.current
      const obs = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          if (viewport?.once !== false) obs.disconnect()
        }
      }, { threshold: 0.08 })
      obs.observe(el)
      return () => obs.disconnect()
    }, [])

    const fromCss = toCss(initial)
    const toCssVal = toCss(target)
    const currentCss = active ? toCssVal : fromCss

    const combinedStyle: CSSProperties = {
      ...style,
      ...currentCss,
      transition: `opacity ${dur}s ${ease} ${delay}s, transform ${dur}s ${ease} ${delay}s`,
    }

    const props: Record<string, unknown> = {
      ref, style: combinedStyle, className, onMouseEnter, onMouseLeave, onClick, id,
    }
    if (Tag === 'a') props.href = href

    // Pass through any extra props (data-*, aria-*, etc) but skip undefined
    Object.entries(rest).forEach(([k, v]) => {
      if (v !== undefined && !['key'].includes(k)) props[k] = v
    })

    const T = Tag as React.ElementType
    return <T {...props}>{children}</T>
  }
  MotionComponent.displayName = `motion.${String(Tag)}`
  return MotionComponent
}

export const motion = {
  div: createMotionComponent('div'),
  section: createMotionComponent('section'),
  h1: createMotionComponent('h1'),
  h2: createMotionComponent('h2'),
  h3: createMotionComponent('h3'),
  p: createMotionComponent('p'),
  a: createMotionComponent('a'),
  span: createMotionComponent('span'),
  header: createMotionComponent('header'),
}

export function useInView(ref: React.RefObject<HTMLElement | null>, options?: { once?: boolean }) {
  const [inView, setInView] = useState(false)
  useEffect(() => {
    if (!ref.current) return
    const el = ref.current
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setInView(true)
        if (options?.once !== false) obs.disconnect()
      }
    }, { threshold: 0.1 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return inView
}

export function useScroll(opts?: { target?: React.RefObject<HTMLElement | null>; offset?: string[] }) {
  const [prog, setProg] = useState(0)
  useEffect(() => {
    const el = opts?.target?.current ?? null
    const onScroll = () => {
      if (el) {
        const rect = el.getBoundingClientRect()
        const vh = window.innerHeight
        const p = Math.max(0, Math.min(1, (vh - rect.top) / (vh + rect.height)))
        setProg(p)
      } else {
        const total = document.body.scrollHeight - window.innerHeight
        setProg(total > 0 ? window.scrollY / total : 0)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return { scrollYProgress: prog }
}

export function useTransform(progress: number, input: number[], output: string[]): string {
  const [i0, i1] = input
  const [o0, o1] = output
  const t = Math.max(0, Math.min(1, (progress - i0) / (i1 - i0)))
  const numOut = parseFloat(o0) + t * (parseFloat(o1) - parseFloat(o0))
  const unit = o0.replace(/[\d.-]+/, '') || '%'
  return `${numOut.toFixed(1)}${unit}`
}

export function AnimatePresence({ children }: { children: ReactNode }) {
  return <>{children}</>
}

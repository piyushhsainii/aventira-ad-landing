'use client'

import { useEffect, useRef } from 'react'

interface FadeSectionProps {
  children: React.ReactNode
  className?: string
  delay?: string
  style?: React.CSSProperties
}

export default function FadeSection({ children, className = '', delay, style }: FadeSectionProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`fade-in ${className}`}
      style={{ transitionDelay: delay, ...style }}
    >
      {children}
    </div>
  )
}

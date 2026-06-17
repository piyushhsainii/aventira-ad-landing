'use client'

import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

/* ── Meta Pixel ─────────────────────────────────────────────── */
declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
    Calendly?: {
      initInlineWidget: (opts: {
        url: string
        parentElement: HTMLElement
      }) => void
    }
  }
}

function firePixel(event: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', event, params ?? {})
  }
}

const CALENDLY_BASE =
  process.env.NEXT_PUBLIC_CALENDLY_URL ||
  'https://calendly.com/jake-aventiraadmissionsconsulting/30min'

const CALENDLY_URL = `${CALENDLY_BASE}?hide_gdpr_banner=1&background_color=f9f7f2&text_color=101925&primary_color=c2a057`

/* ── Inline embed ───────────────────────────────────────────── */
function CalendlyInline() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const initialisedRef = useRef(false)

  useEffect(() => {
    function init() {
      if (initialisedRef.current) return
      if (!containerRef.current || !window.Calendly) return
      initialisedRef.current = true
      containerRef.current.innerHTML = ''
      window.Calendly.initInlineWidget({
        url: CALENDLY_URL,
        parentElement: containerRef.current,
      })
    }

    if (!document.querySelector('#calendly-widget-script')) {
      const s = document.createElement('script')
      s.id = 'calendly-widget-script'
      s.src = 'https://assets.calendly.com/assets/external/widget.js'
      s.async = true
      s.onload = init
      document.body.appendChild(s)
    } else {
      if (window.Calendly) {
        init()
      } else {
        const existing = document.querySelector('#calendly-widget-script') as HTMLScriptElement
        existing?.addEventListener('load', init, { once: true })
      }
    }

    function onMessage(e: MessageEvent) {
      const isBooking =
        e.data?.event === 'calendly.event_scheduled' ||
        (typeof e.data === 'string' && e.data.includes('calendly.event_scheduled'))
      if (isBooking) {
        firePixel('Schedule', {
          content_name: 'Free Admissions Strategy Session',
          content_category: 'Admissions Consulting',
        })
        firePixel('Lead', { content_name: 'Calendly Booking' })
      }
    }
    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [])

  return (
    <div
      ref={containerRef}
      style={{ minWidth: '100%', height: '680px' }}
      aria-label="Book a free strategy session"
    />
  )
}

/* ── Hero ───────────────────────────────────────────────────── */
export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className={styles.hero}>
      <div className={styles.inner}>

        {/* LEFT */}
        <div className={styles.left}>
          <div className={styles.eyebrow}>Admissions Consulting</div>

          <h1 className={styles.headline}>
            From <em>Who You Are</em>
            <br />to Where You Belong
          </h1>

          <div className={styles.divider} />

          <p className={styles.tagline}>
            Test scores matter. Strategy, storytelling,
            <br />and positioning decide admits.
          </p>

          <p className={styles.stakes}>
            Most students with strong grades still get rejected — not because
            they aren&apos;t qualified, but because their application lacks strategy.
          </p>

          <p className={styles.body}>
            We help students build clear, differentiated applications that top
            colleges actually understand — and accept. Most students apply with
            strong grades and good intentions. Very few apply with a strategy.
          </p>

          <div className={styles.actions}>
            <button
              className={styles.btnPrimary}
              onClick={() => scrollTo('hero-card')}
            >
              Build Your Student&apos;s Admissions Strategy
            </button>
            <button
              className={styles.btnGhost}
              onClick={() => scrollTo('results')}
            >
              See Student Results
            </button>
          </div>

          <div className={styles.trustBar}>
            <div className={styles.trustItem}>
              <span className={styles.trustNum}>200+</span>
              <span className={styles.trustLabel}>Students Guided</span>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustNum}>$10M+</span>
              <span className={styles.trustLabel}>Scholarships Secured</span>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustNum}>100%</span>
              <span className={styles.trustLabel}>Admitted to a Target School</span>
            </div>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className={styles.card} id="hero-card">

          {/* Desktop header — tag + title + urgency + bullets */}
          <div className={styles.cardHeader}>
            <p className={`${styles.cardUrgency} m-10`}
              style={{ margin: "10px", fontSize: "15px" }}
            >Book your Free Session Now!</p>

          </div>

          {/* Mobile-only urgency banner — replaces the above on small screens */}
          <div className={styles.mobileUrgencyBanner}>
            <span className={styles.mobileUrgencyPulse} />
            <span className={styles.mobileUrgencyNote}>
              Fall 2026 cohort is filling quickly
            </span>
          </div>

          {/* Calendly embed */}
          <div className={styles.calendlyWrapper}>
            <CalendlyInline />
          </div>

          <p className={styles.cardNote}>
            We only accept a limited number of students each cycle
          </p>
        </div>

      </div>
    </section>
  )
}
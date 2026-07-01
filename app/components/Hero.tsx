'use client'

import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'
import { schedule, leadFormSubmit, ctaClick, viewContent } from '@/app/lib/pixel'

/* ── Meta Pixel: Calendly integration ──────────────────────────
   Note: we no longer use a local firePixel() helper — all events
   now go through lib/pixel.ts so everything is tracked consistently
   and shows up correctly segmented in Meta Events Manager.
------------------------------------------------------------------ */
declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (opts: {
        url: string
        parentElement: HTMLElement
      }) => void
    }
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
        // ✅ Primary conversion — booking confirmed via Calendly
        schedule({ content_name: 'Free Admissions Strategy Session' })
        leadFormSubmit({
          content_name: 'Calendly Booking',
          content_category: 'Admissions Consulting',
        })
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
  // ViewContent fires once when the Hero (i.e. the homepage) mounts
  useEffect(() => {
    viewContent({
      content_name: 'Admissions Consulting - Home',
      content_category: 'Landing Page',
    })
  }, [])

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
              onClick={() => {
                ctaClick('Build Your Student\'s Admissions Strategy', 'Hero')
                scrollTo('hero-card')
              }}
            >
              Build Your Student&apos;s Admissions Strategy
            </button>
            <button
              className={styles.btnGhost}
              onClick={() => {
                ctaClick('See Student Results', 'Hero')
                scrollTo('results')
              }}
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
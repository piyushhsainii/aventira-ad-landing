'use client'

import FadeSection from './FadeSection'
import styles from './FinalCTA.module.css'

export default function FinalCTA() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section className={styles.section} id="cta-section">
      <div className={styles.inner}>
        <FadeSection className={styles.content}>
          <span className={styles.label}>Get Started</span>
          <h2 className={styles.headline}>
            Let&apos;s Build Your Student&apos;s<br />
            <em>Admissions Strategy</em> — The Right Way
          </h2>
          <p className={styles.sub}>
            We only work with a limited number of families each cycle to maintain quality,
            responsiveness, and results. Spots for this cycle are filling now.
          </p>
          <button className={styles.btn} onClick={scrollToTop}>
            Book Free Strategy Call
          </button>
        </FadeSection>
      </div>
    </section>
  )
}

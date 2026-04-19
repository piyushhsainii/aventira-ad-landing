'use client'

import styles from './Hero.module.css'

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.eyebrow} style={{ marginTop: "25px", marginBottom: "25px" }}> Aventira Admissions Consulting</div>
          <h1 className={styles.headline}>
            From <em>Who You Are</em><br />to Where You Belong
          </h1>
          <div className={styles.divider} />
          <p className={styles.tagline}>
            Test scores matter. Strategy, storytelling,<br />and positioning decide admits.
          </p>
          <p className={styles.body}>
            We help students build clear, differentiated applications that top colleges actually
            understand — and accept. Most students apply with strong grades and good intentions.
            Very few apply with a strategy.
          </p>
          <div className={styles.actions}>
            <button className={styles.btnPrimary} onClick={() => scrollTo('cta-section')}>
              Book Free Strategy Call
            </button>
            <button className={styles.btnGhost} onClick={() => scrollTo('results')}>
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

        <div className={styles.card}>
          <span className={styles.cardTag}>Complimentary Session</span>
          <h2 className={styles.cardTitle}>Free Admissions<br />Strategy Session</h2>
          <ul className={styles.cardBullets}>
            <li>Identify your student&apos;s biggest admissions gaps</li>
            <li>Build a clear positioning strategy from the ground up</li>
            <li>Map out target schools and scholarship opportunities</li>
          </ul>
          <button className={styles.cardBtn} onClick={() => scrollTo('cta-section')}>
            Schedule Your Call →
          </button>
          <p className={styles.cardNote}>Limited availability — small roster each cycle</p>
        </div>
      </div>
    </section>
  )
}

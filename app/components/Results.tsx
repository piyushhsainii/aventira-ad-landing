import FadeSection from './FadeSection'
import styles from './Results.module.css'

const schools = ['Harvard', 'Stanford', 'MIT', 'Penn', 'Duke', 'Brown', 'Northwestern', 'Rice', 'UCLA']

const cases = [
  {
    schools: 'Harvard · Dartmouth · Vanderbilt',
    desc: 'Philosophy positioning for a student who later switched to computer science — identity-first strategy that transcended major.',
  },
  {
    schools: 'Stanford · Rice · Cornell',
    desc: 'Energy-sector positioning for a consulting-oriented applicant, building a coherent vision across every application component.',
  },
  {
    schools: 'Brown · Rice · NYU · Georgia Tech',
    desc: 'A.I. and data-focused positioning for a technically ambitious student with a clear interdisciplinary research angle.',
  },
  {
    schools: 'Michigan Ross · Notre Dame · Cornell',
    desc: 'Business applicant repositioned around A.I. and data science, differentiating from a crowded pool of traditional candidates.',
  },
]

export default function Results() {
  return (
    <section className={styles.section} id="results">
      <div className={styles.inner}>
        <FadeSection className={styles.header}>
          <span className={styles.label}>Outcomes</span>
          <h2 className={styles.headline}>
            Proven Results That<br /><em>Speak for Themselves</em>
          </h2>
          <p className={styles.whyLine}>
            These outcomes aren&apos;t luck — they&apos;re the result of structured positioning,
            narrative clarity, and disciplined execution.
          </p>
          <p className={styles.sub}>
            Aventira is built around outcomes families can actually feel — stronger admits,
            more scholarships, and better long-term positioning.
          </p>
        </FadeSection>

        <div className={styles.statsRow}>
          {[
            { big: '200+', desc: 'Students successfully guided' },
            { big: '$100K+', desc: 'Average scholarship offers per student' },
            { big: '3–5×', desc: 'Higher acceptance rates vs. national averages' },
          ].map((s, i) => (
            <FadeSection key={s.big} delay={`${i * 0.1}s`}>
              <div className={styles.statBox}>
                <span className={styles.statBig}>{s.big}</span>
                <p className={styles.statDesc}>{s.desc}</p>
              </div>
            </FadeSection>
          ))}
        </div>

        <FadeSection>
          <p className={styles.schoolsLabel}>Selected admits include</p>
          <div className={styles.schoolsBar}>
            {schools.map((s) => (
              <span key={s} className={styles.pill}>{s}</span>
            ))}
          </div>
        </FadeSection>

        <FadeSection>
          <p className={styles.casesLabel}>Case studies</p>
          <div className={styles.casesGrid}>
            {cases.map((c, i) => (
              <div key={i} className={styles.caseItem}>
                <p className={styles.caseSchools}>{c.schools}</p>
                <p className={styles.caseDesc}>{c.desc}</p>
              </div>
            ))}
          </div>
        </FadeSection>
      </div>
    </section>
  )
}
import FadeSection from './FadeSection'
import styles from './Services.module.css'

const services = [
  {
    title: 'Strategic Positioning',
    body: 'We define a clear, differentiated applicant identity before a single word is written.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
  },
  {
    title: 'Essay & Application Coaching',
    body: 'Narrative development, unlimited revisions, and detailed commentary on every draft.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    title: 'Activities & Résumé Development',
    body: 'Transform an activities list into a cohesive story with strategic framing and emphasis.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
  },
  {
    title: 'College List Strategy',
    body: 'Data-driven, ambition-matched school lists that balance reach, target, and safety effectively.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9,22 9,12 15,12 15,22" />
      </svg>
    ),
  },
  {
    title: 'Scholarship & Financial Aid Strategy',
    body: 'Targeted scholarship positioning that has produced $10M+ in offers for our students.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ),
  },
  {
    title: 'Interviews & Outreach',
    body: 'Preparation for alumni interviews and strategic demonstrated-interest touchpoints.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <FadeSection className={styles.header}>
          <span className={styles.label}>What We Cover</span>
          <h2 className={styles.headline}>
            End-to-End Advisory,<br /><em>Built Around Your Student</em>
          </h2>
        </FadeSection>

        <div className={styles.grid}>
          {services.map((s, i) => (
            <FadeSection key={s.title} delay={`${(i % 3) * 0.08}s`}>
              <div className={styles.card}>
                <div className={styles.icon}>{s.icon}</div>
                <h3 className={styles.cardTitle}>{s.title}</h3>
                <p className={styles.cardBody}>{s.body}</p>
              </div>
            </FadeSection>
          ))}
        </div>
      </div>
    </section>
  )
}

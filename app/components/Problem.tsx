import FadeSection from './FadeSection'
import styles from './Problem.module.css'

const problems = [
  {
    num: '01',
    title: 'High GPA, No Direction',
    body: 'Exceptional grades without a coherent narrative leave admissions readers without a reason to choose your student over the next qualified applicant.',
  },
  {
    num: '02',
    title: 'Activities Without a Story',
    body: "A résumé full of clubs and achievements means nothing if there's no thread connecting them — no identity, no arc, no differentiated angle.",
  },
  {
    num: '03',
    title: 'Generic Applications',
    body: 'Most applicants write what they think colleges want to hear. The admits write with clarity about who they actually are and why they belong there.',
  },
]

export default function Problem() {
  return (
    <section className={styles.section} id="problem">
      <div className={styles.inner}>
        <FadeSection className={styles.header}>
          <span className={styles.label}>The Problem</span>
          <h2 className={styles.headline}>
            Strong Students Get <em>Rejected Every Year</em>
          </h2>
          <p className={styles.sub}>
            It&apos;s not because they aren&apos;t qualified. It&apos;s because their applications don&apos;t stand out.
          </p>
        </FadeSection>

        <div className={styles.grid}>
          {problems.map((p, i) => (
            <FadeSection key={p.num} delay={`${i * 0.1}s`}>
              <div className={styles.card}>
                <span className={styles.num}>{p.num}</span>
                <h3 className={styles.cardTitle}>{p.title}</h3>
                <p className={styles.cardBody}>{p.body}</p>
              </div>
            </FadeSection>
          ))}
        </div>

        <FadeSection>
          <p className={styles.close}>
            What separates admits from waitlists is clarity, coherence, and differentiation.
          </p>
        </FadeSection>
      </div>
    </section>
  )
}

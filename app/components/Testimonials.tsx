import FadeSection from './FadeSection'
import styles from './Testimonials.module.css'

const reviews = [
  {
    text: 'Jake built a structured, data-driven study plan that targeted my specific weaknesses. Beyond test prep, his guidance on essays was a major differentiator — he helped me refine my narrative and translate my experiences into compelling essays that actually stood out.',
    highlight: 'His approach combined strategy, accountability, and execution in a way that produced measurable results.',
    outcome: 'Admitted · University of Michigan Ross School of Business, University of Notre Dame, Washington University in St. Louis, Duke University',
  },
  {
    text: 'I believe this is the best return on investment out of all college consulting services. The expertise in the college admissions process truly shows through detailed revisions and commentary that help you execute what colleges want.',
    highlight: 'He has a phenomenal grasp of what admissions readers want to see and will help you craft your story.',
    outcome: 'Admitted · Vanderbilt',
  },
  {
    text: "Although I had fantastic grades, I did not know how to best structure my application in a way that would resonate with admissions committees.",
    highlight: 'The structured timeline kept me focused and really helped ease my stress.',
    extra: "I was admitted to my top choice, and I don't think I could've achieved this without this level of guidance.",
    outcome: 'Admitted · University of Chicago',
  },
  {
    text: "Despite being one client among many, the time and attention given to refining and developing my application was remarkable.",
    highlight: 'This raised my bar to the highest standards as to how college consulting services should be.',
    extra: 'I give my full recommendation to anyone looking for admissions guidance, essay help, or test prep.',
    outcome: 'Admitted · Multiple · Indiana University Kelley School of Business with Scholarship',
  },
]

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <FadeSection className={styles.header}>
          <span className={styles.label}>Families</span>
          <h2 className={styles.headline}>
            What Students Are <em>Saying</em>
          </h2>
        </FadeSection>

        <div className={styles.grid}>
          {reviews.map((r, i) => (
            <FadeSection key={i} delay={`${(i % 2) * 0.1}s`}>
              <div className={styles.card}>
                <span className={styles.quoteMark}>&ldquo;</span>
                <p className={styles.text}>
                  {r.text}{' '}
                  <strong>{r.highlight}</strong>
                  {r.extra && <> {r.extra}</>}
                </p>
                <div className={styles.author}>
                  <p className={styles.outcome}>{r.outcome}</p>
                </div>
              </div>
            </FadeSection>
          ))}
        </div>
      </div>
    </section>
  )
}
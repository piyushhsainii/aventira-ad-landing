import FadeSection from './FadeSection'
import styles from './Testimonials.module.css'

const reviews = [
  {
    text: 'Jake built a structured, data-driven study plan that targeted my specific weaknesses. Beyond test prep, his guidance on essays was a major differentiator — he helped me refine my narrative and translate my experiences into compelling essays that actually stood out.',
    highlight: 'His approach combined strategy, accountability, and execution in a way that produced measurable results.',
    name: 'Alan Ta',
    outcome: 'Admitted · University of Michigan Ross School of Business',
  },
  {
    text: 'I believe Jake is the best return on investment out of all college consulting services.',
    highlight: 'He is someone who puts in full effort in understanding you as a person and has the ability to tailor your application to convey who you are to the admissions team.',
    name: 'Norwegian Wood',
    outcome: 'Full-Cycle Client',
    extra: 'He separates himself from the big firms that usually take hundreds of clients — his dedication to you is more than apparent.',
  },
  {
    text: "Although I had fantastic grades, I did not know how to best structure my application in a way that would resonate with admissions committees.",
    highlight: 'Jake kept me on a structured timeline that kept me focused, and this really helped ease my stress.',
    name: 'Jonathan Nazaretian',
    outcome: 'Admitted · University of Chicago',
    extra: "I was admitted to the University of Chicago, and I don't think I could've achieved this without his guidance.",
  },
  {
    text: "Despite being one client, he made the time to help me refine and develop my application.",
    highlight: 'Having Jake by my side raised my bar to the highest standards as to how college consulting services should be.',
    name: 'Joshua Kellner',
    outcome: 'Full-Cycle Client',
    extra: 'Jake is a direct and genuine person — I give him my recommendation to anyone looking for admissions or essay help.',
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
            <FadeSection key={r.name} delay={`${(i % 2) * 0.1}s`}>
              <div className={styles.card}>
                <span className={styles.quoteMark}>&ldquo;</span>
                <p className={styles.text}>
                  {r.text}{' '}
                  <strong>{r.highlight}</strong>
                  {r.extra && <> {r.extra}</>}
                </p>
                <div className={styles.author}>
                  <p className={styles.name}>{r.name}</p>
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

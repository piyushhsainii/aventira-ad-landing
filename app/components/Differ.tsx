import FadeSection from './FadeSection'
import styles from './Differ.module.css'

export default function Differ() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <FadeSection className={styles.text}>
          <span className={styles.label}>Our Framework</span>
          <h2 className={styles.headline}>
            Most students apply.<br /><em>We build strategy.</em>
          </h2>
          <p className={styles.body}>
            Successful applications are built long before a student submits. Every element —
            essays, activities, school list, interview — is engineered around three questions
            that define the entire strategy.
          </p>
          <div className={styles.quote}>
            <p>
              We build every part of the application around these answers — so the application
              reads as one coherent, compelling case for admission.
            </p>
          </div>
        </FadeSection>

        <FadeSection delay="0.15s" className={styles.framework}>
          {[
            {
              q: 'Who am I?',
              a: "Define the student's identity, values, and the narrative thread that runs through every part of the application.",
            },
            {
              q: 'Why this major?',
              a: 'Establish intellectual clarity and genuine purpose — why this field, and why now. Admissions readers can tell the difference.',
            },
            {
              q: 'Why this school?',
              a: "Build school-specific positioning that shows deep, authentic fit — not template language that every applicant uses.",
            },
          ].map((item) => (
            <div key={item.q} className={styles.fwItem}>
              <span className={styles.fwQ}>{item.q}</span>
              <p className={styles.fwA}>{item.a}</p>
            </div>
          ))}
        </FadeSection>
      </div>
    </section>
  )
}

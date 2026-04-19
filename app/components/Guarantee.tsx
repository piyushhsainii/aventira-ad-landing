import FadeSection from './FadeSection'
import styles from './Guarantee.module.css'

export default function Guarantee() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <FadeSection className={styles.content}>
          <div className={styles.icon}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <h2 className={styles.headline}>
            Your Investment<br />Is Protected
          </h2>
          <p className={styles.body}>
            If your student is not admitted to at least one school on the agreed target list,
            Aventira provides complimentary transfer admissions support — at no additional cost.
            We are accountable for outcomes, not just effort.
          </p>
        </FadeSection>
      </div>
    </section>
  )
}

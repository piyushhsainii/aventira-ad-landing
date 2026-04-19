import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.logo}>Aventira</span>
        <span className={styles.note}>
          © {new Date().getFullYear()} Aventira Admissions Consulting. All rights reserved.
        </span>
      </div>
    </footer>
  )
}

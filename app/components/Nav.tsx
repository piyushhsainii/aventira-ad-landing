'use client'

import styles from './Nav.module.css'

export default function Nav() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <img src="/aventira-logo.png" alt="Aventira Logo" style={{ height: "75px", maxWidth: "200px", margin: "0", padding: "0 " }} />
        <a
          href="tel:+15136460333"
          className={styles.cta}
        >
          Book Strategy Call
        </a>
      </div>
    </nav>
  )
}
